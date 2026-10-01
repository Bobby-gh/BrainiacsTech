export type Service = {
  id: string
  title: string
  body: string
  category?: string
  image: string
  imageAlt: string
}

export const services: Service[] = [
  {
    id: 'product-engineering',
    title: 'Product engineering',
    body: 'From discovery and architecture to a product your team can run and extend.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Product analytics displayed on a laptop',
  },
  {
    id: 'web-applications',
    title: 'Web applications',
    body: 'Customer platforms, internal tools, and complex dashboards built for everyday use.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Web developer working at a computer',
  },
  {
    id: 'mobile-products',
    title: 'Mobile products',
    body: 'Reliable iOS and Android experiences, including apps that work offline and in the field.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Smartphone displaying a mobile application',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    body: 'Cloud infrastructure, delivery pipelines, and operational practices that scale with you.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Blue-lit server infrastructure',
  },
  {
    id: 'ai-data',
    title: 'AI & data',
    body: 'Practical data products and AI features, designed around real workflows and measurable results.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Abstract visualization of artificial intelligence',
  },
  {
    id: 'embedded-teams',
    title: 'Embedded teams',
    body: 'Experienced engineers who join your team, share context, and build alongside you.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'A product team collaborating around a table',
  },
  {
    id: 'talents',
    title: 'Brainiacs Talents',
    category: 'Technology recruitment',
    body: 'Find the right people for your next stage. We connect growing teams with carefully matched technology professionals.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Recruiters and candidates talking in a modern office',
  },
  {
    id: 'space',
    title: 'Brainiacs Space',
    category: 'Coworking & community',
    body: 'A welcoming place to focus, meet, and make things together—with flexible workspace for independent professionals and teams.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Bright coworking space with shared desks',
  },
]
