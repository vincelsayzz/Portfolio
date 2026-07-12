import FadeInSection from "./FadeInSection.jsx";
import { ExternalLinkIcon } from "./icons.jsx";

export default function Certifications({ certifications = [] }) {
  return (
    <section id="certifications" className="section">
      <FadeInSection>
        <p className="section__eyebrow">~$ cat certifications.json</p>
        <h2 className="section__title">Certifications</h2>
        <p className="section__subtitle">
          New Learnings? Add one <code>CERTIFICATIONS</code> in your{" "}
          <code>Resume.</code> move now you <code>idiot</code>.
        </p>
      </FadeInSection>

      <div className="card-grid card-grid--certs">
        {certifications.map((cert, index) => (
          <FadeInSection key={cert.id} delay={index * 90} className="card card--cert">
            <div className="card__image-wrap card__image-wrap--badge">
              <img
                src={cert.image_url}
                alt={`${cert.title} certificate`}
                className="card__image"
                loading="lazy"
              />
              <div className="card__image-glow" aria-hidden="true"></div>
            </div>

            <div className="card__body">
              <h3 className="card__title">{cert.title}</h3>
              {cert.issuer && <p className="card__issuer">{cert.issuer}</p>}
              <p className="card__description">{cert.description}</p>

              <div className="card__meta">
                {cert.date && <span className="pill pill--tag">{cert.date}</span>}
                {cert.credential_url && (
                  <a
                    href={cert.credential_url}
                    target="_blank"
                    rel="noreferrer"
                    className="card__link"
                  >
                    <ExternalLinkIcon className="card__link-icon" /> Verify
                  </a>
                )}
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
