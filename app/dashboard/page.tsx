"use client"

import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, User, Building, FileText, Heart, Settings } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const { user, logout } = useAuth()

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please log in to access your dashboard</h1>
          <Link href="/login">
            <Button>Go to Login</Button>
          </Link>
        </div>
      </div>
    )
  }

  const isEmployer = user.userType === "employer"

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user.firstName}!</h1>
              <p className="text-gray-600">
                {isEmployer ? "Manage your job postings and applications" : "Find your next opportunity"}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant={isEmployer ? "default" : "secondary"}>
                {user.userType === "job_seeker" ? "Job Seeker" : "Employer"}
              </Badge>
              <Button variant="outline" onClick={logout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {isEmployer ? (
                <>
                  <Link href="/employer-dashboard">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Building className="h-4 w-4 mr-2" />
                      Employer Dashboard
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <FileText className="h-4 w-4 mr-2" />
                    Post New Job
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/jobs">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Browse Jobs
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Heart className="h-4 w-4 mr-2" />
                    Saved Jobs
                  </Button>
                </>
              )}
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Settings className="h-4 w-4 mr-2" />
                Account Settings
              </Button>
            </CardContent>
          </Card>

          {/* Profile Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>Name:</strong> {user.firstName} {user.lastName}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                {user.phone && (
                  <p>
                    <strong>Phone:</strong> {user.phone}
                  </p>
                )}
                <p>
                  <strong>Account Type:</strong> {user.userType.replace("_", " ")}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest actions on the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Account created</span>
                  <span className="text-gray-500">Today</span>
                </div>
                <div className="flex justify-between">
                  <span>Profile updated</span>
                  <span className="text-gray-500">Today</span>
                </div>
                {!isEmployer && (
                  <div className="flex justify-between">
                    <span>Browsed jobs</span>
                    <span className="text-gray-500">Today</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Content Based on User Type */}
        {isEmployer ? (
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Employer Resources</CardTitle>
                <CardDescription>Tools and guides to help you find the best candidates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto p-4 flex-col items-start bg-transparent">
                    <h3 className="font-semibold mb-1">Hiring Guide</h3>
                    <p className="text-sm text-gray-600">Best practices for effective recruitment</p>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex-col items-start bg-transparent">
                    <h3 className="font-semibold mb-1">Pricing Plans</h3>
                    <p className="text-sm text-gray-600">Choose the right plan for your needs</p>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Job Seeker Resources</CardTitle>
                <CardDescription>Tools to help you land your dream job</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto p-4 flex-col items-start bg-transparent">
                    <h3 className="font-semibold mb-1">Resume Builder</h3>
                    <p className="text-sm text-gray-600">Create a professional resume</p>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex-col items-start bg-transparent">
                    <h3 className="font-semibold mb-1">Interview Tips</h3>
                    <p className="text-sm text-gray-600">Ace your next interview</p>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}
