import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartItemMedia } from '../components/CartItemMedia'
import { PageShell } from '../components/PageShell'
import { SubscriptionConsent } from '../components/SubscriptionConsent'
import { useCart } from '../context/CartContext'
import { saveOrderReceipt } from '../data/orderReceipt'
import { FREE_SHIPPING_THRESHOLD, PRODUCT, VIP } from '../data/site'

function formatCardNumber(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 16)
  return digits.replace(/(\d{4})(?=\d)/g, '$1 ')
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 4)
  if (digits.length <= 2) return digits
  return `${digits.slice(0, 2)}/${digits.slice(2)}`
}

function formatCvv(value: string) {
  return value.replace(/\D/g, '').slice(0, 4)
}

export function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [sameAsShipping, setSameAsShipping] = useState(true)
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCvv, setCardCvv] = useState('')
  const [showCvv, setShowCvv] = useState(false)
  const [subscriptionConsent, setSubscriptionConsent] = useState(false)
  const hasSubscription = items.some((item) => item.id === VIP.id)
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 6.99
  const total = subtotal + shipping

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') ?? '')

    saveOrderReceipt({
      items: items.map((item) => ({ ...item })),
      subtotal,
      shipping,
      total,
      placedAt: new Date().toISOString(),
      email,
      hasSubscription,
    })
    clearCart()
    navigate('/thank-you', { replace: true })
  }

  if (items.length === 0) {
    return (
      <PageShell title="Checkout" crumbs={[{ label: 'Home', href: '/' }, { label: 'Checkout' }]}>
        <div className="cart-empty cart-empty--page">
          <p>Your cart is empty.</p>
          <Link to={`/product/${PRODUCT.id}`} className="page-btn">
            Shop Nitric Oxide
          </Link>
        </div>
      </PageShell>
    )
  }

  return (
    <PageShell title="Checkout" crumbs={[{ label: 'Home', href: '/' }, { label: 'Cart', href: '/cart' }, { label: 'Checkout' }]}>
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={onSubmit}>
          <h2>Contact &amp; shipping</h2>
          <label>
            Full name
            <input className="form-control" name="name" required autoComplete="name" />
          </label>
          <label>
            Email
            <input className="form-control" type="email" name="email" required autoComplete="email" />
          </label>
          <label>
            Phone
            <input className="form-control" type="tel" name="phone" required autoComplete="tel" />
          </label>
          <label>
            Address
            <input className="form-control" name="address" required autoComplete="shipping street-address" />
          </label>
          <label>
            Apartment, suite, etc. (optional)
            <input className="form-control" name="address2" autoComplete="shipping address-line2" />
          </label>
          <div className="checkout-form__row checkout-form__row--triple">
            <label>
              City
              <input className="form-control" name="city" required autoComplete="shipping address-level2" />
            </label>
            <label>
              State
              <input className="form-control" name="state" required autoComplete="shipping address-level1" />
            </label>
            <label>
              ZIP
              <input className="form-control" name="zip" required autoComplete="shipping postal-code" />
            </label>
          </div>
          <label>
            Country
            <input
              className="form-control"
              name="country"
              required
              defaultValue="United States"
              autoComplete="shipping country-name"
            />
          </label>

          {hasSubscription && (
            <>
              <h2 className="checkout-form__section">Subscription consent</h2>
              <SubscriptionConsent
                checked={subscriptionConsent}
                onChange={setSubscriptionConsent}
              />
            </>
          )}

          <h2 className="checkout-form__section">Billing information</h2>
          <label className="checkout-form__check">
            <input
              type="checkbox"
              name="sameAsShipping"
              checked={sameAsShipping}
              onChange={(e) => setSameAsShipping(e.target.checked)}
            />
            Billing address same as shipping
          </label>

          {!sameAsShipping && (
            <>
              <label>
                Billing full name
                <input className="form-control" name="billingName" required autoComplete="billing name" />
              </label>
              <label>
                Billing address
                <input
                  className="form-control"
                  name="billingAddress"
                  required
                  autoComplete="billing street-address"
                />
              </label>
              <label>
                Apartment, suite, etc. (optional)
                <input className="form-control" name="billingAddress2" autoComplete="billing address-line2" />
              </label>
              <div className="checkout-form__row checkout-form__row--triple">
                <label>
                  City
                  <input
                    className="form-control"
                    name="billingCity"
                    required
                    autoComplete="billing address-level2"
                  />
                </label>
                <label>
                  State
                  <input
                    className="form-control"
                    name="billingState"
                    required
                    autoComplete="billing address-level1"
                  />
                </label>
                <label>
                  ZIP
                  <input
                    className="form-control"
                    name="billingZip"
                    required
                    autoComplete="billing postal-code"
                  />
                </label>
              </div>
              <label>
                Country
                <input
                  className="form-control"
                  name="billingCountry"
                  required
                  defaultValue="United States"
                  autoComplete="billing country-name"
                />
              </label>
            </>
          )}

          <h2 className="checkout-form__section">Payment</h2>
          <label>
            Name on card
            <input className="form-control" name="cardName" required autoComplete="cc-name" />
          </label>
          <label>
            Card number
            <input
              className="form-control"
              name="cardNumber"
              required
              inputMode="numeric"
              autoComplete="cc-number"
              placeholder="1234 1234 1234 1234"
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              minLength={19}
              maxLength={19}
            />
          </label>
          <div className="checkout-form__row checkout-form__row--payment">
            <label>
              Expiration
              <input
                className="form-control"
                name="cardExpiry"
                required
                inputMode="numeric"
                autoComplete="cc-exp"
                placeholder="MM/YY"
                value={cardExpiry}
                onChange={(e) => setCardExpiry(formatExpiry(e.target.value))}
                minLength={5}
                maxLength={5}
              />
            </label>
            <label>
              CVV
              <span className="checkout-cvv">
                <input
                  className="form-control"
                  name="cardCvv"
                  required
                  type={showCvv ? 'text' : 'password'}
                  inputMode="numeric"
                  autoComplete="cc-csc"
                  placeholder="•••"
                  value={cardCvv}
                  onChange={(e) => setCardCvv(formatCvv(e.target.value))}
                  minLength={3}
                  maxLength={4}
                />
                <button
                  type="button"
                  className="checkout-cvv__toggle"
                  onClick={() => setShowCvv((v) => !v)}
                  aria-label={showCvv ? 'Hide CVV' : 'Show CVV'}
                  aria-pressed={showCvv}
                >
                  {showCvv ? (
                    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
                      />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                      />
                    </svg>
                  )}
                </button>
              </span>
            </label>
          </div>

          <button type="submit" className="page-btn page-btn--block">
            Place order • ${total.toFixed(2)}
          </button>
        </form>

        <aside className="cart-page__summary">
          <h2>Order summary</h2>
          <ul className="checkout-summary-items">
            {items.map((item) => (
              <li key={item.id}>
                <CartItemMedia item={item} decorative />
                <span>
                  {item.name} × {item.qty}
                </span>
                <strong>${(item.price * item.qty).toFixed(2)}</strong>
              </li>
            ))}
          </ul>
          <div className="cart-page__row">
            <span>Subtotal</span>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>
          <div className="cart-page__row">
            <span>Shipping</span>
            <strong>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</strong>
          </div>
          <div className="cart-page__row cart-page__row--total">
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
          <button type="button" className="cart-page__clear" onClick={() => navigate('/cart')}>
            Return to cart
          </button>
        </aside>
      </div>
    </PageShell>
  )
}
