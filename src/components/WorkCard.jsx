import { Link } from 'react-router-dom'
import Tag from './Tag'
import '../styles/components/WorkCard.css'

export default function WorkCard({ slug, title, problem, tags, image }) {
  return (
    <Link to={`/work/${slug}`} className="work-card" aria-label={`View case study: ${title}`}>
      <div className="work-card__thumb" aria-label={`${title} — case study thumbnail`}>
        {image && (
          <img src={image} alt={`${title} — case study thumbnail`} className="work-card__thumb-img" />
        )}
      </div>
      <div className="work-card__body">
        <p className="work-card__title">{title}</p>
        <p className="work-card__problem">{problem}</p>
        <div className="work-card__tags">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </Link>
  )
}
