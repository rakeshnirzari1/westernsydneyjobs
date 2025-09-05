import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Find Your Dream Job in <span className="text-accent">Western Sydney</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Connect with top employers in Australia's fastest-growing region. Discover opportunities that match your
            skills and career goals.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4 p-4 bg-card rounded-lg border border-border shadow-sm">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input placeholder="Job title, keywords, or company" className="pl-10 h-12 border-0 bg-background" />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input placeholder="Location in Western Sydney" className="pl-10 h-12 border-0 bg-background" />
              </div>
              <Button size="lg" className="h-12 px-8 bg-accent hover:bg-accent/90 text-accent-foreground">
                <Search className="h-5 w-5 mr-2" />
                Search Jobs
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">2,500+</div>
              <div className="text-muted-foreground">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">850+</div>
              <div className="text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">15,000+</div>
              <div className="text-muted-foreground">Job Seekers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
