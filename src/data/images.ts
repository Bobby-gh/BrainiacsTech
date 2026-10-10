// Central image registry.
// Every photo ID is used EXACTLY ONCE across the entire site (verified by script).
// Direction: an African / Black-American technology company. Two hero slides show
// the tech environment (open-plan studios); all people shots feature Black
// technology professionals (WOCinTechChat, UK Black Tech, Jopwell Collection,
// Nappy, and Ghanaian / Nigerian photographers). Photo URLs are verified live.
const unsplash = (photo: string, width = 1400) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=85`

export const heroSlides = [
  {
    // Open-plan tech studio environment — slide 1
    src: unsplash('photo-1631193816258-28b44b21e78b', 2400),
    alt: 'Rows of tuned workstations inside an open-plan technology studio',
  },
  {
    // Light-filled tech office environment — slide 2
    src: unsplash('photo-1770992225357-21eb44fcf04a', 2400),
    alt: 'A modern tech company office full of daylight, computers, and plants',
  },
  {
    // People shot — a Black product team at work (UK Black Tech)
    src: unsplash('photo-1653566031535-bcf33e1c2893', 2400),
    alt: 'A Black product team collaborating around a table with laptops',
  },
] as const

// ── Project case-study banners (one unique photo per project) ───────────────
export const projectImages: Record<string, string> = {
  // Orchestration platform migration — workshop in a tech office (WOCinTech)
  'ledgerline-payments-platform': unsplash('photo-1573164574397-dd250bc8a598'),
  // Care portal — Black clinician walking a patient through the app (Nappy)
  'cobalt-health-care-portal': unsplash('photo-1666886573531-48d2e3c2b684'),
  // Commerce replatform — customer shopping on her phone
  'orbit-commerce-replatform': unsplash('photo-1713256683892-5bab22f76be0'),
  // Fleet tracking — Black warehouse operator with a tablet in the field
  'kite-fleet-tracking': unsplash('photo-1781559818983-4180d744416a'),
  // Document intelligence — a developer reviewing output at his screen
  'vertex-document-intelligence': unsplash('photo-1734382494669-35b229224f47'),
  // Grid monitoring — network and infrastructure cabling in the field
  'lumen-grid-monitoring': unsplash('photo-1558494949-ef010cbdcc31'),
}

// ── Company cards on /companies (one unique photo per industry) ─────────────
export const companyImages: Record<string, string> = {
  Fintech: unsplash('photo-1642929426263-caf1617ced29', 900), // Black woman founder with laptop (Francis Odeyemi)
  Healthcare: unsplash('photo-1666886573553-6548db92db79', 900), // Black doctor with a patient over a tablet (Nappy)
  Retail: unsplash('photo-1523275335684-37898b6baf30', 900), // storefront product display
  Logistics: unsplash('photo-1786026632864-6dc820662aca', 900), // warehouse conveyor packing
  'Legal tech': unsplash('photo-1573497701240-345a300b8d36', 900), // Black professionals in discussion (WOCinTech)
  Energy: unsplash('photo-1726221062299-88f27b653c59', 900), // Black engineer in hard hat on a solar site (Sikwe Scarter)
  Insurance: unsplash('photo-1604933762021-54a5858c9832', 900), // Black woman with braids at laptop (Daniel Thomas)
  Travel: unsplash('photo-1573496773905-f5b17e717f05', 900), // traveler planning a route on a MacBook
  Media: unsplash('photo-1653565685092-a109a59bbcd2', 900), // Black woman at her workstation (UK Black Tech)
  'Consumer goods': unsplash('photo-1562147113-610c96ae71ae', 900), // shoppers testing a product experience on a phone (David Rotimi)
  SaaS: unsplash('photo-1573167101669-476636b96cea', 900), // Black woman on MacBook (WOCinTech)
}

// ── Page banner defaults, keyed by eyebrow keyword ──────────────────────────
export const pageBannerImages = {
  about: unsplash('photo-1531482615713-2afd69097998', 2200), // developer pair at a monitor
  contact: unsplash('photo-1573164713988-8665fc963095', 2200), // Black woman on a Surface laptop (WOCinTech)
  companies: unsplash('photo-1653669487003-7d89b2020f3c', 2200), // diverse seated meeting (Jopwell Collection)
  default: unsplash('photo-1527192491265-7e15c55b1ed2', 2200), // engineering floor at work on monitors
} as const

// ── Home page sections ──────────────────────────────────────────────────────
export const sectionImages = {
  officeMain: unsplash('photo-1653566031414-4ac6936a3e66', 1400), // Black team building together (UK Black Tech)
  officeMeeting: unsplash('photo-1573165067541-4cd6d9837902', 900), // three colleagues reviewing on a MacBook (WOCinTech)
  aboutTeam: unsplash('photo-1573496528388-2c5e0088d40f', 1200), // Black woman engineer at the table (WOCinTech)
  studioCollab: unsplash('photo-1606836591695-4d58a73eba1e', 1400), // product team mid-critique around a table
} as const

// ── Three-company showcase on the home page ─────────────────────────────────
export const showcaseImages = {
  tech: unsplash('photo-1686249959385-ee6c7dcdf0ec', 1000), // a Black developer heads-down at his laptop
  space: unsplash('photo-1554902843-260acd0993f8', 1000), // three women working around a shared table (CoWomen)
  talents: unsplash('photo-1573497020210-407242f00778', 1000), // Black women panel at a table (WOCinTech)
} as const

// ── CTA collage (three large panels, bottom of every page) ──────────────────
export const ctaImages = {
  main: unsplash('photo-1573167627769-e201a7ddf409', 1100), // Black women in a strategy meeting (WOCinTech)
  laptop: unsplash('photo-1621945094361-aed061046504', 800), // Black engineer at his desk (Ghana, Emmanuel Yeboah Okine)
  team: unsplash('photo-1637856794303-d864ce316444', 800), // Black team_pairing session (Francis Odeyemi)
} as const
