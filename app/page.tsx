const projects = [
  {
    title: "QAForge AI",
    description:
      "AI-powered QA automation platform for designing, executing and analyzing software tests.",
    stack: ["Playwright", "FastAPI", "Supabase", "AI"],
    type: "QA Automation · AI",
    demo: "https://qaforge-ai-psi.vercel.app",
    github: "https://github.com/josemanuelsuarez110/qaforge-ai",
  },
  {
    title: "QA Sentinel",
    description:
      "Full-stack quality engineering platform focused on automated testing, CI/CD and execution visibility.",
    stack: ["Next.js", "Express", "Playwright", "Jest"],
    type: "SDET · Automation",
    demo: "https://qa-sentinel-platform.vercel.app",
    github: "https://github.com/josemanuelsuarez110/qa-sentinel-platform",
  },
  {
    title: "SentinelX",
    description:
      "Security-focused dashboard for monitoring events, anomalies and technical risk indicators.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Security"],
    type: "Cybersecurity · Engineering",
    demo: "https://sentinelx-security-dashboard.vercel.app",
    github: "",
  },
];

const expertise = [
  {
    title: "QA Automation",
    items: ["Playwright", "Jest", "API Testing", "E2E Testing", "CI/CD"],
  },
  {
    title: "Software Engineering",
    items: ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Artificial Intelligence",
    items: ["LLMs", "AI Agents", "Automation", "AI-assisted QA"],
  },
  {
    title: "Security",
    items: ["Linux", "OWASP", "DevSecOps", "Security Monitoring"],
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="container nav-content">
          <a className="brand" href="#home">
            JMTechLab<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#expertise">Expertise</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            className="nav-button"
            href="/Jose-Manuel-Suarez-CV-English.pdf"
            download
          >
            Download CV
          </a>
        </div>
      </nav>

      <section className="hero container" id="home">
        <div className="eyebrow">BUILD · TEST · SECURE · AUTOMATE</div>

        <h1>José Manuel Suárez</h1>

        <h2>
          QA Automation Engineer
          <span> / Software Engineer</span>
        </h2>

        <p className="hero-description">
          I build reliable software, automated testing systems and intelligent
          engineering solutions with a strong focus on quality, scalability and
          continuous delivery.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#projects">
            View Projects
          </a>

          <a
            className="secondary-button"
            href="https://github.com/josemanuelsuarez110"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <div className="hero-meta">
          <span>QA Automation</span>
          <span>Playwright</span>
          <span>Next.js</span>
          <span>Python</span>
          <span>AI</span>
        </div>
      </section>

      <section className="section container" id="projects">
        <div className="section-heading">
          <span>01</span>
          <div>
            <p className="section-label">SELECTED ENGINEERING WORK</p>
            <h3>Projects built to solve real technical problems.</h3>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-type">{project.type}</p>
              <h4>{project.title}</h4>
              <p className="project-description">{project.description}</p>

              <div className="stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo ↗
                </a>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}

                <a
                  href={
                    project.title === "QAForge AI"
                      ? "/projects/qaforge-ai"
                      : project.title === "QA Sentinel"
                      ? "/projects/qa-sentinel"
                      : "#"
                  }
                >
                  Case Study →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container" id="expertise">
        <div className="section-heading">
          <span>02</span>
          <div>
            <p className="section-label">ENGINEERING EXPERTISE</p>
            <h3>Quality engineering first. Software engineering behind it.</h3>
          </div>
        </div>

        <div className="expertise-grid">
          {expertise.map((area) => (
            <div className="expertise-card" key={area.title}>
              <h4>{area.title}</h4>
              <ul>
                {area.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section container" id="about">
        <div className="section-heading">
          <span>03</span>
          <div>
            <p className="section-label">ABOUT</p>
            <h3>Engineering systems that are testable, maintainable and reliable.</h3>
          </div>
        </div>

        <div className="about-grid">
          <p>
            I am a Systems Engineer focused on QA Automation and software
            engineering. My work combines automated testing, backend and
            frontend development, CI/CD, databases, artificial intelligence and
            security practices.
          </p>

          <p>
            I approach quality as an engineering discipline: preventing defects,
            improving feedback loops and creating systems that make software
            easier to validate and maintain.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <span>04</span>
          <div>
            <p className="section-label">TECHNOLOGY STACK</p>
            <h3>Tools I use to build and validate software.</h3>
          </div>
        </div>

        <div className="technology-list">
          {[
            "Playwright",
            "Jest",
            "TypeScript",
            "Next.js",
            "React",
            "Python",
            "FastAPI",
            "PostgreSQL",
            "Supabase",
            "Docker",
            "GitHub Actions",
            "Linux",
          ].map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>


      <section className="section container" id="experience">
        <div className="section-heading">
          <span>05</span>
          <div>
            <p className="section-label">PROFESSIONAL EXPERIENCE</p>
            <h3>Technology, operations and financial management experience.</h3>
          </div>
        </div>

        <div className="experience-list">
          <article className="experience-item">
            <div>
              <p className="experience-date">2020 — 2025</p>
              <h4>Treasurer · Local Government</h4>
            </div>
            <p>
              Managed treasury operations, budgets, financial controls,
              institutional reporting, compliance support and audit readiness.
            </p>
          </article>

          <article className="experience-item">
            <div>
              <p className="experience-date">2009 — 2019</p>
              <h4>Information Systems & Administrative Officer</h4>
            </div>
            <p>
              Supported institutional databases, digital records, technical
              operations, reporting and information-management processes.
            </p>
          </article>

          <article className="experience-item">
            <div>
              <p className="experience-date">2003 — 2008</p>
              <h4>Administrative Manager · P&amp;B Company</h4>
            </div>
            <p>
              Oversaw administrative operations, documentation, internal
              reporting, financial tracking and business controls.
            </p>
          </article>
        </div>
      </section>

      <section className="section container" id="certifications">
        <div className="section-heading">
          <span>06</span>
          <div>
            <p className="section-label">CERTIFICATIONS & TRAINING</p>
            <h3>Continuous training in security, quality and technology.</h3>
          </div>
        </div>

        <div className="certifications-grid">
          <article className="certification-card featured-cert">
            <p className="project-type">CYBERSECURITY · 80 HOURS</p>
            <h4>Cybersecurity — Advanced Level</h4>
            <p>
              INDOTEL · Inter-American Development Bank (IDB) · Cymetria Group SAS
            </p>
            <span>Issued August 2026</span>
          </article>

          <article className="certification-card featured-cert">
            <p className="project-type">CYBERSECURITY · 80 HOURS</p>
            <h4>Cybersecurity — Intermediate Level</h4>
            <p>
              INDOTEL · Inter-American Development Bank (IDB) · Cymetria Group SAS
            </p>
            <span>Issued April 2026</span>
          </article>

          <article className="certification-card">
            <h4>Additional Training</h4>
            <p>
              ISO 27001 · Ethical Hacking · Cisco Cybersecurity · AI Fundamentals
              · Linux · Quality and technology training.
            </p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-content">
          <p className="section-label">AVAILABLE FOR REMOTE OPPORTUNITIES</p>

          <h3>Let&apos;s build reliable software.</h3>

          <p>
            Interested in QA Automation, SDET, software engineering and
            technology projects.
          </p>

          <div className="hero-actions">
            <a
              className="primary-button"
              href="https://github.com/josemanuelsuarez110"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              className="secondary-button"
              href="mailto:josemanuesuarez110@gmail.com"
            >
              Contact Me
            </a>

            <a
              className="secondary-button"
              href="https://linkedin.com/in/josemanuelsuarez110"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-content">
          <span>JMTechLab.do</span>
          <span>Engineering · QA · Automation · AI</span>
        </div>
      </footer>
    </main>
  );
}
