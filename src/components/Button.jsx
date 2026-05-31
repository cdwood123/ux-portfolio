import { Link } from 'react-router-dom'
import '../styles/components/Button.css'

export default function Button({ variant = 'primary', children, to, href, onClick }) {
  const className = `btn btn--${variant}`

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
