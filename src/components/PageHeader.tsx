import type { ReactNode } from 'react'

type PageHeaderProps = {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
  image?: string
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
  image,
}: PageHeaderProps) {
  const bannerImage = image ?? (
    eyebrow.toLowerCase().includes('about')
      ? 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=85'
      : eyebrow.toLowerCase().includes('contact')
        ? 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=85'
        : eyebrow.toLowerCase().includes('companies')
          ? 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=85'
          : 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2200&q=85'
  )

  return (
    <section className="image-banner relative min-h-[23rem] border-b border-[#1b3b61] text-white sm:min-h-[27rem]">
      <img src={bannerImage} alt="" aria-hidden="true" fetchPriority="high" />
      <div className="container-x relative flex min-h-[23rem] flex-col justify-center py-14 text-left sm:min-h-[27rem] sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
          {eyebrow}
        </p>
        <h1 className="motion-in mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100/75 sm:text-lg">
          {description}
        </p>
        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  )
}
