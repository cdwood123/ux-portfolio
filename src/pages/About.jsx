import '../styles/pages/About.css'
import portrait from '../assets/about/cw_portrait_4.png'

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

export default function About() {
  return (
    <main className="about-page" id="about">
      <div className="container">
        <div className="about-grid">

          {/* Left — bio */}
          <div className="about-left">
            <div className="about-bio__header">
              <img src={portrait} alt="Charles Wood" className="about-bio__portrait" />
              <h1 className="display-lg about-bio__name">Charles Wood</h1>
            </div>

            <div className="about-bio__text">
              <p className="about-bio__para">
                I started my career as a design engineer, focusing on structural analysis and finite
                element analysis, where precise tolerances are essential. In 2019, I transitioned to
                user experience (UX) design, and this engineering background informs my work.
              </p>
              <p className="about-bio__para">
                I thrive in creating technical products for users like engineers and field operators,
                where confusion can be costly. I have worked on over 20 projects, including land
                administration tools in Zambia and payment solutions for cash-based businesses, all
                centered around complex systems and the need for clarity.
              </p>
              <p className="about-bio__para">
                I incorporate AI tools like Claude Code and Figma MCP into my design process to
                speed up prototyping while allowing me to focus on the critical challenges that
                require a designer&apos;s insight.
              </p>
            </div>

            <a
              href="/charles_wood_resume.pdf"
              className="about-resume-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>

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
