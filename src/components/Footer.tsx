import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { QUICK_LINKS, SERVICE_LINKS, SITE } from '../data/site'

export function Footer() {
  const [email, setEmail] = useState('')

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-disclaimer" />
        <div className="footer-topbar footer-topbar--grid">
          <div className="footer-col">
            <div className="footer-col__title">Company</div>
            <div className="footer-col__text">
              <span className="companyName">{SITE.company}</span>
              <br />
              {SITE.addressLines[0]}
              <br />
              {SITE.addressLines[1]}
              <br />
              {SITE.email}
              <br />
              {SITE.phone}
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col__title">Quick Links</div>
            <ul className="footer-col__links">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link className="get_page" to={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col__title">Customer Service</div>
            <ul className="footer-col__links">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link className="get_page" to={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-col__title">Newsletter</div>
            <div className="footer-col__text">Stay updated with our latest offers and products.</div>
            <div className="subscribe-block subscribe-mail" style={{ marginTop: '0.75rem' }}>
              <form className="ft-form" noValidate onSubmit={onSubmit}>
                <input
                  type="email"
                  name="email"
                  className="ft-form__input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  name="submit"
                  className="ft-form__button ft-form__button--icon"
                  aria-label="Subscribe"
                  type="submit"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-lowbar">
          <div className="footer-copyright">{SITE.copyright}</div>
          <div className="footer-cards">
            <img src="/images/visa.svg" alt="Visa" />
            <img src="/images/master-card.BgjyoRBZ.svg" alt="Mastercard" />
          </div>
        </div>

        <div className="footer-disclaimer footer-disclaimer--bottom">{SITE.disclaimer}</div>
      </div>
    </footer>
  )
}
