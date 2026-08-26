import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'
import { SITE } from '../data/site'

export function ContactsPage() {
  return (
    <PageShell
      title="Drop Us a Line"
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Contacts' }]}
    >
      <section className="contact-section">
        <p className="contact-description">
          We are committed to providing each of our valued clients excellent customer service. If
          you have any questions or concerns, please contact our customer service team toll free at{' '}
          <a className="phone__line" href={SITE.phoneHref}>
            {SITE.phone}
          </a>
          .
        </p>

        <div className="contact-info">
          <div className="contact-info__title">{SITE.company}</div>
          <div className="contact-info-box">
            <strong>Address:</strong> {SITE.addressLines.join(', ')}
          </div>
          <div className="contact-info-box">
            <strong>Email:</strong>{' '}
            <a className="email__line" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </div>
          <div className="contact-info-box">
            <strong>Hotline:</strong>{' '}
            <a className="phone__line" href={SITE.phoneHref}>
              {SITE.phone}
            </a>
          </div>
          <div className="contact-info-box">
            <strong>Hours of Operation:</strong> {SITE.hours}
          </div>
        </div>

        <p className="contact-note">
          Need to cancel? Visit our <Link to="/cancellation-request">Easy Cancel</Link> page.
        </p>
      </section>
    </PageShell>
  )
}
