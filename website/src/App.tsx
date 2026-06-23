/* NAS CodeWorks — App
 * The site operates as a Screen Engine (not a page-per-route router).
 * App only composes the engine provider + the renderer root; everything else is engine-driven.
 */
import { ScreenEngineProvider } from './engine/ScreenEngineProvider'
import { EngineRoot } from './engine/EngineRoot'

export default function App() {
  return (
    <ScreenEngineProvider>
      <EngineRoot />
    </ScreenEngineProvider>
  )
}
