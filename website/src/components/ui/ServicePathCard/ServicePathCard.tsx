import { Link } from 'react-router-dom'
import styles from './ServicePathCard.module.css'

interface ServicePathCardProps {
  label?: string
  title: string
  problemSignal: string
  description?: string
  outcomes: string[]
  price?: string
  priceNote?: string
}

export function ServicePathCard({ label, title, problemSignal, description, outcomes, price, priceNote }: ServicePathCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        {label && <span className={styles.label}>{label}</span>}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.problem}>{problemSignal}</p>
        {description && <p className={styles.description}>{description}</p>}
      </div>

      <ul className={styles.outcomes}>
        {outcomes.map((o, i) => (
          <li key={i} className={styles.outcomeItem}>
            <span className={styles.check} aria-hidden="true">✓</span>
            {o}
          </li>
        ))}
      </ul>

      <div className={styles.bottom}>
        <div className={styles.price}>
          <span className={styles.priceLabel}>السعر</span>
          <span className={styles.priceValue}>{price ?? 'حسب النطاق'}</span>
          {priceNote && <p className={styles.priceNote}>{priceNote}</p>}
        </div>
        <Link to="/start" className={styles.cta}>
          هل هذه مشكلتك؟ ابدأ بوصفها
        </Link>
      </div>
    </div>
  )
}
