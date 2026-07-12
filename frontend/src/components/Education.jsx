import FadeInSection from "./FadeInSection.jsx";

export default function Education({ education = [] }) {
  return (
    <section id="education" className="section">
      <FadeInSection>
        <p className="section__eyebrow">~$ cat education.log</p>
        <h2 className="section__title">Education</h2>
        <p className="section__subtitle">
          <p className="text-gray-400 text-lg">
            Degree completed? Fetch a <code className="bg-gray-800 text-cyan-400 px-2 py-1 rounded">MASTER'S</code> for your <code className="bg-gray-800 text-cyan-400 px-2 py-1 rounded">Resume.</code> go study now you idiot.
          </p> 
        </p>
      </FadeInSection>

      <div className="timeline">
        {education.map((item, index) => (
          <FadeInSection key={item.id} delay={index * 80} className="timeline__item">
            <div className="timeline__marker">
              <span className="timeline__dot"></span>
              {index < education.length - 1 && <span className="timeline__line"></span>}
            </div>

           <div className="timeline__card">
              <div className="timeline__card-header">
                  <div className="timeline__header-main">
                    {item.logo_url && (
                      <div className="timeline__logo-wrap">
                        <img
                          src={item.logo_url}
                          alt={`${item.institution} logo`}
                          className="timeline__logo"
                        />
                      </div>
                    )}
                  <h3 className="timeline__institution">{item.institution}</h3>
                </div>
                <span className="pill pill--status">{item.status}</span>
              </div>

              <p className="timeline__credential">{item.credential}</p>
              <p className="timeline__period">{item.period}</p>
              <p className="timeline__description">{item.description}</p>

              {item.highlights?.length > 0 && (
                <ul className="timeline__highlights">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="pill pill--tag">
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
