import { FEATURES, HOW_TO_USE, PRODUCT } from '../data/site'

export function HowToUse() {
  return (
    <section className="howto-section" id="how-to-use">
      <div className="container howto-layout">
        <div className="howto-visual">
          <img src="/images/product/how-to-mix.png" alt="Mix zenvora Nitric Oxide into your routine" />
          <span className="howto-badge">{PRODUCT.servings} servings</span>
        </div>
        <div className="howto-copy">
          <span className="section-label">Simple Routine</span>
          <h2 className="main-title" style={{ textAlign: 'left', margin: '0 0 12px' }}>
            Mixes easily into your daily routine
          </h2>
          <ul className="howto-list">
            {HOW_TO_USE.map((step, index) => (
              <li key={step}>
                <span>{index + 1}</span>
                {step}
              </li>
            ))}
          </ul>
          <div className="features-row">
            {FEATURES.map((feature) => (
              <div className="feature-pill" key={feature.title}>
                <strong>{feature.title}</strong>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
