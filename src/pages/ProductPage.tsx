import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { HowToUse } from '../components/HowToUse'
import { ShippingSection } from '../components/ShippingSection'
import { WhyChoose } from '../components/WhyChoose'
import { useCart } from '../context/CartContext'
import {
  COMPARISON_ROWS,
  PRODUCT,
  PRODUCT_BUNDLES,
  PRODUCT_FAQ,
  VIP,
} from '../data/site'

export function ProductPage() {
  const { addItem } = useCart()
  const [activeImage, setActiveImage] = useState(0)
  const [bundleQty, setBundleQty] = useState(1)
  const [purchaseType, setPurchaseType] = useState<'onetime' | 'subscribe'>('onetime')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const bundle = useMemo(
    () => PRODUCT_BUNDLES.find((item) => item.qty === bundleQty) ?? PRODUCT_BUNDLES[0],
    [bundleQty],
  )

  const unitPrice = bundle.price / bundle.qty

  return (
    <>
      <div className="breadcrumbs breadcrumbs-bar">
        <div className="container">
          <Link to="/">Home</Link>
          <span> / </span>
          <Link to="/shop">Shop</Link>
          <span> / </span>
          <span>{PRODUCT.name}</span>
        </div>
      </div>

      <section className="page-content">
        <div className="container">
          <div className="product-layout">
            <div className="product-gallery">
              <div className="product-gallery__main">
                <img src={PRODUCT.images[activeImage].src} alt={PRODUCT.images[activeImage].alt} />
              </div>
              <div className="product-gallery__thumbs">
                {PRODUCT.images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    className={index === activeImage ? 'is-active' : ''}
                    onClick={() => setActiveImage(index)}
                  >
                    <img src={image.src} alt={image.label} />
                  </button>
                ))}
              </div>
            </div>

            <div className="product-buy">
              <h1 className="product-buy__title">
                {PRODUCT.name} <em>{PRODUCT.tagline}</em>
              </h1>
              <div className="product-buy__price">
                ${bundle.price.toFixed(2)}
                <span>★ {PRODUCT.rating}</span>
              </div>
              <p>{PRODUCT.longDescription}</p>

              <div className="pu-toggle">
                <div className="pu-toggle__track">
                  <button
                    type="button"
                    className={`pu-toggle__option${purchaseType === 'onetime' ? ' pu-toggle__option--active' : ''}`}
                    onClick={() => setPurchaseType('onetime')}
                  >
                    One-time purchase
                  </button>
                  <button
                    type="button"
                    className={`pu-toggle__option${purchaseType === 'subscribe' ? ' pu-toggle__option--active' : ''}`}
                    onClick={() => setPurchaseType('subscribe')}
                  >
                    Subscribe & Save
                  </button>
                </div>
              </div>

              {purchaseType === 'subscribe' && (
                <div className="pu-toggle__disclaimer">
                  <p>
                    <strong>VIP Membership Terms:</strong> By joining, you will be charged $
                    {VIP.price.toFixed(2)} now and every {VIP.cycleDays} days until you cancel. Cancel
                    anytime via <Link to="/cancellation-request">Easy Cancel</Link>.
                  </p>
                </div>
              )}

              <div className="pu-qty-section">
                <div className="pu-qty-title">Pick Your Quantity</div>
                <div className="pu-qty-cards">
                  {PRODUCT_BUNDLES.map((item) => (
                    <button
                      key={item.qty}
                      type="button"
                      className={`pu-qty-card${bundleQty === item.qty ? ' pu-qty-card--selected' : ''}`}
                      onClick={() => setBundleQty(item.qty)}
                    >
                      {item.badge && (
                        <span
                          className={`pu-qty-card__badge${
                            item.badge === 'BEST VALUE'
                              ? ' pu-qty-card__badge--best-value'
                              : ' pu-qty-card__badge--popular'
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                      <img className="pu-qty-card__image" src={PRODUCT.image} alt={item.label} />
                      <div className="pu-qty-card__name">{item.label}</div>
                      <div className="pu-qty-card__savings">
                        {item.save > 0 ? `You save $${item.save}` : `$${item.price.toFixed(2)}`}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="pu-add-to-cart"
                onClick={() => addItem(bundle.qty, unitPrice)}
              >
                ADD TO CART - ${bundle.price.toFixed(2)}
              </button>

              <div className="product-trust-row">
                <span>Made in USA</span>
                <span>Quality Tested</span>
                <span>Organic Ingredients</span>
                <span>30-Day Guarantee</span>
              </div>

              <div className="product-accordions">
                <details open>
                  <summary>Product Details</summary>
                  <div>
                    <p>
                      Serving Size: {PRODUCT.servingSize}. Servings: {PRODUCT.servings}. Net Weight:{' '}
                      {PRODUCT.netWeight}. Flavor: {PRODUCT.flavor}.
                    </p>
                  </div>
                </details>
                <details>
                  <summary>Shipping & Delivery</summary>
                  <div>
                    <p>Orders typically ship within 1–2 business days. Free shipping on orders over $75.</p>
                  </div>
                </details>
                <details>
                  <summary>Return & Refund Policy</summary>
                  <div>
                    <p>
                      30-day money-back guarantee. See our{' '}
                      <Link to="/refund-policy">Refund Policy</Link> for details.
                    </p>
                  </div>
                </details>
                <details>
                  <summary>Privacy & Security</summary>
                  <div>
                    <p>
                      Your data is handled according to our{' '}
                      <Link to="/privacy-policy">Privacy Policy</Link>.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChoose />
      <HowToUse />

      <section className="page-content">
        <div className="container">
          <section className="comparison-section">
            <h3>Why Choose Us: A Cut Above the Rest</h3>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>zenvora</th>
                  <th>Others</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row}>
                    <td>{row}</td>
                    <td className="yes">✓</td>
                    <td className="no">✕</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="faq-section">
            <h3>Frequently Asked Questions</h3>
            {PRODUCT_FAQ.map((item, index) => (
              <button
                key={item.q}
                type="button"
                className={`faq-item${openFaq === index ? ' is-open' : ''}`}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span>{item.q}</span>
                <em>{openFaq === index ? '−' : '+'}</em>
                {openFaq === index && <p>{item.a}</p>}
              </button>
            ))}
          </section>
        </div>
      </section>
      <ShippingSection />
    </>
  )
}
