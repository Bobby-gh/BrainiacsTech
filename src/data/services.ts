export type Service = {
  id: string
  title: string
  body: string
  category?: string
  image: string
  imageAlt: string
}

// Each photo ID is used exactly once across the whole site (see src/data/images.ts).
export const services: Service[] = [
  {
    id: 'product-engineering',
    title: 'Product engineering',
    body: 'From discovery and architecture to a product your team can run and extend.',
    image: 'https://images.unsplash.com/photo-1654512697655-b2899afacae5?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'A product strategy session in a modern office',
  },
  {
    id: 'web-applications',
    title: 'Web applications',
    body: 'Customer platforms, internal tools, and complex dashboards built for everyday use.',
    image: 'https://images.unsplash.com/photo-1621945094361-aed061046504?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'A developer working through an implementation at his desk',
  },
  {
    id: 'mobile-products',
    title: 'Mobile products',
    body: 'Reliable iOS and Android experiences, including apps that work offline and in the field.',
    image: 'https://images.unsplash.com/photo-1562147113-610c96ae71ae?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Two people testing a mobile app on a smartphone',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    body: 'Cloud infrastructure, delivery pipelines, and operational practices that scale with you.',
    image: 'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Racked servers in a modern data center',
  },
  {
    id: 'ai-data',
    title: 'AI & data',
    body: 'Practical data products and AI features, designed around real workflows and measurable results.',
    image: 'https://images.unsplash.com/photo-1766297248071-dfa7a5bc9b87?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'A data scientist examining a sample in a lab',
  },
  {
    id: 'embedded-teams',
    title: 'Embedded teams',
    body: 'Experienced engineers who join your team, share context, and build alongside you.',
    image: 'https://images.unsplash.com/photo-1573496267526-08a69e46a409?auto=format&fit=crop&w=1200&q=85',
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
    image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'A bright coworking table with laptops and community energy',
  },
]
