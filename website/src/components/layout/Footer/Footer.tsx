import { ScreenLink } from '../../../engine/ScreenLink'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <h3>NAS <span>CodeWorks</span></h3>
            <p>
              استوديو حل مشاكل تشغيلية للشركات العراقية الصغيرة والمتوسطة.
              نساعدك على تحويل الفوضى اليومية إلى أدوات واضحة تناسب طريقة عمل شركتك.
            </p>
          </div>

          <div>
            <p className={styles.colTitle}>الصفحات</p>
            <div className={styles.links}>
              <ScreenLink to="/">الرئيسية</ScreenLink>
              <ScreenLink to="/services">الخدمات</ScreenLink>
              <ScreenLink to="/how-we-work">طريقة العمل</ScreenLink>
              <ScreenLink to="/stories">قصص المشاكل</ScreenLink>
              <ScreenLink to="/start">ابدأ بوصف المشكلة الحالية</ScreenLink>
            </div>
          </div>

          <div>
            <p className={styles.colTitle}>الخدمات</p>
            <div className={styles.links}>
              <ScreenLink to="/services">تطبيقات سطح مكتب مخصصة</ScreenLink>
              <ScreenLink to="/services">أنظمة أرشفة وإدارة ملفات</ScreenLink>
              <ScreenLink to="/services">أتمتة التقارير وربط البيانات</ScreenLink>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} NAS CodeWorks — جميع الحقوق محفوظة
          </p>
          <ScreenLink to="/start" className={styles.footerCta}>
            ابدأ بوصف المشكلة الحالية
          </ScreenLink>
        </div>
      </div>
    </footer>
  )
}
