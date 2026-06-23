/* NAS CodeWorks — Screen Engine · Navigation Analytics Hooks (structure only)
 * A tiny pub/sub for navigation events. No analytics provider is wired here — consumers
 * (GA, PostHog, custom) attach later via onNavigationEvent(). Default behavior is a no-op.
 */
import type { NavigationSource, ScreenId, TransitionDirection } from './types'

export interface NavigationEvent {
  type: 'screen_view'
  screenId: ScreenId
  fromScreenId: ScreenId | null
  source: NavigationSource
  direction: TransitionDirection
  /** 1-based journey step, or 0 if off-journey. */
  step: number
  total: number
  timestamp: number
}

export type NavigationListener = (event: NavigationEvent) => void

const listeners = new Set<NavigationListener>()

/** Register a navigation listener. Returns an unsubscribe function. */
export function onNavigationEvent(listener: NavigationListener): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

/** Emit a navigation event to all listeners. Safe no-op when none are registered. */
export function emitNavigationEvent(event: NavigationEvent): void {
  for (const listener of listeners) {
    try {
      listener(event)
    } catch {
      /* a listener must never break navigation */
    }
  }
}

/**
 * Provider-agnostic default listener. Exercises the listener structure without binding to
 * any external analytics provider (GA, PostHog, …): in development it surfaces each event
 * for debugging; in production it is a no-op. Real consumers attach their own listeners
 * via onNavigationEvent() later. Returns an unsubscribe function.
 */
export function registerDefaultNavigationListener(): () => void {
  if (!import.meta.env.DEV) return () => {}
  return onNavigationEvent((event) => {
    console.debug(
      `[nav] ${event.fromScreenId ?? '∅'} → ${event.screenId} ` +
        `(${event.source}/${event.direction}) step ${event.step}/${event.total}`,
    )
  })
}
