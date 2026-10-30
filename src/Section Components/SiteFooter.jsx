import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import logo from "@/lib/IMAGES/logo.png"

const footerLinks = [
  { label: "Home", href: "./index.html#home" },
  { label: "Programs", href: "./index.html#programs" },
  { label: "About us", href: "./index.html#mission-vision-values" },
  { label: "Our team", href: "./team.html" },
  { label: "Partner with us", href: "./index.html#partner-with-us" },
  { label: "Contact", href: "./index.html#contact" },
]

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <a className="site-footer__logo" href="./index.html#home">
            <span className="site-footer__mark" aria-hidden="true">
              <img src={logo} alt="" />
            </span>
            <span>Pan African Skill Development Centre</span>
          </a>
          <p className="site-footer__slogan">Delighting in your success!</p>
        </div>

        <nav className="site-footer__navigation" aria-label="Footer navigation">
          <h2 className="site-footer__heading">Explore</h2>
          <ul>
            {footerLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>
                  {label}
                  {label === "Our team" && <ArrowUpRight size={13} aria-hidden="true" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="site-footer__contact">
          <h2 className="site-footer__heading">Contact</h2>
          <a href="mailto:panafricaskillsdevcentre@gmail.com">
            <Mail size={16} aria-hidden="true" />
            <span>panafricaskillsdevcentre@gmail.com</span>
          </a>
          <a href="tel:+254729080135">
            <Phone size={16} aria-hidden="true" />
            <span>+254 729 080 135</span>
          </a>
          <a href="tel:+254789140672">
            <Phone size={16} aria-hidden="true" />
            <span>+254 789 140 672</span>
          </a>
          <p>
            <MapPin size={16} aria-hidden="true" />
            <span>Elite House, Kikuyu, Kiambu, Kenya</span>
          </p>
        </address>
      </div>

      <div className="site-footer__bottom">
        <p>© {new Date().getFullYear()} Pan African Skill Development Centre. All rights reserved.</p>
        <p>Organization details are from the 2025 company profile.</p>
      </div>
    </footer>
  )
}

export default SiteFooter
