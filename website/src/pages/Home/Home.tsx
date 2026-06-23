import { Helmet } from 'react-helmet-async'
import { ScreenLink } from '../../engine/ScreenLink'
import { OperationalCenterHero } from '../../components/visuals/OperationalCenterHero/OperationalCenterHero'
import { MissingCenterBlock } from '../../components/visuals/MissingCenterBlock/MissingCenterBlock'
import { SectionHeading } from '../../components/ui/SectionHeading/SectionHeading'
import { CTAButton } from '../../components/ui/CTAButton/CTAButton'
import { ProblemCard } from '../../components/ui/ProblemCard/ProblemCard'
import { ProcessStep } from '../../components/ui/ProcessStep/ProcessStep'
import styles from './Home.module.css'

/* ── 1. Hero ──────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className={`${styles.hero} section`} aria-label="الرئيسية">
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            عملياتك مبعثرة،<br />
            ونحن نجمعها في مركز واحد.
          </h1>
          <p className={styles.heroBody}>
            NAS CodeWorks تبني أدوات داخلية تعيد تشغيل عمليات المؤسسة من مكان واحد — لا منتجات جاهزة، لا حلول عامة. كل أداة تُبنى للمشكلة التي وصفتَها أنت.
          </p>
          <div className={styles.heroCtas}>
            <CTAButton to="/start" variant="primary" size="lg">
              ابدأ بوصف المشكلة الحالية
            </CTAButton>
            <CTAButton to="/how-we-work" variant="secondary" size="lg">
              كيف نعمل
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
const PROBLEMS = [
  {
    title: 'المعلومات في أكثر من مكان',
    description: 'تتحرك البيانات بين Excel وWhatsApp والأوراق والرسائل — ولا أحد يرى الصورة الكاملة.',
  },
  {
    title: 'التقارير تستنزف الوقت',
    description: 'كل تقرير يحتاج جمع بيانات يدوي وتحقق متعدد قبل أن يصل لصاحب القرار.',
  },
  {
    title: 'المتابعة تعتمد على أشخاص',
    description: 'عندما يغيب شخص واحد، تتوقف عمليات بأكملها — لأن الإجراءات في رأسه لا في نظام.',
  },
  {
    title: 'البيانات موجودة لكن لا وضوح',
    description: 'الأرقام متاحة، لكن المديرين يحتاجون ساعات لاستخراج صورة واضحة عن الوضع الحالي.',
  },
]

function RecognitionSection() {
  return (
    <section className="section bg-alt" aria-label="هل تعاني من هذا؟">
      <div className="container">
        <SectionHeading
          label="هل تعاني من هذا؟"
          title="أعراض غياب المركز التشغيلي"
          subtitle="قبل أن تفكر في الحل، تعرّف على المشكلة."
          align="start"
        />
        <div className={styles.recognitionGrid}>
          {PROBLEMS.map((p) => (
            <ProblemCard key={p.title} title={p.title} description={p.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 3. Cost of Scattered Operations ─────────────────────── */
const COSTS = [
  {
    title: 'وقت ضائع يومياً',
    text: 'موظفوك يقضون ساعات في البحث عن معلومات، التنسيق بين الأنظمة، وإعادة كتابة بيانات موجودة أصلاً.',
  },
  {
    title: 'قرارات بدون وضوح',
    text: 'القيادة تتخذ قرارات بناءً على لقطة قديمة أو منقوصة — لأن البيانات لا تجتمع في وقتها.',
  },
  {
    title: 'خطأ بشري متكرر',
    text: 'كلما كثر النقل اليدوي بين الأنظمة، كثرت الأخطاء. والأخطاء في العمليات لها تكاليف حقيقية.',
  },
  {
    title: 'اعتماد على أفراد',
    text: 'عندما تصبح العملية مرتبطة بشخص لا بنظام، تصبح هشة — وكل غياب يُعطّل سير العمل.',
  },
]

function CostSection() {
  return (
    <section className="section" aria-label="تكلفة البعثرة التشغيلية">
      <div className="container">
        <SectionHeading
          label="تكلفة غياب المركز"
          title="البعثرة التشغيلية لها ثمن حقيقي"
          subtitle="ليست مجرد إزعاج — هي تكلفة يومية على الإنتاجية والجودة والقرار."
          align="start"
        />
        <div className={styles.costGrid}>
          {COSTS.map((c) => (
            <div key={c.title} className={styles.costItem}>
              <div className={styles.costDot} aria-hidden="true" />
              <div className={styles.costItemText}>
                <div className={styles.costItemTitle}>{c.title}</div>
                {c.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 3.5 Missing Center ───────────────────────────────────── */
const FRAGMENTS = [
  'ملف Excel لمتابعة الموردين',
  'مجموعة WhatsApp للطلبات',
  'تقرير PDF أسبوعي يُرسَل يدوياً',
  'ورق في درج المدير',
  'بريد إلكتروني لكل استثناء',
  'موظف واحد يحفظ كل شيء في رأسه',
]

function MissingCenterSection() {
  return (
    <section className={`section ${styles.missingCenterSection}`} aria-label="المعلومات موجودة لكن لا مركز">
      <div className="container">
        <div className={styles.missingCenterInner}>
          <div className={styles.missingCenterText}>
            <SectionHeading
              label="المشكلة الأعمق"
              title="المعلومات موجودة... لكنها لا تجتمع في مكان واحد."
              align="start"
              titleAs="h2"
            />
            <p className={styles.missingCenterBody}>
              معظم المؤسسات لا تعاني من نقص في البيانات — تعاني من غياب المركز. البيانات موزعة على أدوات متعددة، وكل شخص يرى جزءاً فقط.
            </p>
            <div className={styles.fragmentList} aria-label="أمثلة على التشتت">
              {FRAGMENTS.map((f) => (
                <div key={f} className={styles.fragmentItem}>{f}</div>
              ))}
            </div>
            <div className={styles.missingCenterConclusion}>
              عندما لا يوجد مركز، لا يوجد وضوح. والمؤسسات التي تعمل بدون مركز تدفع ثمن ذلك يومياً.
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

/* ── 4. Services Overview ─────────────────────────────────── */
const SERVICES_OVERVIEW = [
  {
    number: '01',
    title: 'تطبيقات سطح مكتب مخصصة للشركات',
    description: 'أداة سطح مكتب تُبنى حول عملية شركتك — بواجهة عربية واضحة تنظم العمل اليومي بدل الملفات المتفرقة.',
    link: '/services#internal-tools',
    price: 'تبدأ من 500$',
  },
  {
    number: '02',
    title: 'أنظمة أرشفة وإدارة ملفات داخلية',
    description: 'نظام أرشفة وتنظيم للمستندات والعملاء والمعاملات — يجعل الوصول إلى المعلومة أسهل وأسرع وأوضح.',
    link: '/services#automation',
    price: 'تبدأ من 900$',
  },
  {
    number: '03',
    title: 'أتمتة التقارير وربط البيانات',
    description: 'نقلل العمل اليدوي في التقارير ونربط البيانات من مصادرها — لتصبح الصورة التشغيلية أوضح وأسرع.',
    link: '/services#reporting',
    price: 'السعر يُحدد بعد فهم النطاق',
  },
]

function ServicesOverviewSection() {
  return (
    <section className="section" aria-label="خدماتنا">
      <div className="container">
        <SectionHeading
          label="ما نبنيه"
          title="ثلاثة مسارات، مشكلة واحدة"
          subtitle="كل مسار يُبنى لمشكلة محددة — لا توجد باقات، لا منتج جاهز."
          align="start"
        />
        <div className={styles.servicesGrid}>
          {SERVICES_OVERVIEW.map((s) => (
            <article
              key={s.number}
              style={{
                padding: 'var(--space-6)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)',
                backgroundColor: 'var(--color-bg)',
              }}
            >
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--color-accent)',
                  letterSpacing: '0.08em',
                }}
              >
                {s.number}
              </span>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.7, flexGrow: 1 }}>
                {s.description}
              </p>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-secondary)', fontWeight: 500 }}>
                {s.price}
              </p>
              <ScreenLink
                to={s.link}
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-secondary)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                  fontWeight: 500,
                }}
              >
                تفاصيل المسار ←
              </ScreenLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 5. Outcomes ──────────────────────────────────────────── */
const OUTCOMES = [
  'معلومات العمل في مكان واحد',
  'تقارير تُنتَج تلقائياً',
  'متابعة في الوقت الفعلي',
  'قرارات أسرع وأوضح',
  'عمليات لا تتوقف عند غياب أحد',
  'بيانات دقيقة بدون تدخل يدوي',
  'فريق يتحرك بوضوح لا بتخمين',
  'مركز تشغيلي يُرى ويُدار',
]

function OutcomesSection() {
  return (
    <section className="section bg-alt" aria-label="ما تحققه">
      <div className="container">
        <SectionHeading
          label="ما تحققه"
          title="وضوح تشغيلي حقيقي"
          subtitle="ليس وعداً بالكفاءة — هذه النتائج الملموسة التي تحدث عندما يعمل المركز."
          align="start"
        />
        <div className={styles.outcomesGrid}>
          {OUTCOMES.map((o) => (
            <div key={o} className={styles.outcomeItem}>
              <span className={styles.outcomeCheck} aria-hidden="true">✓</span>
              <span>{o}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 6. Why NAS CodeWorks ─────────────────────────────────── */
const WHY_ITEMS = [
  {
    title: 'نبني للمشكلة، لا للمنتج',
    desc: 'لا نبيع منتجاً جاهزاً ونحاول إقناعك أنه يناسبك. نبدأ من المشكلة ونبني ما تحتاجه فعلاً.',
  },
  {
    title: 'أنت تمتلك ما بُني',
    desc: 'الكود والبيانات والنظام ملكك. لا اشتراكات ملزمة، لا قفل على منصة.',
  },
  {
    title: 'نطاق محدد، نتيجة واضحة',
    desc: 'كل مشروع يبدأ بنطاق محدد ونتيجة قابلة للقياس — لا وعود مفتوحة.',
  },
  {
    title: 'تسليم خلال أسابيع',
    desc: 'المشاريع الصغيرة تُسلّم خلال أسابيع، لا أشهر. والتعديلات تتم مباشرة.',
  },
]

function WhySection() {
  return (
    <section className="section" aria-label="لماذا NAS CodeWorks">
      <div className="container">
        <SectionHeading
          label="لماذا نحن"
          title="بناء مخصص، لا حلول جاهزة"
          align="start"
        />
        <div className={styles.whyGrid}>
          {WHY_ITEMS.map((w) => (
            <div key={w.title} className={styles.whyItem}>
              <div className={styles.whyTitle}>{w.title}</div>
              <div className={styles.whyDesc}>{w.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 7. Process Preview ───────────────────────────────────── */
const PROCESS_PREVIEW = [
  { number: 1, title: 'تصف المشكلة', body: 'نفهم ما يحدث في العمل اليومي قبل أي شيء آخر.' },
  { number: 2, title: 'نحدد النطاق معاً', body: 'نطاق واضح ونتيجة قابلة للقياس قبل البدء.' },
  { number: 3, title: 'نبني ونسلّم', body: 'تسليم على مراحل قصيرة مع مراجعتك في كل خطوة.' },
]

function ProcessPreviewSection() {
  return (
    <section className="section bg-alt" aria-label="كيف نعمل - ملخص">
      <div className="container">
        <SectionHeading
          label="كيف نعمل"
          title="ثلاث خطوات، لا تعقيد"
          align="start"
        />
        <div className={styles.processPreview}>
          {PROCESS_PREVIEW.map((step, idx) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              body={step.body}
              isLast={idx === PROCESS_PREVIEW.length - 1}
            />
          ))}
        </div>
        <div style={{ marginTop: 'var(--space-8)' }}>
          <CTAButton to="/how-we-work" variant="secondary" size="md">
            اقرأ تفاصيل العملية الكاملة
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

/* ── 8. Case Studies Intro ────────────────────────────────── */
function CaseStudiesIntroSection() {
  return (
    <section className="section" aria-label="قصص من الواقع">
      <div className="container">
        <SectionHeading
          label="من الواقع"
          title="مشاكل حقيقية، أدوات حقيقية"
          align="start"
        />
        <p className={styles.caseIntro}>
          نبني أدوات لمشاكل حقيقية واجهتها مؤسسات حقيقية. كل قصة تبدأ بوصف مشكلة، وتنتهي بأداة تشتغل.
        </p>
        <div style={{ marginTop: 'var(--space-6)' }}>
          <CTAButton to="/case-studies" variant="secondary" size="md">
            اطّلع على القصص
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

/* ── 9. Philosophy ────────────────────────────────────────── */
function PhilosophySection() {
  return (
    <section className="section bg-dark" aria-label="فلسفتنا">
      <div className="container" style={{ maxWidth: '720px' }}>
        <SectionHeading
          label="فلسفة العمل"
          title="المركز يأتي أولاً"
          align="start"
          titleAs="h2"
        />
        <p
          style={{
            fontSize: '1.0625rem',
            color: 'rgba(246,244,239,0.75)',
            lineHeight: 1.85,
            marginTop: 'var(--space-5)',
          }}
        >
          نؤمن أن المؤسسة التي تملك مركزاً تشغيلياً واضحاً تتخذ قرارات أفضل، تتحرك أسرع، وتخطئ أقل. الشظايا — Excel وWhatsApp والأوراق والرسائل — ليست المشكلة. المشكلة هي غياب المكان الذي تجتمع فيه.
        </p>
        <p
          style={{
            fontSize: '1.0625rem',
            color: 'rgba(246,244,239,0.75)',
            lineHeight: 1.85,
            marginTop: 'var(--space-4)',
          }}
        >
          كل أداة نبنيها هي محاولة لبناء هذا المركز — بشكل عملي، محدد النطاق، قابل للاستخدام الفوري.
        </p>
      </div>
    </section>
  )
}

/* ── 10. Final CTA ────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section className={`section ${styles.ctaSection}`} aria-label="ابدأ">
      <div className="container">
        <div className={styles.ctaSectionInner}>
          <h2 className={styles.ctaTitle}>
            مشكلتك تستحق أداة مبنية لها — لا حلاً جاهزاً لم يُبنَ لك.
          </h2>
          <p className={styles.ctaBody}>
            صف المشكلة التشغيلية التي تواجهها. سنراجعها ونرد عليك بفهم واضح لما يمكن بناؤه.
          </p>
          <div className={styles.ctaBtns}>
            <CTAButton to="/start" variant="secondary" size="lg">
              ابدأ بوصف المشكلة الحالية
            </CTAButton>
            <CTAButton to="/services" variant="secondary" size="lg">
              استعرض الخدمات
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
          content="NAS CodeWorks تبني أدوات داخلية مخصصة تجمع عملياتك المبعثرة في مركز تشغيلي واحد. لا منتجات جاهزة — أدوات تُبنى لمشكلتك."
        />
        <meta property="og:title" content="NAS CodeWorks — أدوات داخلية تُعيد تشغيل عملياتك" />
        <meta
          property="og:description"
          content="نبني أدوات داخلية تجمع عملياتك المبعثرة في مركز تشغيلي واحد."
        />
        <link rel="canonical" href="https://nascodeworks.com/" />
      </Helmet>

      <HeroSection />
      <RecognitionSection />
      <CostSection />
      <MissingCenterSection />
      <ServicesOverviewSection />
      <OutcomesSection />
      <WhySection />
      <ProcessPreviewSection />
      <CaseStudiesIntroSection />
      <PhilosophySection />
      <FinalCTASection />
    </>
  )
}
