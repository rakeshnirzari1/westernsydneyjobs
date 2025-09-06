import { neon } from "@neondatabase/serverless"

let sql: ReturnType<typeof neon> | null = null
const useFallback = false

function getDatabase() {
  if (!sql) {
    const databaseUrl = process.env.DATABASE_URL
    if (!databaseUrl) {
      console.error("[v0] DATABASE_URL environment variable is not set")
      console.error(
        "[v0] Available env vars:",
        Object.keys(process.env).filter(
          (key) => key.includes("DATABASE") || key.includes("POSTGRES") || key.includes("NEON"),
        ),
      )
      throw new Error("DATABASE_URL environment variable is not set")
    }
    console.log("[v0] Database connection initialized successfully")
    sql = neon(databaseUrl)
  }

  return sql
}

const mockJobs: Job[] = [
  {
    id: 1,
    company_id: 1,
    employer_id: 1,
    title: "Senior Software Developer",
    description:
      "Join our dynamic team developing cutting-edge web applications. Work with React, Node.js, and cloud technologies in a collaborative environment.",
    requirements:
      "• 5+ years experience in full-stack development\n• Proficiency in React, Node.js, TypeScript\n• Experience with AWS or Azure\n• Strong problem-solving skills",
    benefits:
      "• Competitive salary package\n• Flexible working arrangements\n• Professional development opportunities\n• Health insurance",
    salary_min: 90000,
    salary_max: 120000,
    salary_type: "annual",
    job_type: "full-time",
    category: "Information Technology",
    suburb: "Parramatta",
    postcode: "2150",
    experience_level: "senior",
    contact_email: "careers@techcorp.com.au",
    contact_phone: "02 9876 5432",
    application_url: "https://techcorp.com.au/careers/senior-developer",
    is_featured: true,
    is_filled: false,
    expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    views_count: 45,
    company_name: "TechCorp Australia",
    company_logo_url: "/abstract-tech-logo.png",
  },
  {
    id: 2,
    company_id: 1,
    employer_id: 1,
    title: "Frontend Developer",
    description:
      "Create amazing user experiences with modern web technologies. Perfect opportunity for a mid-level developer to grow their career.",
    requirements:
      "• 3+ years React/Vue.js experience\n• Strong CSS and JavaScript skills\n• Experience with responsive design\n• Git version control",
    benefits: "• Flexible hours\n• Learning budget\n• Modern office environment\n• Team events",
    salary_min: 70000,
    salary_max: 85000,
    salary_type: "annual",
    job_type: "full-time",
    category: "Information Technology",
    suburb: "Parramatta",
    postcode: "2150",
    experience_level: "mid",
    contact_email: "careers@techcorp.com.au",
    contact_phone: "02 9876 5432",
    application_url: "https://techcorp.com.au/careers/frontend-dev",
    is_featured: false,
    is_filled: false,
    expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    views_count: 23,
    company_name: "TechCorp Australia",
    company_logo_url: "/abstract-tech-logo.png",
  },
  {
    id: 3,
    company_id: 2,
    employer_id: 2,
    title: "Registered Nurse",
    description:
      "Provide exceptional patient care in our modern medical facility. Join a supportive team committed to healthcare excellence.",
    requirements:
      "• Current AHPRA registration\n• Minimum 2 years clinical experience\n• Excellent communication skills\n• Ability to work rotating shifts",
    benefits: "• Above award wages\n• Continuing education support\n• Employee assistance program\n• Parking provided",
    salary_min: 75000,
    salary_max: 85000,
    salary_type: "annual",
    job_type: "full-time",
    category: "Healthcare & Medical",
    suburb: "Blacktown",
    postcode: "2148",
    experience_level: "mid",
    contact_email: "hr@healthplus.com.au",
    contact_phone: "02 9765 4321",
    application_url: "https://healthplus.com.au/careers",
    is_featured: true,
    is_filled: false,
    expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    views_count: 67,
    company_name: "HealthPlus Medical",
    company_logo_url: "/medical-healthcare-logo.jpg",
  },
  {
    id: 4,
    company_id: 3,
    employer_id: 3,
    title: "Construction Project Manager",
    description:
      "Lead major construction projects across Western Sydney. Excellent opportunity for an experienced project manager.",
    requirements:
      "• Tertiary qualification in Construction Management\n• 7+ years project management experience\n• Strong leadership and communication skills\n• Knowledge of Australian building codes",
    benefits: "• Company vehicle\n• Performance bonuses\n• Professional development\n• Comprehensive insurance",
    salary_min: 110000,
    salary_max: 140000,
    salary_type: "annual",
    job_type: "full-time",
    category: "Construction & Trades",
    suburb: "Penrith",
    postcode: "2750",
    experience_level: "senior",
    contact_email: "careers@buildsafe.com.au",
    contact_phone: "02 9654 3210",
    application_url: "https://buildsafe.com.au/careers",
    is_featured: true,
    is_filled: false,
    expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    views_count: 89,
    company_name: "BuildSafe Construction",
    company_logo_url: "/construction-building-logo.jpg",
  },
  {
    id: 5,
    company_id: 2,
    employer_id: 2,
    title: "Medical Receptionist",
    description:
      "Front desk position in busy medical practice. Great opportunity for someone with customer service experience.",
    requirements:
      "• Previous reception experience preferred\n• Strong communication skills\n• Computer literacy\n• Medical terminology knowledge advantageous",
    benefits: "• Training provided\n• Friendly work environment\n• Career progression opportunities\n• Staff discounts",
    salary_min: 45000,
    salary_max: 55000,
    salary_type: "annual",
    job_type: "full-time",
    category: "Administration",
    suburb: "Blacktown",
    postcode: "2148",
    experience_level: "entry",
    contact_email: "hr@healthplus.com.au",
    contact_phone: "02 9765 4321",
    application_url: null,
    is_featured: false,
    is_filled: false,
    expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    views_count: 12,
    company_name: "HealthPlus Medical",
    company_logo_url: "/medical-healthcare-logo.jpg",
  },
  {
    id: 6,
    company_id: 3,
    employer_id: 3,
    title: "Apprentice Electrician",
    description:
      "Start your electrical career with Western Sydney's leading construction company. Full training and mentorship provided.",
    requirements:
      "• Currently enrolled in electrical apprenticeship\n• Strong work ethic and willingness to learn\n• Basic hand tools\n• Reliable transport",
    benefits: "• Competitive apprentice wages\n• Tool allowance\n• Mentorship program\n• Job security",
    salary_min: 35000,
    salary_max: 45000,
    salary_type: "annual",
    job_type: "full-time",
    category: "Construction & Trades",
    suburb: "Penrith",
    postcode: "2750",
    experience_level: "entry",
    contact_email: "apprentice@buildsafe.com.au",
    contact_phone: "02 9654 3210",
    application_url: null,
    is_featured: false,
    is_filled: false,
    expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    views_count: 34,
    company_name: "BuildSafe Construction",
    company_logo_url: "/construction-building-logo.jpg",
  },
]

export interface Job {
  id: number
  company_id: number
  employer_id: number
  title: string
  description: string
  requirements?: string
  benefits?: string
  salary_min?: number
  salary_max?: number
  salary_type: string
  job_type: string
  category: string
  suburb: string
  postcode?: string
  experience_level?: string
  contact_email: string
  contact_phone?: string
  application_url?: string
  is_featured: boolean
  is_filled: boolean
  expires_at?: string
  created_at: string
  updated_at: string
  views_count: number
  company_name?: string
  company_logo_url?: string
}

export interface Company {
  id: number
  employer_id: number
  name: string
  description?: string
  website?: string
  logo_url?: string
  address?: string
  suburb?: string
  postcode?: string
  phone?: string
  email?: string
  created_at: string
  updated_at: string
}

export interface Employer {
  id: number
  email: string
  name: string
  phone?: string
  created_at: string
  updated_at: string
  is_active: boolean
}

export class Database {
  // Job methods
  static async getJobs(
    filters: {
      search?: string
      category?: string
      suburb?: string
      job_type?: string
      salary_min?: number
      experience_level?: string
      is_featured?: boolean
      limit?: number
      offset?: number
    } = {},
  ) {
    try {
      const db = getDatabase()

      const whereConditions = []
      const params: Record<string, any> = {}

      if (filters.search) {
        whereConditions.push(
          `(j.title ILIKE '%' || ${filters.search} || '%' OR j.description ILIKE '%' || ${filters.search} || '%')`,
        )
      }

      if (filters.category) {
        whereConditions.push(`j.category = '${filters.category}'`)
      }

      if (filters.suburb) {
        whereConditions.push(`j.suburb ILIKE '%' || '${filters.suburb}' || '%'`)
      }

      if (filters.job_type) {
        whereConditions.push(`j.job_type = '${filters.job_type}'`)
      }

      if (filters.salary_min) {
        whereConditions.push(`j.salary_min >= ${filters.salary_min}`)
      }

      if (filters.experience_level) {
        whereConditions.push(`j.experience_level = '${filters.experience_level}'`)
      }

      if (filters.is_featured !== undefined) {
        whereConditions.push(`j.is_featured = ${filters.is_featured}`)
      }

      const whereClause = whereConditions.length > 0 ? ` AND ${whereConditions.join(" AND ")}` : ""
      const limitClause = filters.limit ? ` LIMIT ${filters.limit}` : ""
      const offsetClause = filters.offset ? ` OFFSET ${filters.offset}` : ""

      const result = await db`
        SELECT j.*, c.name as company_name, c.logo_url as company_logo_url
        FROM jobs j
        LEFT JOIN companies c ON j.company_id = c.id
        WHERE j.is_filled = false AND (j.expires_at IS NULL OR j.expires_at > NOW())
        ${db.unsafe(whereClause)}
        ORDER BY j.is_featured DESC, j.created_at DESC
        ${db.unsafe(limitClause)}
        ${db.unsafe(offsetClause)}
      `

      return result as Job[]
    } catch (error) {
      console.log("[v0] Database query failed, using fallback data:", error.message)

      let filteredJobs = [...mockJobs]

      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        filteredJobs = filteredJobs.filter(
          (job) => job.title.toLowerCase().includes(searchLower) || job.description.toLowerCase().includes(searchLower),
        )
      }

      if (filters.category) {
        filteredJobs = filteredJobs.filter((job) => job.category === filters.category)
      }

      if (filters.suburb) {
        filteredJobs = filteredJobs.filter((job) => job.suburb.toLowerCase().includes(filters.suburb.toLowerCase()))
      }

      if (filters.job_type) {
        filteredJobs = filteredJobs.filter((job) => job.job_type === filters.job_type)
      }

      if (filters.salary_min) {
        filteredJobs = filteredJobs.filter((job) => job.salary_min >= filters.salary_min)
      }

      if (filters.experience_level) {
        filteredJobs = filteredJobs.filter((job) => job.experience_level === filters.experience_level)
      }

      if (filters.is_featured !== undefined) {
        filteredJobs = filteredJobs.filter((job) => job.is_featured === filters.is_featured)
      }

      // Sort by featured first, then by created date
      filteredJobs.sort((a, b) => {
        if (a.is_featured && !b.is_featured) return -1
        if (!a.is_featured && b.is_featured) return 1
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      })

      // Apply pagination
      const offset = filters.offset || 0
      const limit = filters.limit || filteredJobs.length

      return filteredJobs.slice(offset, offset + limit)
    }
  }

  static async getJobById(id: number) {
    try {
      const db = getDatabase()
      const result = await db`
        SELECT j.*, c.name as company_name, c.logo_url as company_logo_url, c.website as company_website,
               c.description as company_description, c.address as company_address
        FROM jobs j
        LEFT JOIN companies c ON j.company_id = c.id
        WHERE j.id = ${id}
      `
      return result[0] as Job & { company_website?: string; company_description?: string; company_address?: string }
    } catch (error) {
      console.log("[v0] Database query failed, using fallback data:", error.message)
      const job = mockJobs.find((j) => j.id === id)
      if (job) {
        return {
          ...job,
          company_website: `https://${job.company_name?.toLowerCase().replace(/\s+/g, "")}.com.au`,
          company_description: `Leading company in ${job.category} sector`,
          company_address: `${job.suburb}, NSW ${job.postcode}`,
        }
      }
      return null
    }
  }

  static async incrementJobViews(id: number) {
    try {
      const db = getDatabase()
      await db`UPDATE jobs SET views_count = views_count + 1 WHERE id = ${id}`
    } catch (error) {
      console.log("[v0] Could not increment job views (fallback mode)")
    }
  }

  static async searchSuggestions(query: string) {
    try {
      const db = getDatabase()
      const results = await db`
        SELECT DISTINCT title
        FROM jobs
        WHERE title ILIKE ${`%${query}%`} AND is_filled = false
        ORDER BY title
        LIMIT 10
      `
      return results.map((r) => r.title)
    } catch (error) {
      console.log("[v0] Database query failed, using fallback suggestions:", error.message)
      const queryLower = query.toLowerCase()
      return mockJobs
        .filter((job) => job.title.toLowerCase().includes(queryLower))
        .map((job) => job.title)
        .slice(0, 10)
    }
  }

  static async getCategories() {
    try {
      const db = getDatabase()
      const results = await db`
        SELECT category, COUNT(*) as count
        FROM jobs
        WHERE is_filled = false AND (expires_at IS NULL OR expires_at > NOW())
        GROUP BY category
        ORDER BY count DESC
      `
      return results
    } catch (error) {
      console.log("[v0] Database query failed, using fallback categories:", error.message)
      const categoryCount = mockJobs.reduce(
        (acc, job) => {
          acc[job.category] = (acc[job.category] || 0) + 1
          return acc
        },
        {} as Record<string, number>,
      )

      return Object.entries(categoryCount)
        .map(([category, count]) => ({ category, count }))
        .sort((a, b) => b.count - a.count)
    }
  }

  static async getSuburbs() {
    try {
      const db = getDatabase()
      const results = await db`
        SELECT suburb, COUNT(*) as count
        FROM jobs
        WHERE is_filled = false AND (expires_at IS NULL OR expires_at > NOW())
        GROUP BY suburb
        ORDER BY count DESC
      `
      return results
    } catch (error) {
      console.log("[v0] Database query failed, using fallback suburbs:", error.message)
      const suburbCount = mockJobs.reduce(
        (acc, job) => {
          acc[job.suburb] = (acc[job.suburb] || 0) + 1
          return acc
        },
        {} as Record<string, number>,
      )

      return Object.entries(suburbCount)
        .map(([suburb, count]) => ({ suburb, count }))
        .sort((a, b) => b.count - a.count)
    }
  }

  // Employer methods
  static async getEmployerByEmail(email: string) {
    const db = getDatabase()
    const result = await db`SELECT * FROM employers WHERE email = ${email} AND is_active = true`
    return result[0] as Employer
  }

  static async createEmployer(data: { email: string; password_hash: string; name: string; phone?: string }) {
    const db = getDatabase()
    const result = await db`
      INSERT INTO employers (email, password_hash, name, phone)
      VALUES (${data.email}, ${data.password_hash}, ${data.name}, ${data.phone})
      RETURNING *
    `
    return result[0] as Employer
  }

  static async getEmployerJobs(employerId: number) {
    const db = getDatabase()
    return (await db`
      SELECT j.*, c.name as company_name
      FROM jobs j
      LEFT JOIN companies c ON j.company_id = c.id
      WHERE j.employer_id = ${employerId}
      ORDER BY j.created_at DESC
    `) as Job[]
  }

  // Company methods
  static async getEmployerCompanies(employerId: number) {
    const db = getDatabase()
    return (await db`
      SELECT * FROM companies WHERE employer_id = ${employerId}
      ORDER BY created_at DESC
    `) as Company[]
  }

  static async createCompany(data: Omit<Company, "id" | "created_at" | "updated_at">) {
    const db = getDatabase()
    const result = await db`
      INSERT INTO companies (employer_id, name, description, website, logo_url, address, suburb, postcode, phone, email)
      VALUES (${data.employer_id}, ${data.name}, ${data.description}, ${data.website}, ${data.logo_url}, 
              ${data.address}, ${data.suburb}, ${data.postcode}, ${data.phone}, ${data.email})
      RETURNING *
    `
    return result[0] as Company
  }

  static async createJob(data: Omit<Job, "id" | "created_at" | "updated_at" | "views_count">) {
    const db = getDatabase()
    const result = await db`
      INSERT INTO jobs (company_id, employer_id, title, description, requirements, benefits, 
                       salary_min, salary_max, salary_type, job_type, category, suburb, postcode,
                       experience_level, contact_email, contact_phone, application_url, is_featured, expires_at)
      VALUES (${data.company_id}, ${data.employer_id}, ${data.title}, ${data.description}, 
              ${data.requirements}, ${data.benefits}, ${data.salary_min}, ${data.salary_max},
              ${data.salary_type}, ${data.job_type}, ${data.category}, ${data.suburb}, ${data.postcode},
              ${data.experience_level}, ${data.contact_email}, ${data.contact_phone}, 
              ${data.application_url}, ${data.is_featured}, ${data.expires_at})
      RETURNING *
    `
    return result[0] as Job
  }

  static async updateJob(id: number, data: Partial<Job>) {
    const db = getDatabase()
    const fields = Object.keys(data).filter((key) => key !== "id")

    if (fields.length === 0) return null

    const updates = fields.map((field) => `${field} = '${data[field as keyof Job]}'`).join(", ")

    const result = await db`
      UPDATE jobs 
      SET ${db.unsafe(updates)}, updated_at = NOW() 
      WHERE id = ${id} 
      RETURNING *
    `
    return result[0] as Job
  }

  static async deleteJob(id: number, employerId: number) {
    const db = getDatabase()
    await db`DELETE FROM jobs WHERE id = ${id} AND employer_id = ${employerId}`
  }
}
