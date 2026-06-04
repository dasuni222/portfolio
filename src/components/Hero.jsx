import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <section className="hero">
      <img src={profile} alt="Dasuni" />

      <h1>Dasuni Navodya Rajapakshe</h1>

      <h3>Software Engineering Undergraduate</h3>

      <p>
        Passionate about Software Engineering,
        Full Stack Development and Modern Web Technologies.
      </p>

      <a href="#projects">
        <button>View Projects</button>
      </a>
    </section>
  );
}

export default Hero;