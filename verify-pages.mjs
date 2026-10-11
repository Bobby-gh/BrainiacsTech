import { chromium } from 'playwright'

const routes = [
  ['/', 'Brainiacs Group'],
  ['/group', 'One group, three companies'],
  ['/tech', 'Build'],
  ['/space', 'Brainiacs Space'],
  ['/talents', 'Brainiacs Talents'],
  ['/projects', 'Real-time payments platform'],
  ['/services', 'Choose the help you need'],
]

const browser = await chromium.launch()
const page = await browser.newPage()
let failures = 0

for (const [route, expected] of routes) {
  await page.goto(`http://localhost:5173${route}`, { waitUntil: 'networkidle' })
  const text = await page.textContent('body')
  const ok = text.includes(expected)
  if (!ok) failures++
  console.log(`${ok ? 'PASS' : 'FAIL'} ${route} — looking for "${expected}"`)
  if (!ok) console.log('   body snippet:', text.slice(0, 400))
}

// Check navbar dropdown shows all three companies with logos on the group page
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' })
await page.click('text=Group companies')
await page.waitForTimeout(300)
const dropdown = await page.textContent('[role="menu"]')
for (const name of ['Tech', 'Space', 'Talents']) {
  const ok = dropdown.includes(name)
  if (!ok) failures++
  console.log(`${ok ? 'PASS' : 'FAIL'} dropdown contains ${name}`)
}
const logoCount = await page.locator('[role="menu"] svg').count()
console.log(`dropdown svg logos: ${logoCount}`)

await browser.close()
process.exit(failures === 0 ? 0 : 1)
