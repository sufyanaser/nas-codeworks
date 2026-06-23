import { Helmet } from 'react-helmet-async'
import { SectionHeading } from '../../components/ui/SectionHeading/SectionHeading'
import { ServicePathCard } from '../../components/ui/ServicePathCard/ServicePathCard'
import { CTAButton } from '../../components/ui/CTAButton/CTAButton'
import styles from './Services.module.css'

/* Approved copy: docs/02-copy/02_Services_Page_V2.md — verbatim, distributed. */

const SERVICES = [
  {
    id: 'internal-tools',
    label: '01',
    title: 'تطبيقات سطح مكتب مخصصة للشركات',
    problemSignal:
      'إذا كانت شركتك تعتمد على Excel، الورق، WhatsApp، أو خطوات يدوية كثيرة لإدارة عملية مهمة، فقد تكون المشكلة أن العمل أصبح أكبر من الأدوات المستخدمة حالياً.',
    description:
      'هذا المسار مناسب عندما تكون لدى الشركة عملية داخلية واضحة، لكنها تُدار حالياً بطريقة متعبة أو غير منظمة. نبني أداة عملية بواجهة عربية واضحة، مصممة حول طريقة عمل الشركة نفسها، وليس حول نموذج عام لا يناسبها.',
    outcomes: [
      'تقليل الاعتماد على Excel المتفرق.',
      'تنظيم خطوات العمل اليومية.',
      'تسهيل متابعة الحالة والمسؤوليات.',
      'تقليل الوقت الذي يضيع في التحديث والتصحيح.',
      'جعل الاستخدام مناسباً للموظفين داخل الشركة.',
    ],
    price: 'تبدأ من 500$',
  },
  {
    id: 'archiving',
    label: '02',
    title: 'أنظمة أرشفة وإدارة ملفات داخلية',
    problemSignal:
      'عندما يصبح البحث عن المعلومة جزءاً يومياً من العمل، فهذا يعني أن الأرشفة والتنظيم بحاجة إلى طريقة أوضح.',
    description:
      'هذا المسار مناسب للشركات التي تحتاج إلى تنظيم المستندات أو العملاء أو المشاريع أو المعاملات بطريقة سهلة وواضحة. الهدف ليس فقط حفظ الملفات، بل أن تصبح المعلومة أسهل في الوصول، التصنيف، والمتابعة.',
    outcomes: [
      'تقليل ضياع الملفات.',
      'الوصول إلى الملف أو المعلومة خلال وقت أقصر.',
      'تنظيم معلومات العملاء أو المشاريع.',
      'تقليل تكرار النسخ والملفات.',
      'بناء ترتيب يناسب طريقة عمل الشركة.',
    ],
    price: 'تبدأ من 900$',
  },
  {
    id: 'reporting',
    label: '03',
    title: 'أتمتة التقارير وربط البيانات',
    problemSignal:
      'إذا كانت التقارير تحتاج جهداً يومياً حتى تصبح جاهزة، فالمشكلة ليست في التقرير نفسه فقط، بل في طريقة انتقال المعلومات داخل العمل.',
    description:
      'هذا المسار مناسب عندما تتكرر نفس عمليات الجمع والتحديث والمتابعة، وتحتاج الإدارة إلى رؤية أوضح وأسرع للوضع الحالي. الهدف هو تقليل العمل اليدوي في التقارير، وجعل المعلومات أسهل في المتابعة.',
    outcomes: [
      'تقليل تأخر التقارير.',
      'تقليل الأخطاء الناتجة عن النسخ اليدوي.',
      'تجميع المعلومات من أكثر من مصدر.',
      'توضيح حالة العمل للإدارة.',
      'تسهيل متابعة المبيعات أو المخزون أو العمليات اليومية.',
    ],
    price: 'يُحدد بعد فهم النطاق',
    priceNote: 'يُحدد بعد فهم مصادر البيانات ونطاق التقارير المطلوبة.',
  },
]

const HOW_WE_CHOOSE = [
  'أداة داخلية.',
  'أرشفة وتنظيم معلومات.',
  'أتمتة تقارير وربط بيانات.',
  'أو نطاق صغير يجمع بين أكثر من مسار عند الحاجة.',
]

const SOUNDS_LIKE_YOU = [
  'Excel لم يعد كافياً.',
  'الورق ما زال يدخل في خطوات مهمة.',
  'WhatsApp أصبح جزءاً من المتابعة اليومية.',
  'التقارير تحتاج وقتاً طويلاً.',
  'المعلومات موزعة بين أشخاص وأجهزة وملفات.',
  'الأخطاء تتكرر بسبب الإدخال أو النسخ اليدوي.',
  'الإدارة لا ترى الحالة بوضوح.',
  'الموظفون يضيعون وقتاً في البحث والسؤال والتحديث.',
]

export function Services() {
  return (
    <>
      <Helmet>
        <title>الخدمات — NAS CodeWorks</title>
        <meta
          name="description"
          content="ثلاثة مسارات لمعالجة المشاكل التشغيلية: تطبيقات سطح مكتب مخصصة للشركات، أنظمة أرشفة وإدارة ملفات داخلية، أتمتة التقارير وربط البيانات. تُختار الخدمة بعد فهم المشكلة، لا قبلها."
        />
        <link rel="canonical" href="https://nascodeworks.com/services" />
      </Helmet>

      <section className="section">
        <div className="container">
          <SectionHeading
            label="الخدمات"
            title="قبل أن تختار الخدمة، نحتاج أن نفهم أين المشكلة"
            titleAs="h1"
            align="start"
          />
          <p className={styles.intro}>
            قد لا تكون المشكلة أن شركتك تحتاج برنامجاً جديداً. قد تكون المشكلة أن جزءاً من العمل أصبح أكبر من الطريقة التي يُدار بها الآن.
          </p>
          <p className={styles.para}>
            في NAS CodeWorks لا نبدأ من اسم الخدمة. نبدأ من المشكلة التي تعطل العمل داخل شركتك. الخدمة المناسبة لا تُختار لأنها تبدو أفضل، بل لأنها تعالج نوع المشكلة الموجودة داخل طريقة العمل الحالية.
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

          {/* How we choose */}
          <div className={styles.block}>
            <SectionHeading title="كيف نحدد الخدمة المناسبة؟" align="start" titleAs="h2" />
            <p className={styles.para}>
              ليس من الضروري أن تعرف مسبقاً أي خدمة تناسبك. في كثير من الحالات، يبدأ العميل بوصف المشكلة فقط. بعد فهم المشكلة وطريقة إدارتها حالياً، يمكن تحديد المسار الأقرب:
            </p>
            <ul className={styles.bodyList}>
              {HOW_WE_CHOOSE.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <p className={styles.paraStrong}>المهم أن يبدأ الاختيار من المشكلة، لا من اسم الخدمة.</p>
          </div>

          {/* Sounds like you */}
          <div className={styles.block}>
            <SectionHeading title="هل هذه الصفحة تتحدث عن شركتك؟" align="start" titleAs="h2" />
            <p className={styles.para}>
              إذا كانت ثلاث أو أربع نقاط من هذه القائمة تحدث عندكم، فغالباً أنتم لا تحتاجون إلى ملف جديد فقط، بل تحتاجون إلى فهم أوضح لطريقة العمل نفسها:
            </p>
            <ul className={styles.bodyList}>
              {SOUNDS_LIKE_YOU.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className={styles.para}>
              إذا كانت المشكلة واضحة داخل العمل اليومي، يمكن البدء بوصفها ثم تحديد المسار المناسب لها.
            </p>
          </div>

          <div className={styles.ctaBox}>
            <h2 className={styles.ctaBoxTitle}>ابدأ من وصف المشكلة</h2>
            <p className={styles.ctaBoxBody}>
              لا تحتاج إلى طلب تطبيق. ولا تحتاج إلى اختيار خدمة بدقة. ولا تحتاج إلى كتابة متطلبات تقنية. اكتب فقط ما المشكلة التي تعطل العمل، وكيف تتم إدارتها الآن، وما الذي تريد أن يصبح أوضح.
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
