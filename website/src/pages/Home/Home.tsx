import { Helmet } from 'react-helmet-async'
import { OperationalCenterHero } from '../../components/visuals/OperationalCenterHero/OperationalCenterHero'
import { MissingCenterBlock } from '../../components/visuals/MissingCenterBlock/MissingCenterBlock'
import { SectionHeading } from '../../components/ui/SectionHeading/SectionHeading'
import { CTAButton } from '../../components/ui/CTAButton/CTAButton'
import { ScreenLink } from '../../engine/ScreenLink'
import styles from './Home.module.css'

/* All copy below is the approved Home Page V3 (docs/02-copy/01_Home_Page_V3.md),
 * used verbatim and only distributed across screen blocks (Build Brief §21). */

/* ── 1. Hero ──────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className={`${styles.hero} section`} aria-label="الرئيسية">
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>عندما لا تعود تعرف أين يقف العمل داخل شركتك</h1>
          <p className={styles.heroBody}>
            إذا كانت معلومات العمل موزعة بين Excel وWhatsApp والورق، وكل شخص يعرف جزءاً منها فقط، فالمشكلة ليست أنكم تحتاجون ملفاً جديداً. المشكلة أن طريقة إدارة العمل لم تعد تواكب حجم العمل نفسه.
          </p>
          <p className={styles.heroBody}>
            تظهر هذه الفوضى في تفاصيل صغيرة كل يوم: تقرير يتأخر، ملف لا يعرف أحد نسخته الصحيحة، متابعة تعتمد على التذكير، وقرار ينتظر معلومة غير جاهزة.
          </p>
          <p className={styles.heroBody}>
            NAS CodeWorks يساعد الشركات العراقية الصغيرة والمتوسطة على فهم هذه الفوضى التشغيلية وتحويلها إلى أدوات واضحة تناسب طريقة العمل الفعلية داخل المؤسسة.
          </p>
          <p className={styles.heroLede}>
            ابدأ من المشكلة التي تعطل عملك اليومي، وليس من اسم الأداة التي تحتاجها.
          </p>
          <div className={styles.heroCtas}>
            <CTAButton to="/start" variant="primary" size="lg">
              ابدأ بوصف المشكلة الحالية
            </CTAButton>
            <CTAButton to="/how-we-work" variant="secondary" size="lg">
              تعرّف على طريقة العمل
            </CTAButton>
          </div>
        </div>
        <div aria-hidden="true">
          <OperationalCenterHero />
        </div>
      </div>
    </section>
  )
}

/* ── 2. Recognition ───────────────────────────────────────── */
const RECOGNITION = [
  'تستخدمون Excel لمتابعة المبيعات أو الطلبات أو الملفات.',
  'تصل التعليمات عبر WhatsApp.',
  'تُحفظ بعض المعلومات على الورق.',
  'الملفات موزعة بين أكثر من جهاز أو موظف.',
  'التقارير تحتاج وقتاً لأنها تُجمع يدوياً.',
  'المتابعة تعتمد على السؤال والتذكير والذاكرة.',
  'وعند غياب موظف معيّن، يصبح الوصول إلى المعلومة أصعب.',
]

function RecognitionSection() {
  return (
    <section className="section bg-alt" aria-label="هل هذا الذي يحدث عندكم اليوم؟">
      <div className="container">
        <SectionHeading label="ابدأ من المشكلة" title="هل هذا الذي يحدث عندكم اليوم؟" align="start" />
        <p className={styles.para}>قد تكون المشكلة موجودة منذ فترة، لكنها أصبحت أوضح مع زيادة العمل.</p>
        <ul className={styles.bodyList}>
          {RECOGNITION.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <p className={styles.para}>
          هذه ليست مشاكل تقنية بالضرورة. هذه مشاكل تشغيلية تظهر عندما تكبر تفاصيل العمل أكثر من الطريقة المستخدمة لإدارته.
        </p>
      </div>
    </section>
  )
}

/* ── 3. Cost ──────────────────────────────────────────────── */
const COSTS = [
  'وقت ضائع.',
  'أخطاء متكررة.',
  'تأخير في التقارير.',
  'ضعف في رؤية الإدارة.',
  'وصعوبة في معرفة ما الذي تم، وما الذي لم يتم، ومن المسؤول.',
]

function CostSection() {
  return (
    <section className="section" aria-label="كلفة الطريقة الحالية">
      <div className="container">
        <SectionHeading
          label="الكلفة الخفية"
          title="قد تكون الأمور ماشية... لكن بكلفة أعلى مما تتوقع"
          align="start"
        />
        <p className={styles.para}>
          قد يبدو العمل مستمراً، لكن الطريقة الحالية تستهلك الكثير من الوقت دون أن يظهر ذلك دائماً بشكل مباشر.
        </p>
        <p className={styles.para}>
          كل ملف مكرر يضيف احتمال خطأ. كل تقرير متأخر يؤخر قراراً. كل معلومة ضائعة تعطل متابعة. كل مهمة يدوية متكررة تأخذ وقتاً من الموظفين. وكل اعتماد على شخص واحد يجعل العمل هشاً عند غيابه.
        </p>
        <p className={styles.paraStrong}>المشكلة ليست فقط في الفوضى. المشكلة في ما تسببه الفوضى:</p>
        <ul className={styles.bodyList}>
          {COSTS.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ── 3.5 The Missing Center (approved Home flow §3.5) ──────── */
const MISSING_FRAGMENTS = [
  'الموظف يعرف جزءاً.',
  'المدير يعرف جزءاً آخر.',
  'Excel يحمل جزءاً.',
  'WhatsApp يحمل جزءاً.',
  'الورق يحمل جزءاً.',
]

function MissingCenterSection() {
  return (
    <section className={`section ${styles.missingCenterSection}`} aria-label="غياب المركز">
      <div className="container">
        <div className={styles.missingCenterInner}>
          <div className={styles.missingCenterText}>
            <SectionHeading
              label="المشكلة الحقيقية"
              title="المعلومات موجودة... لكنها لا تجتمع في مكان واحد"
              align="start"
              titleAs="h2"
            />
            <p className={styles.missingCenterBody}>المعلومات موجودة داخل الشركة.</p>
            <div className={styles.fragmentList} aria-label="أجزاء متفرقة من الصورة">
              {MISSING_FRAGMENTS.map((f) => (
                <div key={f} className={styles.fragmentItem}>{f}</div>
              ))}
            </div>
            <p className={styles.missingCenterBody}>
              لكن لا أحد يرى العلاقة بين هذه الأجزاء كلها. ولا يوجد مكان واحد تجتمع فيه الصورة الكاملة.
            </p>
            <div className={styles.missingCenterConclusion}>
              هذا هو المشكلة الحقيقية: غياب المركز، لا غياب البيانات.
            </div>
          </div>
          <div aria-hidden="true">
            <MissingCenterBlock />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── 4. Philosophy ────────────────────────────────────────── */
const FOCUS_QUESTIONS = [
  'ما الذي يحدث الآن؟',
  'كيف تتم إدارة العمل حالياً؟',
  'أين يظهر التأخير؟',
  'أين تحدث الأخطاء؟',
  'ما الذي يصعب متابعته؟',
  'وما الذي يجب أن يصبح أوضح؟',
]

function PhilosophySection() {
  return (
    <section className="section bg-dark" aria-label="نبدأ من المشكلة">
      <div className="container" style={{ maxWidth: '760px' }}>
        <SectionHeading
          label="فلسفة العمل"
          title="قبل أن نفكر بأي نظام أو تطبيق، نحتاج أن نفهم أين المشكلة بالضبط"
          align="start"
          titleAs="h2"
        />
        <p className={styles.paraOnDark}>NAS CodeWorks لا يبدأ بسؤال: ما الأداة التي تريدونها؟ بل يبدأ بسؤال: ما المشكلة التي تعطل العمل؟</p>
        <p className={styles.paraOnDark}>
          لأن العميل غالباً لا يحتاج إلى نظام كبير، ولا إلى تغيير كامل لطريقة عمل الشركة. قد يحتاج فقط إلى فهم واضح للمشكلة، ثم أداة عملية تعالج الجزء الأكثر إرباكاً في العمل اليومي.
        </p>
        <p className={styles.paraOnDarkStrong}>نحن نركز أولاً على:</p>
        <ul className={`${styles.bodyList} ${styles.bodyListOnDark}`}>
          {FOCUS_QUESTIONS.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
        <p className={styles.paraOnDark}>بعد ذلك فقط يمكن تحديد ما يجب بناؤه، وما لا يجب بناؤه.</p>
      </div>
    </section>
  )
}

/* ── 5. What We Do — three paths ──────────────────────────── */
const SERVICES_OVERVIEW = [
  {
    number: '01',
    title: 'تطبيقات سطح مكتب مخصصة للشركات',
    description:
      'عندما تعتمد الشركة على ملفات متفرقة أو خطوات يدوية لإدارة عملية يومية مهمة، يمكن بناء أداة داخلية تساعد الفريق على العمل بطريقة أوضح وأكثر انتظاماً.',
    price: 'تبدأ من 500$',
  },
  {
    number: '02',
    title: 'أنظمة أرشفة وإدارة ملفات داخلية',
    description:
      'عندما تضيع الملفات، أو يصعب البحث عن المستندات، أو تصبح معلومات العملاء أو المشاريع أو المعاملات موزعة بين الورق والأجهزة والموظفين، يصبح التنظيم نفسه جزءاً من الحل.',
    price: 'تبدأ من 900$',
  },
  {
    number: '03',
    title: 'أتمتة التقارير وربط البيانات',
    description:
      'عندما تتأخر التقارير، أو تتكرر نفس عملية الجمع والتحديث، أو تعتمد الإدارة على أرقام غير جاهزة في الوقت المناسب، تصبح المشكلة في تدفق المعلومات.',
    price: 'السعر يحدد بعد فهم النطاق',
  },
]

function ServicesOverviewSection() {
  return (
    <section className="section" aria-label="نحول المشاكل التشغيلية إلى أدوات عملية">
      <div className="container">
        <SectionHeading label="ثلاثة مسارات" title="نحول المشاكل التشغيلية إلى أدوات عملية" align="start" />
        <p className={styles.para}>
          ليست كل مشكلة تشغيلية تحتاج نفس النوع من الحل. أحياناً تكون المشكلة في متابعة العمل اليومي، وأحياناً في ضياع الملفات، وأحياناً في التقارير المتأخرة أو البيانات المتفرقة.
        </p>
        <p className={styles.para}>
          لذلك لا نبدأ باختيار خدمة جاهزة. نبدأ بفهم نوع المشكلة، ثم نحدد المسار الأنسب لمعالجتها. نعمل عبر ثلاثة مسارات رئيسية، وكل مسار يبدأ من نوع المشكلة وليس من اسم الخدمة.
        </p>
        <div className={styles.servicesGrid}>
          {SERVICES_OVERVIEW.map((s) => (
            <article key={s.number} className={styles.serviceCard}>
              <span className={styles.serviceNum}>{s.number}</span>
              <h3 className={styles.serviceTitle}>{s.title}</h3>
              <p className={styles.serviceDesc}>{s.description}</p>
              <p className={styles.servicePrice}>{s.price}</p>
              <ScreenLink to="/services" className={styles.serviceLink}>
                تفاصيل المسار ←
              </ScreenLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 6. Outcomes ──────────────────────────────────────────── */
const OUTCOMES = [
  'عمل يدوي أقل.',
  'أخطاء أقل.',
  'ملفات ومعلومات أكثر تنظيماً.',
  'وصول أسرع للمعلومة.',
  'تقارير أوضح.',
  'متابعة أسهل للطلبات أو المهام أو المعاملات.',
  'رؤية أفضل للإدارة.',
  'واستخدام عملي يناسب الموظفين فعلاً.',
]

function OutcomesSection() {
  return (
    <section className="section bg-alt" aria-label="النتيجة">
      <div className="container">
        <SectionHeading label="النتيجة" title="النتيجة ليست أداة جديدة فقط" align="start" />
        <p className={styles.para}>
          الهدف من العمل ليس إضافة شيء آخر إلى الشركة. الهدف هو تقليل ما يبطئها. بعد فهم المشكلة وبناء الأداة المناسبة، يجب أن يصبح العمل اليومي أوضح.
        </p>
        <div className={styles.outcomesGrid}>
          {OUTCOMES.map((o) => (
            <div key={o} className={styles.outcomeItem}>
              <span className={styles.outcomeCheck} aria-hidden="true">✓</span>
              <span>{o}</span>
            </div>
          ))}
        </div>
        <p className={styles.paraStrong}>
          القيمة الحقيقية هي أن يصبح العمل أسهل في الإدارة، لا أن تملك الشركة نظاماً جديداً فقط.
        </p>
      </div>
    </section>
  )
}

/* ── 7. Why NAS CodeWorks ─────────────────────────────────── */
const WHY_ITEMS = [
  'نفهم المشكلة قبل اقتراح الحل.',
  'ننظر إلى طريقة العمل الحالية قبل بناء الأداة.',
  'نحدد نطاقاً واضحاً حتى لا يتحول المشروع إلى عمل مفتوح.',
  'نراعي بيئة العمل العراقية وطريقة استخدام الموظفين.',
  'نركز على واجهات عربية واضحة يستطيع الفريق التعامل معها.',
  'ونقيس نجاح العمل من خلال التحسن داخل التشغيل اليومي.',
]

function WhySection() {
  return (
    <section className="section" aria-label="لماذا NAS CodeWorks؟">
      <div className="container">
        <SectionHeading label="لماذا نحن" title="لماذا NAS CodeWorks؟" align="start" />
        <p className={styles.para}>
          لأن كثيراً من الشركات لا تحتاج إلى حل ضخم. تحتاج إلى جهة تفهم المشكلة وتبني ما يلزم فقط. NAS CodeWorks يعمل بمنطق عملي:
        </p>
        <ul className={styles.bodyList}>
          {WHY_ITEMS.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
        <p className={styles.paraStrong}>
          نحن لا نبيع وعداً واسعاً. نبدأ من ألم واضح، ونبني حوله حلاً مناسباً.
        </p>
      </div>
    </section>
  )
}

/* ── 8. How We Work preview ───────────────────────────────── */
function ProcessPreviewSection() {
  return (
    <section className="section bg-alt" aria-label="كيف نعرف ما يحتاجه العمل">
      <div className="container" style={{ maxWidth: '760px' }}>
        <SectionHeading label="طريقة العمل" title="كيف نعرف ما الذي يحتاجه العمل فعلاً؟" align="start" />
        <p className={styles.para}>
          تبدأ العملية بوصف المشكلة الحالية. أولاً، نفهم ما الذي يحدث داخل العمل اليومي. ثم نفهم كيف تتم إدارة العملية الآن: عبر Excel، الورق، WhatsApp، ملفات، أو متابعة يدوية.
        </p>
        <p className={styles.para}>
          بعد ذلك نحدد مصدر الألم الحقيقي، ثم نحدد نطاقاً واضحاً: ما الذي يجب حله الآن؟ ما الذي لا يدخل ضمن هذه المرحلة؟ ما النتيجة التي يجب أن تظهر بعد الحل؟
        </p>
        <p className={styles.para}>
          بعد وضوح المشكلة والنطاق، يتم بناء الأداة المناسبة والتحقق من أنها تعالج المشكلة فعلاً داخل طريقة العمل اليومية.
        </p>
        <div style={{ marginTop: 'var(--space-6)' }}>
          <CTAButton to="/how-we-work" variant="secondary" size="md">
            تعرّف على طريقة العمل
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

/* ── 9. Case Studies intro ────────────────────────────────── */
function CaseStudiesIntroSection() {
  return (
    <section className="section" aria-label="قصص مشاكل تحولت إلى نتائج">
      <div className="container" style={{ maxWidth: '760px' }}>
        <SectionHeading label="قصص المشاكل" title="قصص مشاكل تحولت إلى نتائج" align="start" />
        <p className={styles.para}>دراسات الحالة في NAS CodeWorks لا تُعرض كمعرض أعمال.</p>
        <p className={styles.para}>
          الأهم ليس شكل الأداة، بل المشكلة التي كانت موجودة قبلها، وكيف كانت تؤثر على العمل، وما الذي تغيّر بعد معالجتها.
        </p>
        <p className={styles.para}>الهدف أن يرى الزائر مشكلة تشبه مشكلته، لا أن يشاهد واجهة جميلة فقط.</p>
        <div style={{ marginTop: 'var(--space-6)' }}>
          <CTAButton to="/stories" variant="secondary" size="md">
            قصص المشاكل
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

/* ── 10. Final CTA ────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section className={`section ${styles.ctaSection}`} aria-label="ابدأ بوصف المشكلة الحالية">
      <div className="container">
        <div className={styles.ctaSectionInner}>
          <h2 className={styles.ctaTitle}>ابدأ بوصف المشكلة الحالية</h2>
          <p className={styles.ctaBody}>
            إذا كان العمل داخل شركتك أصبح يعتمد على ملفات كثيرة، رسائل متفرقة، متابعة يدوية، تقارير متأخرة، أو معلومات يصعب الوصول إليها، فالخطوة الأولى ليست طلب أداة جاهزة. الخطوة الأولى هي شرح المشكلة.
          </p>
          <p className={styles.ctaBody}>
            لا تحتاج إلى معرفة تقنية. ولا تحتاج إلى تحديد نوع الحل مسبقاً. ابدأ من المشكلة، وسنرى إن كانت قابلة للتحويل إلى أداة عملية بنطاق واضح.
          </p>
          <div className={styles.ctaBtns}>
            <CTAButton to="/start" variant="secondary" size="lg">
              ابدأ بوصف المشكلة الحالية
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Page ─────────────────────────────────────────────────── */
export function Home() {
  return (
    <>
      <Helmet>
        <title>NAS CodeWorks — أدوات داخلية تُعيد تشغيل عملياتك</title>
        <meta
          name="description"
          content="NAS CodeWorks يساعد الشركات العراقية الصغيرة والمتوسطة على فهم الفوضى التشغيلية وتحويلها إلى أدوات داخلية واضحة. ابدأ من المشكلة التي تعطل عملك اليومي."
        />
        <meta property="og:title" content="NAS CodeWorks — أدوات داخلية تُعيد تشغيل عملياتك" />
        <meta
          property="og:description"
          content="نساعد على فهم الفوضى التشغيلية وتحويلها إلى أدوات داخلية واضحة تناسب طريقة العمل الفعلية."
        />
        <link rel="canonical" href="https://nascodeworks.com/" />
      </Helmet>

      <HeroSection />
      <RecognitionSection />
      <CostSection />
      <MissingCenterSection />
      <PhilosophySection />
      <ServicesOverviewSection />
      <OutcomesSection />
      <WhySection />
      <ProcessPreviewSection />
      <CaseStudiesIntroSection />
      <FinalCTASection />
    </>
  )
}
