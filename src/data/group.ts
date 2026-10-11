import type { ReactNode } from 'react'

export type Branch = {
  slug: string
  name: string
  tagline: string
  description: string
  founded: string
  path: string
  ctaLabel: string
  ctaTo: string
  logoKey: 'group' | 'tech' | 'space' | 'talents'
  image: string
  imageAlt: string
  highlights: { value: string; label: string }[]
}

// Photo IDs for the group's own hero carousel — NOT shared with Tech's hero.
// Tech uses photo-1622675363311 / photo-1688380692117 / photo-1557804506.
const unsplash = (photo: string, width = 2400) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=85`

/**
 * Brainiacs Group is the mother company. Tech, Space and Talents are the
 * three sub-companies — each with its own logo mark (see components/Logo.tsx),
 * description, imagery, and its own sub pages/forms.
 */
export const group = {
  name: 'Brainiacs Group',
  tagline: 'One group. Three ways to build, work, and grow.',
  description:
    'Brainiacs Group is a family of companies that helps ambitious people build better products, find better people, and work in better places. Founded in Accra in 2014, the group now spans software engineering, coworking, and technology recruitment across Accra and London.',
  founded: '2014 · Accra, Tesano',
  offices: 'Accra, Ghana · London, UK',
  about: [
    'Brainiacs started in 2014 as a small software engineering team with one rule: no body shops, only product teams. Twelve years later that rule has not changed — it has simply been joined by two more companies built on the same idea.',
    'Today Brainiacs Group is the shared home for Brainiacs Tech, Brainiacs Space, and Brainiacs Talents. Each company has its own team, its own customers, and its own way of working. Each is accountable for its own outcome. What they share is the thing that made the first company work: senior attention, honest estimates, and craft that does not bend for speed.',
    'The group stays deliberately small. Coinbase-scale is not the goal; being the company that people trust with the thing that matters is. That is why 94% of Tech’s clients come back, why members renew at Space every month, and why Talents asks about both the candidate and the company before making an introduction.',
  ],
  whatWeDo: [
    {
      title: 'Build software',
      body: 'Through Brainiacs Tech we take products from whiteboard sketch to production and stay on to keep them healthy — web platforms, mobile apps, cloud infrastructure, and practical AI.',
    },
    {
      title: 'Host the work',
      body: 'Through Brainiacs Space we run the coworking home in Tesano, Accra — flexible desks, meeting rooms, and a community where independents and small teams do their best work.',
    },
    {
      title: 'Find the people',
      body: 'Through Brainiacs Talents we connect companies with technology professionals across engineering, product, data, and design — matched carefully, introduced personally.',
    },
  ],
  objectives: [
    {
      title: 'Own every outcome',
      body: 'No handoffs, no vendors-in-the-middle. Whichever company you work with, the people doing the work answer for the result.',
    },
    {
      title: 'Keep craft non-negotiable',
      body: 'Readable code, honest estimates, and decisions we can defend a year later. Quality is what makes the next piece of work cheap.',
    },
    {
      title: 'Build where we live',
      body: 'We are rooted in Accra and work across borders. The group exists to grow opportunity here — for engineers, members, and candidates alike.',
    },
    {
      title: 'Stay small on purpose',
      body: 'We take on fewer engagements so each one gets senior attention. Growth is welcome; being stretched thin is not.',
    },
  ],
  // Group hero carousel — used on the group home, distinct from Tech.
  heroSlides: [
    {
      src: unsplash('photo-1781914476939-91a41b914899'),
      alt: 'Two colleagues working side by side on laptops in daylight',
    },
    {
      src: unsplash('photo-1544256718-3bcf237f3974'),
      alt: 'Bright collaborative workspace with a shared table and laptops',
    },
    {
      src: unsplash('photo-1584761696377-008e22a7fb15'),
      alt: 'People meeting together at a bright coworking table',
    },
  ] as { src: string; alt: string }[],
}

export const branches: Branch[] = [
  {
    slug: 'tech',
    name: 'Brainiacs Tech',
    tagline: 'Software engineering, end to end',
    description:
      'The original Brainiacs company. Product teams that take software from whiteboard to production — web, mobile, cloud, and AI — and keep it healthy at scale. 200+ products shipped for 120+ companies in 14 industries.',
    founded: '2014',
    path: '/tech',
    ctaLabel: 'Start a project',
    ctaTo: '/contact',
    logoKey: 'tech',
    image:
      'https://images.unsplash.com/photo-1563461660947-507ef49e9c47?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'A Black software engineer heads-down at his laptop',
    highlights: [
      { value: '200+', label: 'Products shipped' },
      { value: '120+', label: 'Companies served' },
      { value: '94%', label: 'Repeat engagements' },
      { value: '9', label: 'Countries' },
    ],
  },
  {
    slug: 'space',
    name: 'Brainiacs Space',
    tagline: 'Coworking & community in Accra',
    description:
      'A welcoming coworking home in Tesano, Accra for independent professionals and growing teams. Flexible desks, meeting rooms, and a community of curious minds who do their best work together.',
    founded: '2021',
    path: '/space',
    ctaLabel: 'Book a visit',
    ctaTo: '/space#booking',
    logoKey: 'space',
    image:
      'https://images.unsplash.com/photo-1554902843-260acd0993f8?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Three women working around a shared coworking table',
    highlights: [
      { value: '70+', label: 'Desks & studios' },
      { value: '8', label: 'Meeting rooms' },
      { value: '150+', label: 'Community members' },
      { value: '6', label: 'Days a week open' },
    ],
  },
  {
    slug: 'talents',
    name: 'Brainiacs Talents',
    tagline: 'Technology recruitment, done personally',
    description:
      'A specialist recruitment partner connecting ambitious companies with exceptional technology professionals — and helping candidates find work that actually moves them. Human-first matching across engineering, product, data, and design.',
    founded: '2023',
    path: '/talents',
    ctaLabel: 'Hire with us',
    ctaTo: '/talents#recruitment-form',
    logoKey: 'talents',
    image:
      'https://images.unsplash.com/photo-1573497020210-407242f00778?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'A panel of Black professionals meeting at a table',
    highlights: [
      { value: '400+', label: 'Placements made' },
      { value: '90+', label: 'Hiring partners' },
      { value: '18', label: 'Days median time-to-hire' },
      { value: '96%', label: 'Placements still in seat at 1 year' },
    ],
  },
]

export function getBranch(slug: string | undefined) {
  return branches.find((branch) => branch.slug === slug)
}

export type LogoIconProps = { className?: string; children?: ReactNode }
