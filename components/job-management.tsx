"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, Search, Filter, Edit, Eye, Trash2, Plus, MapPin, DollarSign, Users, Calendar } from "lucide-react"
import { useState } from "react"

const jobPostings = [
  {
    id: 1,
    title: "Senior Software Developer",
    location: "Parramatta, NSW",
    salary: "$90,000 - $120,000",
    type: "Full-time",
    status: "active",
    applications: 23,
    views: 156,
    posted: "2024-01-15",
    expires: "2024-02-15",
  },
  {
    id: 2,
    title: "Marketing Manager",
    location: "Blacktown, NSW",
    salary: "$75,000 - $95,000",
    type: "Full-time",
    status: "active",
    applications: 18,
    views: 89,
    posted: "2024-01-10",
    expires: "2024-02-10",
  },
  {
    id: 3,
    title: "Project Manager",
    location: "Penrith, NSW",
    salary: "$85,000 - $110,000",
    type: "Full-time",
    status: "paused",
    applications: 12,
    views: 67,
    posted: "2024-01-08",
    expires: "2024-02-08",
  },
  {
    id: 4,
    title: "Data Analyst",
    location: "Macquarie Park, NSW",
    salary: "$65,000 - $80,000",
    type: "Full-time",
    status: "expired",
    applications: 31,
    views: 203,
    posted: "2023-12-20",
    expires: "2024-01-20",
  },
]

export function JobManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200"
      case "paused":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "expired":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const filteredJobs = jobPostings.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || job.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-accent" />
            Job Postings
          </CardTitle>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Plus className="h-4 w-4 mr-2" />
            Post New Job
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search job postings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="paused">Paused</SelectItem>
              <SelectItem value="expired">Expired</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Job List */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div key={job.id} className="border border-border rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground text-lg">{job.title}</h3>
                    <Badge className={`text-xs ${getStatusColor(job.status)}`}>{job.status}</Badge>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{job.salary}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {job.type}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{job.applications} applications</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{job.views} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Expires {new Date(job.expires).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive hover:text-destructive bg-transparent"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-8">
            <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No job postings found matching your criteria.</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
