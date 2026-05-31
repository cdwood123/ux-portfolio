import { Link } from 'react-router-dom'
import '../styles/components/SectionHeader.css'

export default function SectionHeader({ label, link }) {
  return (
    <div className="section-header">
      <span className="section-header__label">{label}</span>
      {link && (
        link.to ? (
          <Link to={link.to} className="section-header__link">
            {link.text}
          </Link>
        ) : (
          <a href={link.href} className="section-header__link">
            {link.text}
          </a>
        )
      )}
    </div>
  )
}
