export type TeamMember = {
  name: string
  role: string
  initials: string
  gradient: string
  bio: string
}

export const team: TeamMember[] = [
  {
    name: 'Amara Okafor',
    role: 'Founder & CEO',
    initials: 'AO',
    gradient: 'from-indigo-500 to-violet-600',
    bio: 'Ex-platform lead. Started Brainiac in 2014 to build software the way engineers actually want to.',
  },
  {
    name: 'Daniel Reyes',
    role: 'Head of Engineering',
    initials: 'DR',
    gradient: 'from-violet-500 to-fuchsia-600',
    bio: 'Shipped payments and logistics systems at scale. Owns our architecture reviews and on-call culture.',
  },
  {
    name: 'Mei Lin Chow',
    role: 'Design Director',
    initials: 'MC',
    gradient: 'from-fuchsia-500 to-pink-600',
    bio: 'Turns fuzzy briefs into shipped interfaces. Previously led design for two Series C products.',
  },
  {
    name: 'Tomás Herrera',
    role: 'Cloud & DevOps Lead',
    initials: 'TH',
    gradient: 'from-sky-500 to-indigo-600',
    bio: 'Terraform, Kubernetes, and very strong opinions about immutable infrastructure.',
  },
  {
    name: 'Priya Raman',
    role: 'AI Practice Lead',
    initials: 'PR',
    gradient: 'from-amber-500 to-orange-600',
    bio: 'Builds retrieval and evaluation pipelines that survive contact with real production data.',
  },
  {
    name: 'Jonas Weber',
    role: 'Delivery Director',
    initials: 'JW',
    gradient: 'from-emerald-500 to-teal-600',
    bio: 'Keeps scope honest and dates real. Your single point of contact from kickoff to handover.',
  },
]

export const values = [
  {
    title: 'Own the outcome',
    body: 'We are accountable for what ships, not for story points. If something is at risk, you hear it from us first.',
    icon: 'M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7z',
  },
  {
    title: 'Craft is a feature',
    body: 'Readable code, tested edges, and interfaces that hold up. Quality is what makes the next release cheap.',
    icon: 'M14.7 6.3a5 5 0 01-6.6 6.6L4 17v3h3l4.1-4.1a5 5 0 016.6-6.6l-2.9 2.9-2.1-2.1 2.9-2.9z',
  },
  {
    title: 'Radical transparency',
    body: 'Open dashboards, weekly demos, and estimates with ranges. You always know where your budget went.',
    icon: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7zm10 3a3 3 0 100-6 3 3 0 000 6z',
  },
  {
    title: 'Momentum over ceremony',
    body: 'Small teams, short cycles, working software every two weeks. Process exists to remove blockers, not create them.',
    icon: 'M13 2L4 14h7l-1 8 9-12h-7l1-8z',
  },
]

export const milestones = [
  {
    year: '2014',
    title: 'Founded in New York',
    body: 'Four engineers, one contract, and a rule: no body shops, only product teams.',
  },
  {
    year: '2017',
    title: 'First enterprise platform',
    body: 'Delivered a regulated payments platform and grew into long-term partnerships.',
  },
  {
    year: '2020',
    title: 'Remote-first, globally',
    body: 'Went distributed for good and opened delivery hubs in London and Singapore.',
  },
  {
    year: '2023',
    title: 'AI practice launched',
    body: 'Started shipping retrieval, evaluation, and agent workflows into production products.',
  },
  {
    year: '2026',
    title: '120+ companies served',
    body: 'A 60-person engineering company with a 94% repeat-engagement rate.',
  },
]
