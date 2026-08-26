import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ShippingSection } from './ShippingSection'

export function PageHero({
  title,
  crumbs,
}: {
  title: string
  crumbs: { label: string; href?: string }[]
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          {crumbs.map((crumb, index) => (
            <span key={`${crumb.label}-${index}`}>
              {index > 0 && ' / '}
              {crumb.href ? <Link to={crumb.href}>{crumb.label}</Link> : <span>{crumb.label}</span>}
            </span>
          ))}
        </nav>
        {title ? <h1 className="page-hero__title">{title}</h1> : null}
      </div>
    </section>
  )
}

export function PageShell({
  title,
  crumbs,
  children,
  showShipping = true,
}: {
  title: string
  crumbs: { label: string; href?: string }[]
  children: ReactNode
  showShipping?: boolean
}) {
  return (
    <>
      <PageHero title={title} crumbs={crumbs} />
      <div className="page-content">
        <div className="container">{children}</div>
      </div>
      {showShipping && <ShippingSection />}
    </>
  )
}
