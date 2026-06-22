import { Helmet } from 'react-helmet-async'
import { SectionHeading } from '../../components/ui/SectionHeading/SectionHeading'
import { CaseStoryCard } from '../../components/ui/CaseStoryCard/CaseStoryCard'
import { CTAButton } from '../../components/ui/CTAButton/CTAButton'
import styles from './CaseStudies.module.css'

// Real stories will be added here once published. Placeholders shown until ready.
const STORIES: {
  problem: string
  previousState: string
  impact: string
  placeholder?: boolean
}[] = [
  {
    problem: '',
    previousState: '',
    impact: '',
    placeholder: true,
  },
  {
    problem: '',
    previousState: '',
    impact: '',
    placeholder: true,
  },
  {
    problem: '',
    previousState: '',
    impact: '',
    placeholder: true,
  },
]

export function CaseStudies() {
  return (
    <>
      <Helmet>
        <title>قصص من الواقع — NAS CodeWorks</title>
        <meta
          name="description"
          content="مشاكل حقيقية، أدوات حقيقية. نماذج من مشاريع بُنيت لحل مشاكل تشغيلية محددة."
        />
        <link rel="canonical" href="https://nascodeworks.com/case-studies" />
      </Helmet>

      <section className="section">
        <div className="container">
          <SectionHeading
            label="قصص من الواقع"
            title="مشاكل حقيقية، أدوات حقيقية"
            titleAs="h1"
            align="start"
          />
          <p className={styles.intro}>
            كل مشروع بدأ بوصف مشكلة — لا بطلب ميزات. هذه قصص مشاريع بُنيت لأناس واجهوا تشتتاً تشغيلياً حقيقياً وأرادوا أداة تجمع الأطراف في مكان واحد.
          </p>

          <div className={styles.storiesGrid}>
            {STORIES.map((story, idx) => (
              <CaseStoryCard
                key={idx}
                problem={story.problem}
                previousState={story.previousState}
                impact={story.impact}
                placeholder={story.placeholder}
              />
            ))}
          </div>

          <div className={styles.comingSoon}>
            <div className={styles.comingSoonTitle}>قصص قيد التوثيق</div>
            <p className={styles.comingSoonBody}>
              نعمل على توثيق القصص الأولى بشكل مفصل — المشكلة، الوضع السابق، ما بُني، والأثر الفعلي. ستُنشر قريباً.
            </p>
          </div>

          <div className={styles.ctaBox}>
            <h2 className={styles.ctaBoxTitle}>
              مشكلتك قد تكون القصة التالية.
            </h2>
            <p className={styles.ctaBoxBody}>
              كل قصة هنا بدأت بشخص صَفَحَ مشكلة تشغيلية. إذا كانت عملياتك مبعثرة ولا يوجد مكان واحد يجمعها — هذا المكان الصحيح.
            </p>
            <CTAButton to="/start" variant="secondary" size="md">
              ابدأ بوصف المشكلة الحالية
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
