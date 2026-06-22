import { Helmet } from 'react-helmet-async'
import { SectionHeading } from '../../components/ui/SectionHeading/SectionHeading'
import { ContactForm } from '../../components/forms/ContactForm/ContactForm'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <>
      <Helmet>
        <title>ابدأ بوصف المشكلة الحالية — NAS CodeWorks</title>
        <meta
          name="description"
          content="صف المشكلة التشغيلية التي تواجهها — وسنراجعها لفهم ما إذا كان بإمكاننا بناء أداة تحلها."
        />
        <link rel="canonical" href="https://nascodeworks.com/start" />
      </Helmet>

      <section className="section">
        <div className="container">
          <SectionHeading
            label="ابدأ هنا"
            title="صف المشكلة التشغيلية التي تواجهها"
            titleAs="h1"
            subtitle="لا تحتاج أن تعرف الحل. نحتاج فقط أن نفهم ما يحدث في العمل اليومي."
            align="start"
          />

          <div className={styles.layout} style={{ marginTop: 'var(--space-10)' }}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <p className={styles.sidebarNote}>
                هذا النموذج يساعدنا على فهم الوضع الحالي قبل أي حديث عن الحل. يستغرق تعبئته من 5 إلى 10 دقائق.
              </p>

              <div className={styles.sidebarItems}>
                <div className={styles.sidebarItem}>
                  <div className={styles.sidebarItemTitle}>بعد الإرسال</div>
                  <div className={styles.sidebarItemText}>
                    نراجع الوصف ونتواصل معك خلال 1–2 يوم عمل لنناقش ما سمعناه وما يمكن بناؤه.
                  </div>
                </div>

                <div className={styles.sidebarItem}>
                  <div className={styles.sidebarItemTitle}>لا التزام</div>
                  <div className={styles.sidebarItemText}>
                    إرسال النموذج لا يُلزمك بشيء. الهدف هو الفهم المشترك أولاً.
                  </div>
                </div>

                <div className={styles.sidebarItem}>
                  <div className={styles.sidebarItemTitle}>إذا كانت المشكلة لا تناسبنا</div>
                  <div className={styles.sidebarItemText}>
                    سنخبرك بصراحة — ونقترح اتجاهاً أنسب إذا أمكن.
                  </div>
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className={styles.formWrapper}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
