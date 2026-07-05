import '../styles/components/StatCard.css'

const ACCENT_SPLIT = /([+→×])/

function renderValue(value) {
  return value
    .split(ACCENT_SPLIT)
    .filter(Boolean)
    .map((part, i) =>
      ACCENT_SPLIT.test(part) ? (
        <span key={i} className="stat-card__accent">
          {part}
        </span>
      ) : (
        part
      )
    )
}

export default function StatCard({ value, label }) {
  return (
    <div className="stat-card">
      <p className="stat-card__value">{renderValue(value)}</p>
      <p className="stat-card__label">{label}</p>
    </div>
  )
}
