import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, Building2, Heart } from "lucide-react"
import Link from "next/link"

const featuredJobs = [
  {
    id: 1,
    title: "Senior Software Developer",
    company: "TechCorp Australia",
    location: "Parramatta, NSW",
    salary: "$90,000 - $120,000",
    type: "Full-time",
    posted: "2 days ago",
    description: "Join our innovative team building next-generation software solutions for Australian businesses.",
    tags: ["React", "Node.js", "AWS"],
  },
  {
    id: 2,
    title: "Marketing Manager",
    company: "Growth Marketing Co",
    location: "Blacktown, NSW",
    salary: "$75,000 - $95,000",
    type: "Full-time",
    posted: "1 day ago",
    description: "Lead marketing campaigns for our expanding client base across Western Sydney.",
    tags: ["Digital Marketing", "SEO", "Analytics"],
  },
  {
    id: 3,
    title: "Registered Nurse",
    company: "Western Sydney Health",
    location: "Liverpool, NSW",
    salary: "$70,000 - $85,000",
    type: "Full-time",
    posted: "3 hours ago",
    description: "Provide exceptional patient care in our modern healthcare facility.",
    tags: ["Healthcare", "Patient Care", "AHPRA"],
  },
  {
    id: 4,
    title: "Project Manager",
    company: "BuildRight Construction",
    location: "Penrith, NSW",
    salary: "$85,000 - $110,000",
    type: "Full-time",
    posted: "1 day ago",
    description: "Oversee major construction projects across Western Sydney's growing infrastructure.",
    tags: ["Construction", "Project Management", "Leadership"],
  },
  {
    id: 5,
    title: "Customer Service Representative",
    company: "ServiceFirst Solutions",
    location: "Campbelltown, NSW",
    salary: "$50,000 - $60,000",
    type: "Full-time",
    posted: "4 hours ago",
    description: "Deliver outstanding customer experiences in our award-winning support team.",
    tags: ["Customer Service", "Communication", "Problem Solving"],
  },
  {
    id: 6,
    title: "Data Analyst",
    company: "Analytics Pro",
    location: "Macquarie Park, NSW",
    salary: "$65,000 - $80,000",
    type: "Full-time",
    posted: "1 day ago",
    description: "Transform data into actionable insights for our diverse client portfolio.",
    tags: ["Python", "SQL", "Tableau"],
  },
]

export function FeaturedJobs() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Featured Job Opportunities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover hand-picked opportunities from Western Sydney's top employers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow duration-200 bg-card border-border">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-foreground mb-1 line-clamp-2">
                      {job.title}
                    </CardTitle>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Building2 className="h-4 w-4 mr-1" />
                      <span className="text-sm">{job.company}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{job.location}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span>{job.salary}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {job.type}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">{job.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{job.posted}</span>
                    </div>
                    <Link href={`/jobs/${job.id}`}>
                      <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/jobs">
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              View All Jobs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
