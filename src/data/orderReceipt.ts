import type { CartItem } from '../context/CartContext'

export type OrderReceipt = {
  items: CartItem[]
  subtotal: number
  shipping: number
  total: number
  placedAt: string
  email: string
  hasSubscription: boolean
}

const ORDER_RECEIPT_KEY = 'zenvora-order-receipt'

export function saveOrderReceipt(receipt: OrderReceipt) {
  sessionStorage.setItem(ORDER_RECEIPT_KEY, JSON.stringify(receipt))
}

export function readOrderReceipt(): OrderReceipt | null {
  try {
    const raw = sessionStorage.getItem(ORDER_RECEIPT_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as OrderReceipt
    if (!parsed || !Array.isArray(parsed.items)) return null
    return parsed
  } catch {
    return null
  }
}
