/* NAS CodeWorks — Screen Engine · Context + Hooks
 * Kept free of components so Fast Refresh stays happy.
 */
import { createContext, useContext } from 'react'
import type { ScreenEngineApi } from './types'

export const ScreenEngineContext = createContext<ScreenEngineApi | null>(null)

/** Access the full engine API. Must be used inside <ScreenEngineProvider>. */
export function useScreenEngine(): ScreenEngineApi {
  const ctx = useContext(ScreenEngineContext)
  if (!ctx) throw new Error('useScreenEngine must be used within <ScreenEngineProvider>')
  return ctx
}

/** Narrow navigation helper for links/buttons. */
export function useNavigator() {
  const { navigate, resolvePath, currentScreenId, navigation, openNavigator, closeNavigator, toggleNavigator } =
    useScreenEngine()
  return { navigate, resolvePath, currentScreenId, navigation, openNavigator, closeNavigator, toggleNavigator }
}
