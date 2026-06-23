/* NAS CodeWorks — Screen Engine · Placeholder Screen
 * Neutral infrastructure placeholder for reserved screens (e.g. S02 "center"),
 * whose final content is split out in a later phase. No visual design here by intent.
 */
export function PlaceholderScreen() {
  return (
    <section className="section" aria-label="شاشة قيد الإعداد">
      <div className="container container--narrow">
        <p style={{ color: 'var(--color-text-light)' }}>
          هذه الشاشة محجوزة ضمن بنية محرّك الشاشات وسيُضاف محتواها في مرحلة لاحقة.
        </p>
      </div>
    </section>
  )
}
