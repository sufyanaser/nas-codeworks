import { Link } from 'react-router-dom'
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
              <Link to="/">الرئيسية</Link>
              <Link to="/services">الخدمات</Link>
              <Link to="/how-we-work">طريقة العمل</Link>
              <Link to="/case-studies">قصص المشاكل</Link>
              <Link to="/start">ابدأ بوصف المشكلة الحالية</Link>
            </div>
          </div>

          <div>
            <p className={styles.colTitle}>الخدمات</p>
            <div className={styles.links}>
              <Link to="/services">تطبيقات سطح مكتب مخصصة</Link>
              <Link to="/services">أنظمة أرشفة وإدارة ملفات</Link>
              <Link to="/services">أتمتة التقارير وربط البيانات</Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} NAS CodeWorks — جميع الحقوق محفوظة
          </p>
          <Link to="/start" className={styles.footerCta}>
            ابدأ بوصف المشكلة الحالية
          </Link>
        </div>
      </div>
    </footer>
  )
}
