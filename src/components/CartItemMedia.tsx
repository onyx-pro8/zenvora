import { VIP } from '../data/site'
import type { CartItem } from '../context/CartContext'

function MembershipIcon({ label }: { label?: string }) {
  return (
    <span
      className="cart-item-icon"
      role={label ? 'img' : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 18h14v2H5v-2Zm1.5-9.5 3.2 2.4L12 4.5l2.3 6.4 3.2-2.4L16.8 16H7.2L6.5 8.5Z"
          fill="currentColor"
        />
      </svg>
    </span>
  )
}

export function CartItemMedia({
  item,
  className,
  decorative = false,
}: {
  item: CartItem
  className?: string
  decorative?: boolean
}) {
  const content =
    item.id === VIP.id ? (
      <MembershipIcon label={decorative ? undefined : item.name} />
    ) : (
      <img src={item.image} alt={decorative ? '' : item.name} />
    )

  if (!className) return content
  return <div className={className}>{content}</div>
}
