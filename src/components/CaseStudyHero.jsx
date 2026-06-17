import '../styles/components/CaseStudyHero.css'

export default function CaseStudyHero({ title, hook, company, role, year, duration, metaItems }) {
  const meta = metaItems || [
    { label: 'Company', value: company },
    { label: 'Role', value: role },
    { label: 'Year', value: year },
    { label: 'Duration', value: duration },
  ]

  return (
    <section className="cs-hero">
      <div className="container">
        <p className="cs-hero__label label-upper">Case study</p>
        <h1 className="cs-hero__title display-lg">{title}</h1>
        <p className="cs-hero__hook">{hook}</p>
        <div className="cs-hero__meta">
          {meta.map(({ label, value, href }) => (
            <div key={label} className="cs-hero__meta-item">
              <span className="cs-hero__meta-label">{label}</span>
              <span className="cs-hero__meta-value">
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="cs-hero__meta-link">
                    {value}
                  </a>
                ) : (
                  value
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
