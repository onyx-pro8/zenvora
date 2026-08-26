import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ShippingSection } from '../components/ShippingSection'
import { TrustTicker } from '../components/TrustTicker'

export function CancelPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    subject: 'Cancellation Request',
    firstName: '',
    lastName: '',
    email: '',
    order: '',
  })

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <TrustTicker />
      <div className="breadcrumbs breadcrumbs-bar">
        <div className="container">
          <Link to="/">Home</Link> / <span>Easy Cancel</span>
        </div>
      </div>
      <section className="cancel-section">
        <div className="container privacy-content cancellation-form-wrapper">
          <h1>CANCELLATION REQUEST</h1>
          <p>
            Please fill out the information below. After completing and submitting this form, your
            account will be terminated and all billing will be stopped. Once the account has been
            canceled, you will receive a cancellation email confirmation.
          </p>

          {submitted ? (
            <div className="text-success">
              Thank you for your request. You can expect an email confirming the cancellation of
              your subscription.
            </div>
          ) : (
            <form id="cancel" onSubmit={onSubmit}>
              <div className="itm form-holder">
                <label>*Subject Line</label>
                <input
                  type="text"
                  className="form-control"
                  value={form.subject}
                  readOnly
                  required
                />
              </div>
              <div className="itm form-holder">
                <label>*First Name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                />
              </div>
              <div className="itm form-holder">
                <label>*Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                />
              </div>
              <div className="itm form-holder">
                <label>*Email</label>
                <input
                  type="email"
                  className="form-control"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="itm form-holder">
                <label>*Order #</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  value={form.order}
                  onChange={(e) => setForm({ ...form, order: e.target.value })}
                />
              </div>
              <div className="itm">
                <button className="mailTo" type="submit">
                  Send Mail
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
      <ShippingSection />
    </>
  )
}
