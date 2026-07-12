import { FacebookIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons.jsx";

export default function Footer({ socialLinks = {}, name }) {
  const year = new Date().getFullYear();

  const links = [
    { key: "linkedin", href: socialLinks.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    { key: "facebook", href: socialLinks.facebook, label: "Facebook", Icon: FacebookIcon },
    { key: "gmail", href: socialLinks.gmail, label: "Email", Icon: MailIcon },
    { key: "github", href: socialLinks.github, label: "GitHub", Icon: GitHubIcon },
  ].filter((link) => Boolean(link.href));

  return (
    <footer id="contact" className="footer">
      <div className="footer__inner">
        <p className="footer__prompt">Let's build something reliable together.</p>
        <p className="footer__cta">Connection established. Securely building the future.</p>

        <div className="footer__socials">
          {links.map(({ key, href, label, Icon }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="footer__social-link"
            >
              <Icon className="footer__social-icon" />
            </a>
          ))}
        </div>

        <p className="footer__copy">
          © {year} {name || "Vince Keth Maarat"}. Built with React &amp; FastAPI.
        </p>
      </div>
    </footer>
  );
}
