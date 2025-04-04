import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import HighlightSection from "@/components/highlight-section"
import ServicesSection from "@/components/services-section"
import CtaSection from "@/components/cta-section"
import ProcessSection from "@/components/process-section"
import WorksSection from "@/components/works-section"
import CompanySection from "@/components/company-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <HighlightSection />
      <ServicesSection />
      <CtaSection />
      <ProcessSection />
      <WorksSection />
      <CompanySection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

