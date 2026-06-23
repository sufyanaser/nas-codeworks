/* NAS CodeWorks — Mobile Renderer (foundation)
 * Small-viewport entry point into the Screen Engine — a distinct renderer, not a
 * responsive reflow of desktop. Phase 1: structure only.
 */
import { RendererShell } from './RendererShell'

export function MobileRenderer() {
  return <RendererShell mode="mobile" />
}
