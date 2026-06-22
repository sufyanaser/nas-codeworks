import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const navItems = [
  { label: 'الرئيسية', to: '/' },
  { label: 'الخدمات', to: '/services' },
  { label: 'طريقة العمل', to: '/how-we-work' },
  { label: 'قصص المشاكل', to: '/case-studies' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" className={styles.logo} aria-label="NAS CodeWorks — الرئيسية">
          NAS <span>CodeWorks</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="التنقل الرئيسي">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `${styles.navLink}${isActive ? ` ${styles.active}` : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/start" className={styles.navCta}>
            ابدأ بوصف المشكلة الحالية
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          className={`${styles.menuBtn}${menuOpen ? ` ${styles.open}` : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="فتح القائمة"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        className={`${styles.mobileNav}${menuOpen ? ` ${styles.open}` : ''}`}
        aria-label="التنقل على الجوال"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `${styles.mobileNavLink}${isActive ? ` ${styles.active}` : ''}`
            }
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        <NavLink
          to="/start"
          className={styles.mobileNavCta}
          onClick={() => setMenuOpen(false)}
        >
          ابدأ بوصف المشكلة الحالية
        </NavLink>
      </nav>
    </header>
  )
}
