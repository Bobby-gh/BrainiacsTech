// Central image registry.
// Every photo ID below is used EXACTLY ONCE across the entire site (verified by script).
// The set portrays an African / Black-American technology company: engineers,
// designers and teams who are Black or African, with a few neutral/no-people
// and diverse shots. Photo IDs are verified against Unsplash search (no dead links).
const unsplash = (photo: string, width = 1400) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=85`

// ── Project case-study banners (one unique photo per project) ────────────────
// eslint-disable-next-line object-curly-newline
export const projectImages: Record<string, string> = {
  'ledgerline-payments-platform': unsplash('photo-1573164574511-73c773193279'), // Black women collaborating in a tech office (WOCinTech)
  'cobalt-health-care-portal': unsplash('photo-1666886573531-48d2e3c2b684'), // Black doctor showing a patient a tablet (Nappy)
  'orbit-commerce-replatform': unsplash('photo-1713256683892-5bab22f76be0'), // customer shopping on her phone
  'kite-fleet-tracking': unsplash('photo-1781559818983-4180d744416a'), // Black warehouse worker with a tablet
  'vertex-document-intelligence': unsplash('photo-1608742213509-815b97c30b36'), // code on a dark screen
  'lumen-grid-monitoring': unsplash('photo-1666214280557-f1b5022eb634'), // technician at workstation (Accuray)
}

// ── Company cards on /companies (one unique photo per industry) ─────────────
export const companyImages: Record<string, string> = {
  Fintech: unsplash('photo-1642929426263-caf1617ced29', 900), // Black woman founder with laptop (Francis Odeyemi)
  Healthcare: unsplash('photo-1666886573553-6548db92db79', 900), // Black doctor with a patient over a tablet (Nappy)
  Retail: unsplash('photo-1523275335684-37898b6baf30', 900), // modern storefront product display
  Logistics: unsplash('photo-1786026632864-6dc820662aca', 900), // warehouse conveyor packing
  'Legal tech': unsplash('photo-1573497701240-345a300b8d36', 900), // Black professionals in discussion (WOCinTech)
  Energy: unsplash('photo-1726221062299-88f27b653c59', 900), // Black engineer in hard hat, solar (Sikwe Scarter)
  Insurance: unsplash('photo-1604933762021-54a5858c9832', 900), // Black woman with braids at laptop (Daniel Thomas)
  Travel: unsplash('photo-1488646953014-85cb44e25828', 900), // traveler planning a route (no people close-up)
  Media: unsplash('photo-1653565685092-a109a59bbcd2', 900), // Black woman at workstation (UK Black Tech)
  'Consumer goods': unsplash('photo-1523381210434-271e8be1f52b', 900), // apparel retail detail
  SaaS: unsplash('photo-1573167101669-476636b96cea', 900), // Black woman on MacBook (WOCinTech)
}

// ── Shared component imagery (each ID appears here once and nowhere else) ───
// Hero carousel — a 2026 African tech studio at work.
export const heroSlides = [
  {
    src: unsplash('photo-1653566031535-bcf33e1c2893', 2400), // Black team around table with laptops (UK Black Tech)
    alt: 'An all-Black product team collaborating around a table with laptops',
  },
  {
    src: unsplash('photo-1641759191629-cc107016e78a', 2400), // Black man and woman pair-programming (Francis Odeyemi)
    alt: 'Two Black engineers pair-programming at a laptop',
  },
  {
    src: unsplash('photo-1522071820081-009f0129c71c', 2400), // mixed team at shared table (Annie Spratt)
    alt: 'A diverse engineering team working together at computers',
  },
] as const

// Page banner defaults, keyed by eyebrow keyword.
export const pageBannerImages = {
  about: unsplash('photo-1531482615713-2afd69097998', 2200), // Black developer pair at monitor inclusive team
  contact: unsplash('photo-1573164713988-8665fc963095', 2200), // Black woman on Surface laptop (WOCinTech)
  companies: unsplash('photo-1653669487003-7d89b2020f3c', 2200), // diverse seated meeting (Jopwell Collection)
  default: unsplash('photo-1527192491265-7e15c55b1ed2', 2200), // mixed team at monitors
} as const

// Home page sections — office story, about, studio.
export const sectionImages = {
  officeMain: unsplash('photo-1521737604893-d14cc237f11d', 1400), // bright African office, team talking
  officeMeeting: unsplash('photo-1573164573938-c9a3db2e84ff', 900), // Black woman on sofa-tablet meeting (WOCinTech)
  aboutTeam: unsplash('photo-1573496528388-2c5e0088d40f', 1200), // Black woman engineer at the table (WOCinTech)
  studioCollab: unsplash('photo-1541746972996-4e0b0f43e02a', 1400), // team huddle over a meeting table
} as const

// Three-company showcase on the home page.
export const showcaseImages = {
  tech: unsplash('photo-1686249959385-ee6c7dcdf0ec', 1000), // Black developer at his laptop (Nubelson Fernandes)
  space: unsplash('photo-1606849760447-d621427aceda', 1000), // group around a wooden coworking table
  talents: unsplash('photo-1573497020210-407242f00778', 1000), // Black women panel at a table (WOCinTech)
} as const

// CTA collage (three large panels, bottom of every page).
export const ctaImages = {
  main: unsplash('photo-1573167627769-e201a7ddf409', 1100), // Black women in a strategy meeting (WOCinTech)
  laptop: unsplash('photo-1642929456654-f4540e3e2a85', 800), // Black woman founder on laptop (Francis Odeyemi)
  team: unsplash('photo-1653566031414-4ac6936a3e66', 800), // Black team workshop with laptops (UK Black Tech)
} as const
