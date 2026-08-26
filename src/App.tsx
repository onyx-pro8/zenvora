import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CancelPage } from './pages/CancelPage'
import { CartPage } from './pages/CartPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { ContactsPage } from './pages/ContactsPage'
import { HomePage } from './pages/HomePage'
import { PrivacyPage } from './pages/PrivacyPage'
import { ProductPage } from './pages/ProductPage'
import { RefundPage } from './pages/RefundPage'
import { ShippingPolicyPage } from './pages/ShippingPolicyPage'
import { ShopPage } from './pages/ShopPage'
import { TermsPage } from './pages/TermsPage'
import { VipPage } from './pages/VipPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="vip" element={<VipPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="privacy-policy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="cancellation-request" element={<CancelPage />} />
          <Route path="refund-policy" element={<RefundPage />} />
          <Route path="shipping-policy" element={<ShippingPolicyPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
