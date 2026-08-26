import { Link } from 'react-router-dom'
import { TrustTicker } from '../components/TrustTicker'
import { PageShell } from '../components/PageShell'
import { useCart } from '../context/CartContext'
import { FREE_SHIPPING_THRESHOLD, PRODUCT, VIP } from '../data/site'

export function CartPage() {
  const { items, subtotal, updateQty, removeItem, clearCart, itemCount } = useCart()
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)
  const shippingLabel = remaining > 0 ? 'Calculated at checkout' : 'Free'
  const itemLabel = itemCount === 1 ? 'item' : 'items'

  return (
    <>
      <TrustTicker />
      <PageShell title="Your Cart" crumbs={[{ label: 'Home', href: '/' }, { label: 'Cart' }]}>
        {items.length === 0 ? (
          <div className="cart-empty cart-empty--page">
            <p>Your cart is empty.</p>
            <Link to={`/product/${PRODUCT.id}`} className="page-btn">
              Shop Nitric Oxide
            </Link>
          </div>
        ) : (
          <div className="cart-page">
            <div className="cart-page__list">
              <p className="cart-page__count">
                {itemCount} {itemLabel} in your cart
              </p>
              <ul className="cart-items">
                {items.map((item) => (
                  <li key={item.id} className="cart-item">
                    <Link
                      to={item.id === VIP.id ? '/vip' : `/product/${PRODUCT.id}`}
                      className="cart-item__media"
                    >
                      <img src={item.image} alt={item.name} />
                    </Link>
                    <div className="cart-item__info">
                      <Link
                        className="cart-item__name"
                        to={item.id === VIP.id ? '/vip' : `/product/${PRODUCT.id}`}
                      >
                        {item.name}
                      </Link>
                      <div className="cart-item__price">${item.price.toFixed(2)} each</div>
                      <div className="cart-item__qty">
                        <button type="button" onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease quantity">
                          −
                        </button>
                        <span>{item.qty}</span>
                        <button type="button" onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase quantity">
                          +
                        </button>
                      </div>
                      <button type="button" className="cart-item__remove" onClick={() => removeItem(item.id)}>
                        Remove
                      </button>
                    </div>
                    <div className="cart-item__line">${(item.price * item.qty).toFixed(2)}</div>
                  </li>
                ))}
              </ul>
              <Link to="/shop" className="cart-page__continue">
                Continue shopping
              </Link>
            </div>

            <aside className="cart-page__summary">
              <div className="cart-progress">
                <p className="cart-progress__text">
                  {remaining > 0 ? (
                    <>
                      Add <strong>${remaining.toFixed(2)}</strong> more for <strong>Free Shipping</strong>
                    </>
                  ) : (
                    <>You unlocked <strong>Free Shipping</strong></>
                  )}
                </p>
                <div className="cart-progress__bar">
                  <div
                    className="cart-progress__bar__progress cart-progress__bar__progress--striped"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
              <div className="cart-page__row">
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <div className="cart-page__row cart-page__row--muted">
                <span>Shipping</span>
                <span>{shippingLabel}</span>
              </div>
              <div className="cart-page__row cart-page__row--total">
                <span>Total</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <Link to="/checkout" className="page-btn page-btn--block">
                Checkout
              </Link>
              <div className="cart-page__pay">
                <img src="/images/visa.svg" alt="Visa" />
                <img src="/images/master-card.BgjyoRBZ.svg" alt="Mastercard" />
              </div>
              <p className="cart-page__secure">Secure checkout • 30-day money-back guarantee</p>
              <button type="button" className="cart-page__clear" onClick={clearCart}>
                Clear cart
              </button>
            </aside>
          </div>
        )}
      </PageShell>
    </>
  )
}
