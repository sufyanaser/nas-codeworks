import styles from './ProblemCard.module.css'

interface ProblemCardProps {
  title: string
  description: string
}

export function ProblemCard({ title, description }: ProblemCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.dot} aria-hidden="true" />
      <div>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.desc}>{description}</p>
      </div>
    </div>
  )
}
