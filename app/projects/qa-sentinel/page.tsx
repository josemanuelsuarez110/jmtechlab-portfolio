import Link from "next/link";

export const metadata = {
  title: "QA Sentinel Platform | Case Study | JMTechLab",
  description:
    "QA Sentinel Platform case study — full-stack QA automation and SDET engineering project by José Manuel Suárez.",
};

const technologies = [
  "Next.js",
  "TypeScript",
  "Express",
  "Playwright",
  "Jest",
  "Supabase",
  "PostgreSQL",
  "Docker",
  "GitHub Actions",
  "CI/CD",
];

export default function QASentinelCaseStudy() {
  return (
    <main>
      <nav className="nav">
        <div className="container nav-content">
          <Link className="brand" href="/">
            JMTechLab<span>.</span>
          </Link>

          <Link className="secondary-button" href="/#projects">
            ← Back to Projects
          </Link>
        </div>
      </nav>

      <section className="case-hero container">
        <p className="eyebrow">CASE STUDY · SDET · QA AUTOMATION</p>

        <h1>QA Sentinel</h1>

        <p className="case-intro">
          A full-stack quality engineering platform built to demonstrate how
          automated testing, application development, test execution visibility
          and continuous delivery can operate as one engineering system.
        </p>

        <div className="hero-actions">
          <a
            className="primary-button"
            href="https://qa-sentinel-platform.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo ↗
          </a>

          <a
            className="secondary-button"
            href="https://github.com/josemanuelsuarez110/qa-sentinel-platform"
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
          <p className="section-label">THE CHALLENGE</p>

          <h2>Automation is more than writing test scripts.</h2>

          <p>
            Reliable quality engineering requires test execution, application
            architecture, data management, reporting and delivery pipelines to
            work together.
          </p>

          <p>
            QA Sentinel was developed to demonstrate that broader SDET
            perspective through a complete application rather than an isolated
            collection of automated tests.
          </p>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">02</div>

        <div className="case-content">
          <p className="section-label">THE APPROACH</p>

          <h2>Build the product and engineer its quality.</h2>

          <p>
            The project combines frontend and backend development with
            automated validation. This makes it possible to design application
            behavior while simultaneously considering how that behavior should
            be tested.
          </p>

          <p>
            Testability becomes an architectural concern rather than something
            added after development is complete.
          </p>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">03</div>

        <div className="case-content">
          <p className="section-label">TEST AUTOMATION</p>

          <h2>A layered testing strategy.</h2>

          <div className="case-grid">
            <article>
              <h3>End-to-End</h3>
              <p>
                Playwright validates critical browser workflows from the
                perspective of a real user.
              </p>
            </article>

            <article>
              <h3>Application Testing</h3>
              <p>
                Jest supports fast validation of application logic and
                individual behaviors.
              </p>
            </article>

            <article>
              <h3>API Testing</h3>
              <p>
                Service behavior can be validated independently from the
                frontend for faster defect isolation.
              </p>
            </article>

            <article>
              <h3>Regression Protection</h3>
              <p>
                Automated suites provide repeatable validation as application
                functionality evolves.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">04</div>

        <div className="case-content">
          <p className="section-label">ARCHITECTURE</p>

          <h2>Full-stack QA engineering architecture.</h2>

          <div className="architecture">
            <div>
              <span>01</span>
              <strong>Frontend</strong>
              <p>Next.js application and user workflows</p>
            </div>

            <div>
              <span>02</span>
              <strong>Backend</strong>
              <p>Express API and application services</p>
            </div>

            <div>
              <span>03</span>
              <strong>Database</strong>
              <p>Supabase and PostgreSQL persistence</p>
            </div>

            <div>
              <span>04</span>
              <strong>QA Layer</strong>
              <p>Playwright and Jest automated validation</p>
            </div>

            <div>
              <span>05</span>
              <strong>Delivery</strong>
              <p>GitHub Actions, Docker and CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">05</div>

        <div className="case-content">
          <p className="section-label">CI/CD</p>

          <h2>Quality checks belong in the delivery pipeline.</h2>

          <p>
            Automated testing becomes more valuable when execution is part of
            the software delivery process. The project is structured around the
            idea that changes should be validated continuously instead of
            relying only on manual verification before release.
          </p>

          <div className="architecture">
            <div>
              <span>01</span>
              <strong>Code Change</strong>
              <p>Developer pushes a change to the repository</p>
            </div>

            <div>
              <span>02</span>
              <strong>Build</strong>
              <p>Application dependencies and build are validated</p>
            </div>

            <div>
              <span>03</span>
              <strong>Automated Tests</strong>
              <p>Quality checks execute against expected behavior</p>
            </div>

            <div>
              <span>04</span>
              <strong>Feedback</strong>
              <p>Failures become visible before deployment</p>
            </div>

            <div>
              <span>05</span>
              <strong>Delivery</strong>
              <p>Validated changes can continue toward production</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">06</div>

        <div className="case-content">
          <p className="section-label">ENGINEERING CHALLENGES</p>

          <h2>Solving integration problems across the stack.</h2>

          <div className="case-grid">
            <article>
              <h3>Frontend / Backend Integration</h3>
              <p>
                Maintaining predictable contracts between the Next.js frontend
                and Express services.
              </p>
            </article>

            <article>
              <h3>Database Connectivity</h3>
              <p>
                Managing reliable application connectivity and environment
                configuration with Supabase and PostgreSQL.
              </p>
            </article>

            <article>
              <h3>Reliable Automation</h3>
              <p>
                Designing test workflows that provide useful feedback without
                becoming tightly coupled to implementation details.
              </p>
            </article>

            <article>
              <h3>Deployment Consistency</h3>
              <p>
                Coordinating local development, CI environments and production
                deployment behavior.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">07</div>

        <div className="case-content">
          <p className="section-label">TECH STACK</p>

          <h2>Technology used across the platform.</h2>

          <div className="technology-list">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">08</div>

        <div className="case-content">
          <p className="section-label">OUTCOME</p>

          <h2>Demonstrating the SDET mindset end to end.</h2>

          <p>
            QA Sentinel demonstrates an engineering approach where quality,
            automation and software development are interconnected. The project
            covers application architecture, test automation, data,
            infrastructure and continuous delivery instead of treating QA as a
            separate final stage.
          </p>

          <div className="hero-actions">
            <a
              className="primary-button"
              href="https://qa-sentinel-platform.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Explore Live Project ↗
            </a>

            <a
              className="secondary-button"
              href="https://github.com/josemanuelsuarez110/qa-sentinel-platform"
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
          <Link href="/#projects">← All Projects</Link>
        </div>
      </footer>
    </main>
  );
}
