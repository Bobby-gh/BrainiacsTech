export type Project = {
  slug: string
  title: string
  client: string
  industry: string
  year: string
  category: 'Web' | 'Mobile' | 'Cloud' | 'AI & Data'
  services: string[]
  duration: string
  teamSize: string
  summary: string
  challenge: string
  solution: string
  outcomes: { label: string; value: string }[]
  tech: string[]
  monogram: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'ledgerline-payments-platform',
    title: 'Real-time payments platform',
    client: 'Ledgerline',
    industry: 'Fintech',
    year: '2025',
    category: 'Cloud',
    services: ['Platform engineering', 'Cloud & DevOps', 'SRE'],
    duration: '9 months',
    teamSize: '6 engineers',
    summary:
      'A ledger and settlement platform processing 12M transactions a day with sub-100ms authorisation.',
    challenge:
      'Ledgerline ran on a monolith that could not keep up with growth. Batch settlement meant merchants waited until morning to see money move, and every new payment method took a quarter to ship.',
    solution:
      'We rebuilt the core as event-driven services on Kafka with an append-only ledger, introduced idempotent APIs and automated reconciliation, and moved infrastructure to Terraform-managed AWS with blue/green deploys.',
    outcomes: [
      { label: 'Transactions / day', value: '12M' },
      { label: 'p95 authorisation', value: '80ms' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Time to new method', value: '3 days' },
    ],
    tech: ['TypeScript', 'NestJS', 'PostgreSQL', 'Kafka', 'AWS', 'Terraform'],
    monogram: 'LL',
    featured: true,
  },
  {
    slug: 'cobalt-health-care-portal',
    title: 'Patient care portal',
    client: 'Cobalt Health',
    industry: 'Healthcare',
    year: '2025',
    category: 'Web',
    services: ['Product engineering', 'Web applications', 'Security'],
    duration: '7 months',
    teamSize: '5 engineers',
    summary:
      'A HIPAA-ready portal that cut patient intake from 22 minutes to 7 and now serves 60k monthly users.',
    challenge:
      'Front desks were drowning in paper intake, and patients could not see results or book without calling. The legacy vendor portal had a 4.6-second time to interactive and failed basic accessibility checks.',
    solution:
      'We designed and built a new React portal with a FHIR-backed API, offline-tolerant forms, role-based access, and full audit logging — then ran a staged rollout across 14 clinics.',
    outcomes: [
      { label: 'Intake time', value: '−68%' },
      { label: 'Monthly patients', value: '60k' },
      { label: 'Lighthouse score', value: '98' },
      { label: 'Support calls', value: '−41%' },
    ],
    tech: ['React', 'Node.js', 'FHIR', 'GCP', 'PostgreSQL'],
    monogram: 'CH',
    featured: true,
  },
  {
    slug: 'orbit-commerce-replatform',
    title: 'Commerce replatform',
    client: 'Orbit Retail',
    industry: 'Retail',
    year: '2024',
    category: 'Web',
    services: ['Web applications', 'Performance', 'Platform engineering'],
    duration: '11 months',
    teamSize: '8 engineers',
    summary:
      'A headless storefront over 1.4M SKUs that lifted conversion 18% and cut page loads by 42%.',
    challenge:
      'Orbit\'s ten-year-old storefront buckled during seasonal peaks. Pages took six seconds on mobile, releases required a full redeploy, and merchandisers waited days for simple changes.',
    solution:
      'We moved to a headless architecture with Next.js, GraphQL federation over existing services, edge caching, and a composable CMS — shipped incrementally behind feature flags with zero downtime.',
    outcomes: [
      { label: 'Conversion rate', value: '+18%' },
      { label: 'Largest Contentful Paint', value: '−42%' },
      { label: 'SKUs migrated', value: '1.4M' },
      { label: 'Peak traffic handled', value: '12×' },
    ],
    tech: ['Next.js', 'GraphQL', 'Redis', 'Contentful', 'Vercel'],
    monogram: 'OR',
    featured: true,
  },
  {
    slug: 'kite-fleet-tracking',
    title: 'Fleet tracking system',
    client: 'Kite Logistics',
    industry: 'Logistics',
    year: '2024',
    category: 'Mobile',
    services: ['Mobile applications', 'IoT', 'Platform engineering'],
    duration: '8 months',
    teamSize: '5 engineers',
    summary:
      'A driver app and operations console tracking 40,000 vehicles in real time across three continents.',
    challenge:
      'Dispatchers pieced together vehicle positions from SMS updates and three separate vendor tools. Drivers jobbled two apps, and empty miles were quietly eating margin.',
    solution:
      'We built an offline-first React Native driver app, a Go ingestion service over MQTT, and a live operations console with route optimisation — all syncing through a timeseries store built for high write volume.',
    outcomes: [
      { label: 'Vehicles tracked', value: '40k' },
      { label: 'Empty miles', value: '−22%' },
      { label: 'Position latency', value: '< 2s' },
      { label: 'Driver adoption', value: '94%' },
    ],
    tech: ['React Native', 'Go', 'TimescaleDB', 'MQTT', 'AWS'],
    monogram: 'KL',
  },
  {
    slug: 'vertex-document-intelligence',
    title: 'Document intelligence engine',
    client: 'Vertex AI',
    industry: 'Legal tech',
    year: '2026',
    category: 'AI & Data',
    services: ['AI & data', 'Platform engineering', 'Product engineering'],
    duration: '5 months',
    teamSize: '4 engineers',
    summary:
      'An extraction pipeline that turns 4M contracts a month into structured, reviewable data at 91% accuracy.',
    challenge:
      'Analysts were reading thousands of contracts by hand to pull clause data. Existing OCR tools produced garbage on scanned PDFs and offered no way to review low-confidence fields.',
    solution:
      'We built a human-in-the-loop pipeline: layout-aware chunking, retrieval-grounded extraction with citations back to the source page, confidence thresholds routed to review queues, and continuous evaluation against a labelled set.',
    outcomes: [
      { label: 'Extraction accuracy', value: '91%' },
      { label: 'Processing time', value: '8h → 12min' },
      { label: 'Documents / month', value: '4M' },
      { label: 'Analyst hours saved', value: '3.1k/mo' },
    ],
    tech: ['Python', 'FastAPI', 'pgvector', 'OpenAI', 'AWS'],
    monogram: 'VA',
  },
  {
    slug: 'lumen-grid-monitoring',
    title: 'Grid monitoring dashboard',
    client: 'Lumen Energy',
    industry: 'Energy',
    year: '2023',
    category: 'AI & Data',
    services: ['IoT', 'Cloud & DevOps', 'Data platforms'],
    duration: '6 months',
    teamSize: '4 engineers',
    summary:
      'Live visibility into 1.2M data points per minute with anomaly alerts reaching operators in 15 seconds.',
    challenge:
      'Operators discovered faults from customer calls. Data landed in a nightly batch, dashboards refreshed every 15 minutes, and alerts were a wall of undifferentiated noise.',
    solution:
      'We built a streaming ingest layer, a rule-plus-ML alerting engine with configurable severity, and an operator console with sub-minute refresh — deployed to three regions for resilience.',
    outcomes: [
      { label: 'Data points / min', value: '1.2M' },
      { label: 'Alert latency', value: '15s' },
      { label: 'False alerts', value: '−74%' },
      { label: 'Uptime', value: '99.98%' },
    ],
    tech: ['Next.js', 'Rust', 'TimescaleDB', 'Kafka', 'GCP'],
    monogram: 'LE',
  },
]

export const projectCategories = [
  'All',
  'Web',
  'Mobile',
  'Cloud',
  'AI & Data',
] as const

export function getProject(slug: string | undefined) {
  return projects.find((project) => project.slug === slug)
}
