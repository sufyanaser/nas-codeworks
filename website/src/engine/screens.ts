/* NAS CodeWorks — Screen Engine · Screen Registry
 * The single source of truth for screen ids, deep-link paths, and code-split loaders.
 * Content components are the existing pages — preserved as-is (Phase 1 is infrastructure only).
 */
import type { ScreenDefinition, ScreenId } from './types'

/**
 * Screen Registry (spec §2).
 * Order follows the canonical forward path S01 → S06.
 * `center` (S02) is reserved infrastructure: its content currently lives inside the Home
 * narrative and is split out in a later phase, so it loads a neutral placeholder for now.
 */
export const SCREENS: ScreenDefinition[] = [
  {
    id: 'home',
    path: '/',
    aliases: [],
    label: 'الرئيسية',
    title: 'NAS CodeWorks — أدوات داخلية تُعيد تشغيل عملياتك',
    inNav: true,
    order: 1,
    loader: () => import('../pages/Home/Home').then((m) => ({ default: m.Home })),
  },
  {
    id: 'center',
    path: '/center',
    aliases: [],
    label: 'المركز التشغيلي',
    title: 'المركز التشغيلي',
    inNav: false, // progression from S01, not a top-level nav item
    order: 2,
    loader: () => import('./PlaceholderScreen').then((m) => ({ default: m.PlaceholderScreen })),
  },
  {
    id: 'services',
    path: '/services',
    aliases: [],
    label: 'الخدمات',
    title: 'الخدمات',
    inNav: true,
    order: 3,
    loader: () => import('../pages/Services/Services').then((m) => ({ default: m.Services })),
  },
  {
    id: 'how-we-work',
    path: '/how-we-work',
    aliases: [],
    label: 'طريقة العمل',
    title: 'طريقة العمل',
    inNav: true,
    order: 4,
    loader: () => import('../pages/HowWeWork/HowWeWork').then((m) => ({ default: m.HowWeWork })),
  },
  {
    id: 'stories',
    path: '/stories',
    aliases: ['/case-studies'], // preserve existing internal links
    label: 'قصص المشاكل',
    title: 'قصص المشاكل',
    inNav: true,
    order: 5,
    loader: () => import('../pages/CaseStudies/CaseStudies').then((m) => ({ default: m.CaseStudies })),
  },
  {
    id: 'start',
    path: '/start',
    aliases: [],
    label: 'ابدأ بوصف المشكلة',
    title: 'ابدأ بوصف المشكلة الحالية',
    inNav: true,
    order: 6,
    isCta: true,
    loader: () => import('../pages/Contact/Contact').then((m) => ({ default: m.Contact })),
  },
]

export const DEFAULT_SCREEN_ID: ScreenId = 'home'

const BY_ID = new Map<ScreenId, ScreenDefinition>(SCREENS.map((s) => [s.id, s]))

/** Lookup a screen definition by id. */
export function getScreen(id: ScreenId): ScreenDefinition {
  const def = BY_ID.get(id)
  if (!def) throw new Error(`Unknown screen id: ${id}`)
  return def
}

/** Navigator items in display order (top-level screens only). */
export function navScreens(): ScreenDefinition[] {
  return SCREENS.filter((s) => s.inNav).sort((a, b) => a.order - b.order)
}

/** Normalize a raw href/path to just its pathname (drop query + hash). */
function toPathname(raw: string): string {
  const noHash = raw.split('#')[0] ?? raw
  const noQuery = noHash.split('?')[0] ?? noHash
  if (noQuery.length > 1 && noQuery.endsWith('/')) return noQuery.slice(0, -1)
  return noQuery === '' ? '/' : noQuery
}

/** Resolve a link path (canonical or alias) to a screen id, or null if unknown. */
export function resolvePathToScreenId(raw: string): ScreenId | null {
  const path = toPathname(raw)
  for (const s of SCREENS) {
    if (s.path === path || s.aliases.includes(path)) return s.id
  }
  return null
}
