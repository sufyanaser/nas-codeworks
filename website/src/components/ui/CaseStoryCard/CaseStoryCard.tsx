import styles from './CaseStoryCard.module.css'

interface CaseStoryCardProps {
  problem: string
  previousState: string
  impact: string
  placeholder?: boolean
}

export function CaseStoryCard({ problem, previousState, impact, placeholder }: CaseStoryCardProps) {
  if (placeholder) {
    return (
      <div className={`${styles.card} ${styles.placeholder}`}>
        <div className={styles.badge}>قيد الإعداد</div>
        <p className={styles.placeholderText}>
          سيتم عرض قصة مشكلة حقيقية هنا — مع وصف الوضع السابق، الأثر، المسار، والنتيجة.
        </p>
      </div>
    )
  }

  return (
    <div className={styles.card}>
      <div className={styles.section}>
        <span className={styles.sectionLabel}>المشكلة</span>
        <p className={styles.sectionText}>{problem}</p>
      </div>
      <div className={styles.divider} aria-hidden="true" />
      <div className={styles.section}>
        <span className={styles.sectionLabel}>الوضع السابق</span>
        <p className={styles.sectionText}>{previousState}</p>
      </div>
      <div className={styles.divider} aria-hidden="true" />
      <div className={styles.section}>
        <span className={styles.sectionLabel}>الأثر</span>
        <p className={styles.sectionText}>{impact}</p>
      </div>
    </div>
  )
}
