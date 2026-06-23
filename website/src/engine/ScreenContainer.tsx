/* NAS CodeWorks — Screen Engine · Screen Container
 * Wraps the active screen: fills the stage, provides local scroll, runs the placeholder
 * enter transition, and appends the global Footer to the screen's scroll region.
 */
import { useEffect, useRef } from 'react'
import type { ScreenId } from './types'
import { ScreenLoader } from './ScreenLoader'
import { Footer } from '../components/layout/Footer/Footer'
import styles from './ScreenContainer.module.css'

export function ScreenContainer({ screenId }: { screenId: ScreenId }) {
  const ref = useRef<HTMLDivElement>(null)

  // Reset local scroll to top whenever a new screen becomes active.
  useEffect(() => {
    ref.current?.scrollTo({ top: 0 })
  }, [screenId])

  return (
    <div ref={ref} className={`${styles.container} ${styles.enter}`} data-screen={screenId}>
      <main id="main-content" tabIndex={-1}>
        <ScreenLoader screenId={screenId} />
      </main>
      <Footer />
    </div>
  )
}
