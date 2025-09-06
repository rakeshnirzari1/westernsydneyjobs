"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, Building2, Phone, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import type { Job } from "@/lib/database"

export function FeaturedJobs() {
  const [featuredJobs, setFeaturedJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchFeaturedJobs() {
      try {
        const response = await fetch("/api/jobs/featured")
        const result = await response.json()

        if (result.success) {
          setFeaturedJobs(result.data)
        }
      } catch (error) {
        console.error("Error fetching featured jobs:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedJobs()
  }, [])

  const formatSalary = (min?: number, max?: number, type?: string) => {
    if (!min && !max) return "Competitive"
    const format = (amount: number) => `$${amount.toLocaleString()}`
    if (min && max) return `${format(min)} - ${format(max)}`
    if (min) return `From ${format(min)}`
    if (max) return `Up to ${format(max)}`
    return "Competitive"
  }

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) return "Just posted"
    if (diffInHours < 24) return `${diffInHours} hours ago`
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays === 1) return "1 day ago"
    return `${diffInDays} days ago`
  }

  if (loading) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Featured Job Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover hand-picked opportunities from Western Sydney's top employers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded"></div>
                    <div className="h-3 bg-muted rounded w-2/3"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

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
                      <span className="text-sm">{job.company_name}</span>
                    </div>
                  </div>
                  <Badge className="bg-accent text-accent-foreground">Featured</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{job.suburb}, NSW</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span>{formatSalary(job.salary_min, job.salary_max, job.salary_type)}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {job.job_type}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">{job.description}</p>

                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline" className="text-xs">
                      {job.category}
                    </Badge>
                    {job.experience_level && (
                      <Badge variant="outline" className="text-xs">
                        {job.experience_level}
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-2 pt-2 border-t">
                    <div className="text-xs font-medium text-foreground">Apply directly:</div>
                    <div className="flex flex-col gap-1">
                      {job.contact_email && (
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Mail className="h-3 w-3 mr-1" />
                          <a href={`mailto:${job.contact_email}`} className="hover:text-accent">
                            {job.contact_email}
                          </a>
                        </div>
                      )}
                      {job.contact_phone && (
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Phone className="h-3 w-3 mr-1" />
                          <a href={`tel:${job.contact_phone}`} className="hover:text-accent">
                            {job.contact_phone}
                          </a>
                        </div>
                      )}
                      {job.application_url && (
                        <div className="flex items-center text-xs text-muted-foreground">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          <a
                            href={job.application_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent"
                          >
                            Apply Online
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{formatTimeAgo(job.created_at)}</span>
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
