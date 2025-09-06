// Mock data for development - replace with real database queries when integration is added

export interface Job {
  id: string
  title: string
  company: string
  location: string
  salary: string
  type: string
  category: string
  description: string
  requirements: string[]
  benefits: string[]
  postedDate: string
  featured: boolean
  remote: boolean
  experienceLevel: string
}

export interface Company {
  id: string
  name: string
  description: string
  website: string
  industry: string
  size: string
  location: string
  logo: string
}

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Software Developer",
    company: "TechCorp Australia",
    location: "Parramatta, NSW",
    salary: "$90,000 - $120,000",
    type: "Full-time",
    category: "Technology",
    description:
      "Join our dynamic team building cutting-edge web applications using modern technologies. You'll work on exciting projects that impact thousands of users across Australia.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "5+ years experience with React and Node.js",
      "Strong understanding of TypeScript",
      "Experience with cloud platforms (AWS/Azure)",
      "Excellent problem-solving skills",
    ],
    benefits: [
      "Competitive salary package",
      "Flexible working arrangements",
      "Health and dental insurance",
      "Professional development budget",
      "Modern office in Parramatta CBD",
    ],
    postedDate: "2024-01-15",
    featured: true,
    remote: true,
    experienceLevel: "Senior",
  },
  {
    id: "2",
    title: "Registered Nurse",
    company: "HealthCare Plus",
    location: "Blacktown, NSW",
    salary: "$65,000 - $80,000",
    type: "Full-time",
    category: "Healthcare",
    description:
      "Provide exceptional patient care in our state-of-the-art medical facility. Join a supportive team committed to improving health outcomes in Western Sydney.",
    requirements: [
      "Current AHPRA nursing registration",
      "2+ years clinical experience preferred",
      "Strong communication skills",
      "Ability to work in a fast-paced environment",
      "Commitment to patient-centered care",
    ],
    benefits: [
      "Excellent salary packaging options",
      "Shift allowances and overtime rates",
      "Professional development opportunities",
      "Employee assistance program",
      "On-site parking",
    ],
    postedDate: "2024-01-14",
    featured: true,
    remote: false,
    experienceLevel: "Mid-level",
  },
  {
    id: "3",
    title: "Marketing Coordinator",
    company: "EduFuture",
    location: "Penrith, NSW",
    salary: "$55,000 - $70,000",
    type: "Full-time",
    category: "Marketing",
    description:
      "Drive marketing initiatives for our innovative education technology platform. Perfect opportunity for a creative professional to make a real impact in the education sector.",
    requirements: [
      "Bachelor's degree in Marketing or related field",
      "2+ years marketing experience",
      "Social media management experience",
      "Creative thinking and problem-solving skills",
      "Proficiency in Adobe Creative Suite",
    ],
    benefits: [
      "Dynamic startup environment",
      "Equity participation options",
      "Flexible working hours",
      "Learning and development budget",
      "Team building activities",
    ],
    postedDate: "2024-01-13",
    featured: false,
    remote: true,
    experienceLevel: "Entry-level",
  },
]

export const mockCompanies: Company[] = [
  {
    id: "1",
    name: "TechCorp Australia",
    description:
      "Leading technology solutions provider in Western Sydney, specializing in web applications and digital transformation.",
    website: "https://techcorp.com.au",
    industry: "Technology",
    size: "100-500 employees",
    location: "Parramatta, NSW",
    logo: "/abstract-tech-logo.png",
  },
  {
    id: "2",
    name: "HealthCare Plus",
    description:
      "Premier healthcare services provider across Western Sydney, committed to exceptional patient care and community health.",
    website: "https://healthcareplus.com.au",
    industry: "Healthcare",
    size: "500-1000 employees",
    location: "Blacktown, NSW",
    logo: "/abstract-tech-logo.png",
  },
  {
    id: "3",
    name: "EduFuture",
    description:
      "Innovative education technology company developing next-generation learning platforms for Australian schools.",
    website: "https://edufuture.com.au",
    industry: "Education Technology",
    size: "50-100 employees",
    location: "Penrith, NSW",
    logo: "/abstract-tech-logo.png",
  },
]

// Mock API functions - replace with real database queries
export async function getJobs(filters?: any): Promise<Job[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  let filteredJobs = [...mockJobs]

  if (filters?.category && filters.category !== "all") {
    filteredJobs = filteredJobs.filter((job) => job.category.toLowerCase() === filters.category.toLowerCase())
  }

  if (filters?.type && filters.type !== "all") {
    filteredJobs = filteredJobs.filter((job) => job.type.toLowerCase() === filters.type.toLowerCase())
  }

  if (filters?.location) {
    filteredJobs = filteredJobs.filter((job) => job.location.toLowerCase().includes(filters.location.toLowerCase()))
  }

  if (filters?.search) {
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.company.toLowerCase().includes(filters.search.toLowerCase()),
    )
  }

  return filteredJobs
}

export async function getJobById(id: string): Promise<Job | null> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockJobs.find((job) => job.id === id) || null
}

export async function getCompanyById(id: string): Promise<Company | null> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockCompanies.find((company) => company.id === id) || null
}

export async function getFeaturedJobs(): Promise<Job[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockJobs.filter((job) => job.featured)
}
