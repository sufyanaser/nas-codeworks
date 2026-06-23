/* NAS CodeWorks — Screen Engine · Active Screen Controller
 * Mounts exactly one screen at a time (the active screen). Re-keying on the screen id
 * remounts the container so the placeholder enter transition runs per navigation.
 */
import { useScreenEngine } from './engineContext'
import { ScreenContainer } from './ScreenContainer'

export function ActiveScreenController() {
  const { currentScreenId } = useScreenEngine()
  return <ScreenContainer key={currentScreenId} screenId={currentScreenId} />
}
