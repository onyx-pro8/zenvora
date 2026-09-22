import { Link } from 'react-router-dom'
import { OrderConfirmationEmail } from '../components/OrderConfirmationEmail'
import { PageShell } from '../components/PageShell'
import { readOrderReceipt } from '../data/orderReceipt'
import { BILLING_DESCRIPTOR } from '../data/subscriptionTerms'
import { SITE } from '../data/site'

const DELIVERY_TIMES = [
  { region: 'United States & Canada', days: '10–20 Days' },
  { region: 'Australia', days: '7–20 Days' },
  { region: 'Europe', days: '7–24 Days' },
  { region: 'International', days: '7–20 Days' },
] as const

export function ThankYouPage() {
  const receipt = readOrderReceipt()
  const items = receipt?.items ?? []
  const subtotal = receipt?.subtotal ?? 0
  const shipping = receipt?.shipping ?? 0
  const total = receipt?.total ?? 0
  const email = receipt?.email ?? 'your email address'
  const hasSubscription = receipt?.hasSubscription ?? false
  const placedAt = receipt?.placedAt ?? new Date().toISOString()

  return (
    <PageShell
      title=""
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Thank You' }]}
      showShipping={false}
    >
      <div className="thankyou">
        <h1 className="thankyou__title">Thank You</h1>
        <p className="thankyou__lead">
          Your order has been processed and will be shipped quickly to you
        </p>

        <OrderConfirmationEmail
          email={email}
          items={items}
          total={total}
          placedAt={placedAt}
          hasSubscription={hasSubscription}
        />

        <h2 className="thankyou__notes-title">A Few Important Notes:</h2>
        <ol className="thankyou__notes">
          <li>
            If you ordered using your card the charge will appear on your statement as{' '}
            <strong>{BILLING_DESCRIPTOR}</strong> or <strong>{SITE.company.toUpperCase()}</strong>
            {'. '}
            Please keep this for your records.
          </li>
          {!hasSubscription && (
            <li>
              Please note that any extra special offers you purchased will show up as separate charges
              on your card statement.
            </li>
          )}
          <li>
            If you have any questions, concerns or issues please email{' '}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> and our customer success team will be
            on hand to respond immediately.
          </li>
        </ol>

        <div className="thankyou__receipt-banner" role="status">
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path
              fill="currentColor"
              d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
            />
          </svg>
          <span>Your Order Receipt:</span>
        </div>

        <div className="thankyou__receipt">
          <table className="thankyou__table">
            <thead>
              <tr>
                <th>Item</th>
                <th className="thankyou__table-center">Quantity</th>
                <th className="thankyou__table-right">Price</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={3} className="thankyou__empty">
                    No line items available for this session.
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td className="thankyou__table-center">{item.qty}</td>
                    <td className="thankyou__table-right">
                      ${(item.price * item.qty).toFixed(2)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className="thankyou__totals">
            <div>
              <span>Sub Total :</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>
            <div>
              <span>Shipping :</span>
              <strong>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</strong>
            </div>
            <div className="thankyou__totals-grand">
              <span>Grand Total:</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
          </div>
        </div>

        <div className="thankyou__notice">
          <p>
            <strong>*IMPORTANT:</strong> Please note that due to the current disrupted international
            logistics systems, it&apos;s possible to experience a short delivery delay. We&apos;re
            doing everything we can for you to receive your order on time.
          </p>
        </div>

        <h2 className="thankyou__delivery-title">Estimated Standard Delivery Times:</h2>
        <div className="thankyou__delivery-grid">
          {DELIVERY_TIMES.map((row) => (
            <div key={row.region} className="thankyou__delivery-item">
              <strong>{row.region}</strong>
              <span>{row.days}</span>
            </div>
          ))}
        </div>

        <p className="thankyou__contact">
          If you have any problems, feel free to contact us here:{' '}
          <Link to="/contacts">Contacts</Link>
        </p>

        <div className="thankyou__actions">
          <Link to="/" className="page-btn">
            Back to Home
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
