import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DashboardStats } from "@/components/dashboard-stats"
import { JobManagement } from "@/components/job-management"
import { ApplicationsOverview } from "@/components/applications-overview"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function EmployerDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Employer Dashboard</h1>
            <p className="text-muted-foreground">Manage your job postings and track applications</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <DashboardSidebar />
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4 space-y-8">
              <DashboardStats />
              <JobManagement />
              <ApplicationsOverview />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
