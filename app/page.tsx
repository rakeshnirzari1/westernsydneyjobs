import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturedJobs } from "@/components/featured-jobs"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedJobs />
      </main>
      <Footer />
    </div>
  )
}
