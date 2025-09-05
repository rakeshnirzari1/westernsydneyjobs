"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Briefcase } from "lucide-react"
import { useState } from "react"

export function JobSearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")
  const [jobType, setJobType] = useState("")

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 p-4 bg-card rounded-lg border border-border shadow-sm">
        {/* Job Title/Keywords */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            placeholder="Job title, keywords, or company"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 border-0 bg-background"
          />
        </div>

        {/* Location */}
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            placeholder="Location in Western Sydney"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10 h-12 border-0 bg-background"
          />
        </div>

        {/* Job Type */}
        <div className="w-full md:w-48">
          <Select value={jobType} onValueChange={setJobType}>
            <SelectTrigger className="h-12 border-0 bg-background">
              <Briefcase className="h-5 w-5 mr-2 text-muted-foreground" />
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="full-time">Full-time</SelectItem>
              <SelectItem value="part-time">Part-time</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
              <SelectItem value="casual">Casual</SelectItem>
              <SelectItem value="internship">Internship</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <Button size="lg" className="h-12 px-8 bg-accent hover:bg-accent/90 text-accent-foreground">
          <Search className="h-5 w-5 mr-2" />
          Search
        </Button>
      </div>
    </div>
  )
}
