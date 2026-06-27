import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Selected Work</h2>
          <div className="section-divider section-divider--center" />
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article key={project.slug} className="card project-card">
              <div className="project-card-top">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              {project.role && (
                <p className="project-meta">
                  <span className="project-meta-label">Role:</span> {project.role}
                </p>
              )}

              {project.duration && (
                <p className="project-meta">
                  <span className="project-meta-label">Duration:</span>{" "}
                  {project.duration}
                </p>
              )}

              <ul className="project-tech">
                {project.tech.map((item) => (
                  <li key={item}>
                    <span className="badge">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={`/project/${project.slug}`}
                className="btn btn-card"
              >
                View Details
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
