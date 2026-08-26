import { PageShell } from '../components/PageShell'
import { SITE } from '../data/site'

export function PrivacyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy policy' }]}
    >
      <article className="legal-copy">
        <p>
          <strong>Last Updated:</strong> August 25, 2026
        </p>
        <p>
          {SITE.name} (“we,” “us,” or “our”) respects your privacy. This Privacy Policy explains how
          we collect, use, and share information when you visit our website or purchase Nitric Oxide
          Organic Beets.
        </p>
        <h3>Information You Provide Directly To Us</h3>
        <p>
          We may collect your name, email address, phone number, shipping address, billing details,
          and order information when you place an order, join VIP, contact support, or submit a
          cancellation request.
        </p>
        <h3>How We Collect and Use Your Personal Data</h3>
        <p>
          We use your information to process orders, provide customer service, send transactional
          emails, improve our website, and comply with legal obligations.
        </p>
        <h3>Sharing of Information</h3>
        <p>
          We may share information with payment processors, shipping partners, and service providers
          who help us operate the business. We do not sell your personal information.
        </p>
        <h3>Changes to This Privacy Policy</h3>
        <p>
          We may update this policy from time to time. Continued use of the site after changes means
          you accept the updated policy.
        </p>
        <h3>Contact Us</h3>
        <p>
          Questions? Email {SITE.email} or call {SITE.phone}.
        </p>
      </article>
    </PageShell>
  )
}
