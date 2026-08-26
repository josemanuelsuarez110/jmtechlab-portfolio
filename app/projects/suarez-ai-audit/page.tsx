import Link from "next/link";

import Image from "next/image";

export const metadata = {
  title: "Suarez AI Audit | Case Study | JMTechLab",
  description:
    "Enterprise audit, transaction intelligence and risk-management platform engineered with React, TypeScript, Supabase, Playwright and CI/CD.",
};

const technologies = [
  "React",
  "TypeScript",
  "Vite",
  "Supabase",
  "PostgreSQL",
  "Playwright",
  "GitHub Actions",
  "Vercel",
  "RBAC",
  "Row Level Security",
];

const screenshots = [
  {
    src: "/projects/suarez-ai-audit/01-executive-dashboard.png",
    alt: "Suarez AI Audit Executive Dashboard",
    title: "Executive Dashboard",
  },
  {
    src: "/projects/suarez-ai-audit/02-transaction-intelligence.png",
    alt: "Suarez AI Audit Transaction Intelligence",
    title: "Transaction Intelligence",
  },
  {
    src: "/projects/suarez-ai-audit/03-transaction-audit-trail.png",
    alt: "Suarez AI Audit Transaction Audit Trail",
    title: "Transaction Audit Trail",
  },
  {
    src: "/projects/suarez-ai-audit/04-governance-suite.png",
    alt: "Suarez AI Audit Governance Suite",
    title: "Governance Suite",
  },
  {
    src: "/projects/suarez-ai-audit/05-enterprise-risk.png",
    alt: "Suarez AI Audit Enterprise Risk",
    title: "Enterprise Risk",
  },
  {
    src: "/projects/suarez-ai-audit/06-consolidation-center.png",
    alt: "Suarez AI Audit Consolidation Center",
    title: "Consolidation Center",
  },
];

export default function SuarezAIAuditCaseStudy() {
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
        <p className="eyebrow">
          CASE STUDY · AUDIT ENGINEERING · QA AUTOMATION · RISK
        </p>

        <h1>Suarez AI Audit</h1>

        <p className="case-intro">
          An enterprise audit and risk intelligence platform that combines
          transaction monitoring, anomaly analysis, governance, enterprise
          risk, RBAC, audit trails and automated quality engineering in a
          production-ready system.
        </p>

        <div className="hero-actions">
          <a
            className="primary-button"
            href="https://suarez-ai-audit.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Live Platform ↗
          </a>

          <a
            className="secondary-button"
            href="https://github.com/josemanuelsuarez110/suarez-ai-audit"
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

          <h2>Audit, transaction and risk workflows are often fragmented.</h2>

          <p>
            Enterprise audit operations frequently depend on disconnected
            systems for findings, transactional reviews, evidence, risk,
            remediation, compliance and reporting.
          </p>

          <p>
            That fragmentation reduces visibility, makes traceability harder
            and increases the cost of understanding operational and financial
            exposure.
          </p>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">02</div>

        <div className="case-content">
          <p className="section-label">THE SOLUTION</p>

          <h2>A unified enterprise audit intelligence platform.</h2>

          <p>
            Suarez AI Audit centralizes transaction intelligence, audit
            operations, governance, risk management and executive visibility
            into a single authenticated platform.
          </p>

          <div className="case-grid">
            <article>
              <h3>Transaction Intelligence</h3>
              <p>
                Transaction analysis, anomaly scores, exposure metrics and
                review workflows.
              </p>
            </article>

            <article>
              <h3>Governance</h3>
              <p>
                Evidence, remediation, tasks and compliance controls managed
                from a unified suite.
              </p>
            </article>

            <article>
              <h3>Enterprise Risk</h3>
              <p>
                Risk register, third-party risk, incident management and
                executive KPIs.
              </p>
            </article>

            <article>
              <h3>Audit Trail</h3>
              <p>
                Decision history preserves reviewer identity, state transitions
                and timestamps.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">03</div>

        <div className="case-content">
          <p className="section-label">QUALITY ENGINEERING</p>

          <h2>Quality gates built into the delivery process.</h2>

          <div className="case-grid">
            <article>
              <h3>13 E2E Tests</h3>
              <p>
                Playwright validates authentication, RBAC, modules, search,
                transactions and audit history.
              </p>
            </article>

            <article>
              <h3>CI Automation</h3>
              <p>
                GitHub Actions runs build checks, platform validation and
                authenticated browser tests.
              </p>
            </article>

            <article>
              <h3>Bundle Guard</h3>
              <p>
                Production builds include automated bundle-size regression
                validation.
              </p>
            </article>

            <article>
              <h3>Secret Checks</h3>
              <p>
                Repository validation checks for accidental exposure of
                privileged credentials.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">04</div>

        <div className="case-content">
          <p className="section-label">SECURITY</p>

          <h2>Security enforced beyond the interface.</h2>

          <div className="architecture">
            <div>
              <span>01</span>
              <strong>Authentication</strong>
              <p>Supabase authenticated sessions</p>
            </div>

            <div>
              <span>02</span>
              <strong>RBAC</strong>
              <p>Admin, auditor and viewer roles</p>
            </div>

            <div>
              <span>03</span>
              <strong>RLS</strong>
              <p>PostgreSQL Row Level Security policies</p>
            </div>

            <div>
              <span>04</span>
              <strong>RPC Workflows</strong>
              <p>Protected database decision functions</p>
            </div>

            <div>
              <span>05</span>
              <strong>Auditability</strong>
              <p>Persistent reviewer and decision history</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">05</div>

        <div className="case-content">
          <p className="section-label">ARCHITECTURE</p>

          <h2>Production-oriented full-stack architecture.</h2>

          <div className="architecture">
            <div>
              <span>01</span>
              <strong>Frontend</strong>
              <p>React + TypeScript + Vite</p>
            </div>

            <div>
              <span>02</span>
              <strong>Application Services</strong>
              <p>Audit, transaction, governance and risk domains</p>
            </div>

            <div>
              <span>03</span>
              <strong>Data</strong>
              <p>Supabase PostgreSQL</p>
            </div>

            <div>
              <span>04</span>
              <strong>Testing</strong>
              <p>Playwright E2E automation</p>
            </div>

            <div>
              <span>05</span>
              <strong>Delivery</strong>
              <p>GitHub Actions → Vercel</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">06</div>

        <div className="case-content">
          <p className="section-label">PRODUCT</p>

          <h2>Platform walkthrough.</h2>

          <div
            style={{
              display: "grid",
              gap: "2rem",
              marginTop: "2rem",
            }}
          >
            {screenshots.map((screenshot) => (
              <article key={screenshot.src}>
                <h3 style={{ marginBottom: "1rem" }}>{screenshot.title}</h3>

                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={1440}
                  height={1200}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "18px",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section container">
        <div className="case-number">07</div>

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
        <div className="case-number">08</div>

        <div className="case-content">
          <p className="section-label">RESULT</p>

          <h2>
            A production project combining audit expertise and software
            engineering.
          </h2>

          <p>
            Suarez AI Audit demonstrates the ability to translate audit,
            financial-control and risk concepts into a secure, testable and
            production-deployed software platform.
          </p>

          <p>
            It combines domain understanding with frontend engineering,
            PostgreSQL security, QA automation and continuous delivery.
          </p>

          <div className="hero-actions">
            <a
              className="primary-button"
              href="https://suarez-ai-audit.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Explore Live Platform ↗
            </a>

            <a
              className="secondary-button"
              href="https://github.com/josemanuelsuarez110/suarez-ai-audit"
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
