"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LayoutDashboard, Briefcase, Users, FileText, BarChart3, Settings, Plus, Building2 } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function DashboardSidebar() {
  const [activeTab, setActiveTab] = useState("overview")

  const menuItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard, count: null },
    { id: "jobs", label: "Job Postings", icon: Briefcase, count: 12 },
    { id: "applications", label: "Applications", icon: Users, count: 47 },
    { id: "candidates", label: "Candidates", icon: FileText, count: 23 },
    { id: "analytics", label: "Analytics", icon: BarChart3, count: null },
    { id: "company", label: "Company Profile", icon: Building2, count: null },
    { id: "settings", label: "Settings", icon: Settings, count: null },
  ]

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <Card>
        <CardContent className="p-4">
          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mb-3">
            <Plus className="h-4 w-4 mr-2" />
            Post New Job
          </Button>
          <Button variant="outline" className="w-full bg-transparent">
            <Users className="h-4 w-4 mr-2" />
            Browse Candidates
          </Button>
        </CardContent>
      </Card>

      {/* Navigation Menu */}
      <Card>
        <CardContent className="p-4">
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                    activeTab === item.id
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  {item.count && (
                    <Badge variant="secondary" className="text-xs">
                      {item.count}
                    </Badge>
                  )}
                </button>
              )
            })}
          </nav>
        </CardContent>
      </Card>

      {/* Account Info */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 bg-accent rounded-full flex items-center justify-center">
              <Building2 className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">TechCorp Australia</p>
              <p className="text-xs text-muted-foreground">Premium Plan</p>
            </div>
          </div>
          <Link href="/employer-dashboard/upgrade">
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              Upgrade Plan
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
