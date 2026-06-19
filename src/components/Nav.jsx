import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import '../styles/components/Nav.css'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close mobile drawer on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header>
      <nav className="nav" aria-label="Main navigation">
        <div className="nav__inner container">
          <Link to="/" className="nav__brand" aria-label="Charles Wood — home">
            <span className="nav__dot" aria-hidden="true" />
            <span className="nav__name">Charles Wood</span>
          </Link>

          <div className="nav__links" role="menubar">
            <NavLink
              to="/work"
              role="menuitem"
              className={({ isActive }) =>
                `nav__link${isActive ? ' nav__link--active' : ''}`
              }
            >
              work
            </NavLink>
            <NavLink
              to="/about"
              role="menuitem"
              className={({ isActive }) =>
                `nav__link${isActive ? ' nav__link--active' : ''}`
              }
            >
              about
            </NavLink>
            <a
              href="/charles_wood_resume.pdf"
              className="nav__link"
              role="menuitem"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
            <Link to="/about#contact" className="nav__cta" role="menuitem">
              get in touch
            </Link>
          </div>

          <button
            className={`nav__hamburger${menuOpen ? ' nav__hamburger--open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="nav-drawer"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </nav>

      <div
        id="nav-drawer"
        className={`nav__drawer${menuOpen ? ' nav__drawer--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <NavLink
          to="/work"
          className={({ isActive }) =>
            `nav__drawer-link${isActive ? ' nav__drawer-link--active' : ''}`
          }
        >
          work
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `nav__drawer-link${isActive ? ' nav__drawer-link--active' : ''}`
          }
        >
          about
        </NavLink>
        <a
          href="/charles_wood_resume.pdf"
          className="nav__drawer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>
        <Link to="/about#contact" className="nav__drawer-cta">
          get in touch
        </Link>
      </div>
    </header>
  )
}
