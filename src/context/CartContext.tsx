import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { PRODUCT, VIP } from '../data/site'

export type CartItem = {
  id: string
  name: string
  image?: string
  price: number
  qty: number
}

type CartContextValue = {
  items: CartItem[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (qty?: number, unitPrice?: number) => void
  addVip: () => void
  updateQty: (id: string, qty: number) => void
  removeItem: (id: string) => void
  clearCart: () => void
  itemCount: number
  subtotal: number
}

const CART_STORAGE_KEY = 'zenvora-cart'
const CartContext = createContext<CartContextValue | null>(null)

function readStoredCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as CartItem[]
    if (!Array.isArray(parsed)) return []
    return parsed.map((item) =>
      item.id === VIP.id ? { ...item, image: undefined } : item,
    )
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(readStoredCart)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const value = useMemo<CartContextValue>(() => {
    const addItem = (qty = 1, unitPrice = PRODUCT.price) => {
      setItems((prev) => {
        const existing = prev.find((item) => item.id === PRODUCT.id)
        if (existing) {
          return prev.map((item) =>
            item.id === PRODUCT.id
              ? { ...item, qty: item.qty + qty, price: unitPrice }
              : item,
          )
        }
        return [
          ...prev,
          {
            id: PRODUCT.id,
            name: `${PRODUCT.name} ${PRODUCT.tagline}`,
            image: PRODUCT.image,
            price: unitPrice,
            qty,
          },
        ]
      })
      setIsOpen(true)
    }

    const addVip = () => {
      setItems((prev) => {
        if (prev.some((item) => item.id === VIP.id)) return prev
        return [
          ...prev,
          {
            id: VIP.id,
            name: VIP.name,
            price: VIP.price,
            qty: 1,
          },
        ]
      })
      setIsOpen(true)
    }

    const updateQty = (id: string, qty: number) => {
      setItems((prev) =>
        prev
          .map((item) => (item.id === id ? { ...item, qty } : item))
          .filter((item) => item.qty > 0),
      )
    }

    const removeItem = (id: string) => {
      setItems((prev) => prev.filter((item) => item.id !== id))
    }

    const clearCart = () => setItems([])

    const itemCount = items.reduce((sum, item) => sum + item.qty, 0)
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)

    return {
      items,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem,
      addVip,
      updateQty,
      removeItem,
      clearCart,
      itemCount,
      subtotal,
    }
  }, [items, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
