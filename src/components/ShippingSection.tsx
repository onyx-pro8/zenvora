export function ShippingSection() {
  return (
    <section className="shipping-section animate-on-scroll is-visible">
      <div className="container shipping-flex">
        <div className="shipping-box">
          <svg
            className="shipping-box__img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            role="img"
            aria-label="Fast Shipping"
          >
            <circle cx="32" cy="32" r="31" fill="none" stroke="#043927" strokeWidth="2" />
            <rect x="12" y="22" width="24" height="18" rx="2" fill="#043927" />
            <path d="M36 27h7l7 7v6a2 2 0 0 1-2 2H36V27z" fill="#007a4d" />
            <path
              d="M40 27v8h8"
              stroke="#E8F5E9"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle cx="22" cy="42" r="4" fill="#001a11" stroke="#E8F5E9" strokeWidth="1.5" />
            <circle cx="22" cy="42" r="1.5" fill="#E8F5E9" />
            <circle cx="44" cy="42" r="4" fill="#001a11" stroke="#E8F5E9" strokeWidth="1.5" />
            <circle cx="44" cy="42" r="1.5" fill="#E8F5E9" />
            <line x1="6" y1="26" x2="11" y2="26" stroke="#043927" strokeWidth="2" strokeLinecap="round" />
            <line x1="4" y1="31" x2="11" y2="31" stroke="#043927" strokeWidth="2" strokeLinecap="round" />
            <line x1="7" y1="36" x2="11" y2="36" stroke="#043927" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <div className="shipping-box__info">
            <div className="shipping-box__title">FAST SHIPPING FOR EVERYONE ORDER</div>
            <p className="shipping-box__text">
              WE OFFER FAST SHIPPING FOR ALL ORDERS OF ANY SIZE, 24/7. YOU WILL NEVER WAIT LONG FOR
              YOUR ORDER!
            </p>
          </div>
        </div>

        <div className="shipping-box">
          <svg
            className="shipping-box__img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            role="img"
            aria-label="30-Day Money-Back Guarantee"
          >
            <circle cx="32" cy="32" r="31" fill="none" stroke="#043927" strokeWidth="2" />
            <circle cx="32" cy="32" r="23" fill="none" stroke="#043927" strokeWidth="2" />
            <text
              x="32"
              y="30"
              textAnchor="middle"
              fontFamily="Montserrat,Arial,sans-serif"
              fontSize="16"
              fontWeight="700"
              fill="#043927"
              dominantBaseline="central"
            >
              30
            </text>
            <text
              x="32"
              y="44"
              textAnchor="middle"
              fontFamily="Montserrat,Arial,sans-serif"
              fontSize="7"
              fontWeight="700"
              fill="#001a11"
              letterSpacing="2"
            >
              DAYS
            </text>
            <path d="M18 18l3 2" stroke="#043927" strokeWidth="2" strokeLinecap="round" />
            <path d="M46 18l-3 2" stroke="#043927" strokeWidth="2" strokeLinecap="round" />
            <path
              d="M22 50c3 3 6 5 10 5s7-2 10-5"
              fill="none"
              stroke="#007a4d"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div className="shipping-box__info">
            <div className="shipping-box__title">30 - DAY MONEY - BACK GUARANTEE</div>
            <p className="shipping-box__text">
              WE OFFER A 30-DAY MONEY-BACK GUARANTEE! SO BE SURE THAT YOU WILL GET YOUR RESULT, OR
              YOUR MONEY BACK!
            </p>
          </div>
        </div>

        <div className="shipping-box">
          <svg
            className="shipping-box__img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            role="img"
            aria-label="Tested for Quality"
          >
            <circle cx="32" cy="32" r="31" fill="none" stroke="#043927" strokeWidth="2" />
            <path
              d="M32 12l4.5 3 5.2-.6 2 5.2 4.5 3-.6 5.2 3 4.5-3 4.5.6 5.2-4.5 3-2 5.2-5.2-.6-4.5 3-4.5-3-5.2.6-2-5.2-4.5-3 .6-5.2-3-4.5 3-4.5-.6-5.2 4.5-3 2-5.2 5.2.6z"
              fill="#043927"
            />
            <path
              d="M32 17l3.6 2.4 4.2-.5 1.6 4.2 3.6 2.4-.5 4.2 2.4 3.6-2.4 3.6.5 4.2-3.6 2.4-1.6 4.2-4.2-.5-3.6 2.4-3.6-2.4-4.2.5-1.6-4.2-3.6-2.4.5-4.2-2.4-3.6 2.4-3.6-.5-4.2 3.6-2.4 1.6-4.2 4.2.5z"
              fill="#007a4d"
            />
            <path
              d="M24 32l5.5 5.5 11-11"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <div className="shipping-box__info">
            <div className="shipping-box__title">TESTED FOR QUALITY</div>
            <p className="shipping-box__text">
              EVERY PRODUCT WE MAKE IS HELD TO THE HIGHEST QUALITY STANDARDS TO ENSURE YOU RECEIVE
              ONLY THE BEST.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
