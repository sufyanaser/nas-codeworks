import { Helmet } from 'react-helmet-async'
import { CaseStoryCard } from '../../components/ui/CaseStoryCard/CaseStoryCard'
import { SectionHeading } from '../../components/ui/SectionHeading/SectionHeading'
import { CTAButton } from '../../components/ui/CTAButton/CTAButton'
import styles from './CaseStudies.module.css'

/* Approved copy: docs/02-copy/05_Case_Studies_Problem_Solution_Stories_Page_V2.md
 * Problem-recognition stories — never a portfolio. Verbatim, distributed. */

const ROOTS = [
  'معلومات متفرقة.',
  'متابعة غير واضحة.',
  'تقارير متأخرة.',
  'اعتماد على الذاكرة أو شخص واحد.',
  'وصورة تشغيلية لا تظهر كاملة في الوقت المناسب.',
]

const FAMILIAR = [
  {
    title: 'ملف Excel واحد لم يعد يكفي',
    text: 'شركة كانت تتابع عملية واحدة عبر عدة ملفات. كل ملف يحمل جزءاً من الحقيقة، ولا أحد يعرف دائماً أي نسخة هي الأحدث.',
  },
  {
    title: 'WhatsApp أصبح أداة متابعة',
    text: 'الفريق يعرف آخر حالة للعمل من الرسائل، لا من نظام واضح. عند البحث عن قرار أو تحديث، يبدأ الجميع بالرجوع إلى المحادثات.',
  },
  {
    title: 'التقرير يصل متأخراً',
    text: 'الإدارة تحتاج أرقاماً اليوم، لكن التقرير يحتاج جمعاً يدوياً من أكثر من مصدر، لذلك يصل بعد أن يكون القرار تأخر.',
  },
  {
    title: 'المعلومة موجودة عند شخص واحد',
    text: 'عند غياب موظف معيّن، تتوقف المتابعة أو يصبح الوصول إلى التفاصيل صعباً، لأن جزءاً كبيراً من الصورة موجود في ذاكرته أو ملفاته.',
  },
  {
    title: 'الملفات موجودة... لكن الوصول إليها متعب',
    text: 'المستندات محفوظة في أماكن مختلفة، بأسماء مختلفة، ونسخ متعددة. المشكلة ليست غياب الملفات، بل غياب طريقة واضحة للوصول إليها.',
  },
]

const WHAT_IT_PROVES = [
  'ما كان يحدث داخل العمل.',
  'أين كان الألم.',
  'لماذا لم تعد الطريقة القديمة كافية.',
  'ما المسار المناسب للمعالجة.',
  'وما الذي أصبح أوضح بعد الحل.',
]

const HOW_TO_READ = [
  'هل لدينا مشكلة مشابهة؟',
  'هل الوضع السابق يشبه طريقتنا الحالية؟',
  'هل الأثر الذي حدث هناك يحدث عندنا أيضاً؟',
  'هل نضيع وقتاً بنفس الطريقة؟',
  'هل التقارير أو المتابعة أو الملفات تسبب لنا نفس الضغط؟',
  'هل نحتاج أن نفهم المشكلة قبل طلب أي أداة؟',
]

const SUCCESS_SIGNS = [
  'وقت أقل في البحث والمتابعة.',
  'أخطاء أقل بسبب النسخ أو الإدخال اليدوي.',
  'معلومات أوضح في مكان واحد.',
  'تقارير أسهل في التجهيز أو القراءة.',
  'فريق يعرف ما الذي تم وما الذي لم يتم.',
  'إدارة ترى الوضع بشكل أوضح.',
  'اعتماد أقل على الذاكرة أو شخص واحد.',
  'طريقة عمل أسهل على الموظفين.',
]

export function CaseStudies() {
  return (
    <>
      <Helmet>
        <title>قصص المشاكل — NAS CodeWorks</title>
        <meta
          name="description"
          content="قصص مشاكل تشبه ما يحدث داخل العمل اليومي — لا معرض مشاريع. ابحث عن مشكلة تشبه مشكلتك، لا عن برنامج جميل."
        />
        <link rel="canonical" href="https://nascodeworks.com/stories" />
      </Helmet>

      <section className="section">
        <div className="container">
          <SectionHeading
            label="قصص المشاكل"
            title="قصص مشاكل تشبه ما يحدث داخل العمل اليومي"
            titleAs="h1"
            align="start"
          />
          <p className={styles.intro}>
            كثير من المشاكل تبدو مختلفة من الخارج. لكن عندما ننظر إلى طريقة العمل اليومية، نجد أن جذور المشكلة متشابهة:
          </p>
          <ul className={styles.bodyList}>
            {ROOTS.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p className={styles.para}>
            هذه الصفحة ليست معرض مشاريع. هي مكان للتعرف على مشاكل قريبة من واقع شركتك. في NAS CodeWorks، القصص لا تبدأ من شكل الأداة، ولا من عدد الشاشات، ولا من قائمة الميزات. الأهم: ما المشكلة التي كانت موجودة؟ كيف كانت تؤثر على العمل؟ ما الذي تغيّر بعد فهمها ومعالجتها؟
          </p>

          {/* Familiar problems */}
          <div className={styles.block}>
            <SectionHeading title="أمثلة على مشاكل قد تبدو مألوفة" align="start" titleAs="h2" />
            <div className={styles.exampleGrid}>
              {FAMILIAR.map((f) => (
                <article key={f.title} className={styles.exampleCard}>
                  <h3 className={styles.exampleTitle}>{f.title}</h3>
                  <p className={styles.exampleText}>{f.text}</p>
                </article>
              ))}
            </div>
          </div>

          {/* What a story proves */}
          <div className={styles.block}>
            <SectionHeading title="ما الذي تثبته قصة المشكلة؟" align="start" titleAs="h2" />
            <p className={styles.para}>القصة الجيدة لا تثبت أننا بنينا أداة فقط. تثبت أننا فهمنا:</p>
            <ul className={styles.bodyList}>
              {WHAT_IT_PROVES.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
            <p className={styles.paraStrong}>النتيجة هي أساس القصة، لا شكل الواجهة.</p>
          </div>

          {/* How to read */}
          <div className={styles.block}>
            <SectionHeading title="كيف تُقرأ هذه القصص؟" align="start" titleAs="h2" />
            <p className={styles.para}>لا تبحث عن شركة مطابقة لشركتك تماماً. اسأل:</p>
            <ul className={styles.bodyList}>
              {HOW_TO_READ.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
            <p className={styles.para}>
              إذا كانت الإجابة نعم، فالخطوة التالية ليست طلب مشروع مشابه. الخطوة التالية هي وصف مشكلتك أنت.
            </p>
          </div>

          {/* How each story is built */}
          <div className={styles.block}>
            <SectionHeading title="كيف تُبنى كل قصة؟" align="start" titleAs="h2" />
            <p className={styles.para}>عند توفر قصص حقيقية، ستُعرض بشكل بسيط:</p>
            <p className={styles.buildFlow}>
              السياق ← المشكلة ← الوضع السابق ← الأثر ← مسار الحل ← النتيجة ← الدرس المستفاد
            </p>
            <p className={styles.para}>
              لن تكون القصص معرض واجهات، ولن تكون قائمة مشاريع. ستكون أمثلة على كيف يمكن لمشكلة تشغيلية حقيقية أن تتحول إلى نتيجة أوضح داخل العمل اليومي.
            </p>
          </div>

          {/* Success criteria */}
          <div className={styles.block}>
            <SectionHeading title="ما الذي نعتبره دليلاً على النجاح؟" align="start" titleAs="h2" />
            <p className={styles.para}>
              نجاح القصة لا يُقاس بشكل الأداة فقط. نعتبر القصة ناجحة إذا ظهر فيها واحد أو أكثر من هذه النتائج:
            </p>
            <ul className={styles.bodyList}>
              {SUCCESS_SIGNS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Under preparation (approved empty-state) */}
          <div className={styles.block}>
            <SectionHeading title="قصص قيد الإعداد" align="start" titleAs="h2" />
            <div className={styles.storiesGrid}>
              <CaseStoryCard placeholder problem="" previousState="" impact="" />
              <CaseStoryCard placeholder problem="" previousState="" impact="" />
              <CaseStoryCard placeholder problem="" previousState="" impact="" />
            </div>
            <div className={styles.comingSoon}>
              <div className={styles.comingSoonTitle}>قصص قيد الإعداد</div>
              <p className={styles.comingSoonBody}>
                سيتم عرض قصص المشاكل والحلول هنا بعد تجهيزها بصيغة واضحة. كل قصة ستعرض المشكلة والأثر والوضع السابق والمسار والنتيجة، دون تحويل الصفحة إلى Portfolio أو معرض صور.
              </p>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h2 className={styles.ctaBoxTitle}>هل لديك مشكلة تشبه هذه الحالات؟</h2>
            <p className={styles.ctaBoxBody}>
              ربما لا تحتاج مشروعاً مشابهاً لما تقرأه هنا. لكن إذا كانت المشكلة تشبه ما يحدث داخل شركتك، فهذه هي نقطة البداية. لا تحتاج أن تعرف شكل الحل، ولا أن تطلب أداة محددة. ابدأ من وصف المشكلة.
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
