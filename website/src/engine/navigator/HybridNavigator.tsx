/* NAS CodeWorks — Hybrid Navigator
 * Combines top-level navigation (Jump Mode) with the guided journey (Progress Mode).
 * Jump Mode = the approved nav labels. Progress Mode = step counter + prev/next along the
 * canonical forward path, driven by the journey state machine. Final visual polish later.
 */
import type { RendererMode, ScreenId } from '../types'
import { useScreenEngine } from '../engineContext'
import { ScreenLink } from '../ScreenLink'
import { navScreens } from '../screens'
import { journeyPosition, prevInJourney, recommendedNext } from '../journey'
import styles from './HybridNavigator.module.css'

const NAV = navScreens()

/** Progress Mode: step indicator + prev/next affordances along the guided journey. */
function ProgressControls({ current, variant }: { current: ScreenId; variant: 'bar' | 'sheet' }) {
  const { navigate } = useScreenEngine()
  const pos = journeyPosition(current)
  const prev = prevInJourney(current)
  const next = recommendedNext(current)

  // Nothing to progress to (shouldn't happen on journey screens, but stay defensive).
  if (!prev && !next) return null

  return (
    <div className={variant === 'bar' ? styles.progress : styles.sheetProgress} aria-label="التقدم في الرحلة">
      <button
        type="button"
        className={styles.progressBtn}
        onClick={() => prev && navigate(prev, { source: 'progress' })}
        disabled={!prev}
      >
        السابق
      </button>
      {pos.inJourney && (
        <span className={styles.progressStep} aria-live="polite">
          الخطوة {pos.step} من {pos.total}
        </span>
      )}
      <button
        type="button"
        className={styles.progressBtn}
        onClick={() => next && navigate(next, { source: 'progress' })}
        disabled={!next}
      >
        التالي
      </button>
    </div>
  )
}

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
        <ProgressControls current={currentScreenId} variant="bar" />
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
          <ProgressControls current={currentScreenId} variant="sheet" />
        </nav>
      )}
    </>
  )
}
