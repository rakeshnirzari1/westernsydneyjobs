import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface JobBreadcrumbProps {
  jobTitle: string
}

export function JobBreadcrumb({ jobTitle }: JobBreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
      <Link href="/" className="flex items-center hover:text-accent transition-colors">
        <Home className="h-4 w-4 mr-1" />
        Home
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link href="/jobs" className="hover:text-accent transition-colors">
        Jobs
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-foreground font-medium truncate max-w-xs">{jobTitle}</span>
    </nav>
  )
}
