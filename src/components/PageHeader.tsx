import type { ReactNode } from 'react'

type PageHeaderProps = {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 bg-slate-50/40">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-indigo-400/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-x relative py-16 text-center sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
          {eyebrow}
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          {description}
        </p>
        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  )
}
