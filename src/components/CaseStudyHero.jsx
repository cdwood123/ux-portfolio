import '../styles/components/CaseStudyHero.css'

export default function CaseStudyHero({ title, hook, company, role, year, duration }) {
  return (
    <section className="cs-hero">
      <div className="container">
        <p className="cs-hero__label label-upper">Case study</p>
        <h1 className="cs-hero__title display-lg">{title}</h1>
        <p className="cs-hero__hook">{hook}</p>
        <div className="cs-hero__meta">
          <div className="cs-hero__meta-item">
            <span className="cs-hero__meta-label">Company</span>
            <span className="cs-hero__meta-value">{company}</span>
          </div>
          <div className="cs-hero__meta-item">
            <span className="cs-hero__meta-label">Role</span>
            <span className="cs-hero__meta-value">{role}</span>
          </div>
          <div className="cs-hero__meta-item">
            <span className="cs-hero__meta-label">Year</span>
            <span className="cs-hero__meta-value">{year}</span>
          </div>
          <div className="cs-hero__meta-item">
            <span className="cs-hero__meta-label">Duration</span>
            <span className="cs-hero__meta-value">{duration}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
