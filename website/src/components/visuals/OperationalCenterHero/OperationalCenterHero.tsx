import styles from './OperationalCenterHero.module.css'

/**
 * Operational Center Hero Visual
 *
 * Hierarchy (strictly enforced):
 * Level 1 — Center (strongest visual anchor)
 * Level 2 — Relationship paths
 * Level 3 — Fragment nodes (secondary, smaller, lighter)
 *
 * Communicates: Fragmented Signals → Operational Center → Relationship Mapping → Clarity
 */

const CX = 240  // Center X
const CY = 240  // Center Y
const CR = 62   // Center radius

// Fragment positions (orbit around center)
const fragments = [
  { id: 'f1', x: 60,  y: 68,  label: 'ملف',     w: 52, h: 28 },
  { id: 'f2', x: 378, y: 55,  label: 'تقرير',   w: 58, h: 28 },
  { id: 'f3', x: 38,  y: 210, label: 'رسالة',   w: 54, h: 28 },
  { id: 'f4', x: 392, y: 205, label: 'متابعة',  w: 58, h: 28 },
  { id: 'f5', x: 68,  y: 368, label: 'موظف',    w: 54, h: 28 },
  { id: 'f6', x: 375, y: 368, label: 'ورق',      w: 52, h: 28 },
  { id: 'f7', x: 215, y: 402, label: 'أرقام',   w: 54, h: 28 },
]

// Path from fragment center to edge of operational center
function pathD(fx: number, fy: number): string {
  const dx = CX - fx
  const dy = CY - fy
  const dist = Math.sqrt(dx * dx + dy * dy)
  // End point at edge of center circle
  const ex = CX - (dx / dist) * (CR + 6)
  const ey = CY - (dy / dist) * (CR + 6)
  // Control point — slight curve
  const cpx = (fx + CX) / 2 + dy * 0.12
  const cpy = (fy + CY) / 2 - dx * 0.12
  return `M ${fx} ${fy} Q ${cpx} ${cpy} ${ex} ${ey}`
}

export function OperationalCenterHero() {
  return (
    <div className={styles.wrapper} role="img" aria-label="رسم يوضح المعلومات المتفرقة تتجمع نحو مركز رؤية تشغيلي واضح">
      <svg
        className={styles.svg}
        viewBox="0 0 480 480"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* ── Relationship paths (Level 2) ── */}
        <g className={styles.paths}>
          {fragments.map((f) => (
            <path
              key={`path-${f.id}`}
              className={styles.path}
              d={pathD(f.x, f.y)}
            />
          ))}
        </g>

        {/* ── Fragment nodes (Level 3 — secondary) ── */}
        <g className={styles.fragmentsGroup}>
          {fragments.map((f) => (
            <g key={f.id} className={styles.fragment}>
              <rect
                className={styles.fragmentRect}
                x={f.x - f.w / 2}
                y={f.y - f.h / 2}
                width={f.w}
                height={f.h}
                rx={4}
              />
              <text
                className={styles.fragmentLabel}
                x={f.x}
                y={f.y}
              >
                {f.label}
              </text>
            </g>
          ))}
        </g>

        {/* ── Operational Center (Level 1 — strongest anchor) ── */}
        <g className={styles.center}>
          {/* Soft background fill */}
          <circle
            className={styles.centerInner}
            cx={CX}
            cy={CY}
            r={CR + 8}
          />
          {/* Dashed perimeter ring — emerges from organization */}
          <circle
            className={styles.centerCircle}
            cx={CX}
            cy={CY}
            r={CR}
          />
          {/* Label — two lines */}
          <text className={styles.centerLabel} x={CX} y={CY - 9}>
            مركز الرؤية
          </text>
          <text className={styles.centerLabel} x={CX} y={CY + 9}>
            التشغيلية
          </text>
        </g>
      </svg>
    </div>
  )
}
