import Tag from './Tag'
import '../styles/components/LabCard.css'

export default function LabCard({ icon, type, title, description, tag, link, preview = false }) {
  return (
    <article className={`lab-card${preview ? ' lab-card--preview' : ''}`}>
      <div className="lab-card__header">
        {icon && <i className={`${icon} lab-card__icon`} aria-hidden="true" />}
        <span className="lab-card__type">{type}</span>
      </div>
      <p className="lab-card__title">{title}</p>
      <p className="lab-card__desc">{description}</p>
      <div className="lab-card__footer">
        <Tag label={tag} />
        {link && (
          <a href={link} className="lab-card__link" aria-label={`View prototype: ${title}`}>
            → View prototype
          </a>
        )}
      </div>
    </article>
  )
}
