/* NAS CodeWorks — Desktop Renderer (foundation)
 * Large-viewport entry point into the Screen Engine. Phase 1: structure only.
 */
import { RendererShell } from './RendererShell'

export function DesktopRenderer() {
  return <RendererShell mode="desktop" />
}
