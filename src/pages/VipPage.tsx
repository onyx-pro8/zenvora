import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShippingSection } from '../components/ShippingSection'
import { useCart } from '../context/CartContext'
import { PRODUCT, VIP, VIP_FAQ } from '../data/site'

export function VipPage() {
  const { addVip } = useCart()
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      <section className="vip-hero">
        <div className="vip-hero-content">
          <span className="vip-badge">Exclusive Membership</span>
          <h1>
            Experience <span>VIP</span> Member Pricing
          </h1>
          <p>
            Unlock exclusive access to {PRODUCT.name} {PRODUCT.tagline} at member-only prices for $
            {VIP.price.toFixed(2)} every {VIP.cycleDays} days — your savings, your wellness, your
            VIP perks.
          </p>
          <div className="vip-hero-actions">
            <a href="#pricing" className="vip-btn vip-btn-primary vip-btn-lg">
              Join VIP Program
            </a>
            <Link to="/contacts" className="vip-btn vip-btn-outline vip-btn-lg">
              Member Login
            </Link>
          </div>
          <div className="vip-trust-bar">
            <div className="vip-trust-item">Secure Checkout</div>
            <div className="vip-trust-item">Cancel Anytime</div>
            <div className="vip-trust-item">Premium Quality</div>
          </div>
        </div>
      </section>

      <section className="vip-how-it-works">
        <h2 className="vip-section-title">How It Works</h2>
        <p className="vip-section-subtitle">
          Three simple steps to unlock member-only pricing on {PRODUCT.name} {PRODUCT.tagline}.
        </p>
        <div className="vip-how-grid">
          <div className="vip-how-step">
            <div className="vip-how-number">1</div>
            <h3>Join the Membership</h3>
            <p>
              Activate VIP for ${VIP.price.toFixed(2)} now and every {VIP.cycleDays} days thereafter
              until you cancel.
            </p>
          </div>
          <div className="vip-how-step">
            <div className="vip-how-number">2</div>
            <h3>Shop Nitric Oxide</h3>
            <p>Open the product page and see exclusive member pricing on your only formula.</p>
          </div>
          <div className="vip-how-step">
            <div className="vip-how-number">3</div>
            <h3>Shop &amp; Save</h3>
            <p>Order {PRODUCT.name} at VIP rates with priority support and easy cancel.</p>
          </div>
        </div>
      </section>

      <section className="vip-benefits">
        <h2 className="vip-section-title">Why Join VIP?</h2>
        <p className="vip-section-subtitle">
          Deepen your wellness routine with exclusive member benefits on {PRODUCT.name}.
        </p>
        <div className="vip-benefits-grid">
          <div className="vip-benefit-card">
            <div className="vip-benefit-icon">$</div>
            <h3>Member Pricing</h3>
            <p>Save on every {PRODUCT.name} order with exclusive member-only pricing.</p>
          </div>
          <div className="vip-benefit-card">
            <div className="vip-benefit-icon">★</div>
            <h3>Early Access &amp; Drops</h3>
            <p>Be first in line for new flavors, bundles, and limited member offers.</p>
          </div>
          <div className="vip-benefit-card">
            <div className="vip-benefit-icon">✓</div>
            <h3>Priority Support</h3>
            <p>Get faster help from our customer care team whenever you need it.</p>
          </div>
        </div>
      </section>

      <section className="vip-join" id="pricing">
        <h2 className="vip-section-title">zenvora VIP Membership</h2>
        <p className="vip-section-subtitle">
          One simple plan. ${VIP.price.toFixed(2)} every {VIP.cycleDays} days until you cancel.
          Cancel anytime.
        </p>
        <div className="vip-pricing-card">
          <h3>zenvora VIP Membership</h3>
          <div className="price">${VIP.price.toFixed(2)}</div>
          <div className="price-desc">every {VIP.cycleDays} days until you cancel</div>
          <ul>
            <li>Official VIP membership access</li>
            <li>Member pricing on {PRODUCT.name} {PRODUCT.tagline}</li>
            <li>Early looks at new offers</li>
            <li>Priority shipping consideration</li>
            <li>Cancel anytime — no fees, no hassle</li>
          </ul>
          <p className="vip-legal">
            By placing your monthly recurring order you will be charged ${VIP.price.toFixed(2)} now
            and every {VIP.cycleDays} days thereafter until you cancel. Cancel anytime via{' '}
            <Link to="/cancellation-request">Easy Cancel</Link>.
          </p>
        </div>
        <div className="vip-join-actions">
          <button type="button" className="vip-join-btn vip-join-btn-buy" onClick={addVip}>
            Join VIP Membership
          </button>
          <Link to="/contacts" className="vip-join-btn vip-join-btn-member">
            Already a Member?
          </Link>
        </div>
      </section>

      <section className="vip-testimonials">
        <h2 className="vip-section-title">Our VIP Guarantees</h2>
        <p className="vip-section-subtitle">Shop with confidence as a VIP member.</p>
        <div className="vip-testimonials-grid">
          <div className="vip-testimonial-card vip-guarantee-card">
            <div className="vip-guarantee-icon">$</div>
            <h3>Exclusive Member Pricing</h3>
            <p>
              Get member rates on {PRODUCT.name} {PRODUCT.tagline} that are not available to the
              public.
            </p>
          </div>
          <div className="vip-testimonial-card vip-guarantee-card">
            <div className="vip-guarantee-icon">30</div>
            <h3>30-Day Money-Back Guarantee</h3>
            <p>Not satisfied? Contact us within 30 days for a straightforward refund review.</p>
          </div>
          <div className="vip-testimonial-card vip-guarantee-card">
            <div className="vip-guarantee-icon">×</div>
            <h3>Cancel Anytime</h3>
            <p>
              No long-term lock-in. Cancel online through{' '}
              <Link to="/cancellation-request">Easy Cancel</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="vip-faq">
        <h2 className="vip-section-title">Frequently Asked Questions</h2>
        <p className="vip-section-subtitle">Everything you need to know about VIP membership.</p>
        <div className="vip-faq-list">
          {VIP_FAQ.map((item, index) => (
            <div key={item.q} className={`vip-faq-item${openFaq === index ? ' active' : ''}`}>
              <button
                type="button"
                className="vip-faq-question"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                {item.q}
              </button>
              <div className="vip-faq-answer">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="vip-cta">
        <div className="vip-container">
          <h2>Ready to Start Saving?</h2>
          <p>Join members already enjoying VIP pricing on {PRODUCT.name} {PRODUCT.tagline}.</p>
          <button type="button" className="vip-btn vip-btn-white vip-btn-lg" onClick={addVip}>
            Join VIP Membership
          </button>
        </div>
      </section>

      <ShippingSection />
    </>
  )
}
