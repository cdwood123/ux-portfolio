import '../styles/components/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <p className="footer__copy caption">
          Designed &amp; built by Charles Wood · 2026
        </p>
        <nav className="footer__links" aria-label="Social links">
          <a
            href="https://www.linkedin.com/in/cdwood123"
            className="footer__link caption"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/cdwood123"
            className="footer__link caption"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="/charles_wood_resume.pdf"
            className="footer__link caption"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
    </footer>
  )
}
