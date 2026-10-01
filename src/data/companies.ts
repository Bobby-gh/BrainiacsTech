export type Company = {
  name: string
  industry: string
  region: string
  engagement: string
  description: string
  monogram: string
}

export const companies: Company[] = [
  {
    name: 'Ledgerline',
    industry: 'Fintech',
    region: 'North America',
    engagement: 'Platform build',
    description:
      'Payments infrastructure processing 12M transactions a day. We rebuilt their settlement core and still run it as an embedded team.',
    monogram: 'LL',
  },
  {
    name: 'Cobalt Health',
    industry: 'Healthcare',
    region: 'North America',
    engagement: 'Product build',
    description:
      'Digital care platform for 14 clinics. Portal, FHIR integration, and a design system their internal team now extends.',
    monogram: 'CH',
  },
  {
    name: 'Orbit Retail',
    industry: 'Retail',
    region: 'Europe',
    engagement: 'Replatform',
    description:
      'Headless commerce over 1.4M SKUs, migrated with zero downtime across two peak trading seasons.',
    monogram: 'OR',
  },
  {
    name: 'Kite Logistics',
    industry: 'Logistics',
    region: 'Global',
    engagement: 'Mobile & IoT',
    description:
      'Driver app and operations console tracking 40,000 vehicles live across three continents.',
    monogram: 'KL',
  },
  {
    name: 'Vertex AI',
    industry: 'Legal tech',
    region: 'North America',
    engagement: 'AI pilot → build',
    description:
      'Went from a two-week AI feasibility pilot to a production document intelligence engine in five months.',
    monogram: 'VA',
  },
  {
    name: 'Lumen Energy',
    industry: 'Energy',
    region: 'Europe',
    engagement: 'Data platform',
    description:
      'Streaming telemetry platform and operator console covering 1.2M data points per minute.',
    monogram: 'LE',
  },
  {
    name: 'Northwind',
    industry: 'Insurance',
    region: 'North America',
    engagement: 'Team augmentation',
    description:
      'Four engineers embedded for 18 months to modernise a claims system, then handed it back to their team.',
    monogram: 'NW',
  },
  {
    name: 'Sable Bank',
    industry: 'Fintech',
    region: 'Europe',
    engagement: 'Cloud migration',
    description:
      'Moved a regulated core workload from on-prem to AWS with zero-downtime cutover and full audit trails.',
    monogram: 'SB',
  },
  {
    name: 'Peregrine',
    industry: 'Travel',
    region: 'Global',
    engagement: 'Product build',
    description:
      'Booking and itinerary engine serving 2M travellers a year, from discovery workshops to launch.',
    monogram: 'PG',
  },
  {
    name: 'Halcyon Media',
    industry: 'Media',
    region: 'North America',
    engagement: 'Web application',
    description:
      'Subscription platform and paywall rebuilt for speed — LCP under 1.5s on every template.',
    monogram: 'HM',
  },
  {
    name: 'Terra Foods',
    industry: 'Consumer goods',
    region: 'Asia Pacific',
    engagement: 'Team augmentation',
    description:
      'A supply-chain squad of five, embedded across three time zones, delivering quarterly releases.',
    monogram: 'TF',
  },
  {
    name: 'Quill',
    industry: 'SaaS',
    region: 'North America',
    engagement: 'Scale-up support',
    description:
      'Performance, architecture review, and on-call coverage through a 10× growth year.',
    monogram: 'QL',
  },
]

export const companyIndustries = [
  'All',
  'Fintech',
  'Healthcare',
  'Retail',
  'Logistics',
  'Legal tech',
  'Energy',
] as const
