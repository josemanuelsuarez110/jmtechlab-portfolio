export const metadata = {
  title: "QAForge AI | Case Study | JMTechLab",
  description:
    "QAForge AI case study — AI-powered QA automation platform by José Manuel Suárez.",
};

const technologies = [
  "Playwright",
  "Python",
  "FastAPI",
  "Next.js",
  "PostgreSQL",
  "Supabase",
  "Docker",
  "GitHub Actions",
  "AI",
];

export default function QAForgeCaseStudy() {
  return (
    <main>
      <nav className="nav">
        <div className="container nav-content">
          <a className="brand" href="/">
            JMTechLab<span>.</span>
          </a>

          <a className="secondary-button" href="/#projects">
            ← Back to Projects
          </a>
        </div>
      </nav>

      <section className="case-hero container">
        <p className="eyebrow">CASE STUDY · QA AUTOMATION · AI</p>

        <h1>QAForge AI</h1>

        <p className="case-intro">
          An AI-powered quality engineering platform designed to explore how
          modern automation, software testing, APIs and artificial intelligence
          can work together in a unified QA workflow.
        </p>

        <div className="hero-actions">
          <a
            className="primary-button"
            href="https://qaforge-ai-psi.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo ↗
          </a>

          <a
            className="secondary-button"
            href="https://github.com/josemanuelsuarez110/qaforge-ai"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">01</div>

        <div className="case-content">
          <p className="section-label">THE PROBLEM</p>

          <h2>Testing workflows are often fragmented.</h2>

          <p>
            Modern QA teams frequently work across separate tools for test
            execution, API validation, reporting, defect analysis and CI/CD.
            This fragmentation makes it harder to understand quality from a
            single engineering perspective.
          </p>

          <p>
            QAForge AI was created as an engineering project to investigate how
            those workflows could be brought together while incorporating
            intelligent automation.
          </p>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">02</div>

        <div className="case-content">
          <p className="section-label">THE SOLUTION</p>

          <h2>A centralized QA engineering platform.</h2>

          <p>
            QAForge AI combines a modern web interface, backend services,
            persistent data and automated testing concepts into a single
            platform.
          </p>

          <p>
            The architecture was designed to support test management,
            automation workflows, execution visibility and future AI-assisted
            quality analysis.
          </p>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">03</div>

        <div className="case-content">
          <p className="section-label">QA STRATEGY</p>

          <h2>Quality treated as an engineering system.</h2>

          <div className="case-grid">
            <article>
              <h3>E2E Automation</h3>
              <p>
                Playwright provides browser-level testing for critical user
                journeys and application behavior.
              </p>
            </article>

            <article>
              <h3>API Validation</h3>
              <p>
                Backend endpoints can be validated independently from the user
                interface, improving defect isolation.
              </p>
            </article>

            <article>
              <h3>Regression Testing</h3>
              <p>
                Automated checks are structured to protect existing behavior as
                the platform evolves.
              </p>
            </article>

            <article>
              <h3>CI/CD</h3>
              <p>
                Automated validation can be integrated into the delivery
                pipeline to provide faster feedback.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">04</div>

        <div className="case-content">
          <p className="section-label">ARCHITECTURE</p>

          <h2>Full-stack architecture built for experimentation.</h2>

          <div className="architecture">
            <div>
              <span>01</span>
              <strong>Frontend</strong>
              <p>Next.js interface and QA workflows</p>
            </div>

            <div>
              <span>02</span>
              <strong>API</strong>
              <p>FastAPI backend services</p>
            </div>

            <div>
              <span>03</span>
              <strong>Data</strong>
              <p>PostgreSQL / Supabase persistence</p>
            </div>

            <div>
              <span>04</span>
              <strong>Automation</strong>
              <p>Playwright and automated validation</p>
            </div>

            <div>
              <span>05</span>
              <strong>Delivery</strong>
              <p>GitHub-based CI/CD workflow</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">05</div>

        <div className="case-content">
          <p className="section-label">TECHNOLOGY</p>

          <h2>Technology stack.</h2>

          <div className="technology-list">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">06</div>

        <div className="case-content">
          <p className="section-label">ENGINEERING CHALLENGES</p>

          <h2>Building beyond a simple demo.</h2>

          <div className="case-grid">
            <article>
              <h3>Full-stack integration</h3>
              <p>
                Coordinating frontend, API and database layers while keeping
                clear boundaries between components.
              </p>
            </article>

            <article>
              <h3>Testability</h3>
              <p>
                Designing application behavior so that critical workflows can
                be validated automatically.
              </p>
            </article>

            <article>
              <h3>Environment consistency</h3>
              <p>
                Managing local development, dependencies and production
                deployment across different environments.
              </p>
            </article>

            <article>
              <h3>Continuous improvement</h3>
              <p>
                Structuring the platform so additional testing and AI
                capabilities can be incorporated incrementally.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">07</div>

        <div className="case-content">
          <p className="section-label">RESULT</p>

          <h2>A portfolio project demonstrating end-to-end QA engineering.</h2>

          <p>
            QAForge AI demonstrates the ability to approach quality from more
            than the perspective of individual test scripts. It combines
            software architecture, automation, backend development, data,
            deployment and quality engineering into one technical project.
          </p>

          <div className="hero-actions">
            <a
              className="primary-button"
              href="https://qaforge-ai-psi.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Explore Live Project ↗
            </a>

            <a
              className="secondary-button"
              href="https://github.com/josemanuelsuarez110/qaforge-ai"
              target="_blank"
              rel="noreferrer"
            >
              View Source ↗
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-content">
          <span>JMTechLab.do</span>
          <a href="/#projects">← All Projects</a>
        </div>
      </footer>
    </main>
  );
}
