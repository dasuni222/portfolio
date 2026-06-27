import profileImage from "../assets/profile.jpeg";

function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero section">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-image-wrapper">
            <div className="hero-image-ring">
              <img
                src={profileImage}
                alt="Dasuni Navodya Rajapakshe"
                className="hero-image"
                width={240}
                height={240}
              />
            </div>
          </div>

          <div className="hero-content">
            <p className="hero-greeting">Hello, I&apos;m</p>
            <h1 className="hero-name">Dasuni Navodya Rajapakshe</h1>
            <p className="hero-role">Software Engineering Undergraduate</p>
            <p className="hero-intro">
              Passionate about Software Engineering, Full Stack Development and
              Modern Web Technologies. Interested in building practical software
              solutions and real-world applications.
            </p>
            <div className="hero-actions">
              <button type="button" className="btn btn-primary" onClick={scrollToProjects}>
                View Projects
              </button>
              <a href="#contact" className="btn btn-secondary" onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}>
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
