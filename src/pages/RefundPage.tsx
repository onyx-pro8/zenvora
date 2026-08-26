import { PageShell } from '../components/PageShell'
import { SITE } from '../data/site'

export function RefundPage() {
  return (
    <PageShell
      title="Refund Policy"
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Refund Policy' }]}
    >
      <article className="legal-copy">
        <p>
          We offer a 30-day money-back guarantee on Nitric Oxide Organic Beets. If you are not
          satisfied, contact {SITE.email} with your order number within 30 days of delivery.
        </p>
        <p>
          Approved refunds are issued to the original payment method. Shipping fees may be
          non-refundable unless the return is due to our error.
        </p>
      </article>
    </PageShell>
  )
}
