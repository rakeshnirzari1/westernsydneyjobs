import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, DollarSign, Building2, Heart, Share2, Bookmark } from "lucide-react"

interface JobHeaderProps {
  job: {
    title: string
    company: string
    location: string
    salary: string
    type: string
    posted: string
    featured: boolean
    urgent: boolean
    tags: string[]
  }
}

export function JobHeader({ job }: JobHeaderProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {job.featured && <Badge className="bg-accent text-accent-foreground">Featured</Badge>}
            {job.urgent && <Badge variant="destructive">Urgent</Badge>}
          </div>

          <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 text-balance">{job.title}</h1>

          <div className="flex items-center text-muted-foreground mb-3">
            <Building2 className="h-5 w-5 mr-2" />
            <span className="text-lg font-medium">{job.company}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              <span className="font-medium">{job.salary}</span>
            </div>
            <Badge variant="secondary">{job.type}</Badge>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>Posted {job.posted}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {job.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Heart className="h-4 w-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" size="sm">
            <Bookmark className="h-4 w-4 mr-2" />
            Bookmark
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </div>
    </div>
  )
}
