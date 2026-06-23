/* NAS CodeWorks — Screen Engine · Provider
 * Owns global state: Current Screen · Navigation State · Renderer State · Intake Draft State.
 * Also wires deep linking (History API), renderer detection, and document title.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type {
  EngineState,
  IntakeDraft,
  NavigateOptions,
  RendererMode,
  ScreenEngineApi,
  ScreenId,
} from './types'
import { ScreenEngineContext } from './engineContext'
import { DEFAULT_SCREEN_ID, getScreen, resolvePathToScreenId } from './screens'

const MOBILE_QUERY = '(max-width: 767px)'
const INTAKE_STORAGE_KEY = 'nas:intakeDraft'
const TRANSITION_MS = 220 // placeholder transition window (no GSAP in Phase 1)

function detectRenderer(): RendererMode {
  if (typeof window === 'undefined') return 'desktop'
  return window.matchMedia(MOBILE_QUERY).matches ? 'mobile' : 'desktop'
}

function screenIdFromLocation(): ScreenId {
  if (typeof window === 'undefined') return DEFAULT_SCREEN_ID
  return resolvePathToScreenId(window.location.pathname) ?? DEFAULT_SCREEN_ID
}

function loadIntakeDraft(): IntakeDraft {
  if (typeof window === 'undefined') return {}
  try {
    const raw = window.localStorage.getItem(INTAKE_STORAGE_KEY)
    return raw ? (JSON.parse(raw) as IntakeDraft) : {}
  } catch {
    return {}
  }
}

export function ScreenEngineProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<EngineState>(() => {
    const currentScreenId = screenIdFromLocation()
    return {
      currentScreenId,
      navigation: {
        previousScreenId: null,
        history: [currentScreenId],
        navigatorOpen: false,
        isTransitioning: false,
      },
      renderer: detectRenderer(),
      intakeDraft: loadIntakeDraft(),
    }
  })

  const transitionTimer = useRef<number | null>(null)

  // Refs mirror state so event-driven actions can read the latest values and perform
  // side effects *outside* the setState updater. React (StrictMode) may invoke updater
  // functions more than once, so updaters must stay pure — putting history.pushState or
  // localStorage writes inside them would run twice and corrupt history / storage.
  const currentScreenRef = useRef(state.currentScreenId)
  const intakeDraftRef = useRef(state.intakeDraft)
  useEffect(() => {
    currentScreenRef.current = state.currentScreenId
    intakeDraftRef.current = state.intakeDraft
  })

  /* ── Navigation / Active Screen Controller ───────────────────────────── */
  const navigate = useCallback((id: ScreenId, options: NavigateOptions = {}) => {
    const sameScreen = id === currentScreenRef.current && !options.replace
    if (sameScreen) {
      // Same screen: just close the mobile navigator (pure update).
      setState((prev) => ({ ...prev, navigation: { ...prev.navigation, navigatorOpen: false } }))
      return
    }

    // Side effect (history mutation) lives here, in the event handler — not in the updater.
    if (!options.skipUrl && typeof window !== 'undefined') {
      const { path } = getScreen(id)
      if (options.replace) window.history.replaceState({ screenId: id }, '', path)
      else window.history.pushState({ screenId: id }, '', path)
    }
    currentScreenRef.current = id

    setState((prev) => ({
      ...prev,
      currentScreenId: id,
      navigation: {
        previousScreenId: prev.currentScreenId,
        history: [...prev.navigation.history, id],
        navigatorOpen: false,
        isTransitioning: true,
      },
    }))
  }, [])

  /* End the placeholder transition window. */
  useEffect(() => {
    if (!state.navigation.isTransitioning) return
    if (transitionTimer.current) window.clearTimeout(transitionTimer.current)
    transitionTimer.current = window.setTimeout(() => {
      setState((prev) => ({
        ...prev,
        navigation: { ...prev.navigation, isTransitioning: false },
      }))
    }, TRANSITION_MS)
    return () => {
      if (transitionTimer.current) window.clearTimeout(transitionTimer.current)
    }
  }, [state.navigation.isTransitioning, state.currentScreenId])

  /* ── Deep Linking: back/forward sync ─────────────────────────────────── */
  useEffect(() => {
    function onPopState() {
      const id = screenIdFromLocation()
      navigate(id, { skipUrl: true, replace: true })
    }
    window.addEventListener('popstate', onPopState)
    // Ensure the initial entry carries our state + canonical url.
    const id = screenIdFromLocation()
    window.history.replaceState({ screenId: id }, '', getScreen(id).path)
    return () => window.removeEventListener('popstate', onPopState)
  }, [navigate])

  /* ── Renderer State: respond to viewport changes ─────────────────────── */
  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY)
    function onChange() {
      setState((prev) => {
        const next: RendererMode = mql.matches ? 'mobile' : 'desktop'
        if (next === prev.renderer) return prev
        return { ...prev, renderer: next, navigation: { ...prev.navigation, navigatorOpen: false } }
      })
    }
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  /* ── Document title per active screen ────────────────────────────────── */
  useEffect(() => {
    document.title = getScreen(state.currentScreenId).title
  }, [state.currentScreenId])

  /* ── Intake Draft persistence ────────────────────────────────────────── */
  const updateIntakeDraft = useCallback((patch: IntakeDraft) => {
    // Compute + persist outside the updater (keeps the updater pure under StrictMode).
    const intakeDraft = { ...intakeDraftRef.current, ...patch }
    intakeDraftRef.current = intakeDraft
    try {
      window.localStorage.setItem(INTAKE_STORAGE_KEY, JSON.stringify(intakeDraft))
    } catch {
      /* storage unavailable — keep draft in memory only */
    }
    setState((prev) => ({ ...prev, intakeDraft }))
  }, [])

  const clearIntakeDraft = useCallback(() => {
    intakeDraftRef.current = {}
    try {
      window.localStorage.removeItem(INTAKE_STORAGE_KEY)
    } catch {
      /* ignore */
    }
    setState((prev) => ({ ...prev, intakeDraft: {} }))
  }, [])

  /* ── Navigator open/close (mobile sheet) ─────────────────────────────── */
  const openNavigator = useCallback(
    () => setState((prev) => ({ ...prev, navigation: { ...prev.navigation, navigatorOpen: true } })),
    [],
  )
  const closeNavigator = useCallback(
    () => setState((prev) => ({ ...prev, navigation: { ...prev.navigation, navigatorOpen: false } })),
    [],
  )
  const toggleNavigator = useCallback(
    () =>
      setState((prev) => ({
        ...prev,
        navigation: { ...prev.navigation, navigatorOpen: !prev.navigation.navigatorOpen },
      })),
    [],
  )

  const api = useMemo<ScreenEngineApi>(
    () => ({
      ...state,
      navigate,
      resolvePath: resolvePathToScreenId,
      openNavigator,
      closeNavigator,
      toggleNavigator,
      updateIntakeDraft,
      clearIntakeDraft,
    }),
    [state, navigate, openNavigator, closeNavigator, toggleNavigator, updateIntakeDraft, clearIntakeDraft],
  )

  return <ScreenEngineContext.Provider value={api}>{children}</ScreenEngineContext.Provider>
}
