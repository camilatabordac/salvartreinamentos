import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { CoursesSection } from "@/components/courses-section"
import { DifferentialsSection } from "@/components/differentials-section"
import { CertificationSection } from "@/components/certification-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <CoursesSection />
      <DifferentialsSection />
      <CertificationSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
