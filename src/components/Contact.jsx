const CONTACT_LINKS = [
  {
    label: "Email",
    value: "dasunirajapaksha2002@gmail.com",
    href: "mailto:dasunirajapaksha2002@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/dasuni222",
    href: "https://github.com/dasuni222",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dasuni-navodya-194831336",
    href: "https://linkedin.com/in/dasuni-navodya-194831336",
  },
];

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider section-divider--center" />
        </div>

        <p className="contact-intro">
          Feel free to reach out for collaborations, internship opportunities,
          or professional inquiries.
        </p>

        <ul className="contact-list">
          {CONTACT_LINKS.map(({ label, value, href }) => (
            <li key={label} className="card contact-item">
              <span className="contact-label">{label}</span>
              <a
                href={href}
                className="contact-link"
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noopener noreferrer"}
              >
                {value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
