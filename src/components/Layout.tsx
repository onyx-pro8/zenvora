import { Outlet } from 'react-router-dom'
import { CartProvider } from '../context/CartContext'
import { AnnouncementBar } from './AnnouncementBar'
import { CartDrawer } from './CartDrawer'
import { Footer } from './Footer'
import { Header } from './Header'
import { SubHeader } from './SubHeader'

export function Layout() {
  return (
    <CartProvider>
      <div className="wrapper">
        <AnnouncementBar />
        <SubHeader />
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
