import Link from "next/link"
import { Building2, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-accent" />
              <span className="font-bold text-xl">Western Sydney Jobs</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Connecting talent with opportunity in Western Sydney. Your gateway to career success in Australia's most
              dynamic region.
            </p>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>hello@westernsydneyjobs.com.au</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>1300 WSJ JOBS</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Western Sydney, NSW, Australia</span>
              </div>
            </div>
          </div>

          {/* Job Seekers */}
          <div>
            <h3 className="font-semibold mb-4">For Job Seekers</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/jobs" className="hover:text-accent transition-colors">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/companies" className="hover:text-accent transition-colors">
                  Company Profiles
                </Link>
              </li>
              <li>
                <Link href="/career-advice" className="hover:text-accent transition-colors">
                  Career Advice
                </Link>
              </li>
              <li>
                <Link href="/resume-builder" className="hover:text-accent transition-colors">
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link href="/salary-guide" className="hover:text-accent transition-colors">
                  Salary Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/post-job" className="hover:text-accent transition-colors">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/employer-dashboard" className="hover:text-accent transition-colors">
                  Employer Dashboard
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-accent transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/recruitment-services" className="hover:text-accent transition-colors">
                  Recruitment Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact Sales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-primary-foreground/80 mb-4 md:mb-0">
            © 2024 Western Sydney Jobs. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-primary-foreground/80">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
