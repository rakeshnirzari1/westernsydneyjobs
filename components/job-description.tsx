import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Target, Gift } from "lucide-react"

interface JobDescriptionProps {
  job: {
    description: string
    requirements: string[]
    responsibilities: string[]
    benefits: string[]
  }
}

export function JobDescription({ job }: JobDescriptionProps) {
  return (
    <div className="space-y-6">
      {/* Job Description */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-accent" />
            Job Description
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-sm max-w-none text-muted-foreground">
            {job.description.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Requirements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-accent" />
            Requirements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {job.requirements.map((requirement, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">{requirement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Responsibilities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-accent" />
            Key Responsibilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="h-2 w-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">{responsibility}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Benefits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5 text-accent" />
            Benefits & Perks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {job.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <Gift className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
