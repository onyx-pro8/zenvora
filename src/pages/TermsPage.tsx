import { PageShell } from '../components/PageShell'
import { SITE } from '../data/site'

export function TermsPage() {
  return (
    <PageShell
      title={`Terms Of Service - ${SITE.name}`}
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Terms' }]}
    >
      <article className="legal-copy">
        <h3>SECTION 1 — ONLINE STORE TERMS</h3>
        <p>
          By accessing this website and purchasing Nitric Oxide Organic Beets, you agree to these
          Terms of Service and all applicable laws.
        </p>
        <h3>SECTION 2 — GENERAL CONDITIONS</h3>
        <p>
          We reserve the right to refuse service, limit quantities, or cancel orders at our
          discretion. Product descriptions and pricing may change without notice.
        </p>
        <h3>SECTION 3 — PRODUCTS</h3>
        <p>
          Dietary supplements are not intended to diagnose, treat, cure, or prevent any disease.
          Always consult a healthcare professional before use.
        </p>
        <h3>SECTION 4 — BILLING AND ACCOUNT INFORMATION</h3>
        <p>
          You agree to provide current, complete, and accurate purchase information. VIP memberships
          renew every 30 days until canceled.
        </p>
        <h3>SECTION 5 — CONTACT</h3>
        <p>
          For questions about these terms, contact {SITE.company} at {SITE.email} or {SITE.phone}.
        </p>
      </article>
    </PageShell>
  )
}
