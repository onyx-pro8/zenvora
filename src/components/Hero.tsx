import { HERO_BADGES, PRODUCT } from '../data/site'

export function Hero() {
  return (
    <section className="home-hero shadow-bg__box" id="product">
      <div className="shadow-bg" />
      <div className="container home-flex">
        <div className="home-left">
          <p className="hero-kicker">{PRODUCT.subtitle}</p>
          <h1 className="home-title headerTitle">
            {PRODUCT.name}
            <span className="hero-script"> {PRODUCT.tagline}</span>
          </h1>
          <p className="hero-description">{PRODUCT.description}</p>
          <div className="hero-meta">
            <span className="hero-rating">★ {PRODUCT.rating}</span>
            <span>{PRODUCT.reviewCount} reviews</span>
            <span>{PRODUCT.servings} servings</span>
            <span>{PRODUCT.flavor}</span>
          </div>
          <a className="get_page home-button button" href="#benefits">
            LEARN MORE
          </a>
        </div>

        <div className="home-right">
          <div className="hero-visual-wrap hero-product-wrap">
            <div className="hero-glow" />
            <img
              src="/images/product/hero-jar.png"
              width={640}
              height={640}
              alt={`${PRODUCT.name} ${PRODUCT.tagline}`}
              className="hero-visual-img hero-product-img"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            {HERO_BADGES.map((badge, index) => (
              <span key={badge} className={`ingredient-badge ingredient-badge--${index + 1}`}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-particles" aria-hidden="true">
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i} className={`particle p${i + 1}`} />
        ))}
      </div>
    </section>
  )
}
