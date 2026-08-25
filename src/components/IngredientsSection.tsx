import { INGREDIENTS } from '../data/site'

export function IngredientsSection() {
  return (
    <section className="ingredients-section" id="ingredients">
      <div className="container ingredients-layout">
        <div className="ingredients-copy">
          <span className="section-label">3-In-1 Formula</span>
          <h2 className="main-title" style={{ textAlign: 'left', margin: '0 0 12px' }}>
            Nitric Oxide Superfood Blend
          </h2>
          <p className="section-subtitle" style={{ margin: '0 0 28px', textAlign: 'left' }}>
            Red superfoods to support nitric oxide production in the body — organic beets,
            pomegranate, and red spinach extract with BioPerine® for absorption support.
          </p>
          <div className="ingredients-cards">
            {INGREDIENTS.map((item) => (
              <article className="ingredient-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="ingredients-visual">
          <img
            src="/images/product/ingredients-3in1.png"
            alt="Organic beets, pomegranate, and red spinach formula"
          />
        </div>
      </div>
    </section>
  )
}
