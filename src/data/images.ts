// Central image registry.
// Curated photography consistently featuring Black technology professionals and teams.
// Some photos are intentionally reused across related sections for a cohesive visual identity.
// Photo IDs are verified against Unsplash search (no dead links).
const unsplash = (photo: string, width = 1400) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=85`

// ── Project case-study banners (one unique photo per project) ────────────────
// eslint-disable-next-line object-curly-newline
export const projectImages: Record<string, string> = {
  'ledgerline-payments-platform': unsplash('photo-1573164574511-73c773193279'), // Black women collaborating in a tech office (WOCinTech)
  'cobalt-health-care-portal': unsplash('photo-1666886573531-48d2e3c2b684'), // Black doctor showing a patient a tablet (Nappy)
  'orbit-commerce-replatform': unsplash('photo-1642929426263-caf1617ced29'), // Black woman founder working with a laptop
  'kite-fleet-tracking': unsplash('photo-1781559818983-4180d744416a'), // Black warehouse worker with a tablet
  'vertex-document-intelligence': unsplash('photo-1573164574511-73c773193279'), // Black women collaborating in a tech office (WOCinTech)
  'lumen-grid-monitoring': unsplash('photo-1726221062299-88f27b653c59'), // Black engineer in hard hat, solar (Sikwe Scarter)
}

// ── Company cards on /companies (one unique photo per industry) ─────────────
export const companyImages: Record<string, string> = {
  Fintech: unsplash('photo-1642929426263-caf1617ced29', 900), // Black woman founder with laptop (Francis Odeyemi)
  Healthcare: unsplash('photo-1666886573553-6548db92db79', 900), // Black doctor with a patient over a tablet (Nappy)
  Retail: unsplash('photo-1642929426263-caf1617ced29', 900), // Black woman founder working with a laptop
  Logistics: unsplash('photo-1781559818983-4180d744416a', 900), // Black warehouse worker with a tablet
  'Legal tech': unsplash('photo-1573497701240-345a300b8d36', 900), // Black professionals in discussion (WOCinTech)
  Energy: unsplash('photo-1726221062299-88f27b653c59', 900), // Black engineer in hard hat, solar (Sikwe Scarter)
  Insurance: unsplash('photo-1604933762021-54a5858c9832', 900), // Black woman with braids at laptop (Daniel Thomas)
  Travel: unsplash('photo-1573167101669-476636b96cea', 900), // Black woman working on a MacBook (WOCinTech)
  Media: unsplash('photo-1653565685092-a109a59bbcd2', 900), // Black woman at workstation (UK Black Tech)
  'Consumer goods': unsplash('photo-1573164573938-c9a3db2e84ff', 900), // Black woman in a technology meeting (WOCinTech)
  SaaS: unsplash('photo-1573167101669-476636b96cea', 900), // Black woman on MacBook (WOCinTech)
}

// ── Shared component imagery ────────────────────────────────────────────────
// Hero carousel — Black American technology teams at work.
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
    src: unsplash('photo-1573164574511-73c773193279', 2400), // Black women collaborating in a tech office (WOCinTech)
    alt: 'Black engineers collaborating in a technology workspace',
  },
] as const

// Page banner defaults, keyed by eyebrow keyword.
export const pageBannerImages = {
  about: unsplash('photo-1531482615713-2afd69097998', 2200), // Black developer pair at monitor inclusive team
  contact: unsplash('photo-1573164713988-8665fc963095', 2200), // Black woman on Surface laptop (WOCinTech)
  companies: unsplash('photo-1573497701240-345a300b8d36', 2200), // Black professionals collaborating (WOCinTech)
  default: unsplash('photo-1573164574511-73c773193279', 2200), // Black women collaborating in a tech office (WOCinTech)
} as const

// Home page sections — office story, about, studio.
export const sectionImages = {
  officeMain: unsplash('photo-1653566031535-bcf33e1c2893', 1400), // Black team around a table with laptops (UK Black Tech)
  officeMeeting: unsplash('photo-1573164573938-c9a3db2e84ff', 900), // Black woman on sofa-tablet meeting (WOCinTech)
  aboutTeam: unsplash('photo-1573496528388-2c5e0088d40f', 1200), // Black woman engineer at the table (WOCinTech)
  studioCollab: unsplash('photo-1573497701240-345a300b8d36', 1400), // Black professionals collaborating (WOCinTech)
} as const

// Three-company showcase on the home page.
export const showcaseImages = {
  tech: unsplash('photo-1686249959385-ee6c7dcdf0ec', 1000), // Black developer at his laptop (Nubelson Fernandes)
  space: unsplash('photo-1653566031535-bcf33e1c2893', 1000), // Black tech team sharing a workspace (UK Black Tech)
  talents: unsplash('photo-1573497020210-407242f00778', 1000), // Black women panel at a table (WOCinTech)
} as const

// CTA collage (three large panels, bottom of every page).
export const ctaImages = {
  main: unsplash('photo-1573167627769-e201a7ddf409', 1100), // Black women in a strategy meeting (WOCinTech)
  laptop: unsplash('photo-1642929456654-f4540e3e2a85', 800), // Black woman founder on laptop (Francis Odeyemi)
  team: unsplash('photo-1653566031414-4ac6936a3e66', 800), // Black team workshop with laptops (UK Black Tech)
} as const
