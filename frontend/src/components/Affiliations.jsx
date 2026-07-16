import FadeInSection from "./FadeInSection.jsx";

export default function Affiliations({ affiliations = [] }) {
  if (!affiliations.length) return null;

  return (
    <section id="affiliations" className="section">
      <FadeInSection>
        <p className="section__eyebrow">~$ cat affiliations.log</p>
        <h2 className="section__title">Leadership &amp; Affiliations</h2>
        <p className="section__subtitle">
          Add a new role by adding one object to <code>AFFILIATIONS</code> in{" "}
          <code>backend/data.py</code> - this timeline renders automatically.
        </p>
      </FadeInSection>

      <div className="timeline">
        {affiliations.map((item, index) => (
          <FadeInSection key={item.id} delay={index * 80} className="timeline__item">
            <div className="timeline__marker">
              <span className="timeline__dot"></span>
              {index < affiliations.length - 1 && <span className="timeline__line"></span>}
            </div>

            <div className="affiliation-card">
              {item.photo_url && (
                <div className="affiliation-card__photo-wrap">
                  <img
                    src={item.photo_url}
                    alt={`${item.position} photo`}
                    className="affiliation-card__photo"
                  />
                </div>
              )}

              <div className="affiliation-card__body">
                <div className="affiliation-card__header">
                  <div>
                    <h3 className="timeline__institution">{item.position}</h3>
                    <p className="timeline__credential">{item.organization}</p>
                  </div>
                  <span className="pill pill--status">{item.year_level}</span>
                </div>

                <p className="timeline__period">{item.term}</p>
                <p className="timeline__description">{item.description}</p>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}