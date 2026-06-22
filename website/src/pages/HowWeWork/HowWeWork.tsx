import { Helmet } from 'react-helmet-async'
import { SectionHeading } from '../../components/ui/SectionHeading/SectionHeading'
import { ProcessStep } from '../../components/ui/ProcessStep/ProcessStep'
import { CTAButton } from '../../components/ui/CTAButton/CTAButton'
import styles from './HowWeWork.module.css'

const STEPS = [
  {
    number: 1,
    title: 'تصف المشكلة',
    body: 'تملأ نموذجاً يصف ما يحدث في العمل يومياً — لا تحتاج أن تعرف الحل. نحن نقرأ الوصف ونفهم البيئة والسياق قبل أي شيء آخر.',
    questions: [
      'ما المشكلة التي تريد حلها؟',
      'كيف تُدار العملية حالياً؟',
      'من يتأثر بهذه المشكلة؟',
    ],
  },
  {
    number: 2,
    title: 'نفهم ونحدد',
    body: 'نراجع الوصف ونتواصل معك لفهم التفاصيل. نحدد معاً: ما الذي يُبنى بالضبط، ما نطاق المشروع، وما النتيجة القابلة للقياس في نهايته.',
    questions: [
      'ما الأداة التي ستحل المشكلة بشكل مباشر؟',
      'ما النطاق المناسب للبداية؟',
      'كيف نقيس النجاح؟',
    ],
  },
  {
    number: 3,
    title: 'نوافق على النطاق',
    body: 'قبل البدء، نضع وثيقة نطاق واضحة تحدد ما يُبنى وما لا يُبنى، الجدول الزمني، وآلية التسليم. لا مفاجآت لاحقاً.',
    questions: [],
  },
  {
    number: 4,
    title: 'نبني على مراحل',
    body: 'نعمل على دورات قصيرة — كل مرحلة تُسلَّم وتُراجع قبل الانتقال للتالية. أنت ترى التقدم دائماً ولا تنتظر حتى النهاية.',
    questions: [],
  },
  {
    number: 5,
    title: 'نسلّم ونتأكد',
    body: 'عند التسليم النهائي: كل شيء يُسلَّم لك — الكود، قاعدة البيانات، التوثيق. وندعم الفريق في الاستخدام الأول حتى تعمل الأداة بشكل مستقر.',
    questions: [],
  },
]

const PRINCIPLES = [
  {
    title: 'المشكلة أولاً، الحل ثانياً',
    desc: 'لا نقترح أداة قبل أن نفهم المشكلة بشكل كامل. الفهم الخاطئ يبني الأداة الخاطئة.',
  },
  {
    title: 'نطاق محدد دائماً',
    desc: 'كل مشروع يبدأ بنطاق واضح ونهاية محددة. المشاريع المفتوحة لا تنتهي ولا تُسلَّم.',
  },
  {
    title: 'أنت ترى كل خطوة',
    desc: 'لا تنتظر حتى النهاية لترى ما بُني. كل مرحلة تُعرض عليك قبل الانتقال للتالية.',
  },
  {
    title: 'التسليم يشمل الاستقلالية',
    desc: 'عند انتهاء المشروع، الأداة ملكك الكامل — كود، بيانات، توثيق. لا اعتماد علينا للتشغيل.',
  },
]

const FAQS = [
  {
    q: 'هل يمكنني توسيع الأداة لاحقاً؟',
    a: 'نعم. كل أداة تُبنى بهيكل يسمح بالتوسع. عند الانتهاء من المشروع الأول، يمكن بدء مشروع جديد لإضافة ميزات أو تكاملات جديدة.',
  },
  {
    q: 'كم يستغرق تسليم المشروع؟',
    a: 'المشاريع الصغيرة المحددة النطاق تستغرق 2–4 أسابيع. المشاريع الأكبر أو الأكثر تعقيداً قد تستغرق أطول — لكن يُتفق على الجدول مسبقاً.',
  },
  {
    q: 'هل أحتاج خبرة تقنية للتواصل معكم؟',
    a: 'لا. تحتاج فقط أن تصف ما يحدث في العمل اليومي. نحن نترجم المشكلة إلى أداة.',
  },
  {
    q: 'ماذا يحدث إذا تغيرت المتطلبات أثناء البناء؟',
    a: 'التغييرات الصغيرة ضمن النطاق المتفق عليه تُعالج بشكل طبيعي. التغييرات الكبيرة تستدعي نقاشاً لتحديد ما إذا كانت تتطلب تعديل النطاق والجدول الزمني.',
  },
  {
    q: 'هل يمكن البدء بمشروع صغير أولاً؟',
    a: 'هذا هو النهج المفضل. نبدأ بأصغر نطاق يحل المشكلة الأكثر إلحاحاً، ثم نبني فوقه إذا احتجت.',
  },
]

export function HowWeWork() {
  return (
    <>
      <Helmet>
        <title>كيف نعمل — NAS CodeWorks</title>
        <meta
          name="description"
          content="العملية من وصف المشكلة حتى تسليم الأداة — خمس خطوات واضحة، نطاق محدد، وأنت ترى كل خطوة."
        />
        <link rel="canonical" href="https://nascodeworks.com/how-we-work" />
      </Helmet>

      {/* Steps */}
      <section className="section">
        <div className="container container--narrow">
          <SectionHeading
            label="كيف نعمل"
            title="من وصف المشكلة إلى الأداة التي تشتغل"
            titleAs="h1"
            align="start"
          />
          <p className={styles.intro}>
            خمس خطوات واضحة. لا مفاجآت، لا نطاقات مفتوحة، لا انتظار طويل حتى آخر لحظة.
          </p>
          <div className={styles.stepsSection}>
            {STEPS.map((step, idx) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                body={step.body}
                questions={step.questions.length > 0 ? step.questions : undefined}
                isLast={idx === STEPS.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section bg-alt">
        <div className="container">
          <SectionHeading
            label="مبادئ العمل"
            title="كيف نفكر في كل مشروع"
            align="start"
          />
          <div className={styles.principlesGrid}>
            {PRINCIPLES.map((p) => (
              <div key={p.title} className={styles.principleItem}>
                <div className={styles.principleTitle}>{p.title}</div>
                <div className={styles.principleDesc}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container container--narrow">
          <SectionHeading
            label="أسئلة شائعة"
            title="أسئلة يسألها العملاء عادةً"
            align="start"
          />
          <div className={styles.faqList}>
            {FAQS.map((faq) => (
              <div key={faq.q} className={styles.faqItem}>
                <div className={styles.faqQ}>{faq.q}</div>
                <div className={styles.faqA}>{faq.a}</div>
              </div>
            ))}
          </div>

          <div className={styles.ctaBox}>
            <h2 className={styles.ctaBoxTitle}>
              مستعد لتصف مشكلتك؟
            </h2>
            <p className={styles.ctaBoxBody}>
              ابدأ بملء نموذج وصف المشكلة — لا يستغرق أكثر من 5 دقائق.
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
