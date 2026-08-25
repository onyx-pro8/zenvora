import { BENEFITS } from '../data/site'

function BenefitIcon({ type }: { type: (typeof BENEFITS)[number]['icon'] }) {
  if (type === 'heart') {
    return (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 3C4.24 3 2 5.24 2 8c0 1.4.56 2.68 1.46 3.6L12 21l8.54-9.4C21.44 10.68 22 9.4 22 8c0-2.76-2.24-5-5-5-1.6 0-3.04.76-3.96 1.96L12 6.34l-1.04-1.38C10.04 3.76 8.6 3 7 3z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    )
  }
  if (type === 'pressure') {
    return (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
      <path d="M13 2 4 14h7l-1 8 10-12h-8l1-8z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function BenefitsSection() {
  return (
    <section className="benefits-section" id="benefits">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why It Works</span>
          <div className="main-title">Daily Circulation Support</div>
          <p className="section-subtitle">
            Built to support healthy circulation, blood pressure, energy, and exercise performance —
            as a dietary supplement, not a medical treatment.
          </p>
        </div>
        <div className="benefits-grid">
          {BENEFITS.map((item) => (
            <article className="benefits-card" key={item.title}>
              <div className="benefits-icon">
                <BenefitIcon type={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="benefits-banner">
          <img src="/images/product/pour-shot.png" alt="Mixing zenvora Nitric Oxide drink" />
          <div className="benefits-banner__copy">
            <h3>Supports cardio health · blood pressure · natural energy</h3>
            <p>
              Concentrated beet crystals help feed your circulation by activating essential nitric
              oxide in the body.†
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
