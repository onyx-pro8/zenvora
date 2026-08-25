import { SITE } from '../data/site'
import { useCountdown } from '../hooks/useCountdown'

export function AnnouncementBar() {
  const timer = useCountdown()

  return (
    <div className="announcement-bar">
      <div className="container">
        <div className="announcement-bar__content">
          <span className="announcement-bar__icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="announcement-bar__text">{SITE.announcement}</span>
          <span className="announcement-bar__timer" id="announcement-timer">
            {timer}
          </span>
        </div>
      </div>
    </div>
  )
}
