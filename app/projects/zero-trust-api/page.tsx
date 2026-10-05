import Link from "next/link";

export const metadata = {
  title: "Tenant Isolation Security Lab",
  description: "A reproducible financial API laboratory: PostgreSQL RLS, authorization regression tests and correlated audit evidence.",
};

const repo = "https://github.com/josemanuelsuarez110/zero-trust-api-financiera";
const sections = [
  { label: "THE PROBLEM", title: "A branch number is not an organization boundary.", text: "Two organizations share branch numbers in a synthetic financial dataset. Checking the branch alone is insufficient: a manager must only read their organization's assigned branch, while an auditor may read all branches within their own organization." },
  { label: "THE CONTROL", title: "Verified identity, transaction-local context and RLS.", text: "The Express API verifies the JWT and resolves organization and role from a server-side identity map. Each read uses a database transaction with local context. A restrictive PostgreSQL policy enforces organization scope, combined with role and branch rules. The application role has no superuser or BYPASSRLS privileges." },
  { label: "THE DEMONSTRATION", title: "Own transaction: 200. Foreign transaction: 404.", text: "The same manager can read transaction 101 in organization 1 but receives 404 for transaction 201 in organization 2. Neither the foreign record nor its data is returned. Each HTTP response is matched to its structured audit event using X-Request-ID. A 404 alone does not prove an attack; the controlled fixture identifies the foreign record." },
  { label: "AN ENGINEERING FINDING", title: "A logging defect became a regression check.", text: "Authentication rejection events were missing because the logger read the request path after mounted middleware had processed it. Capturing the original path fixed attribution. Automated checks now match fresh request IDs to the expected event, status, route and identity." },
];

export default function ZeroTrustCaseStudy() {
  return (
    <main>
      <nav className="nav"><div className="container nav-content">
        <Link className="brand" href="/">JMTechLab<span>.</span></Link>
        <Link className="secondary-button" href="/#projects">← Back to Projects</Link>
      </div></nav>
      <section className="case-hero container">
        <p className="eyebrow">CASE STUDY · API SECURITY · OCTOBER 2026</p>
        <h1>Tenant Isolation Lab</h1>
        <p className="case-intro">A local financial API laboratory with synthetic data, automated authorization checks and correlated security events. Built as an independent portfolio project.</p>
        <div className="hero-actions">
          <a className="primary-button" href={`${repo}/blob/master/docs/tenant-isolation.md`} target="_blank" rel="noreferrer">Reproduce the laboratory ↗</a>
          <a className="secondary-button" href={repo} target="_blank" rel="noreferrer">View source ↗</a>
        </div>
      </section>
      {sections.map((section, index) => (
        <section className="case-section container" key={section.label}>
          <div className="case-number">0{index + 1}</div>
          <div className="case-content"><p className="section-label">{section.label}</p><h2>{section.title}</h2><p>{section.text}</p></div>
        </section>
      ))}
      <section className="case-section container">
        <div className="case-number">05</div>
        <div className="case-content">
          <p className="section-label">VERIFICATION</p><h2>Evidence from repeatable checks.</h2>
          <div className="case-grid">
            <article><h3>6 SQL checks</h3><p>Missing context, manager scope, auditor scope across both organizations, a direct foreign ID and an unknown role.</p></article>
            <article><h3>15 API checks</h3><p>Allowed and denied reads, invalid authentication, parameter manipulation, JWT tampering and sequential identity changes.</p></article>
            <article><h3>6 audit checks</h3><p>Fresh request IDs correlate responses with exactly one matching event, including route, status and identity fields.</p></article>
            <article><h3>40 concurrent HTTP requests</h3><p>Five batches of eight requests across four identities. CI runs the suites with pool limits of one and four connections.</p></article>
          </div>
          <p>Both CI jobs passed for commit 4126e85 on October 4, 2026. These counts describe checks and requests, not distinct vulnerabilities.</p>
          <div className="hero-actions"><a className="primary-button" href={`${repo}/actions/runs/37212997134`} target="_blank" rel="noreferrer">View CI evidence ↗</a></div>
        </div>
      </section>
      <section className="case-section container">
        <div className="case-number">06</div>
        <div className="case-content">
          <p className="section-label">LIMITATIONS</p><h2>Clear boundaries for the results.</h2>
          <p>Authentication uses fixed demo identities. The database credential is trusted: someone who can connect with it can change the organization context. These tests do not establish protection against stolen database credentials, SQL injection, write authorization or token revocation.</p>
          <p>Concurrent HTTP responses are checked for isolation; simultaneous database query execution and load capacity are not measured. Audit correlation does not establish tamper-resistant logging. No production vulnerability or production readiness was established.</p>
          <p>The separately published original API remains available. The laboratory described here runs locally and in disposable CI environments; it is not the public API deployment.</p>
          <div className="hero-actions"><a className="secondary-button" href="https://zero-trust-api-financiera.vercel.app" target="_blank" rel="noreferrer">Original API demo ↗</a></div>
        </div>
      </section>
      <footer><div className="container footer-content"><span>JMTechLab.do</span><Link href="/#projects">← All Projects</Link></div></footer>
    </main>
  );
}
