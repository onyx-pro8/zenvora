import { Link } from 'react-router-dom'
import type { CartItem } from '../context/CartContext'
import {
  BILLING_DESCRIPTOR,
  formatOrderDate,
  getOrderConfirmationSubject,
  SUBSCRIPTION_CANCEL_NOTICE,
} from '../data/subscriptionTerms'
import { SITE, VIP } from '../data/site'

type OrderConfirmationEmailProps = {
  email: string
  items: CartItem[]
  total: number
  placedAt: string
  hasSubscription: boolean
}

export function OrderConfirmationEmail({
  email,
  items,
  total,
  placedAt,
  hasSubscription,
}: OrderConfirmationEmailProps) {
  const productLabel =
    items.length === 1
      ? items[0].name
      : items.map((item) => item.name).join(', ')

  return (
    <section className="order-confirmation-email" aria-label="Order confirmation email">
      <p className="order-confirmation-email__sent">
        A confirmation email has been sent to <strong>{email}</strong>.
      </p>

      <div className="order-confirmation-email__message">
        <div className="order-confirmation-email__header">
          <span className="order-confirmation-email__from">
            From: {SITE.name} &lt;{SITE.email}&gt;
          </span>
          <span className="order-confirmation-email__to">To: {email}</span>
          <h2 className="order-confirmation-email__subject">
            {getOrderConfirmationSubject(productLabel)}
          </h2>
        </div>

        <p>Thank you for your order. This message confirms your purchase details.</p>

        <h3>Order summary</h3>
        <ul className="order-confirmation-email__items">
          {items.map((item) => (
            <li key={item.id}>
              {item.name} × {item.qty} — ${(item.price * item.qty).toFixed(2)} USD
            </li>
          ))}
        </ul>
        <p>
          <strong>Total charged:</strong> ${total.toFixed(2)} USD
        </p>

        {hasSubscription && (
          <>
            <h3>Auto-renewal terms</h3>
            <ul className="order-confirmation-email__terms">
              <li>
                <strong>Subscription product:</strong> {VIP.name}
              </li>
              <li>
                <strong>Recurring charge:</strong> ${VIP.price.toFixed(2)} USD every {VIP.cycleDays}{' '}
                days until canceled
              </li>
              <li>
                <strong>Initial charge date:</strong> {formatOrderDate(placedAt)}
              </li>
              <li>
                <strong>Billing descriptor:</strong> Charges appear as {BILLING_DESCRIPTOR} or{' '}
                {SITE.company.toUpperCase()} on your bank statement
              </li>
              <li>
                <strong>How to cancel online:</strong> Visit{' '}
                <Link to="/cancellation-request">Easy Cancel</Link> {SUBSCRIPTION_CANCEL_NOTICE}
              </li>
              <li>
                <strong>Cancellation and restocking fees:</strong> None
              </li>
            </ul>
          </>
        )}

        <p>
          Questions? Contact us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or{' '}
          <a href={SITE.phoneHref}>{SITE.phone}</a>.
        </p>
      </div>
    </section>
  )
}
