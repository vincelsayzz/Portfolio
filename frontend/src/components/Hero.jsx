export default function Hero({ hero }) {
  if (!hero) return null;

  return (
    <section id="home" className="hero">
      <div className="hero__grid-bg" aria-hidden="true"></div>
      <div className="hero__scanline" aria-hidden="true"></div>

      <div className="hero__layout">
        <div className="hero__content">
          <p className="hero__terminal">
            {hero.terminal_line}
            <span className="hero__cursor">_</span>
          </p>

          <h1 className="hero__name">{hero.name}</h1>
          <h2 className="hero__role">{hero.role}</h2>

          <p className="hero__intro">{hero.intro}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get In Touch
            </a>
          </div>
        </div>

        {hero.photo_url && (
          <div className="hero__photo-wrap">
            <div className="hero__photo-ring" aria-hidden="true"></div>
            <img src={hero.photo_url} alt={hero.name} className="hero__photo" />
          </div>
        )}
      </div>

      <a href="#education" className="hero__scroll-hint" aria-label="Scroll to next section">
        <span className="hero__scroll-line"></span>
      </a>
    </section>
  );
}