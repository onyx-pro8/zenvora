import { PRODUCT } from '../data/site'

export function LifestyleBanner() {
  return (
    <section className="lifestyle-banner">
      <div className="container lifestyle-banner__inner">
        <div className="lifestyle-banner__copy">
          <span className="section-label" style={{ color: '#007a4d' }}>
            Concentrated Beet Crystals
          </span>
          <h2>Feeds your circulation by activating essential nitric oxide in the body.†</h2>
          <p>
            {PRODUCT.name} {PRODUCT.tagline} — a powder formula for healthy circulation support,
            daily energy, and performance-minded routines.
          </p>
          <a className="home-button button" href="#buy">
            SHOP {PRODUCT.name.toUpperCase()}
          </a>
        </div>
        <div className="lifestyle-banner__media">
          <img
            src="/images/product/lifestyle-athlete.png"
            alt="zenvora Nitric Oxide lifestyle"
          />
        </div>
      </div>
    </section>
  )
}
