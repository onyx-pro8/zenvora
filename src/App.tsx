import { AnnouncementBar } from './components/AnnouncementBar'
import { BenefitsSection } from './components/BenefitsSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowToUse } from './components/HowToUse'
import { IngredientsSection } from './components/IngredientsSection'
import { LifestyleBanner } from './components/LifestyleBanner'
import { ReviewsSection } from './components/ReviewsSection'
import { ShippingSection } from './components/ShippingSection'
import { SubHeader } from './components/SubHeader'
import { SupplementFacts } from './components/SupplementFacts'
import { TrustTicker } from './components/TrustTicker'
import { WhyChoose } from './components/WhyChoose'

function App() {
  return (
    <div className="wrapper">
      <AnnouncementBar />
      <SubHeader />
      <Header />
      <main>
        <Hero />
        <TrustTicker />
        <BenefitsSection />
        <IngredientsSection />
        <HowToUse />
        <LifestyleBanner />
        <SupplementFacts />
        <ReviewsSection />
        <TrustTicker />
        <WhyChoose />
        <ShippingSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
