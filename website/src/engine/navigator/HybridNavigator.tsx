/* NAS CodeWorks — Hybrid Navigator (foundation)
 * Phase 1: structure only. Combines top-level navigation with the engine's active-screen
 * state. Screen-to-screen "progression" affordances and final visual polish come later.
 */
import type { RendererMode } from '../types'
import { useScreenEngine } from '../engineContext'
import { ScreenLink } from '../ScreenLink'
import { navScreens } from '../screens'
import styles from './HybridNavigator.module.css'

const NAV = navScreens()

export function HybridNavigator({ mode }: { mode: RendererMode }) {
  const { currentScreenId, navigation, toggleNavigator, closeNavigator } = useScreenEngine()

  const brand = (
    <ScreenLink to="/" className={styles.brand} aria-label="NAS CodeWorks — الرئيسية">
      NAS <span>CodeWorks</span>
    </ScreenLink>
  )

  if (mode === 'desktop') {
    return (
      <header className={styles.bar}>
        {brand}
        <nav className={styles.items} aria-label="التنقل الرئيسي">
          {NAV.map((s) =>
            s.isCta ? (
              <ScreenLink key={s.id} to={s.path} className={styles.cta}>
                {s.label}
              </ScreenLink>
            ) : (
              <ScreenLink
                key={s.id}
                to={s.path}
                className={styles.item}
                aria-current={currentScreenId === s.id ? 'page' : undefined}
              >
                {s.label}
              </ScreenLink>
            ),
          )}
        </nav>
      </header>
    )
  }

  // Mobile foundation: top bar + toggleable sheet (driven by engine navigation state).
  return (
    <>
      <header className={styles.bar}>
        {brand}
        <button
          type="button"
          className={styles.trigger}
          aria-label="فتح القائمة"
          aria-expanded={navigation.navigatorOpen}
          onClick={toggleNavigator}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {navigation.navigatorOpen && (
        <nav className={styles.sheet} aria-label="التنقل على الجوال">
          <button type="button" className={styles.sheetClose} onClick={closeNavigator} aria-label="إغلاق القائمة">
            إغلاق ✕
          </button>
          {NAV.map((s) => (
            <ScreenLink
              key={s.id}
              to={s.path}
              className={styles.sheetItem}
              aria-current={currentScreenId === s.id ? 'page' : undefined}
            >
              {s.label}
            </ScreenLink>
          ))}
        </nav>
      )}
    </>
  )
}
