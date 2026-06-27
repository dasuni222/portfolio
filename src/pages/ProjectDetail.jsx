import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getProjectBySlug } from "../data/projects";

function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar />
      <main className="project-detail section">
        <div className="container project-detail-inner">
          <Link to="/" className="btn btn-back">
            ← Back to Portfolio
          </Link>

          <article className="project-detail-card">
            <header className="project-detail-header">
              <span className="section-label">Project</span>
              <h1 className="project-detail-title">{project.title}</h1>
              {project.subtitle && (
                <p className="project-detail-subtitle">{project.subtitle}</p>
              )}
              <p className="project-detail-description">{project.description}</p>

              <div className="project-detail-meta">
                {project.role && (
                  <p>
                    <span className="project-meta-label">Role:</span> {project.role}
                  </p>
                )}
                {project.duration && (
                  <p>
                    <span className="project-meta-label">Duration:</span>{" "}
                    {project.duration}
                  </p>
                )}
              </div>

              <ul className="project-tech project-detail-tech">
                {project.tech.map((item) => (
                  <li key={item}>
                    <span className="badge">{item}</span>
                  </li>
                ))}
              </ul>
            </header>

            <div className="project-detail-body">
              {project.sections.map((section) => (
                <section key={section.heading} className="project-detail-section">
                  <h2>{section.heading}</h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                  {section.list && (
                    <ul className="project-detail-list">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProjectDetail;
