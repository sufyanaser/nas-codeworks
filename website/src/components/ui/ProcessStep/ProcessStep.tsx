import styles from './ProcessStep.module.css'

export interface ProcessStepProps {
  number: number
  title: string
  body?: string
  questions?: string[]
  isLast?: boolean
}

export function ProcessStep({ number, title, body, questions, isLast }: ProcessStepProps) {
  return (
    <div className={styles.step}>
      <div className={styles.numCol}>
        <div className={styles.num}>{number}</div>
        {!isLast && <div className={styles.line} aria-hidden="true" />}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {body && <p className={styles.body}>{body}</p>}
        {questions && questions.length > 0 && (
          <ul className={styles.questions}>
            {questions.map((q, i) => (
              <li key={i} className={styles.question}>{q}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
