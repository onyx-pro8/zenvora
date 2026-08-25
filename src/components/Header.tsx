import { useEffect, useState } from 'react'
import { NAV_LINKS, SITE } from '../data/site'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [serviceOpen, setServiceOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header-section">
      <div className="container">
        <div className="header-topbar">
          <button
            className="header-burger-menu"
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>

          <img
            className="header-logo"
            src="/images/zenvora-logo.png"
            alt={SITE.name}
          />

          <nav className={`header-navigations${menuOpen ? ' active' : ''}`}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.page}
                data-page={link.page}
                className={`get_page desktop-nav-link${link.active ? ' active' : ''}`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}

            <div className="mobile-menu">
              <div className="mobile-menu-header">
                <img
                  src="/images/zenvora-logo.png"
                  alt={SITE.name}
                  className="mobile-menu-logo"
                />
                <span className="mobile-menu-hours">
                  <i className="fa-regular fa-clock" /> Mon–Fri 9AM–5PM
                </span>
                <button
                  className="header-navigations__close"
                  aria-label="Close menu"
                  type="button"
                  onClick={closeMenu}
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>

              <div className="mobile-menu-nav">
                <a className="get_page mobile-menu-item active" href="#" onClick={closeMenu}>
                  <span className="mobile-menu-item__icon">
                    <i className="fa-solid fa-house" />
                  </span>
                  <span className="mobile-menu-item__text">Home</span>
                </a>
                <a className="get_page mobile-menu-item" href="#shop" onClick={closeMenu}>
                  <span className="mobile-menu-item__icon">
                    <i className="fa-solid fa-bag-shopping" />
                  </span>
                  <span className="mobile-menu-item__text">Shop</span>
                </a>
                <a className="get_page mobile-menu-item" href="#vip" onClick={closeMenu}>
                  <span className="mobile-menu-item__icon">
                    <i className="fa-solid fa-crown" />
                  </span>
                  <span className="mobile-menu-item__text">VIP Membership</span>
                </a>
                <a className="get_page mobile-menu-item" href="#contacts" onClick={closeMenu}>
                  <span className="mobile-menu-item__icon">
                    <i className="fa-solid fa-envelope" />
                  </span>
                  <span className="mobile-menu-item__text">Contacts</span>
                </a>

                <div className="mobile-menu-divider" />

                <button
                  type="button"
                  className={`mobile-menu-item mobile-menu-item--expandable${serviceOpen ? ' is-expanded' : ''}`}
                  onClick={() => setServiceOpen((open) => !open)}
                >
                  <span className="mobile-menu-item__icon">
                    <i className="fa-solid fa-headset" />
                  </span>
                  <span className="mobile-menu-item__text">Customer Service</span>
                  <span className="mobile-menu-item__arrow">
                    <i className="fa-solid fa-chevron-down" />
                  </span>
                </button>

                <div className="mobile-menu-submenu">
                  <a className="get_page mobile-menu-submenu__item" href="#privacy" onClick={closeMenu}>
                    Privacy Policy
                  </a>
                  <a className="get_page mobile-menu-submenu__item" href="#terms" onClick={closeMenu}>
                    Terms of Service
                  </a>
                  <a className="get_page mobile-menu-submenu__item" href="#cancel" onClick={closeMenu}>
                    Easy Cancel
                  </a>
                  <a className="get_page mobile-menu-submenu__item" href="#refund" onClick={closeMenu}>
                    Refund Policy
                  </a>
                  <a className="get_page mobile-menu-submenu__item" href="#shipping" onClick={closeMenu}>
                    Shipping Policy
                  </a>
                </div>

                <div className="mobile-menu-divider" />

                <a className="get_page mobile-menu-item" href="#about" onClick={closeMenu}>
                  <span className="mobile-menu-item__icon">
                    <i className="fa-solid fa-circle-info" />
                  </span>
                  <span className="mobile-menu-item__text">About Us</span>
                </a>
              </div>

              <div className="mobile-menu-ctas">
                <a href="#shop" className="btn mobile-menu-cta" onClick={closeMenu}>
                  Shop Now
                </a>
                <a href="#vip" className="btn btn--secondary mobile-menu-cta" onClick={closeMenu}>
                  VIP Login
                </a>
              </div>
            </div>
          </nav>

          <div
            className={`mobile-menu-scrim${menuOpen ? ' active' : ''}`}
            onClick={closeMenu}
            aria-hidden="true"
          />

          <a className="header-cart" href="#cart" aria-label="Cart">
            <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.8851 16.0249H19.9941C19.8363 15.5061 19.5159 15.0517 19.0802 14.7288C18.6445 14.406 18.1166 14.2317 17.5743 14.2317C17.032 14.2317 16.5041 14.406 16.0684 14.7288C15.6327 15.0517 15.3123 15.5061 15.1545 16.0249H11.3266C11.1688 15.5061 10.8484 15.0517 10.4127 14.7288C9.97698 14.406 9.44904 14.2317 8.90675 14.2317C8.36446 14.2317 7.83653 14.406 7.40083 14.7288C6.96514 15.0517 6.64475 15.5061 6.48693 16.0249H5.95842C5.74129 16.0212 5.53008 15.9535 5.35128 15.8303C5.17249 15.707 5.03408 15.5337 4.95343 15.3321C4.87278 15.1305 4.85348 14.9095 4.89795 14.697C4.94242 14.4844 5.04869 14.2897 5.20341 14.1373C5.30209 14.0373 5.41962 13.9577 5.5492 13.9033C5.67879 13.8489 5.81787 13.8206 5.95842 13.8202C6.02778 13.8171 6.09638 13.8044 6.16227 13.7825C6.23487 13.7931 6.30863 13.7931 6.38123 13.7825H20.2433C20.4189 13.7864 20.5903 13.729 20.7281 13.6201C20.8659 13.5112 20.9615 13.3577 20.9983 13.186L22.916 4.20135C22.94 4.08985 22.9384 3.97437 22.9114 3.86357C22.8843 3.75277 22.8326 3.64954 22.7599 3.56163C22.6872 3.47372 22.5956 3.40341 22.4919 3.35598C22.3882 3.30855 22.2751 3.28523 22.161 3.28778H5.05995L4.51634 0.901936C4.51744 0.879299 4.51744 0.856622 4.51634 0.833985C4.48554 0.743811 4.43958 0.659551 4.38044 0.58483C4.34641 0.545806 4.30846 0.510385 4.26719 0.479128L4.13883 0.411177C4.08946 0.377304 4.03624 0.349424 3.98028 0.328125H3.85193H3.77643H1.21693C1.01669 0.328125 0.824645 0.407671 0.683053 0.549264C0.54146 0.690856 0.461914 0.882897 0.461914 1.08314C0.461914 1.28338 0.54146 1.47542 0.683053 1.61702C0.824645 1.75861 1.01669 1.83815 1.21693 1.83815H3.17997L3.72358 4.2542L5.45256 12.3555C4.86716 12.4815 4.34257 12.8042 3.96616 13.2699C3.58975 13.7356 3.38423 14.3162 3.38382 14.915C3.38382 15.6085 3.65881 16.2738 4.1485 16.7649C4.6382 17.256 5.30264 17.5329 5.99617 17.5349H6.52468C6.6825 18.0537 7.00289 18.5081 7.43858 18.831C7.87428 19.1538 8.40221 19.3281 8.9445 19.3281C9.48679 19.3281 10.0147 19.1538 10.4504 18.831C10.8861 18.5081 11.2065 18.0537 11.3643 17.5349H15.162C15.3199 18.0537 15.6403 18.5081 16.076 18.831C16.5116 19.1538 17.0396 19.3281 17.5819 19.3281C18.1242 19.3281 18.6521 19.1538 19.0878 18.831C19.5235 18.5081 19.8439 18.0537 20.0017 17.5349H20.8851C21.0853 17.5349 21.2773 17.4554 21.4189 17.3138C21.5605 17.1722 21.6401 16.9801 21.6401 16.7799C21.6401 16.5797 21.5605 16.3876 21.4189 16.246C21.2773 16.1044 21.0853 16.0249 20.8851 16.0249ZM21.2324 4.85821L19.6393 12.3329H6.98524L5.39216 4.85821H21.2324ZM8.91053 17.8143C8.70382 17.8158 8.50134 17.7557 8.32884 17.6418C8.15635 17.5279 8.02164 17.3653 7.94184 17.1746C7.86205 16.9839 7.84078 16.7738 7.88074 16.5709C7.9207 16.3681 8.02009 16.1818 8.16626 16.0356C8.31242 15.8895 8.49877 15.7901 8.70158 15.7501C8.90439 15.7101 9.11451 15.7314 9.3052 15.8112C9.49589 15.891 9.65854 16.0257 9.77245 16.1982C9.88636 16.3707 9.94639 16.5732 9.9449 16.7799C9.9449 16.9157 9.91814 17.0502 9.86616 17.1757C9.81418 17.3012 9.73799 17.4153 9.64194 17.5113C9.54589 17.6074 9.43186 17.6835 9.30636 17.7355C9.18087 17.7875 9.04636 17.8143 8.91053 17.8143ZM17.5856 17.8143C17.3789 17.8158 17.1765 17.7557 17.004 17.6418C16.8315 17.5279 16.6968 17.3653 16.617 17.1746C16.5372 16.9839 16.5159 16.7738 16.5559 16.5709C16.5958 16.3681 16.6952 16.1818 16.8414 16.0356C16.9875 15.8895 17.1739 15.7901 17.3767 15.7501C17.5795 15.7101 17.7896 15.7314 17.9803 15.8112C18.171 15.891 18.3337 16.0257 18.4476 16.1982C18.5615 16.3707 18.6215 16.5732 18.62 16.7799C18.62 16.9157 18.5933 17.0502 18.5413 17.1757C18.4893 17.3012 18.4131 17.4153 18.3171 17.5113C18.221 17.6074 18.107 17.6835 17.9815 17.7355C17.856 17.7875 17.7215 17.8143 17.5856 17.8143Z"
                fill="#043927"
              />
            </svg>
            <span className="cart-count-bubble" style={{ display: 'none' }}>
              0
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}
