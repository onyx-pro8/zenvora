import { Link } from 'react-router-dom'
import { ShippingSection } from '../components/ShippingSection'
import { TrustTicker } from '../components/TrustTicker'
import { PRODUCT } from '../data/site'

export function ShopPage() {
  return (
    <>
      <section className="shop-hero">
        <div className="container">
          <h1>{PRODUCT.name}</h1>
          <p>{PRODUCT.tagline.toUpperCase()}</p>
        </div>
      </section>
      <div className="container breadcrumbs-bar">
        <nav className="breadcrumbs">
          <Link to="/">Home</Link> / <span>Shop</span>
        </nav>
      </div>
      <TrustTicker />
      <section className="page-content">
        <div className="container">
          <div className="shop-single">
            <div className="shop-single__card">
              <Link to={`/product/${PRODUCT.id}`} className="shop-single__media">
                <img src={PRODUCT.image} alt={`${PRODUCT.name} ${PRODUCT.tagline}`} />
              </Link>
              <div className="shop-single__body">
                <span className="section-label">Our Only Product</span>
                <h2>
                  {PRODUCT.name} <em>{PRODUCT.tagline}</em>
                </h2>
                <p>{PRODUCT.description}</p>
                <div className="shop-single__meta">
                  <strong>${PRODUCT.price.toFixed(2)}</strong>
                  <span>
                    ★ {PRODUCT.rating} · {PRODUCT.reviewCount} reviews
                  </span>
                </div>
                <div className="shop-single__gallery">
                  {PRODUCT.images.slice(0, 6).map((image) => (
                    <img key={image.src} src={image.src} alt={image.alt} />
                  ))}
                </div>
                <Link to={`/product/${PRODUCT.id}`} className="page-btn">
                  GO TO PRODUCT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ShippingSection />
    </>
  )
}
