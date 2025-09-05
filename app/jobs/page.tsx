import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { JobFilters } from "@/components/job-filters"
import { JobSearchBar } from "@/components/job-search-bar"
import { JobListings } from "@/components/job-listings"
import { JobStats } from "@/components/job-stats"

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Page Header */}
        <section className="bg-muted/30 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Find Jobs in Western Sydney</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore thousands of job opportunities from leading employers across Western Sydney
              </p>
            </div>
            <JobSearchBar />
            <JobStats />
          </div>
        </section>

        {/* Jobs Content */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className="lg:w-1/4">
                <JobFilters />
              </div>

              {/* Job Listings */}
              <div className="lg:w-3/4">
                <JobListings />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
