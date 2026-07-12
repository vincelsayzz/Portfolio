import { useEffect, useState } from "react";
import { CertificationIcon, EducationIcon, HomeIcon, MailIcon, ProjectsIcon } from "./icons.jsx";

const LINKS = [
  { href: "#home", label: "Home", Icon: HomeIcon },
  { href: "#education", label: "Education", Icon: EducationIcon },
  { href: "#projects", label: "Projects", Icon: ProjectsIcon },
  { href: "#certifications", label: "Certifications", Icon: CertificationIcon },
  { href: "#contact", label: "Contact", Icon: MailIcon },
];

export default function Navbar({ avatarUrl, handle = "vinceslayz" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand">
          {avatarUrl && <img src={avatarUrl} alt={`${handle} avatar`} className="navbar__avatar" />}
          <span className="navbar__brand-text">{handle}</span>
          <span className="navbar__brand-cursor">_</span>
        </a>

        <nav className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {LINKS.map(({ href, label, Icon }) => (
            <a key={href} href={href} onClick={handleLinkClick} className="navbar__link" aria-label={label} data-tooltip={label}>
              <Icon className="navbar__link-icon" />
              <span className="navbar__link-label-mobile">{label}</span>
            </a>
          ))}
        </nav>

        <button
          className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}