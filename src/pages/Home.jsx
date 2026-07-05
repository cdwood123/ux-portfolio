import Button from '../components/Button'
import StatCard from '../components/StatCard'
import WorkCard from '../components/WorkCard'
import SectionHeader from '../components/SectionHeader'
import { workItems } from '../data/work'
import '../styles/pages/Home.css'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero" aria-label="Introduction">
        <div className="container">
          <div className="hero__grid">
            {/* Left column */}
            <div className="hero__left">
              <div className="fade-up" style={{ animationDelay: '0ms' }}>
                <span className="hero__pill" aria-label="AI-native practice">
                  ✦ AI-native practice
                </span>
              </div>

              <div className="fade-up" style={{ animationDelay: '80ms' }}>
                <p className="label-upper">Product Designer</p>
              </div>

              <div className="fade-up" style={{ animationDelay: '160ms' }}>
                <h1 className="display-xl hero__headline">
                  Turning ambiguous data problems into clear products.
                </h1>
              </div>

              <div className="fade-up" style={{ animationDelay: '240ms' }}>
                <p className="hero__statement">
                  Built on engineering intuition and AI as infrastructure.
                </p>
              </div>

              <div className="fade-up hero__actions" style={{ animationDelay: '320ms' }}>
                <Button to="/work" variant="primary">
                  View selected work
                </Button>
              </div>
            </div>

            {/* Right column — stat cards */}
            <div className="hero__right fade-up" style={{ animationDelay: '400ms' }}>
              <StatCard value="10+" label="years in product design" />
              <StatCard value="0→1" label="product definition specialist" />
              <StatCard value="AI × eng" label="engineering fluency" />
            </div>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="work-preview" aria-label="Selected work">
        <div className="container">
          <SectionHeader
            label="Selected work"
            link={{ to: '/work', text: 'View all →' }}
          />
          <div className="work-grid">
            {workItems.map((item) => (
              <WorkCard key={item.slug} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="about-strip" aria-label="About">
        <div className="container">
          <div className="about-strip__inner">
            <div className="about-strip__avatar" aria-label="Charles Wood initials avatar">
              CW
            </div>
            <div className="about-strip__info">
              <p className="about-strip__name">Charles Wood</p>
              <p className="about-strip__bio">
                Product Designer specializing in data products and AI-native workflows.
              </p>
              <div className="about-strip__chips">
                <span className="about-strip__chip">Engineer → UX</span>
                <span className="about-strip__chip">Design Systems</span>
                <span className="about-strip__chip">Complex Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
