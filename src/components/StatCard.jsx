import '../styles/components/StatCard.css'

const ACCENTS = ['+', '→', '×']

function renderValue(value) {
  const parts = []
  let current = ''

  for (let i = 0; i < value.length; i++) {
    if (ACCENTS.includes(value[i])) {
      if (current) parts.push(current)
      parts.push(
        <span key={i} className="stat-card__accent">
          {value[i]}
        </span>
      )
      current = ''
    } else {
      current += value[i]
    }
  }

  if (current) parts.push(current)
  return parts
}

export default function StatCard({ value, label }) {
  return (
    <div className="stat-card">
      <p className="stat-card__value">{renderValue(value)}</p>
      <p className="stat-card__label">{label}</p>
    </div>
  )
}
