import '../styles/pages/About.css'

const skills = {
  Design: [
    'Figma',
    'UX Research',
    'Design Systems',
    'Prototyping',
    'Information Architecture',
    'User Testing',
  ],
  Engineering: ['React', 'HTML/CSS', 'JavaScript', 'Git', 'Vite'],
  'AI & Tools': ['Claude', 'Cursor', 'ChatGPT', 'Midjourney', 'Framer'],
}

const philosophyStatements = [
  'Design is a clarity problem. If the user is confused, something went wrong upstream.',
  'AI is a force multiplier, not a replacement — it compresses the iteration loop so I can spend time on the decisions that actually require judgment.',
  'The best design work is invisible. Users should notice what they accomplished, not how they did it.',
]

export default function About() {
  return (
    <main className="about-page" id="about">
      <div className="container">
        <div className="about-grid">

          {/* Left — bio + philosophy */}
          <div className="about-left">
            <h1 className="display-md about-bio__name">Charles Wood</h1>

            <div className="about-bio__text">
              {/* REPLACE WITH YOUR BIO — paragraph 1 */}
              <p className="about-bio__para about-bio__para--placeholder">
                [REPLACE: Opening paragraph — who you are, where you&apos;ve worked, the thread connecting your career. Keep it personal and direct. 3–4 sentences.]
              </p>
              {/* REPLACE WITH YOUR BIO — paragraph 2 */}
              <p className="about-bio__para about-bio__para--placeholder">
                [REPLACE: Your approach to data products specifically. What draws you to complex, ambiguous problem spaces? What have you learned from shipping in this domain?]
              </p>
              {/* REPLACE WITH YOUR BIO — paragraph 3 */}
              <p className="about-bio__para about-bio__para--placeholder">
                [REPLACE: Something that makes you different — your AI-native process, your engineering fluency, how you collaborate with data teams. Be specific.]
              </p>
            </div>

            {/* Philosophy */}
            <section className="about-philosophy" aria-labelledby="philosophy-heading">
              <p className="label-upper about-philosophy__label" id="philosophy-heading">
                My approach
              </p>
              <div className="about-philosophy__statements">
                {philosophyStatements.map((statement, i) => (
                  <p key={i} className="about-philosophy__statement">
                    {statement}
                  </p>
                ))}
              </div>
            </section>
          </div>

          {/* Right — skills + contact */}
          <aside className="about-sidebar" aria-label="Skills and contact">

            {/* Skills */}
            <section aria-labelledby="skills-heading">
              <p className="label-upper about-skills__label" id="skills-heading">
                Skills
              </p>
              <div className="about-skills__groups">
                {Object.entries(skills).map(([group, items]) => (
                  <div key={group}>
                    <p className="about-skills__group-heading">{group}</p>
                    <div className="about-skills__list">
                      {items.map((skill) => (
                        <span key={skill} className="about-skills__item">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section className="about-contact" id="contact" aria-labelledby="contact-heading">
              <p className="label-upper about-contact__label" id="contact-heading">
                Contact
              </p>
              <nav className="about-contact__links" aria-label="Contact links">
                {/* REPLACE: update with your real email and profile URLs */}
                <a href="mailto:hello@yourname.com" className="about-contact__link">
                  hello@yourname.com
                </a>
                <a
                  href="https://linkedin.com"
                  className="about-contact__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn →
                </a>
                <a
                  href="https://github.com"
                  className="about-contact__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>
              </nav>
              <p className="about-contact__availability">
                Open to senior product design roles · Seattle or remote
              </p>
            </section>

          </aside>
        </div>
      </div>
    </main>
  )
}
