import { useState } from 'react'
import styles from './ContactForm.module.css'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const PROBLEM_TYPES = [
  'أداة داخلية لتنظيم عمل يومي',
  'أرشفة وتنظيم ملفات أو معلومات',
  'تقارير ومتابعة وأرقام',
  'غير متأكد',
]

const USERS_COUNT = [
  'شخص واحد',
  'فريق صغير',
  'أكثر من قسم',
  'إدارة وموظفون',
  'عملاء أو مراجعين أيضاً',
]

const IMPACTS = [
  'وقت ضائع',
  'أخطاء متكررة',
  'تأخير في التقارير',
  'صعوبة في المتابعة',
  'ضياع ملفات أو معلومات',
  'ضغط على الموظفين',
  'قرارات تتأخر بسبب نقص الوضوح',
  'اعتماد كبير على شخص واحد',
]

const TIMING = [
  'في أقرب وقت',
  'خلال شهر',
  'خلال 2–3 أشهر',
  'لاحقاً، لكن أريد فهم الإمكانية',
]

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [impacts, setImpacts] = useState<string[]>([])
  const [errors, setErrors] = useState<Record<string, string>>({})

  function toggleImpact(item: string) {
    setImpacts((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    )
  }

  function validate(data: FormData): Record<string, string> {
    const errs: Record<string, string> = {}
    if (!data.get('fullName')) errs.fullName = 'الاسم مطلوب'
    if (!data.get('company')) errs.company = 'اسم الشركة مطلوب'
    if (!data.get('phone')) errs.phone = 'رقم الهاتف مطلوب'
    if (!data.get('problemDescription')) errs.problemDescription = 'وصف المشكلة مطلوب'
    return errs
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const errs = validate(data)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setState('submitting')

    // Placeholder: in production connect to Formspree / email service
    await new Promise((r) => setTimeout(r, 1200))
    setState('success')
  }

  if (state === 'success') {
    return (
      <div className={styles.success} role="alert">
        <div className={styles.successIcon} aria-hidden="true">✓</div>
        <h3 className={styles.successTitle}>تم استلام وصف المشكلة</h3>
        <p className={styles.successBody}>
          سنراجعه لفهم الوضع الحالي، وسنتواصل معك خلال وقت قصير لمناقشة ما إذا كانت المشكلة تحتاج أداة عملية بنطاق واضح.
        </p>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {/* 1. Basic info */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>معلومات أساسية</legend>
        <div className={styles.grid2}>
          <Field label="الاسم الكامل" name="fullName" required error={errors.fullName} />
          <Field label="اسم الشركة أو المؤسسة" name="company" required error={errors.company} />
          <Field label="المدينة" name="city" />
          <Field label="رقم الهاتف أو WhatsApp" name="phone" type="tel" required error={errors.phone} />
        </div>
        <Field label="البريد الإلكتروني (اختياري)" name="email" type="email" />
      </fieldset>

      {/* 2. Problem type */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>نوع المشكلة تقريباً</legend>
        <p className={styles.fieldHint}>اختر الأقرب، حتى لو لم تكن متأكداً — اختيارك ليس نهائياً.</p>
        <div className={styles.radioGroup}>
          {PROBLEM_TYPES.map((t) => (
            <label key={t} className={styles.radioLabel}>
              <input type="radio" name="problemType" value={t} className={styles.radioInput} />
              <span>{t}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* 3. Problem description */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>وصف المشكلة</legend>
        <Textarea
          label="ما المشكلة التي تريد حلها؟"
          name="problemDescription"
          required
          error={errors.problemDescription}
          hint="اكتب ما يحدث داخل العمل اليومي. لا تحتاج أن تكتب الحل."
          rows={5}
        />
        <Textarea
          label="كيف تتم إدارة هذا العمل حالياً؟"
          name="currentMethod"
          hint="Excel، ورق، WhatsApp، برنامج حالي، أشخاص معيّنون...؟"
          rows={4}
        />
      </fieldset>

      {/* 4. Users */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>من يستخدم هذه العملية؟</legend>
        <div className={styles.radioGroup}>
          {USERS_COUNT.map((u) => (
            <label key={u} className={styles.radioLabel}>
              <input type="radio" name="usersCount" value={u} className={styles.radioInput} />
              <span>{u}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* 5. Impact */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>ما أثر المشكلة؟</legend>
        <div className={styles.checkGrid}>
          {IMPACTS.map((item) => (
            <label key={item} className={styles.checkLabel}>
              <input
                type="checkbox"
                name="impacts"
                value={item}
                checked={impacts.includes(item)}
                onChange={() => toggleImpact(item)}
                className={styles.checkInput}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* 6. Timing */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>التوقيت المتوقع</legend>
        <div className={styles.radioGroup}>
          {TIMING.map((t) => (
            <label key={t} className={styles.radioLabel}>
              <input type="radio" name="timing" value={t} className={styles.radioInput} />
              <span>{t}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Submit */}
      <div className={styles.submitRow}>
        <button
          type="submit"
          className={styles.submitBtn}
          disabled={state === 'submitting'}
        >
          {state === 'submitting' ? 'جاري الإرسال...' : 'إرسال وصف المشكلة'}
        </button>
        <p className={styles.whatsappNote}>
          أو تواصل مباشرة عبر{' '}
          <a
            href="https://wa.me/9647800000000"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappLink}
          >
            WhatsApp
          </a>
        </p>
      </div>

      {state === 'error' && (
        <p className={styles.formError} role="alert">
          حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو التواصل عبر WhatsApp.
        </p>
      )}
    </form>
  )
}

/* ── Sub-components ── */

function Field({
  label, name, type = 'text', required, error, hint,
}: {
  label: string; name: string; type?: string; required?: boolean; error?: string; hint?: string
}) {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label}
        {required && <span className={styles.required} aria-hidden="true"> *</span>}
      </label>
      {hint && <p className={styles.fieldHint}>{hint}</p>}
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={!!error}
        className={`${styles.input}${error ? ` ${styles.inputError}` : ''}`}
      />
      {error && (
        <p id={`${name}-error`} className={styles.errorMsg} role="alert">{error}</p>
      )}
    </div>
  )
}

function Textarea({
  label, name, required, error, hint, rows = 4,
}: {
  label: string; name: string; required?: boolean; error?: string; hint?: string; rows?: number
}) {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label}
        {required && <span className={styles.required} aria-hidden="true"> *</span>}
      </label>
      {hint && <p className={styles.fieldHint}>{hint}</p>}
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        aria-describedby={error ? `${name}-error` : undefined}
        aria-invalid={!!error}
        className={`${styles.textarea}${error ? ` ${styles.inputError}` : ''}`}
      />
      {error && (
        <p id={`${name}-error`} className={styles.errorMsg} role="alert">{error}</p>
      )}
    </div>
  )
}
