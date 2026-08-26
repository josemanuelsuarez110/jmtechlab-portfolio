const BASE_URL =
  process.env.BASE_URL ||
  'https://jmtechlab.do'

const routes = [
  '/',
  '/projects/qa-sentinel',
  '/projects/qaforge-ai',
  '/projects/suarez-ai-audit',
  '/projects/zero-trust-api',
  '/robots.txt',
  '/sitemap.xml',
]

async function checkRoute(path) {
  const url = `${BASE_URL}${path}`

  const response =
    await fetch(url, {
      redirect: 'follow',
    })

  if (!response.ok) {
    throw new Error(
      `${path} returned ${response.status}`
    )
  }

  console.log(
    `✓ ${path} → ${response.status}`
  )

  return response
}

async function checkHeaders() {
  const response =
    await fetch(BASE_URL)

  const required = {
    'x-content-type-options':
      'nosniff',
    'x-frame-options':
      'DENY',
    'referrer-policy':
      'strict-origin-when-cross-origin',
  }

  for (
    const [header, expected]
    of Object.entries(required)
  ) {
    const value =
      response.headers.get(header)

    if (value !== expected) {
      throw new Error(
        `${header}: expected "${expected}", got "${value}"`
      )
    }

    console.log(
      `✓ ${header}: ${value}`
    )
  }

  const hsts =
    response.headers.get(
      'strict-transport-security'
    )

  if (!hsts) {
    throw new Error(
      'Strict-Transport-Security missing'
    )
  }

  console.log(
    `✓ strict-transport-security: ${hsts}`
  )
}

async function checkHttpRedirect() {
  const response =
    await fetch(
      'http://jmtechlab.do',
      {
        redirect: 'manual',
      }
    )

  if (
    ![301, 302, 307, 308]
      .includes(response.status)
  ) {
    throw new Error(
      `HTTP redirect returned ${response.status}`
    )
  }

  const location =
    response.headers.get(
      'location'
    )

  if (
    !location ||
    !location.startsWith(
      'https://'
    )
  ) {
    throw new Error(
      'HTTP did not redirect to HTTPS'
    )
  }

  console.log(
    `✓ HTTP → HTTPS (${response.status})`
  )
}

async function main() {
  console.log(
    '\nJMTechLab Production Smoke Check'
  )

  console.log(
    `Target: ${BASE_URL}\n`
  )

  for (const route of routes) {
    await checkRoute(route)
  }

  console.log(
    '\nSecurity headers'
  )

  await checkHeaders()

  console.log(
    '\nHTTPS enforcement'
  )

  await checkHttpRedirect()

  console.log(
    '\n================================'
  )

  console.log(
    'PRODUCTION SMOKE CHECK: OK'
  )

  console.log(
    '================================\n'
  )
}

main().catch(error => {
  console.error(
    '\nPRODUCTION SMOKE CHECK FAILED'
  )

  console.error(
    error.message
  )

  process.exit(1)
})
