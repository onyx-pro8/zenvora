import { Fragment } from 'react'
import { TRUST_ITEMS } from '../data/site'

const checkIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="22 4 12 14.01 9 11.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

function TrustRow() {
  return (
    <div className="trust-ticker__items">
      {TRUST_ITEMS.map((item) => (
        <Fragment key={item}>
          <span className="trust-ticker__item">
            {checkIcon} {item}
          </span>
          <span className="trust-ticker__divider" />
        </Fragment>
      ))}
    </div>
  )
}

export function TrustTicker() {
  return (
    <div className="trust-ticker">
      <div className="trust-ticker__track">
        <TrustRow />
        <TrustRow />
      </div>
    </div>
  )
}
