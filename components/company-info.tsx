import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Users, Calendar, Globe } from "lucide-react"
import Image from "next/image"

interface CompanyInfoProps {
  company: {
    name: string
    logo: string
    industry: string
    size: string
    founded: string
    website: string
    description: string
    culture: string
  }
}

export function CompanyInfo({ company }: CompanyInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">About the Company</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Image
            src={company.logo || "/placeholder.svg"}
            alt={`${company.name} logo`}
            width={60}
            height={60}
            className="rounded-lg border border-border"
          />
          <div>
            <h3 className="font-semibold text-foreground">{company.name}</h3>
            <p className="text-sm text-muted-foreground">{company.industry}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{company.size}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Founded in {company.founded}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Visit Website
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-foreground mb-2">About Us</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{company.description}</p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Company Culture</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{company.culture}</p>
          </div>
        </div>

        <Button variant="outline" className="w-full bg-transparent">
          <Building2 className="h-4 w-4 mr-2" />
          View All Jobs at {company.name}
        </Button>
      </CardContent>
    </Card>
  )
}
