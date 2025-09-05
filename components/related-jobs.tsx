import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, DollarSign, Building2, Clock } from "lucide-react"
import Link from "next/link"

interface RelatedJobsProps {
  currentJobId: string
}

const relatedJobs = [
  {
    id: "2",
    title: "Frontend Developer",
    company: "WebTech Solutions",
    location: "Blacktown, NSW",
    salary: "$70,000 - $90,000",
    type: "Full-time",
    posted: "1 day ago",
    tags: ["React", "JavaScript", "CSS"],
  },
  {
    id: "3",
    title: "Full Stack Developer",
    company: "Digital Innovations",
    location: "Liverpool, NSW",
    salary: "$80,000 - $100,000",
    type: "Full-time",
    posted: "3 days ago",
    tags: ["Node.js", "React", "MongoDB"],
  },
  {
    id: "4",
    title: "Software Engineer",
    company: "Tech Startup Co",
    location: "Parramatta, NSW",
    salary: "$75,000 - $95,000",
    type: "Full-time",
    posted: "2 days ago",
    tags: ["Python", "Django", "PostgreSQL"],
  },
]

export function RelatedJobs({ currentJobId }: RelatedJobsProps) {
  const filteredJobs = relatedJobs.filter((job) => job.id !== currentJobId)

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-foreground mb-6">Similar Jobs You Might Like</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-foreground mb-2">
                <Link href={`/jobs/${job.id}`} className="hover:text-accent transition-colors">
                  {job.title}
                </Link>
              </CardTitle>
              <div className="flex items-center text-muted-foreground mb-2">
                <Building2 className="h-4 w-4 mr-1" />
                <span className="text-sm">{job.company}</span>
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
    </section>
  )
}
