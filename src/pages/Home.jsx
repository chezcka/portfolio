import { useState } from "react";
import "../styles/Home.css";

export default function Home() {
  const [openTechnical, setOpenTechnical] = useState(false);
  const [openSoft, setOpenSoft] = useState(false);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="home-page">
        <div className="home-container">
          {/* LEFT: IMAGE */}
          <div className="home-image">
            <img
              src="/photos/chez-pic-2.png"
              alt="Chez Pascual"
            />
          </div>

          {/* RIGHT: TEXT */}
          <div className="home-content">
            <h1>
              Hi, I’m <span>Chez</span>
            </h1>
            <p className="subtitle">Web and App Developer</p>
            <p className="description">
              I design and develop scalable, responsive web applications
              with a strong focus on performance, accessibility, and user experience.
              I specialize in translating business requirements into reliable,
              maintainable, and modern web solutions.
            </p>
            {/* Resume Button */}
            <a
                href="/resume/Pascual - CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
            >
                View Resume
            </a>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
        <section className="skills-page">
        <div className="skills-container">
            {/* Technical Skills */}
            <div className="skills-section">
            <button
                className="dropdown-header"
                onClick={() => setOpenTechnical(!openTechnical)}
            >
                <span className="dropdown-title-text">Technical Skills</span>
                <svg
                    className={`arrow ${openTechnical ? "open" : ""}`}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {openTechnical && (
                <div className="dropdown-content">
                <div className="skills-grid">
                    <div className="skill-card">HTML5</div>
                    <div className="skill-card">CSS3</div>
                    <div className="skill-card">JavaScript</div>
                    <div className="skill-card">React</div>
                    <div className="skill-card">Angular</div>
                    <div className="skill-card">Vue</div>
                    <div className="skill-card">PHP</div>
                    <div className="skill-card">SQL</div>
                    <div className="skill-card">Java</div>
                    <div className="skill-card">Figma</div>
                    <div className="skill-card">UX/UI Design</div>
                </div>
                </div>
            )}
            </div>

            {/* Soft Skills */}
            <div className="skills-section">
            <button
                className="dropdown-header"
                onClick={() => setOpenSoft(!openSoft)}
            >
                <span className="dropdown-title-text">Soft Skills</span>
                <svg
                    className={`arrow ${openSoft ? "open" : ""}`}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {openSoft && (
                <div className="dropdown-content">
                <div className="skills-grid">
                    <div className="skill-card">Problem Solving</div>
                    <div className="skill-card">Communication</div>
                    <div className="skill-card">Adaptability</div>
                    <div className="skill-card">Time Management</div>
                    <div className="skill-card">Collaboration</div>
                    <div className="skill-card">Creativity</div>
                    <div className="skill-card">Critical Thinking</div>
                    <div className="skill-card">Leadership</div>
                </div>
                </div>
            )}
            </div>
        </div>
        </section>

        {/* ===== WORK EXPERIENCE SECTION ===== */}
        <section className="experience-page">
        <div className="experience-container">
            <h2 className="experience-title">Work Experience</h2>

            <div className="experience-list">
            {/* Experience Item 1 */}
            <div className="experience-card">
                <div className="experience-header">
                <h3>Junior Web Developer</h3>
                <span className="company">
                    Erovoutika Robotics and Automation Solutions
                </span>
                <span className="date">April 2024 – July 2024</span>
                </div>

                <ul className="experience-points">
                <li>
                    Designed and implemented responsive, user-friendly web pages using
                    HTML, CSS, and JavaScript across multiple devices.
                </li>
                <li>
                    Collaborated with the design team to translate UI/UX wireframes into
                    functional and visually accurate web interfaces.
                </li>
                <li>
                    Integrated JavaScript for interactivity, including form validation
                    and dynamic content updates.
                </li>
                <li>
                    Worked closely with backend developers to ensure seamless frontend
                    integration.
                </li>
                <li>
                    Participated in code reviews and maintained clear communication to
                    resolve issues efficiently.
                </li>
                </ul>
            </div>

            {/* Experience Item 2 */}
            <div className="experience-card">
                <div className="experience-header">
                <h3>Junior Programmer</h3>
                <span className="company">
                    Scottland Food Group Corporation
                </span>
                <span className="date">November 2025 – Present</span>
                </div>

                <ul className="experience-points">
                <li>
                    Design, develop, and maintain scalable web and mobile applications with a focus on performance, stability, and user experience.
                </li>
                <li>
                    Develop high-quality, component-based user interfaces using modern JavaScript frameworks, improving efficiency and UX consistency.
                </li>
                <li>
                    Collaborate with designers, project managers, and other developers to align software solutions with business goals, occasionally providing technical recommendations and guidance.
                </li>
                <li>
                    Maintain technical documentation for developed applications to ensure clarity for future development and maintenance.
                </li>
                </ul>
            </div>
            </div>
        </div>
        </section>

        {/* ===== CONTACT SECTION ===== */}
        <section id="contact" className="contact-page">
        <div className="contact-container">
            <div className="contact-card">
            <h2 className="contact-subtitle">
                Let’s work together or talk about your next project.
            </h2>

            <form
                className="contact-form"
                action="https://formspree.io/f/mdkljdyj"
                method="POST"
            >
                <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                />
                </div>

                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="_replyto"
                    placeholder="Your email"
                    required
                />
                </div>

                <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project..."
                    required
                />
                </div>

                <button type="submit" className="contact-btn">
                Send Message
                </button>
            </form>
            </div>
        </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
        <p>&copy; 2025 Franchezcka. All Rights Reserved.</p>
        </footer>
    </>
  );
}
