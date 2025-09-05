"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Send, User, Mail, Phone, FileText } from "lucide-react"
import { useState } from "react"

interface JobApplicationProps {
  job: {
    title: string
    company: string
  }
}

export function JobApplication({ job }: JobApplicationProps) {
  const [isApplying, setIsApplying] = useState(false)
  const [applicationData, setApplicationData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
  })

  const handleQuickApply = () => {
    setIsApplying(true)
  }

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle application submission
    console.log("Application submitted:", applicationData)
    // Reset form or show success message
  }

  const handleInputChange = (field: string, value: string) => {
    setApplicationData((prev) => ({ ...prev, [field]: value }))
  }

  if (!isApplying) {
    return (
      <Card className="sticky top-8">
        <CardHeader>
          <CardTitle className="text-lg">Apply for this position</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-muted-foreground">
            <p className="mb-2">Ready to take the next step in your career?</p>
            <p>
              Apply now for the <strong>{job.title}</strong> position at <strong>{job.company}</strong>.
            </p>
          </div>

          <Button
            onClick={handleQuickApply}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            size="lg"
          >
            <Send className="h-4 w-4 mr-2" />
            Apply Now
          </Button>

          <div className="text-center">
            <span className="text-xs text-muted-foreground">or</span>
          </div>

          <Button variant="outline" className="w-full bg-transparent">
            <Upload className="h-4 w-4 mr-2" />
            Upload Resume
          </Button>

          <div className="text-xs text-muted-foreground text-center">
            By applying, you agree to our Terms of Service and Privacy Policy
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle className="text-lg">Apply for {job.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmitApplication} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Full Name
            </Label>
            <Input
              id="fullName"
              value={applicationData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={applicationData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              value={applicationData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="resume" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Resume/CV
            </Label>
            <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-2">Drag and drop your resume here, or click to browse</p>
              <Button variant="outline" size="sm" type="button">
                Choose File
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
            <Textarea
              id="coverLetter"
              value={applicationData.coverLetter}
              onChange={(e) => handleInputChange("coverLetter", e.target.value)}
              placeholder="Tell us why you're interested in this position..."
              rows={4}
            />
          </div>

          <div className="flex gap-2">
            <Button type="button" variant="outline" onClick={() => setIsApplying(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Send className="h-4 w-4 mr-2" />
              Submit Application
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
