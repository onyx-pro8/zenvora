export const SUBSCRIPTION_CANCEL_NOTICE =
  'at least three business days before your next scheduled shipment'

export const BILLING_DESCRIPTOR = 'ZENVORA.COM'

export function formatOrderDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function getOrderConfirmationSubject(productLabel: string) {
  return `Order Confirmation — ${productLabel}`
}
