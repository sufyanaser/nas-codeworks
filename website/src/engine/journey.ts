/* NAS CodeWorks — Screen Engine · Journey State Machine (pure)
 * The guided journey is the canonical forward path (spec §2). These helpers are pure
 * functions over the registry so they can be unit-reasoned and reused by the navigator,
 * keyboard layer, and analytics without touching React state.
 */
import type { ScreenId, TransitionDirection } from './types'
import { SCREENS } from './screens'

/** Ordered journey: screens with inJourney, sorted by canonical order. */
export const JOURNEY: ScreenId[] = SCREENS.filter((s) => s.inJourney)
  .sort((a, b) => a.order - b.order)
  .map((s) => s.id)

/** Position of a screen within the journey, or -1 if it is not a journey stop. */
export function journeyIndex(id: ScreenId): number {
  return JOURNEY.indexOf(id)
}

export interface JourneyPosition {
  /** Zero-based index within the journey, or -1 if off-journey. */
  index: number
  /** 1-based step number for display, or 0 if off-journey. */
  step: number
  /** Total journey stops. */
  total: number
  inJourney: boolean
  isFirst: boolean
  isLast: boolean
}

export function journeyPosition(id: ScreenId): JourneyPosition {
  const index = journeyIndex(id)
  const total = JOURNEY.length
  const inJourney = index !== -1
  return {
    index,
    step: inJourney ? index + 1 : 0,
    total,
    inJourney,
    isFirst: index === 0,
    isLast: inJourney && index === total - 1,
  }
}

/** Next journey screen after `id`, or null at the end / off-journey. */
export function nextInJourney(id: ScreenId): ScreenId | null {
  const i = journeyIndex(id)
  if (i === -1 || i >= JOURNEY.length - 1) return null
  return JOURNEY[i + 1] ?? null
}

/** Previous journey screen before `id`, or null at the start / off-journey. */
export function prevInJourney(id: ScreenId): ScreenId | null {
  const i = journeyIndex(id)
  if (i <= 0) return null
  return JOURNEY[i - 1] ?? null
}

/**
 * Recommended Next Step for the navigator's Progress Mode.
 * Off-journey screens (e.g. reserved `center`) recommend the journey start so the
 * visitor always has a clear, on-path next move.
 */
export function recommendedNext(id: ScreenId): ScreenId | null {
  if (journeyIndex(id) === -1) return JOURNEY[0] ?? null
  return nextInJourney(id)
}

/** Direction of a move along the journey (for the transition placeholder). */
export function journeyDirection(from: ScreenId | null, to: ScreenId): TransitionDirection {
  if (from === null || from === to) return 'none'
  const a = journeyIndex(from)
  const b = journeyIndex(to)
  if (a === -1 || b === -1) return 'jump'
  if (b > a) return 'forward'
  if (b < a) return 'backward'
  return 'none'
}
