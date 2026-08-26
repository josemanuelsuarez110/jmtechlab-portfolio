# JMTechLab Security Checklist v1

Security baseline for JMTechLab projects.

Status legend:

- PASS: verified and compliant
- N/A: not applicable to JMTechLab.do
- VERIFY: requires periodic or infrastructure-level review

## 1. Secrets and Access Management

- [PASS] API keys and tokens are stored only in environment variables.
- [PASS] `.env` and environment-specific secret files are excluded from Git.
- [PASS] Repository contains no exposed credentials or database passwords.
- [N/A] Administrative database credentials are never exposed client-side.
- [N/A] Database/network access restrictions are not applicable because JMTechLab.do has no application database.

## 2. Data and Storage Security

- [N/A] RLS is not required because JMTechLab.do does not store user records.
- [PASS] Production traffic uses HTTPS/TLS.
- [N/A] No sensitive application data is stored by the portfolio.
- [N/A] There are no private application endpoints.
- [N/A] There is no application authorization layer.
- [N/A] JMTechLab.do does not process sensitive production logs containing user credentials or PII.
- [N/A] There are no protected mutable user fields.
- [N/A] There are no authentication cookies.
- [N/A] JMTechLab.do does not manage user passwords.

## 3. API and Traffic Protection

- [N/A] There is no login endpoint.
- [N/A] There are currently no public forms requiring bot protection.
- [N/A] JMTechLab.do does not execute SQL queries.
- [N/A] There is no custom backend accepting user input.
- [PASS] No user-controlled HTML content is currently accepted or rendered.
- [N/A] File uploads are not supported.
- [N/A] There is no public custom API requiring rate limiting.

## 4. Infrastructure and Network

- [PASS] Security headers are configured.
- [PASS] HTTP redirects permanently to HTTPS.
- [PASS] HSTS is active in production.
- [PASS] X-Content-Type-Options: nosniff is active.
- [PASS] X-Frame-Options: DENY is active.
- [PASS] Referrer-Policy: strict-origin-when-cross-origin is active.
- [PASS] Permissions Policy restricts unnecessary browser capabilities.
- [PASS] Next.js X-Powered-By disclosure is disabled.
- [VERIFY] CSP has been evaluated but is intentionally not enforced yet to avoid unnecessary compatibility risk for a recruiter-facing portfolio.
- [VERIFY] Vercel access and error logs should be reviewed periodically.

## 5. Dependency and Repository Security

- [PASS] npm audit reports 0 vulnerabilities.
- [PASS] ESLint passes without errors.
- [PASS] Production build completes successfully.
- [PASS] GitHub Actions quality gate validates dependency audit, lint and production build.
- [PASS] node_modules is not tracked by Git.
- [PASS] No backup files are tracked.
- [PASS] Environment files are excluded from Git.
- [PASS] Current repository scan found no exposed secrets.
- [VERIFY] Repository history should be periodically checked with a dedicated secret-scanning tool.

## 6. Recruiter-Safe Requirements

- [PASS] Portfolio content requires no authentication.
- [PASS] Search-engine indexing is allowed.
- [PASS] robots.txt allows public crawling.
- [PASS] Sitemap exposes the main portfolio and project case studies.
- [PASS] Project case studies remain publicly accessible.
- [PASS] GitHub links remain accessible.
- [PASS] Live Demo links remain accessible.
- [PASS] Internal project navigation works correctly.
- [PASS] Security controls do not block recruiter access.
- [PASS] Security controls do not interfere with SEO.
- [PASS] Production build remains statically optimized.
- [PASS] CSP is not enforced until compatibility has been verified.

## Production Evidence

Verified against:

https://jmtechlab.do

Observed security headers:

Strict-Transport-Security: max-age=63072000
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()

HTTP requests redirect to HTTPS using:

308 Permanent Redirect

Current quality baseline:

npm audit     -> 0 vulnerabilities
npm run lint  -> PASS
npm run build -> PASS
GitHub CI     -> PASS

## Release Gate

Before merging future security-related changes:

1. Review the diff.
2. Scan for accidental secrets.
3. Run npm audit.
4. Run npm run lint.
5. Run npm run build.
6. Validate relevant tests.
7. Validate preview deployment when applicable.
8. Verify critical recruiter-facing links.
9. Verify production after deployment.

Required baseline:

Security -> Quality -> Tests -> Build -> Preview -> Production -> UX
