export type Service = {
  id: string
  title: string
  body: string
  category?: string
  image: string
  imageAlt: string
}

// Service photography follows the Black technology-professional visual direction in images.ts.
export const services: Service[] = [
  {
    id: 'product-engineering',
    title: 'Product engineering',
    body: 'From discovery and architecture to a product your team can run and extend.',
    image: 'https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Black engineers planning a product together in a technology office',
  },
  {
    id: 'web-applications',
    title: 'Web applications',
    body: 'Customer platforms, internal tools, and complex dashboards built for everyday use.',
    image: 'https://images.unsplash.com/photo-1686249959385-ee6c7dcdf0ec?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'A Black software developer working at his laptop',
  },
  {
    id: 'mobile-products',
    title: 'Mobile products',
    body: 'Reliable iOS and Android experiences, including apps that work offline and in the field.',
    image: 'https://images.unsplash.com/photo-1573164573938-c9a3db2e84ff?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'A Black technology professional reviewing work on a tablet',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    body: 'Cloud infrastructure, delivery pipelines, and operational practices that scale with you.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'A Black software professional working at a laptop',
  },
  {
    id: 'ai-data',
    title: 'AI & data',
    body: 'Practical data products and AI features, designed around real workflows and measurable results.',
    image: 'https://images.unsplash.com/photo-1573167101669-476636b96cea?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'A Black woman working on a laptop in a technology workspace',
  },
  {
    id: 'embedded-teams',
    title: 'Embedded teams',
    body: 'Experienced engineers who join your team, share context, and build alongside you.',
    image: 'https://images.unsplash.com/photo-1573497701240-345a300b8d36?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Two colleagues in an embedded-team working session (WOCinTech)',
  },
  {
    id: 'talents',
    title: 'Brainiacs Talents',
    category: 'Technology recruitment',
    body: 'Find the right people for your next stage. We connect growing teams with carefully matched technology professionals.',
    image: 'https://images.unsplash.com/photo-1573497161854-72447225081d?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Candidates in a panel-style interview at a table (WOCinTech)',
  },
  {
    id: 'space',
    title: 'Brainiacs Space',
    category: 'Coworking & community',
    body: 'A welcoming place to focus, meet, and make things together—with flexible workspace for independent professionals and teams.',
    image: 'https://images.unsplash.com/photo-1653566031535-bcf33e1c2893?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Black technology professionals collaborating in a shared workspace',
  },
]
