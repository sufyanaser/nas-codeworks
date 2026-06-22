import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'start' | 'center'
  titleAs?: 'h1' | 'h2' | 'h3'
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'start',
  titleAs: Tag = 'h2',
}: SectionHeadingProps) {
  return (
    <div className={`${styles.wrapper} ${styles[align]}`}>
      {label && <span className={styles.label}>{label}</span>}
      <Tag className={styles.title}>{title}</Tag>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}
