"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Clock, DollarSign, Building2, Heart, Bookmark, ArrowUpDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const jobListings = [
  {
    id: 1,
    title: "Senior Software Developer",
    company: "TechCorp Australia",
    location: "Parramatta, NSW",
    salary: "$90,000 - $120,000",
    type: "Full-time",
    posted: "2 days ago",
    description:
      "Join our innovative team building next-generation software solutions for Australian businesses. We're looking for an experienced developer with strong React and Node.js skills.",
    tags: ["React", "Node.js", "AWS", "TypeScript"],
    featured: true,
    urgent: false,
  },
  {
    id: 2,
    title: "Marketing Manager",
    company: "Growth Marketing Co",
    location: "Blacktown, NSW",
    salary: "$75,000 - $95,000",
    type: "Full-time",
    posted: "1 day ago",
    description:
      "Lead marketing campaigns for our expanding client base across Western Sydney. Experience with digital marketing and analytics required.",
    tags: ["Digital Marketing", "SEO", "Analytics", "Campaign Management"],
    featured: false,
    urgent: true,
  },
  {
    id: 3,
    title: "Registered Nurse",
    company: "Western Sydney Health",
    location: "Liverpool, NSW",
    salary: "$70,000 - $85,000",
    type: "Full-time",
    posted: "3 hours ago",
    description: "Provide exceptional patient care in our modern healthcare facility. AHPRA registration required.",
    tags: ["Healthcare", "Patient Care", "AHPRA", "Clinical Skills"],
    featured: true,
    urgent: false,
  },
  {
    id: 4,
    title: "Project Manager",
    company: "BuildRight Construction",
    location: "Penrith, NSW",
    salary: "$85,000 - $110,000",
    type: "Full-time",
    posted: "1 day ago",
    description:
      "Oversee major construction projects across Western Sydney's growing infrastructure. PMP certification preferred.",
    tags: ["Construction", "Project Management", "Leadership", "PMP"],
    featured: false,
    urgent: false,
  },
  {
    id: 5,
    title: "Customer Service Representative",
    company: "ServiceFirst Solutions",
    location: "Campbelltown, NSW",
    salary: "$50,000 - $60,000",
    type: "Full-time",
    posted: "4 hours ago",
    description: "Deliver outstanding customer experiences in our award-winning support team. Training provided.",
    tags: ["Customer Service", "Communication", "Problem Solving", "Training Provided"],
    featured: false,
    urgent: false,
  },
  {
    id: 6,
    title: "Data Analyst",
    company: "Analytics Pro",
    location: "Macquarie Park, NSW",
    salary: "$65,000 - $80,000",
    type: "Full-time",
    posted: "1 day ago",
    description:
      "Transform data into actionable insights for our diverse client portfolio. Strong SQL and Python skills required.",
    tags: ["Python", "SQL", "Tableau", "Data Analysis"],
    featured: false,
    urgent: false,
  },
  {
    id: 7,
    title: "Sales Executive",
    company: "SalesForce Solutions",
    location: "Parramatta, NSW",
    salary: "$60,000 - $80,000 + Commission",
    type: "Full-time",
    posted: "2 days ago",
    description:
      "Drive sales growth in our expanding Western Sydney territory. Excellent commission structure and career progression opportunities.",
    tags: ["Sales", "B2B", "Commission", "Territory Management"],
    featured: false,
    urgent: true,
  },
  {
    id: 8,
    title: "Graphic Designer",
    company: "Creative Studio West",
    location: "Blacktown, NSW",
    salary: "$55,000 - $70,000",
    type: "Full-time",
    posted: "3 days ago",
    description:
      "Create compelling visual designs for our diverse client base. Adobe Creative Suite expertise essential.",
    tags: ["Adobe Creative Suite", "Graphic Design", "Branding", "Print Design"],
    featured: false,
    urgent: false,
  },
]

export function JobListings() {
  const [sortBy, setSortBy] = useState("newest")
  const [savedJobs, setSavedJobs] = useState<number[]>([])

  const toggleSaveJob = (jobId: number) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter((id) => id !== jobId))
    } else {
      setSavedJobs([...savedJobs, jobId])
    }
  }

  const sortedJobs = [...jobListings].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.posted).getTime() - new Date(a.posted).getTime()
      case "salary-high":
        return (
          Number.parseInt(b.salary.split(" - ")[1].replace(/[^0-9]/g, "")) -
          Number.parseInt(a.salary.split(" - ")[1].replace(/[^0-9]/g, ""))
        )
      case "salary-low":
        return (
          Number.parseInt(a.salary.split(" - ")[0].replace(/[^0-9]/g, "")) -
          Number.parseInt(b.salary.split(" - ")[0].replace(/[^0-9]/g, ""))
        )
      default:
        return 0
    }
  })

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold text-foreground">{jobListings.length} Jobs Found</h2>
          <p className="text-sm text-muted-foreground">Showing results for Western Sydney</p>
        </div>

        <div className="flex items-center gap-2">
          <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="salary-high">Salary: High to Low</SelectItem>
              <SelectItem value="salary-low">Salary: Low to High</SelectItem>
              <SelectItem value="relevance">Most Relevant</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Job Cards */}
      <div className="space-y-4">
        {sortedJobs.map((job) => (
          <Card key={job.id} className="hover:shadow-lg transition-all duration-200 bg-card border-border relative">
            {job.featured && (
              <div className="absolute top-0 left-0 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-br-md">
                Featured
              </div>
            )}
            {job.urgent && (
              <div className="absolute top-0 right-0 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-bl-md">
                Urgent
              </div>
            )}

            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold text-foreground mb-2 pr-4">
                    <Link href={`/jobs/${job.id}`} className="hover:text-accent transition-colors">
                      {job.title}
                    </Link>
                  </CardTitle>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Building2 className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">{job.company}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSaveJob(job.id)}
                    className={`text-muted-foreground hover:text-accent ${
                      savedJobs.includes(job.id) ? "text-accent" : ""
                    }`}
                  >
                    <Bookmark className={`h-4 w-4 ${savedJobs.includes(job.id) ? "fill-current" : ""}`} />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <DollarSign className="h-4 w-4 mr-1" />
                    <span className="font-medium">{job.salary}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {job.type}
                  </Badge>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{job.posted}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{job.description}</p>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Quick Apply
                    </Button>
                    <Link href={`/jobs/${job.id}`}>
                      <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 pt-8">
        <Button variant="outline" size="sm" disabled>
          Previous
        </Button>
        <Button variant="default" size="sm" className="bg-accent text-accent-foreground">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  )
}
