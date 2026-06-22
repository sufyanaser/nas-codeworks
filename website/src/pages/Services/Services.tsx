import { Helmet } from 'react-helmet-async'
import { SectionHeading } from '../../components/ui/SectionHeading/SectionHeading'
import { ServicePathCard } from '../../components/ui/ServicePathCard/ServicePathCard'
import { CTAButton } from '../../components/ui/CTAButton/CTAButton'
import styles from './Services.module.css'

const SERVICES = [
  {
    id: 'internal-tools',
    label: '01',
    title: 'تطبيقات سطح مكتب مخصصة للشركات',
    problemSignal:
      'عمليتك تُدار بين Excel وWhatsApp والأوراق — ولا توجد أداة واحدة تجمع كل شيء.',
    description:
      'هذا المسار مناسب عندما تكون لدى الشركة عملية داخلية واضحة، لكنها تُدار حالياً بطريقة متعبة أو غير منظمة. نبني أداة عملية بواجهة عربية واضحة، مصممة حول طريقة عمل الشركة نفسها، وليس حول نموذج عام لا يناسبها.',
    outcomes: [
      'تقليل الاعتماد على Excel المتفرق',
      'تنظيم خطوات العمل اليومية',
      'تسهيل متابعة الحالة والمسؤوليات',
      'تقليل الوقت الذي يضيع في التحديث والتصحيح',
    ],
    price: 'تبدأ من 500$',
    priceNote: 'للمشاريع الصغيرة المحددة النطاق. المشاريع الأكبر تُقدَّر حسب التفاصيل.',
  },
  {
    id: 'automation',
    label: '02',
    title: 'أنظمة أرشفة وإدارة ملفات داخلية',
    problemSignal:
      'المستندات والمعلومات موزعة بين الورق والأجهزة والموظفين — والبحث عن الملف أصبح جزءاً يومياً من العمل.',
    description:
      'هذا المسار مناسب للشركات التي تحتاج إلى تنظيم المستندات أو العملاء أو المشاريع أو المعاملات بطريقة سهلة وواضحة. الهدف ليس فقط حفظ الملفات، بل أن تصبح المعلومة أسهل في الوصول والتصنيف والمتابعة.',
    outcomes: [
      'تقليل ضياع الملفات',
      'الوصول إلى الملف أو المعلومة خلال وقت أقصر',
      'تنظيم معلومات العملاء أو المشاريع',
      'تقليل تكرار النسخ والملفات',
    ],
    price: 'تبدأ من 900$',
    priceNote: 'للمشاريع المحددة النطاق. المشاريع الأكبر تُقدَّر حسب حجم المستندات والمعلومات.',
  },
  {
    id: 'reporting',
    label: '03',
    title: 'أتمتة التقارير وربط البيانات',
    problemSignal:
      'التقارير تتأخر وتُجمع يدوياً من أكثر من مصدر — والإدارة تنتظر أرقاماً غير جاهزة في وقتها.',
    description:
      'هذا المسار مناسب عندما تتكرر نفس عمليات الجمع والتحديث والمتابعة، وتحتاج الإدارة إلى رؤية أوضح وأسرع للوضع الحالي. الهدف هو تقليل العمل اليدوي في التقارير، وجعل المعلومات أسهل في المتابعة.',
    outcomes: [
      'تقليل تأخر التقارير',
      'تقليل الأخطاء الناتجة عن النسخ اليدوي',
      'تجميع المعلومات من أكثر من مصدر',
      'توضيح حالة العمل للإدارة',
    ],
    price: 'يُحدد بعد فهم النطاق',
    priceNote: 'السعر يُحدد بعد فهم مصادر البيانات ونطاق التقارير المطلوبة.',
  },
]

const NOT_SUITABLE = [
  'تطبيقات موجهة للمستخدم النهائي أو العميل العام (B2C apps)',
  'مواقع ويب تعريفية أو متاجر إلكترونية',
  'منتجات SaaS أو برامج تُباع للآخرين',
  'مشاريع بدون مشكلة تشغيلية واضحة',
  'مشاريع تحتاج تكاملاً مع أنظمة حكومية معقدة بدون توثيق API',
]

export function Services() {
  return (
    <>
      <Helmet>
        <title>الخدمات — NAS CodeWorks</title>
        <meta
          name="description"
          content="ثلاثة مسارات لمعالجة المشاكل التشغيلية: تطبيقات سطح مكتب مخصصة للشركات، أنظمة أرشفة وإدارة ملفات داخلية، أتمتة التقارير وربط البيانات. كل أداة تُبنى للمشكلة التي وصفتها."
        />
        <link rel="canonical" href="https://nascodeworks.com/services" />
      </Helmet>

      <section className="section">
        <div className="container">
          <SectionHeading
            label="الخدمات"
            title="ثلاثة مسارات، مشكلة واحدة"
            titleAs="h1"
            align="start"
          />
          <p className={styles.intro}>
            لا نبيع منتجاً جاهزاً ونقنعك أنه يناسبك. نفهم المشكلة أولاً، ثم نختار معك المسار الأنسب — أو ندمج أكثر من مسار إذا احتاجت المشكلة ذلك.
          </p>

          <div className={styles.servicesStack}>
            {SERVICES.map((s) => (
              <div key={s.id} id={s.id} className={`${styles.serviceBlock} ${styles.serviceAnchor}`}>
                <ServicePathCard
                  label={s.label}
                  title={s.title}
                  problemSignal={s.problemSignal}
                  description={s.description}
                  outcomes={s.outcomes}
                  price={s.price}
                  priceNote={s.priceNote}
                />
              </div>
            ))}
          </div>

          <div className={styles.notSuitable}>
            <div className={styles.notSuitableTitle}>ما لا نبنيه</div>
            <div className={styles.notSuitableList}>
              {NOT_SUITABLE.map((item) => (
                <div key={item} className={styles.notSuitableItem}>{item}</div>
              ))}
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h2 className={styles.ctaBoxTitle}>
              لست متأكداً من المسار المناسب؟
            </h2>
            <p className={styles.ctaBoxBody}>
              صف المشكلة التي تواجهها — وسنحدد معاً المسار والنطاق المناسب.
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
