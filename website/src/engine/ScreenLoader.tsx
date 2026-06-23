/* NAS CodeWorks — Screen Engine · Screen Loader
 * Resolves a screen id to its code-split content component and renders it under Suspense.
 * The lazy components are created once at module scope (not during render), so each screen
 * module loads at most once and component identity stays stable.
 */
import { lazy, Suspense } from 'react'
import type { ComponentType, LazyExoticComponent } from 'react'
import type { ScreenId } from './types'
import { SCREENS } from './screens'

const SCREEN_COMPONENTS = {} as Record<ScreenId, LazyExoticComponent<ComponentType>>
for (const s of SCREENS) SCREEN_COMPONENTS[s.id] = lazy(s.loader)

export function ScreenLoader({ screenId }: { screenId: ScreenId }) {
  const Screen = SCREEN_COMPONENTS[screenId]
  return (
    <Suspense fallback={<ScreenFallback />}>
      <Screen />
    </Suspense>
  )
}

function ScreenFallback() {
  return (
    <div
      aria-hidden="true"
      style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <span style={{ color: 'var(--color-text-light)', fontSize: '0.875rem' }}>...</span>
    </div>
  )
}
