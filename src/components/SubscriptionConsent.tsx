import { Link } from 'react-router-dom'
import { SUBSCRIPTION_CANCEL_NOTICE } from '../data/subscriptionTerms'
import { SITE, VIP } from '../data/site'

type SubscriptionConsentProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  required?: boolean
}

export function SubscriptionConsent({ checked, onChange, required = true }: SubscriptionConsentProps) {
  return (
    <div className="checkout-subscription">
      <label className="checkout-subscription__label">
        <input
          type="checkbox"
          name="subscriptionConsent"
          className="checkout-subscription__checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          required={required}
        />
        <span className="checkout-subscription__text">
          <strong>By checking this box</strong>, I confirm that I am enrolling in an autoship subscription
          for <strong>{VIP.name}</strong>. My first order will ship within{' '}
          <strong>three business days</strong>, and I will continue to receive shipments every{' '}
          <strong>{VIP.cycleDays} days</strong> at <strong>${VIP.price.toFixed(2)} USD</strong> per
          shipment until I cancel. I may cancel at any time by visiting <strong>Easy Cancel</strong>{' '}
          online, emailing <strong>{SITE.email}</strong>, or calling <strong>{SITE.phone}</strong>{' '}
          {SUBSCRIPTION_CANCEL_NOTICE}. I authorize <strong>{SITE.company}</strong> to charge my payment
          method <strong>${VIP.price.toFixed(2)} USD</strong> on the same day each billing cycle before
          my order ships. There are <strong>no cancellation or restocking fees</strong>.
        </span>
      </label>
      <p className="checkout-subscription__cancel-link">
        Cancel online anytime via <Link to="/cancellation-request">Easy Cancel</Link>.
      </p>
    </div>
  )
}
