import { PRODUCT } from '../data/site'

export function ReviewsSection() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Social Proof</span>
          <div className="main-title">Loved by thousands</div>
          <p className="section-subtitle">
            Around {PRODUCT.rating} stars across TikTok Shop listings, with thousands of customer
            reviews on popular variants.
          </p>
        </div>
        <div className="reviews-grid">
          <article className="review-card review-card--score">
            <div className="review-score">{PRODUCT.rating}</div>
            <div className="review-stars">★★★★★</div>
            <p>{PRODUCT.reviewCount} reviews</p>
          </article>
          <article className="review-card">
            <h3>“Easy to mix, great berry taste”</h3>
            <p>
              One scoop in water and I’m set for workouts. Noticeable energy without a crash — this
              is now part of my morning routine.
            </p>
          </article>
          <article className="review-card">
            <h3>“Clean ingredients I can trust”</h3>
            <p>
              Organic beets plus the vegan and gluten-free labels made this an easy pick. Packaging
              looks premium and the powder dissolves well.
            </p>
          </article>
        </div>
        <div className="reviews-visual">
          <img src="/images/product/flat-lay.png" alt="Nitric Oxide mixed berry flat lay" />
          <img src="/images/product/jar-angled.png" alt="zenvora Nitric Oxide product jar" />
        </div>
      </div>
    </section>
  )
}
