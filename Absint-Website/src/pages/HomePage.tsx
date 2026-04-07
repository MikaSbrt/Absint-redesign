import HeroSection      from '../components/home/HeroSection'
import LogoBar          from '../components/home/LogoBar'
import ProductsSection  from '../components/home/ProductsSection'
import TrustFeatures    from '../components/home/TrustFeatures'
import IndustriesSection from '../components/home/IndustriesSection'
import TechProcess      from '../components/home/TechProcess'
import ProductSpotlight from '../components/home/ProductSpotlight'
import ResourcesSection from '../components/home/ResourcesSection'
import CompanySection   from '../components/home/CompanySection'
import ContactSection   from '../components/home/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoBar />
      <ProductsSection />
      <TrustFeatures />
      <IndustriesSection />
      <TechProcess />
      <ProductSpotlight />
      <ResourcesSection />
      <CompanySection />
      <ContactSection />
    </>
  )
}
