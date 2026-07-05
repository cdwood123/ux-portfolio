import '../styles/components/CaseStudyLayout.css'

/*
 * Shared layout primitives for the bespoke case study pages
 * (Cashew, Enum, Trader). Page-specific styles stay in the
 * page's own CSS file; everything here is common structure.
 */

export function CaseSection({ className, children }) {
  return (
    <section className={className ? `case-section ${className}` : 'case-section'}>
      {children}
    </section>
  )
}

export function CaseText({ label, heading, children }) {
  return (
    <div className="case-text-wrap">
      {label && <p className="case-section__label label-upper">{label}</p>}
      {heading && <h2 className="case-subheading">{heading}</h2>}
      {children}
    </div>
  )
}

export function CaseBody({ children }) {
  return <div className="case-section__body">{children}</div>
}

export function CaseFigure({ src, alt, caption, variant, className }) {
  const classes = ['case-figure', variant && `case-figure--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <figure className={classes}>
      <img src={src} alt={alt} className="case-img" />
      {caption && <figcaption className="caption case-caption">{caption}</figcaption>}
    </figure>
  )
}

export function CaseTwoUp({ children }) {
  return <div className="case-2up">{children}</div>
}
