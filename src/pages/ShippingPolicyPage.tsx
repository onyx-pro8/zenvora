import { PageShell } from '../components/PageShell'
import { SITE } from '../data/site'

export function ShippingPolicyPage() {
  return (
    <PageShell
      title="Shipping Policy"
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Shipping Policy' }]}
    >
      <article className="legal-copy">
        <p>
          Orders are typically processed within 1–2 business days. Free shipping is available on
          qualifying orders over $75.
        </p>
        <p>
          Delivery times vary by location. For shipping questions, contact {SITE.email} or{' '}
          {SITE.phone}.
        </p>
      </article>
    </PageShell>
  )
}
