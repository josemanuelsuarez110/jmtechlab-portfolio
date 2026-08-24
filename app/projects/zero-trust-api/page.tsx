export const metadata = {
  title: "Zero Trust API Financiera | Case Study | JMTechLab",
  description:
    "Security-focused financial API case study by José Manuel Suárez.",
};

const technologies = [
  "API Security",
  "Zero Trust",
  "Authentication",
  "Authorization",
  "PostgreSQL",
  "Supabase",
  "TypeScript",
  "Next.js",
  "Vercel",
];

export default function ZeroTrustCaseStudy() {
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
        <p className="eyebrow">CASE STUDY · API SECURITY · ZERO TRUST</p>

        <h1>Zero Trust API</h1>

        <p className="case-intro">
          A security-oriented financial API project designed to demonstrate
          identity-based access control, secure application architecture and
          defensive engineering principles.
        </p>

        <div className="hero-actions">
          <a
            className="primary-button"
            href="https://zero-trust-api-financiera.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo ↗
          </a>

          <a
            className="secondary-button"
            href="https://github.com/josemanuelsuarez110/zero-trust-api-financiera"
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
          <h2>Financial APIs require stronger trust boundaries.</h2>
          <p>
            Traditional perimeter-based security models assume that internal
            traffic can be trusted. Modern distributed applications require a
            stricter model where every request is evaluated based on identity,
            permissions and context.
          </p>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">02</div>
        <div className="case-content">
          <p className="section-label">SECURITY MODEL</p>
          <h2>Never trust implicitly. Verify every request.</h2>

          <div className="case-grid">
            <article>
              <h3>Identity</h3>
              <p>Every sensitive operation is tied to an authenticated identity.</p>
            </article>

            <article>
              <h3>Authorization</h3>
              <p>Access decisions depend on permissions rather than network location.</p>
            </article>

            <article>
              <h3>Least Privilege</h3>
              <p>Users and services receive only the access required for their role.</p>
            </article>

            <article>
              <h3>Continuous Validation</h3>
              <p>Requests are treated as untrusted until security requirements are satisfied.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">03</div>
        <div className="case-content">
          <p className="section-label">ARCHITECTURE</p>
          <h2>Security controls integrated across the application.</h2>

          <div className="architecture">
            <div>
              <span>01</span>
              <strong>Client</strong>
              <p>User-facing application and request origin</p>
            </div>

            <div>
              <span>02</span>
              <strong>Identity</strong>
              <p>Authentication and session validation</p>
            </div>

            <div>
              <span>03</span>
              <strong>Authorization</strong>
              <p>Permission and role-based access decisions</p>
            </div>

            <div>
              <span>04</span>
              <strong>API</strong>
              <p>Protected financial operations and business logic</p>
            </div>

            <div>
              <span>05</span>
              <strong>Data</strong>
              <p>Controlled persistence and database access</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">04</div>
        <div className="case-content">
          <p className="section-label">DEFENSIVE ENGINEERING</p>
          <h2>Security designed into the workflow.</h2>

          <div className="case-grid">
            <article>
              <h3>Access Control</h3>
              <p>
                Sensitive application functions are protected through explicit
                access rules.
              </p>
            </article>

            <article>
              <h3>Input Validation</h3>
              <p>
                Untrusted input is treated as a security boundary and validated
                before processing.
              </p>
            </article>

            <article>
              <h3>Data Protection</h3>
              <p>
                Application and database boundaries are designed to minimize
                unnecessary data exposure.
              </p>
            </article>

            <article>
              <h3>Auditability</h3>
              <p>
                Security-sensitive operations can be structured for traceability
                and review.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">05</div>
        <div className="case-content">
          <p className="section-label">TESTING STRATEGY</p>
          <h2>Testing security behavior, not just happy paths.</h2>

          <div className="case-grid">
            <article>
              <h3>Authentication Tests</h3>
              <p>Validate protected access and unauthenticated behavior.</p>
            </article>

            <article>
              <h3>Authorization Tests</h3>
              <p>Verify that restricted operations reject insufficient privileges.</p>
            </article>

            <article>
              <h3>API Validation</h3>
              <p>Check expected responses, error handling and request boundaries.</p>
            </article>

            <article>
              <h3>Negative Testing</h3>
              <p>Exercise invalid and unauthorized scenarios intentionally.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">06</div>
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
        <div className="case-number">07</div>
        <div className="case-content">
          <p className="section-label">OUTCOME</p>
          <h2>A portfolio project combining backend engineering and security.</h2>

          <p>
            Zero Trust API Financiera demonstrates how software engineering,
            API design and defensive security principles can be combined in a
            practical application instead of being treated as separate topics.
          </p>

          <div className="hero-actions">
            <a
              className="primary-button"
              href="https://zero-trust-api-financiera.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Explore Live Project ↗
            </a>

            <a
              className="secondary-button"
              href="https://github.com/josemanuelsuarez110/zero-trust-api-financiera"
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
