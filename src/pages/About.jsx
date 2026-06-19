import '../styles/pages/About.css'

const skills = {
  DESIGN: [
    'Figma',
    'Design Systems',
    'Tokens Studio',
    'Prototyping',
    'UX Research',
    'Information Architecture',
  ],
  ENGINEERING: ['SolidWorks CSWP', 'CAD', 'FEA', 'CFD', '3D Printing'],
  'AI & TOOLS': ['Claude', 'Claude Code', 'Figma MCP', 'React', 'Storybook'],
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
            <h1 className="display-lg about-bio__name">Charles Wood</h1>

            <div className="about-bio__text">
              <p className="about-bio__para">
                I'm a product designer with an engineering degree and a decade of experience across
                physical products, enterprise UX, and branding. I started my career doing structural
                analysis and mechanical design before pivoting to UX in 2019. Since then I've led
                design on 20+ freelance projects, from land administration tools deployed in Zambia
                to payment products for cash-based service businesses. The through-line is the same:
                complex systems, real constraints, users who need clarity more than decoration.
              </p>
              <p className="about-bio__para">
                Technical products attract me because the problems are real. When your users are
                engineers or field operators, confusion has consequences, and vague wireframes don't
                survive first contact with the system. I've learned to start with the constraint,
                not the canvas: what does this user need to accomplish, what does the system allow,
                and where do those two things fail to meet? That friction is where the design work
                actually lives.
              </p>
              <p className="about-bio__para">
                What sets me apart in a UX role is that I came from engineering. I'm a certified
                SolidWorks professional, have done FEA and CFD analysis, and spent years designing
                to tolerances and manufacturability requirements. That background means I can sit
                with an engineering team and understand what they're building, not just what they're
                asking for. Layered on top is an AI-native workflow: I use Claude Code and Figma MCP
                to compress the design-to-prototype loop so I can stay focused on decisions that
                actually require judgment.
              </p>
            </div>

            {/* Philosophy */}
            <section className="about-philosophy" aria-labelledby="philosophy-heading">
              <p className="label-upper about-philosophy__label" id="philosophy-heading">
                My approach
              </p>
              <div className="about-philosophy__statements">
                {philosophyStatements.map((statement, i) => (
                  <blockquote key={i} className="about-philosophy__statement">
                    {statement}
                  </blockquote>
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
                <a href="mailto:cdwood123@gmail.com" className="about-contact__link">
                  cdwood123@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/cdwood123/"
                  className="about-contact__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn →
                </a>
                <a
                  href="https://github.com/cdwood123"
                  className="about-contact__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>
              </nav>
              <p className="about-contact__availability">
                Open to remote product design roles
              </p>
            </section>

          </aside>
        </div>
      </div>
    </main>
  )
}
