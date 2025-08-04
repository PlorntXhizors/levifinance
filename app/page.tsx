import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import ContactSection from "@/components/contact-section"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"
import StickyWhatsApp from "@/components/sticky-whatsapp"
import AccessibilityWidget from "@/components/accessibility-widget"
import Blog from "@/components/blog"
import Team from "@/components/team"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <a href="#main-content" className="skip-link">
        דלג לתוכן העיקרי
      </a>
      <Navbar />
      <div id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Team />
        <Services />
        <Testimonials />
        <Blog />
        <ContactSection />
      </div>
      <Footer />
      <StickyWhatsApp />
      <AccessibilityWidget />
    </main>
  )
}
