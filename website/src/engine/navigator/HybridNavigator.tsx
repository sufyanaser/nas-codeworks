/* NAS CodeWorks — Hybrid Navigator
 * Combines top-level navigation (Jump Mode) with the guided journey (Progress Mode).
 * The brand mark is an incomplete operational C: it references CodeWorks and the open center philosophy.
 */
import { useEffect, useState } from 'react'
import type { RendererMode, ScreenId } from '../types'
import { useScreenEngine } from '../engineContext'
import { ScreenLink } from '../ScreenLink'
import { navScreens } from '../screens'
import { journeyPosition, prevInJourney, recommendedNext } from '../journey'
import styles from './HybridNavigator.module.css'

const NAV = navScreens()

type ThemeMode = 'light' | 'dark'

function initialTheme(): ThemeMode {
  try {
    const stored = window.localStorage.getItem('nas-codeworks-theme')
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

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
  const [theme, setTheme] = useState<ThemeMode>(initialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    try {
      window.localStorage.setItem('nas-codeworks-theme', theme)
    } catch {
      // Theme persistence is non-critical.
    }
  }, [theme])

  const nextTheme: ThemeMode = theme === 'dark' ? 'light' : 'dark'

  const brand = (
    <ScreenLink to="/" className={styles.brand} aria-label="NAS CodeWorks — الرئيسية">
      <span className={styles.brandMark} aria-hidden="true">
        <span className={styles.brandArc} />
        <span className={styles.brandBlocks} />
      </span>
      <span className={styles.brandText}>
        <strong>NAS <span>CodeWorks</span></strong>
        <small>استوديو حلول تشغيلية</small>
      </span>
    </ScreenLink>
  )

  const themeButton = (
    <button
      type="button"
      className={styles.themeToggle}
      onClick={() => setTheme(nextTheme)}
      aria-label={theme === 'dark' ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن'}
      title={theme === 'dark' ? 'الوضع الفاتح' : 'الوضع الداكن'}
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
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
        {themeButton}
        <ProgressControls current={currentScreenId} variant="bar" />
      </header>
    )
  }

  // Mobile foundation: top bar + toggleable sheet (driven by engine navigation state).
  return (
    <>
      <header className={styles.bar}>
        {brand}
        <div className={styles.mobileActions}>
          {themeButton}
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
        </div>
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
