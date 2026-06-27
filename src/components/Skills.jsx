const SKILLS = [
  "Java",
  "Python",
  "React.js",
  "Next.js",
  "Node.js",
  "JavaScript",
  "MySQL",
  "Firebase",
  "Git & GitHub",
];

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technologies</h2>
          <div className="section-divider section-divider--center" />
        </div>

        <ul className="skills-grid">
          {SKILLS.map((skill) => (
            <li key={skill}>
              <span className="badge">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
