import { useParams, Link, Navigate } from 'react-router-dom'
import CaseStudyHero from '../components/CaseStudyHero'
import Tag from '../components/Tag'
import { workItems } from '../data/work'
import '../styles/pages/CaseStudy.css'

export default function CaseStudy() {
  const { slug } = useParams()
  const idx = workItems.findIndex((item) => item.slug === slug)

  if (idx === -1) {
    return <Navigate to="/work" replace />
  }

  const item = workItems[idx]
  const prev = idx > 0 ? workItems[idx - 1] : null
  const next = idx < workItems.length - 1 ? workItems[idx + 1] : null

  return (
    <main className="cs-page">
      <CaseStudyHero
        title={item.title}
        hook={
          /* REPLACE: one sentence — "what changed because of this work" */
          `[REPLACE: What changed for users or the business because of this project.]`
        }
        metaItems={[
          { label: 'Company', value: item.company },
          { label: 'Role', value: item.role },
          { label: 'Year', value: item.year },
          { label: 'Duration', value: item.duration },
        ]}
      />

      <div className="container">
        <article className="cs-content">

          {/* 1. Context */}
          <section className="cs-section" aria-labelledby="context-heading">
            <p className="cs-section__label label-upper" id="context-heading">
              Context
            </p>
            <p className="cs-section__body">
              {/* REPLACE: background, team size, constraints */}
              [REPLACE: 2–3 sentences describing the product context, the team, and the constraints you were working within. What made this problem hard? What were the stakes?]
            </p>
          </section>

          {/* 2. The problem */}
          <section className="cs-section" aria-labelledby="problem-heading">
            <p className="cs-section__label label-upper" id="problem-heading">
              The problem
            </p>
            <h2 className="cs-section__heading">
              {/* REPLACE: frame the problem as a tension or question */}
              [REPLACE: How do you [verb] when [constraint]?]
            </h2>
            <p className="cs-section__body">
              {/* REPLACE: problem framing — tension, not feature list */}
              [REPLACE: Describe the core tension. What did users need vs. what the system provided? Why was the existing approach failing?]
            </p>
          </section>

          {/* 3. Process */}
          <section className="cs-section" aria-labelledby="process-heading">
            <p className="cs-section__label label-upper" id="process-heading">
              Process
            </p>
            <div className="cs-process-row">
              <div>
                <p className="cs-section__body">
                  {/* REPLACE: describe this phase of your process */}
                  [REPLACE: Discovery &amp; framing — what you investigated, who you talked to, what you learned.]
                </p>
              </div>
              <div
                className="img-placeholder cs-img-placeholder"
                style={{ height: 200 }}
                aria-label={`${item.title} — discovery artifacts`}
              >
                [Research artifacts]
              </div>
            </div>

            <div className="cs-process-row cs-process-row--reverse">
              <div>
                <p className="cs-section__body">
                  {/* REPLACE: describe ideation phase */}
                  [REPLACE: Ideation &amp; synthesis — how you moved from insights to concepts. Include any AI-assisted work here if relevant.]
                </p>
              </div>
              <div
                className="img-placeholder cs-img-placeholder"
                style={{ height: 200 }}
                aria-label={`${item.title} — ideation work`}
              >
                [Ideation artifacts]
              </div>
            </div>
          </section>

          {/* 4. The work */}
          <section className="cs-section" aria-labelledby="work-heading">
            <p className="cs-section__label label-upper" id="work-heading">
              The work
            </p>
            <div
              className="img-placeholder cs-img-placeholder"
              style={{ height: 480 }}
              aria-label={`${item.title} — final designs`}
            >
              {/* REPLACE: final design screenshots */}
              [Final designs — full width]
            </div>
            <p className="cs-section__body" style={{ marginTop: '24px' }}>
              {/* REPLACE: describe the final solution */}
              [REPLACE: Describe the final design. What were the key decisions and why? What did you trade off?]
            </p>

            <div
              className="img-placeholder cs-img-placeholder"
              style={{ height: 320, marginTop: '24px' }}
              aria-label={`${item.title} — detail view`}
            >
              [Detail / interaction]
            </div>
          </section>

          {/* 5. Outcome */}
          <section className="cs-section" aria-labelledby="outcome-heading">
            <p className="cs-section__label label-upper" id="outcome-heading">
              Outcome
            </p>
            <p className="cs-section__body">
              {/* REPLACE: metrics or qualitative impact */}
              [REPLACE: What happened after launch? Include metrics if available, or describe the qualitative change for users or the team.]
            </p>
            {/* DECISION: placeholder metric cards — remove if no metrics are available */}
            <div className="cs-metrics">
              <div className="cs-metric">
                <p className="cs-metric__value">—</p>
                <p className="cs-metric__label">[REPLACE: metric label]</p>
              </div>
              <div className="cs-metric">
                <p className="cs-metric__value">—</p>
                <p className="cs-metric__label">[REPLACE: metric label]</p>
              </div>
              <div className="cs-metric">
                <p className="cs-metric__value">—</p>
                <p className="cs-metric__label">[REPLACE: metric label]</p>
              </div>
            </div>
          </section>

          {/* 6. Reflection */}
          <section className="cs-section" aria-labelledby="reflection-heading">
            <p className="cs-section__label label-upper" id="reflection-heading">
              Reflection
            </p>
            <p className="cs-section__body">
              {/* REPLACE: one honest paragraph — what you'd do differently */}
              [REPLACE: What would you do differently? This is where you demonstrate self-awareness and judgment — be specific, not generic.]
            </p>
          </section>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
            {item.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>

          {/* Next / Prev navigation */}
          <nav className="cs-nav" aria-label="Case study navigation">
            {prev ? (
              <Link to={`/work/${prev.slug}`} className="cs-nav__item">
                <span className="cs-nav__direction">← Previous</span>
                <span className="cs-nav__title">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}

            {next ? (
              <Link
                to={`/work/${next.slug}`}
                className="cs-nav__item cs-nav__item--next"
              >
                <span className="cs-nav__direction">Next →</span>
                <span className="cs-nav__title">{next.title}</span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </article>
      </div>
    </main>
  )
}
