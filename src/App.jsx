import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

const skills = [
  "Python", "SQL", "JavaScript", "FastAPI", "Django",
  "React", "REST APIs", "SQLAlchemy", "MySQL",
  "PostgreSQL", "MongoDB", "TensorFlow", "Keras",
  "PyTorch", "OpenCV", "Pandas", "NumPy", "Git & GitHub",
];

const projects = [
  {
    title: "AI Chatbot",
    subtitle: "Full-Stack Conversational AI Web App",
    period: "AUG 2026 — SEP 2026",
    description:
      "Built a ChatGPT-style chatbot with FastAPI, SQLAlchemy and JavaScript, integrating Google Gemini API for multi-turn conversations. Implemented conversation management, image and PDF uploads, persistent chat history, and error handling.",
    technologies: ["FastAPI", "SQLAlchemy", "SQLite", "JavaScript", "Gemini API"],
    github: "https://github.com/VinayRoyal001/AI-Chatbot",
  },
  {
    title: "Automated Fruit Identification",
    subtitle: "CNN Image Classification",
    period: "JAN 2026 — JUN 2026",
    description:
      "Developed a fruit classification system using ResNet50V2 and transfer learning, achieving 84% Top-1 accuracy across 113 fruit categories. Built an image-processing pipeline and optimized inference using model quantization.",
    technologies: ["Python", "TensorFlow", "ResNet50V2", "OpenCV", "TensorFlow Lite"],
    github:
      "https://github.com/VinayRoyal001/Automated-Fruit-Identification-CNN",
  },
  {
    title: "Data Analytics Projects",
    subtitle: "Customer Segmentation & House Price Prediction",
    period: "JUL 2026 — AUG 2026",
    description:
      "During my Oasis Infobyte internship, performed RFM-based customer segmentation using K-Means and developed machine learning pipelines to predict house prices. Evaluated models and documented results using data visualizations.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    github: "https://github.com/VinayRoyal001/OIBSIP",
  },
];

const certifications = [
  {
    name: "The Complete Python Bootcamp From Zero to Hero in Python",
    issuer: "Udemy",
    year: "October 2026",
  },
  {
    name: "Introduction to Machine Learning: Art of the Possible",
    issuer: "AWS Training & Certification",
    year: "May 2026",
  },
  {
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte via Forage",
    year: "July 2026",
  },
  {
    name: "Data Analytics Internship Certificate",
    issuer: "Oasis Infobyte",
    year: "2026",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home" onClick={closeMenu}>
          ANNADANAM VINAY<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Skills", "Projects", "Experience",
            "Education", "Certifications", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot" />
              SOFTWARE DEVELOPER · B.TECH 2026
            </p>

            <h1>
              Hi, I'm <span>ANNADANAM VINAY</span>
              <br />
              Python Developer
            </h1>

            <p className="hero-description">
              B.Tech graduate in Artificial Intelligence & Machine Learning,
              passionate about Python development, full-stack applications,
              AI integration, and building practical software solutions.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Projects ↗
              </a>
              <a className="button button-secondary" href="#contact">
                Get In Touch
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/VinayRoyal001"
                 target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href="https://linkedin.com/in/annadanam-vinay-5012b332a"
                 target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href="mailto:annadanamvinay@gmail.com">
                Email ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="profile-card">
              <div className="profile-icon">&lt;/&gt;</div>
              <p className="profile-label">DEVELOPER PROFILE</p>
              <h2>Learn. Build. Improve.</h2>
              <p className="profile-caption">
                Turning ideas into working applications.
              </p>
              <div className="code-lines">
                <span><i>const</i> developer = "ANNADANAM VINAY";</span>
                <span><i>const</i> focus = "Python & AI";</span>
                <span className="code-success">buildProjects();</span>
              </div>
            </div>
            <div className="floating-tag tag-top">Python</div>
            <div className="floating-tag tag-bottom">AI + Web</div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">GET TO KNOW ME</p>
            <h2>About <span>Me</span></h2>
          </div>
          <div className="about-card">
            <p>
              I'm Annadanam Vinay, an entry-level software developer with a
              B.Tech background in Artificial Intelligence and Machine
              Learning. My interests include Python development, backend
              engineering, APIs, databases, and AI-powered applications.
            </p>
            <p>
              I have built a full-stack conversational AI chatbot and a
              CNN-based fruit identification system. During my Data Analytics
              internship at Oasis Infobyte, I worked on customer segmentation
              and house price prediction projects.
            </p>
            <p>
              I'm looking for opportunities where I can contribute to software
              development, strengthen my engineering skills, and build
              maintainable applications with a collaborative team.
            </p>
            <a className="text-link" href="#experience">
              Explore my experience ↗
            </a>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">MY TECH STACK</p>
            <h2>Technical <span>Skills</span></h2>
            <p className="section-description">
              Technologies and concepts listed in my resume.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{skill}</h3>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Featured <span>Projects</span></h2>
            <p className="section-description">
              Practical work in full-stack development, AI, and data analytics.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span className="project-index">
                    PROJECT / 0{index + 1}
                  </span>
                  <span className="project-symbol">&lt;/&gt;</span>
                </div>
                <p className="project-category">{project.period}</p>
                <h3>{project.title}</h3>
                <p className="project-category">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                <div className="tech-list">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <a
                  className="text-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source Code ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">PROFESSIONAL EXPERIENCE</p>
            <h2>Internship <span>Experience</span></h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot" />
              <p className="timeline-date">JULY 2026 — AUGUST 2026</p>
              <h3>Data Analytics Intern</h3>
              <p><strong>Oasis Infobyte · Remote</strong></p>
              <p>
                Segmented 1,454 e-commerce customers into four groups using
                RFM analysis and K-Means clustering. Also developed reusable
                machine learning pipelines for house price prediction using
                2,000 records, comparing Linear, Ridge, and Lasso models.
              </p>
              <a
                className="text-link"
                href="https://github.com/VinayRoyal001/OIBSIP"
                target="_blank"
                rel="noreferrer"
              >
                View Internship Projects ↗
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading">
            <p className="eyebrow">ACADEMIC BACKGROUND</p>
            <h2>My <span>Education</span></h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot" />
              <p className="timeline-date">2022 — 2026</p>
              <h3>Bachelor of Technology</h3>
              <p>Artificial Intelligence & Machine Learning</p>
              <p>Annamacharya Institute of Technology & Sciences, Tirupati</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <p className="timeline-date">2020 — 2022</p>
              <h3>Intermediate · Class XII</h3>
              <p>Sri Chaitanya Junior College, Kadapa</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <p className="timeline-date">2014 — 2020</p>
              <h3>Secondary School · Class X</h3>
              <p>SVR High School, Kadapa</p>
            </div>
          </div>
        </section>

        <section className="section" id="certifications">
          <div className="section-heading">
            <p className="eyebrow">CONTINUOUS LEARNING</p>
            <h2>Certifications <span>& Training</span></h2>
          </div>
          <div className="projects-grid">
            {certifications.map((cert) => (
              <article className="project-card" key={cert.name}>
                <div className="project-top">
                  <span className="project-index">CERTIFICATION</span>
                  <span className="project-symbol">↗</span>
                </div>
                <h3>{cert.name}</h3>
                <p className="project-description">{cert.issuer}</p>
                <p className="timeline-date">{cert.year}</p>
              </article>
            ))}
          </div>
        </section>

        
        <section className="section resume-section" id="resume">
          <div>
            <p className="eyebrow">MY RESUME</p>
            <h2>Let's build something <span>meaningful.</span></h2>
            <p>
            Interested in my background? Contact me about Python Developer
            or Associate Software Engineer opportunities.
            </p>
          </div>

          <div className="resume-buttons">
            <a className="button button-primary" href="/Vinay_Resume.pdf" download="Annadanam_Vinay_Resume.pdf">
            Download Resume ↓
            </a>

            <a className="button" href="#contact">
            Contact Me ↗
            </a>
          </div>
        </section>


        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>Let's start a <span>conversation.</span></h2>
            <p className="section-description">
              Feel free to reach out about job opportunities or collaboration.
            </p>
          </div>

          <div className="contact-card">
            <div>
              <h3>ANNADANAM VINAY</h3>
              <p>Bengaluru, Karnataka</p>
              <p>annadanamvinay@gmail.com</p>
              <p>+91 9346000452</p>
              <a 
                className="button button-secondary"
                href="https://linkedin.com/in/annadanam-vinay-5012b332a"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
            </a>
          </div>

          <form
            className="contact-form"
            onSubmit={async (event) => {
              event.preventDefault();

              const form = event.currentTarget;
              const data = new FormData(form);

              try {
                await emailjs.send(
                  "service_88s276c",
                  "template_cmjn6il",
                  {
              from_name: data.get("from_name"),
              reply_to: data.get("reply_to"),
              message: data.get("message"),
            },
            "2XpzHz8fvuzUMWv07"
          );

          alert("Message sent successfully!");
          form.reset();
        } catch (error) {
          console.error("EmailJS error:", error);
          alert("Message could not be sent. Please check your EmailJS template settings.");
        }
      }}
    >
      <label htmlFor="from_name">Your Name</label>
      <input
        id="from_name"
        name="from_name"
        type="text"
        placeholder="Enter your name"
        required
      />

      <label htmlFor="reply_to">Your Email</label>
      <input
        id="reply_to"
        name="reply_to"
        type="email"
        placeholder="Enter your email"
        required
      />

      <label htmlFor="message">Your Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Write your message..."
        rows="5"
        required
      />

      <button className="button button-primary" type="submit">
        Send Message ↗
      </button>
    </form>
  </div>
</section>

      </main>

      <footer className="footer">
        <a className="logo" href="#home">ANNADANAM VINAY<span>.</span></a>
        <p>Built with React · © {new Date().getFullYear()} ANNADANAM VINAY</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
