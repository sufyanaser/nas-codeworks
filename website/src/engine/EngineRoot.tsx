/* NAS CodeWorks — Screen Engine · Root
 * Selects the active renderer foundation from the engine's renderer state.
 * Engine state (active screen, navigation, intake draft) is preserved across
 * desktop⇄mobile switches because both renderers share the same provider above.
 */
import { useScreenEngine } from './engineContext'
import { DesktopRenderer } from './renderers/DesktopRenderer'
import { MobileRenderer } from './renderers/MobileRenderer'

export function EngineRoot() {
  const { renderer } = useScreenEngine()
  return renderer === 'mobile' ? <MobileRenderer /> : <DesktopRenderer />
}
