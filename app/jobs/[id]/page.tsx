import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { JobHeader } from "@/components/job-header"
import { JobDescription } from "@/components/job-description"
import { JobApplication } from "@/components/job-application"
import { CompanyInfo } from "@/components/company-info"
import { RelatedJobs } from "@/components/related-jobs"
import { JobBreadcrumb } from "@/components/job-breadcrumb"
import { notFound } from "next/navigation"

// Mock job data - in a real app, this would come from a database
const getJobById = (id: string) => {
  const jobs = [
    {
      id: "1",
      title: "Senior Software Developer",
      company: "TechCorp Australia",
      location: "Parramatta, NSW",
      salary: "$90,000 - $120,000",
      type: "Full-time",
      posted: "2 days ago",
      description: `We are seeking a highly skilled Senior Software Developer to join our innovative team at TechCorp Australia. You will be responsible for designing, developing, and maintaining cutting-edge software solutions that serve thousands of users across Australia.

As a Senior Software Developer, you will work closely with our product team to translate business requirements into technical solutions. You'll mentor junior developers, participate in code reviews, and contribute to our technical architecture decisions.

This is an excellent opportunity for a passionate developer who wants to make a significant impact in a fast-growing technology company.`,
      requirements: [
        "5+ years of experience in software development",
        "Strong proficiency in React, Node.js, and TypeScript",
        "Experience with AWS cloud services",
        "Knowledge of database design and optimization",
        "Experience with agile development methodologies",
        "Strong problem-solving and communication skills",
        "Bachelor's degree in Computer Science or related field",
      ],
      responsibilities: [
        "Design and develop scalable web applications",
        "Collaborate with cross-functional teams to define and implement new features",
        "Mentor junior developers and conduct code reviews",
        "Participate in technical architecture discussions",
        "Optimize application performance and user experience",
        "Write clean, maintainable, and well-documented code",
        "Stay up-to-date with emerging technologies and best practices",
      ],
      benefits: [
        "Competitive salary package",
        "Flexible working arrangements",
        "Professional development opportunities",
        "Health and wellness programs",
        "Annual performance bonuses",
        "Modern office facilities",
        "Team building activities",
      ],
      tags: ["React", "Node.js", "AWS", "TypeScript"],
      featured: true,
      urgent: false,
      companyInfo: {
        name: "TechCorp Australia",
        logo: "/abstract-tech-logo.png",
        industry: "Technology",
        size: "200-500 employees",
        founded: "2015",
        website: "https://techcorp.com.au",
        description:
          "TechCorp Australia is a leading technology company specializing in innovative software solutions for businesses across Australia. We pride ourselves on creating cutting-edge products that solve real-world problems.",
        culture:
          "We foster a collaborative and inclusive work environment where innovation thrives. Our team values work-life balance, continuous learning, and making a positive impact through technology.",
      },
    },
    // Add more jobs as needed
  ]

  return jobs.find((job) => job.id === id)
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = getJobById(params.id)

  if (!job) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <JobBreadcrumb jobTitle={job.title} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <JobHeader job={job} />
              <JobDescription job={job} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <JobApplication job={job} />
              <CompanyInfo company={job.companyInfo} />
            </div>
          </div>

          <RelatedJobs currentJobId={job.id} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
