import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, Eye, Clock, CheckCircle, AlertCircle, UserCheck } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      title: "Active Jobs",
      value: "12",
      change: "+2 this week",
      trend: "up",
      icon: Briefcase,
      color: "text-blue-600",
    },
    {
      title: "Total Applications",
      value: "247",
      change: "+18 this week",
      trend: "up",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "Profile Views",
      value: "1,429",
      change: "+12% this month",
      trend: "up",
      icon: Eye,
      color: "text-purple-600",
    },
    {
      title: "Hired Candidates",
      value: "8",
      change: "+3 this month",
      trend: "up",
      icon: UserCheck,
      color: "text-orange-600",
    },
  ]

  const recentActivity = [
    {
      type: "application",
      message: "New application for Senior Developer position",
      time: "2 hours ago",
      status: "new",
    },
    {
      type: "job",
      message: "Marketing Manager job posting expired",
      time: "1 day ago",
      status: "warning",
    },
    {
      type: "hire",
      message: "Successfully hired candidate for Project Manager role",
      time: "2 days ago",
      status: "success",
    },
    {
      type: "application",
      message: "5 new applications for Data Analyst position",
      time: "3 days ago",
      status: "new",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-accent" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  {activity.status === "new" && <AlertCircle className="h-4 w-4 text-blue-600" />}
                  {activity.status === "warning" && <AlertCircle className="h-4 w-4 text-orange-600" />}
                  {activity.status === "success" && <CheckCircle className="h-4 w-4 text-green-600" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">{activity.message}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                <Badge variant={activity.status === "success" ? "default" : "secondary"} className="text-xs">
                  {activity.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
