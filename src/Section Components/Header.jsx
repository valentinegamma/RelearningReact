import { useState } from "react"
import { ArrowDown, ArrowUpRight, GraduationCap, Menu, X } from "lucide-react"

const links = [
  { label: "Home", href: "./index.html#home", page: "home" },
  { label: "Programs", href: "./index.html#programs" },
  { label: "About us", dropdown: true },
  { label: "Our team", href: "./team.html", page: "team" },
  { label: "Partner with us", href: "./index.html#partner-with-us" },
  { label: "Contact", href: "./index.html#contact" },
]

const aboutLinks = [
  { label: "Our impact", href: "./index.html#our-impact" },
  { label: "Our purpose", href: "./index.html#mission-vision-values" },
  { label: "Who we empower", href: "./index.html#who-we-empower" },
  { label: "Our approach", href: "./index.html#our-approach" },
]

function Header({ currentPage = "home" }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
    setAboutOpen(false)
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a
          className="brand"
          href="./index.html#home"
          aria-label="Pan African Skill Development Centre home"
          onClick={closeMenu}
        >
          <span className="brand__mark" aria-hidden="true">
            <GraduationCap size={23} strokeWidth={1.8} />
          </span>
          <span className="brand__name">
            <span>Pan African</span>
            <span>Skill Development Centre</span>
          </span>
        </a>

        <button
          className="site-header__menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          className={`site-nav${menuOpen ? " site-nav--open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <div className="site-nav__links">
            {links.map(({ label, href, page, dropdown }) =>
              dropdown ? (
                <div
                  className={`about-dropdown${aboutOpen ? " about-dropdown--open" : ""}`}
                  key={label}
                >
                  <button
                    className="site-nav__link about-dropdown__toggle"
                    type="button"
                    aria-expanded={aboutOpen}
                    aria-controls="about-submenu"
                    onClick={() => setAboutOpen((isOpen) => !isOpen)}
                  >
                    About us <ArrowDown size={14} aria-hidden="true" />
                  </button>
                  <div className="about-dropdown__menu" id="about-submenu">
                    {aboutLinks.map(({ label: aboutLabel, href: aboutHref }) => (
                      <a
                        className="about-dropdown__link"
                        href={aboutHref}
                        key={aboutLabel}
                        onClick={closeMenu}
                      >
                        {aboutLabel}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  className="site-nav__link"
                  href={href}
                  key={label}
                  aria-current={page === currentPage ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              ),
            )}
          </div>
          <a className="site-header__cta" href="./index.html#programs" onClick={closeMenu}>
            Get started <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
