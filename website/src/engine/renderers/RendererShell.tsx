/* NAS CodeWorks — Renderer Shell (shared foundation)
 * Composes the Hybrid Navigator + the viewport-locked stage that hosts the active screen.
 * Desktop and Mobile renderers are thin wrappers over this shell (separate entry points
 * so each can diverge in later phases without touching the engine core).
 */
import type { RendererMode } from '../types'
import { HybridNavigator } from '../navigator/HybridNavigator'
import { ActiveScreenController } from '../ActiveScreenController'
import styles from './renderer.module.css'

export function RendererShell({ mode }: { mode: RendererMode }) {
  return (
    <div className={`${styles.shell} ${styles[mode]}`} data-renderer={mode}>
      <HybridNavigator mode={mode} />
      <div className={styles.stage}>
        <ActiveScreenController />
      </div>
    </div>
  )
}
