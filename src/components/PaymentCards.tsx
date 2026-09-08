const CARD_BRANDS = [
  { src: '/images/visa.svg', alt: 'Visa' },
  { src: '/images/master-card.BgjyoRBZ.svg', alt: 'Mastercard' },
  { src: '/images/amex.svg', alt: 'American Express' },
  { src: '/images/discover.svg', alt: 'Discover' },
  { src: '/images/paypal.svg', alt: 'PayPal' },
] as const

type PaymentCardsProps = {
  className?: string
}

export function PaymentCards({ className }: PaymentCardsProps) {
  return (
    <div className={className}>
      {CARD_BRANDS.map((brand) => (
        <img key={brand.alt} src={brand.src} alt={brand.alt} />
      ))}
    </div>
  )
}
