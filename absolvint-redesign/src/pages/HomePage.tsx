import HeroSection       from '../components/home/HeroSection'
import ServicesSection   from '../components/home/ServicesSection'
import WhyUsSection      from '../components/home/WhyUsSection'
import LocationsSection  from '../components/home/LocationsSection'
import MissionSection    from '../components/home/MissionSection'
import CTAContactSection from '../components/home/CTAContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <LocationsSection />
      <MissionSection />
      <CTAContactSection />
    </>
  )
}
