import { BenefitsSection } from '../components/BenefitsSection'
import { Hero } from '../components/Hero'
import { HowToUse } from '../components/HowToUse'
import { IngredientsSection } from '../components/IngredientsSection'
import { LifestyleBanner } from '../components/LifestyleBanner'
import { ReviewsSection } from '../components/ReviewsSection'
import { ShippingSection } from '../components/ShippingSection'
import { SupplementFacts } from '../components/SupplementFacts'
import { TrustTicker } from '../components/TrustTicker'
import { WhyChoose } from '../components/WhyChoose'

export function HomePage() {
  return (
    <>
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
    </>
  )
}
