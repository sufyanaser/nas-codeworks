import styles from './MissingCenterBlock.module.css'

/**
 * MissingCenterBlock — Section 3.5 visual
 * Shows fragments WITHOUT paths and WITHOUT a center.
 * The empty center IS the message: "لا يوجد مركز يجمع الصورة"
 */

const fragments = [
  { label: 'Excel',    x: 80,  y: 70  },
  { label: 'WhatsApp', x: 310, y: 55  },
  { label: 'ورق',      x: 38,  y: 200 },
  { label: 'ملفات',   x: 355, y: 195 },
  { label: 'تقارير',  x: 85,  y: 330 },
  { label: 'موظف',    x: 315, y: 325 },
]

export function MissingCenterBlock() {
  return (
    <div className={styles.wrapper} role="img" aria-label="رسم يوضح المعلومات المتفرقة بدون مركز واضح يجمعها">
      <svg
        className={styles.svg}
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Empty center — the gap is intentional */}
        <circle cx={200} cy={200} r={52} className={styles.emptyCenter} />
        <text className={styles.emptyCenterLabel} x={200} y={195}>؟</text>
        <text className={styles.emptyCenterSubLabel} x={200} y={215}>لا مركز</text>

        {/* Fragments — scattered, no connecting paths */}
        {fragments.map((f) => (
          <g key={f.label} className={styles.fragment}>
            <rect
              className={styles.fragmentRect}
              x={f.x - 36}
              y={f.y - 15}
              width={72}
              height={30}
              rx={4}
            />
            <text className={styles.fragmentLabel} x={f.x} y={f.y}>
              {f.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
