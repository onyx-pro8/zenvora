import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartItemMedia } from '../components/CartItemMedia'
import { PageShell } from '../components/PageShell'
import { useCart } from '../context/CartContext'
import { FREE_SHIPPING_THRESHOLD, PRODUCT, SITE } from '../data/site'

export function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [placed, setPlaced] = useState(false)
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 6.99
  const total = subtotal + shipping

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setPlaced(true)
    clearCart()
  }

  if (items.length === 0 && !placed) {
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

  if (placed) {
    return (
      <PageShell title="Order Received" crumbs={[{ label: 'Home', href: '/' }, { label: 'Checkout' }]}>
        <div className="checkout-success">
          <h2>Thank you for your order</h2>
          <p>
            We received your request and will follow up at the email you provided. For questions,
            contact {SITE.email} or {SITE.phone}.
          </p>
          <Link to="/" className="page-btn">
            Back to Home
          </Link>
        </div>
      </PageShell>
    )
  }

  return (
    <PageShell title="Checkout" crumbs={[{ label: 'Home', href: '/' }, { label: 'Cart', href: '/cart' }, { label: 'Checkout' }]}>
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={onSubmit}>
          <h2>Contact & shipping</h2>
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
            <input className="form-control" name="address" required autoComplete="street-address" />
          </label>
          <div className="checkout-form__row">
            <label>
              City
              <input className="form-control" name="city" required autoComplete="address-level2" />
            </label>
            <label>
              ZIP
              <input className="form-control" name="zip" required autoComplete="postal-code" />
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
