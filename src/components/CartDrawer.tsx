import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { FREE_SHIPPING_THRESHOLD } from '../data/site'

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, subtotal, itemCount } = useCart()
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)
  const itemLabel = itemCount === 1 ? 'item' : 'items'

  useEffect(() => {
    document.body.classList.toggle('cart-open', isOpen)
    return () => document.body.classList.remove('cart-open')
  }, [isOpen])

  return (
    <div
      className={`cart-drawer__overlay${isOpen ? ' is-open' : ''}`}
      aria-hidden={!isOpen}
      onClick={closeCart}
    >
      <div
        className="cart-drawer__inner"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="cart-drawer__header">
          <h2>
            Your Cart • <span className="cart-drawer__count">{itemCount}</span> {itemLabel}
          </h2>
          <button className="cart-drawer__close" type="button" aria-label="Close cart" onClick={closeCart}>
            <svg viewBox="0 0 24 24" fill="none">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>
        </div>

        {items.length > 0 && (
          <div className="cart-drawer__progress-wrap">
            <div className="cart-progress">
              <p className="cart-progress__text">
                {remaining > 0 ? (
                  <>
                    You need <strong>${remaining.toFixed(2)}</strong> more to get{' '}
                    <strong>Free Shipping</strong>
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
          </div>
        )}

        <div className="cart-drawer__body">
          {items.length === 0 ? (
            <div className="cart-drawer__empty">
              <div className="cart-drawer__empty-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M6 7h15l-1.5 9h-12z" />
                  <path d="M6 7 5 3H2" />
                  <circle cx="9" cy="20" r="1" />
                  <circle cx="18" cy="20" r="1" />
                </svg>
              </div>
              <p className="cart-drawer__empty-text">Your cart is empty</p>
              <p className="cart-drawer__empty-subtext">
                Browse Nitric Oxide Organic Beets and find something you love.
              </p>
              <Link to="/shop" className="btn cart-drawer__checkout" onClick={closeCart}>
                Continue Shopping
              </Link>
            </div>
          ) : (
            <ul className="cart-drawer__items">
              {items.map((item) => (
                <li key={item.id} className="cart-drawer__item">
                  <div className="cart-drawer__item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-drawer__item-details">
                    <div className="cart-drawer__item-title">{item.name}</div>
                    <div className="cart-drawer__item-price">${item.price.toFixed(2)}</div>
                    <div className="cart-drawer__item-actions">
                      <div className="cart-drawer__qty">
                        <button type="button" onClick={() => updateQty(item.id, item.qty - 1)}>
                          −
                        </button>
                        <span>{item.qty}</span>
                        <button type="button" onClick={() => updateQty(item.id, item.qty + 1)}>
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        className="cart-drawer__item-remove"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-drawer__subtotal">
              <span className="cart-drawer__subtotal-label">Subtotal</span>
              <span className="cart-drawer__subtotal-amount">${subtotal.toFixed(2)}</span>
            </div>
            <Link to="/cart" className="btn cart-drawer__checkout" onClick={closeCart}>
              Checkout
            </Link>
            <div className="cart-drawer__trust">
              <div className="cart-drawer__trust-badges">
                <img src="/images/visa.svg" alt="Visa" />
                <img src="/images/master-card.BgjyoRBZ.svg" alt="Mastercard" />
              </div>
              <div className="cart-drawer__trust-text">Secure checkout • 30-day money-back guarantee</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
