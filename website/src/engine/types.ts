/* NAS CodeWorks — Screen Engine · Types
 * Phase 1: Core Engine Foundation (infrastructure only).
 * No visual polish, no GSAP, no CMS, no Operating Console.
 */
import type { ComponentType } from 'react'

/** Stable identifiers for every screen in the engine (spec §2, S01–S06). */
export type ScreenId =
  | 'home' // S01 — Operational Center (Home)
  | 'center' // S02 — The Missing Center (reserved; Phase 2 content split)
  | 'services' // S03 — Paths (Services)
  | 'how-we-work' // S04 — Method (How We Work)
  | 'stories' // S05 — Problem Stories (Case Studies)
  | 'start' // S06 — Problem Discovery (Contact)

/** Which renderer foundation is currently mounted. */
export type RendererMode = 'desktop' | 'mobile'

/** What triggered a navigation (drives analytics + transition semantics). */
export type NavigationSource =
  | 'initial' // first load / deep link
  | 'jump' // navigator label / link (non-sequential)
  | 'progress' // Recommended Next Step / journey advance|retreat
  | 'keyboard' // arrow / page / enter keys
  | 'history' // browser back/forward (popstate)

/** Direction of a screen-to-screen move along the journey. */
export type TransitionDirection = 'forward' | 'backward' | 'jump' | 'none'

/** Reduced-motion preference (mirrors prefers-reduced-motion). */
export type MotionPreference = 'full' | 'reduced'

/** Lazy module shape produced by a screen loader (default export = screen content). */
export type ScreenModule = { default: ComponentType }

/** Static definition of one screen, held in the Screen Registry. */
export interface ScreenDefinition {
  id: ScreenId
  /** Canonical deep-link path. */
  path: string
  /** Alternate paths that resolve to this screen (legacy / preserved links). */
  aliases: string[]
  /** Navigator label (approved Arabic nav labels). */
  label: string
  /** Document title fragment for this screen. */
  title: string
  /** Whether the Hybrid Navigator surfaces this screen as a top-level item. */
  inNav: boolean
  /** Whether the screen participates in the guided journey (Progress Mode). */
  inJourney: boolean
  /** Ordering within the canonical forward path / navigator. */
  order: number
  /** Marks the primary-CTA navigation item (final nav label). */
  isCta?: boolean
  /** Code-split loader for the screen's content component. */
  loader: () => Promise<ScreenModule>
}

/** Navigation sub-state (distinct from the active screen id itself). */
export interface NavigationState {
  previousScreenId: ScreenId | null
  /** Ordered visit history (most recent last). */
  history: ScreenId[]
  /** Mobile navigator sheet open/closed. */
  navigatorOpen: boolean
  /** True while a screen transition placeholder is running. */
  isTransitioning: boolean
  /** Direction of the most recent move (drives the transition placeholder). */
  direction: TransitionDirection
  /** What triggered the most recent move. */
  lastSource: NavigationSource
}

/** Intake draft — Guided Diagnostic Flow working state (foundation only). */
export type IntakeDraft = Record<string, unknown>

/** The complete global engine state. */
export interface EngineState {
  currentScreenId: ScreenId
  navigation: NavigationState
  renderer: RendererMode
  motionPreference: MotionPreference
  intakeDraft: IntakeDraft
}

/** Options for a navigate() call. */
export interface NavigateOptions {
  /** Replace history entry instead of pushing (used by popstate sync). */
  replace?: boolean
  /** Skip updating the browser URL (used by popstate sync). */
  skipUrl?: boolean
  /** What triggered this navigation (analytics + transition semantics). */
  source?: NavigationSource
}

/** Public engine API exposed through context. */
export interface ScreenEngineApi extends EngineState {
  navigate: (id: ScreenId, options?: NavigateOptions) => void
  /** Resolve a link path (with optional query/hash) to a screen id, or null. */
  resolvePath: (path: string) => ScreenId | null
  openNavigator: () => void
  closeNavigator: () => void
  toggleNavigator: () => void
  updateIntakeDraft: (patch: IntakeDraft) => void
  clearIntakeDraft: () => void
}
