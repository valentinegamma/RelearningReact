import { useEffect, useState } from "react"
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
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    if (currentPage !== "home") return undefined

    const sectionIds = [...links, ...aboutLinks]
      .filter(({ href }) => href?.includes("#"))
      .map(({ href }) => href.split("#")[1])

    function updateActiveSection() {
      const header = document.querySelector(".site-header")
      if (!header) return

      const activationLine = header.getBoundingClientRect().bottom + 24
      let currentSection = sectionIds[0]
      let currentTop = Number.NEGATIVE_INFINITY

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        const top = section?.getBoundingClientRect().top

        if (top !== undefined && top <= activationLine && top > currentTop) {
          currentSection = id
          currentTop = top
        }
      })

      setActiveSection(currentSection)
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)
    window.addEventListener("hashchange", updateActiveSection)

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
      window.removeEventListener("hashchange", updateActiveSection)
    }
  }, [currentPage])

  function closeMenu() {
    setMenuOpen(false)
    setAboutOpen(false)
  }

  const aboutActive = aboutLinks.some(({ href }) => href.split("#")[1] === activeSection)

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
            {links.map(({ label, href, page, dropdown }) => {
              if (dropdown) {
                return (
                  <div
                    className={`about-dropdown${aboutOpen ? " about-dropdown--open" : ""}`}
                    key={label}
                  >
                    <button
                      className={`site-nav__link about-dropdown__toggle${aboutActive ? " site-nav__link--active" : ""}`}
                      type="button"
                      aria-expanded={aboutOpen}
                      aria-controls="about-submenu"
                      aria-current={aboutActive ? "location" : undefined}
                      onClick={() => setAboutOpen((isOpen) => !isOpen)}
                    >
                      About us <ArrowDown size={14} aria-hidden="true" />
                    </button>
                    <div className="about-dropdown__menu" id="about-submenu">
                      {aboutLinks.map(({ label: aboutLabel, href: aboutHref }) => {
                        const isActive = aboutHref.split("#")[1] === activeSection

                        return (
                          <a
                            className={`about-dropdown__link${isActive ? " about-dropdown__link--active" : ""}`}
                            href={aboutHref}
                            key={aboutLabel}
                            aria-current={isActive ? "location" : undefined}
                            onClick={closeMenu}
                          >
                            {aboutLabel}
                          </a>
                        )
                      })}
                    </div>
                  </div>
                )
              }

              const isPageActive = currentPage === "team" && page === currentPage
              const isSectionActive =
                currentPage === "home" && href?.split("#")[1] === activeSection

              return (
                <a
                  className={`site-nav__link${isPageActive || isSectionActive ? " site-nav__link--active" : ""}`}
                  href={href}
                  key={label}
                  aria-current={isPageActive ? "page" : isSectionActive ? "location" : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              )
            })}
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
