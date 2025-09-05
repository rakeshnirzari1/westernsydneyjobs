"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Star, Clock, CheckCircle, XCircle, Eye, MessageSquare, Download } from "lucide-react"
import { useState } from "react"

const recentApplications = [
  {
    id: 1,
    candidateName: "Sarah Johnson",
    candidateEmail: "sarah.johnson@email.com",
    jobTitle: "Senior Software Developer",
    appliedDate: "2024-01-16",
    status: "new",
    rating: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    experience: "5+ years",
    skills: ["React", "Node.js", "TypeScript"],
  },
  {
    id: 2,
    candidateName: "Michael Chen",
    candidateEmail: "michael.chen@email.com",
    jobTitle: "Marketing Manager",
    appliedDate: "2024-01-15",
    status: "reviewed",
    rating: 4,
    avatar: "/placeholder.svg?height=40&width=40",
    experience: "3+ years",
    skills: ["Digital Marketing", "SEO", "Analytics"],
  },
  {
    id: 3,
    candidateName: "Emma Wilson",
    candidateEmail: "emma.wilson@email.com",
    jobTitle: "Data Analyst",
    appliedDate: "2024-01-14",
    status: "shortlisted",
    rating: 5,
    avatar: "/placeholder.svg?height=40&width=40",
    experience: "4+ years",
    skills: ["Python", "SQL", "Tableau"],
  },
  {
    id: 4,
    candidateName: "James Rodriguez",
    candidateEmail: "james.rodriguez@email.com",
    jobTitle: "Project Manager",
    appliedDate: "2024-01-13",
    status: "rejected",
    rating: 2,
    avatar: "/placeholder.svg?height=40&width=40",
    experience: "2+ years",
    skills: ["Project Management", "Agile", "Leadership"],
  },
]

export function ApplicationsOverview() {
  const [selectedStatus, setSelectedStatus] = useState("all")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "reviewed":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "shortlisted":
        return "bg-green-100 text-green-800 border-green-200"
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "new":
        return <Clock className="h-4 w-4" />
      case "reviewed":
        return <Eye className="h-4 w-4" />
      case "shortlisted":
        return <CheckCircle className="h-4 w-4" />
      case "rejected":
        return <XCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  const filteredApplications = recentApplications.filter(
    (app) => selectedStatus === "all" || app.status === selectedStatus,
  )

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-accent" />
            Recent Applications
          </CardTitle>
          <div className="flex gap-2">
            {["all", "new", "reviewed", "shortlisted", "rejected"].map((status) => (
              <Button
                key={status}
                variant={selectedStatus === status ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedStatus(status)}
                className={selectedStatus === status ? "bg-accent text-accent-foreground" : ""}
              >
                {status === "all" ? "All" : status.charAt(0).toUpperCase() + status.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredApplications.map((application) => (
            <div key={application.id} className="border border-border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={application.avatar || "/placeholder.svg"} alt={application.candidateName} />
                    <AvatarFallback>
                      {application.candidateName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{application.candidateName}</h4>
                        <p className="text-sm text-muted-foreground">{application.candidateEmail}</p>
                      </div>
                      <Badge className={`text-xs ${getStatusColor(application.status)}`}>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(application.status)}
                          {application.status}
                        </span>
                      </Badge>
                    </div>

                    <div className="mb-3">
                      <p className="text-sm font-medium text-foreground mb-1">Applied for: {application.jobTitle}</p>
                      <p className="text-xs text-muted-foreground">
                        Applied on {new Date(application.appliedDate).toLocaleDateString()} • {application.experience}{" "}
                        experience
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1">
                        {renderStars(application.rating)}
                        {application.rating > 0 && (
                          <span className="text-xs text-muted-foreground ml-1">({application.rating}/5)</span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {application.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Resume
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredApplications.length === 0 && (
          <div className="text-center py-8">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No applications found for the selected status.</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
