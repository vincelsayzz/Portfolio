import FadeInSection from "./FadeInSection.jsx";
import { ExternalLinkIcon, GitHubIcon, GoogleDriveIcon, FigmaIcon } from "./icons.jsx";

export default function Projects({ projects = [] }) {
  return (
    <section id="projects" className="section">
      <FadeInSection>
        <p className="section__eyebrow">~$ ls ./projects --grid</p>
        <h2 className="section__title">Projects</h2>
        <p className="section__subtitle">
          <p className="text-gray-400 text-lg">
               Built something? Add one <code className="bg-gray-800 text-cyan-400 px-2 py-1 rounded">PROJECT</code> to your <code className="bg-gray-800 text-cyan-400 px-2 py-1 rounded">Portfolio.</code> deploy now you idiot.
              </p>
        </p> 
      </FadeInSection>

      <div className="card-grid">
        {/*
          This is the mapping the whole site is built around: every project
          in the backend payload becomes one card, in order, with zero extra
          wiring. Add/remove/reorder projects in data.py and this updates.
        */}
        {projects.map((project, index) => (
          <FadeInSection key={project.id} delay={index * 90} className="card">
            <div className="card__image-wrap">
              <img
                src={project.image_url}
                alt={`${project.title} preview`}
                className="card__image"
                loading="lazy"
              />
              <div className="card__image-glow" aria-hidden="true"></div>
            </div>

            <div className="card__body">
              <h3 className="card__title">{project.title}</h3>
              <p className="card__description">{project.description}</p>

              {project.tags?.length > 0 && (
                <ul className="card__tags">
                  {project.tags.map((tag) => (
                    <li key={tag} className="pill pill--tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              )}

              {(project.github_url || project.live_url || project.drive_url || project.figma_url) && (
                <div className="card__links">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noreferrer"
                      className="card__link"
                    >
                      <GitHubIcon className="card__link-icon" /> Code
                    </a>
                  )}
                  {project.live_url && (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noreferrer"
                      className="card__link"
                    >
                      <ExternalLinkIcon className="card__link-icon" /> Live
                    </a>
                  )}
                  {project.drive_url && (
                  <a
                      href={project.drive_url}
                      target="_blank"
                      rel="noreferrer"
                      className="card__link"
                    >  
                      <GoogleDriveIcon className="card__link-icon" /> Drive
                    </a>
                  )}
                  {project.figma_url && (
                    <a
                      href={project.figma_url}
                      target="_blank"
                      rel="noreferrer"
                      className="card__link"
                    >
                      <FigmaIcon className="card__link-icon" /> Figma
                    </a>
                  )}
                </div>
              )}
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
