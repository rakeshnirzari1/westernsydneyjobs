import { neon } from "@neondatabase/serverless"

let sql: ReturnType<typeof neon> | null = null

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
    const db = getDatabase()

    let query = `
      SELECT j.*, c.name as company_name, c.logo_url as company_logo_url
      FROM jobs j
      LEFT JOIN companies c ON j.company_id = c.id
      WHERE j.is_filled = false AND (j.expires_at IS NULL OR j.expires_at > NOW())
    `

    const params: any[] = []
    let paramIndex = 1

    if (filters.search) {
      query += ` AND (j.title ILIKE $${paramIndex} OR j.description ILIKE $${paramIndex})`
      params.push(`%${filters.search}%`)
      paramIndex++
    }

    if (filters.category) {
      query += ` AND j.category = $${paramIndex}`
      params.push(filters.category)
      paramIndex++
    }

    if (filters.suburb) {
      query += ` AND j.suburb ILIKE $${paramIndex}`
      params.push(`%${filters.suburb}%`)
      paramIndex++
    }

    if (filters.job_type) {
      query += ` AND j.job_type = $${paramIndex}`
      params.push(filters.job_type)
      paramIndex++
    }

    if (filters.salary_min) {
      query += ` AND j.salary_min >= $${paramIndex}`
      params.push(filters.salary_min)
      paramIndex++
    }

    if (filters.experience_level) {
      query += ` AND j.experience_level = $${paramIndex}`
      params.push(filters.experience_level)
      paramIndex++
    }

    if (filters.is_featured !== undefined) {
      query += ` AND j.is_featured = $${paramIndex}`
      params.push(filters.is_featured)
      paramIndex++
    }

    query += ` ORDER BY j.is_featured DESC, j.created_at DESC`

    if (filters.limit) {
      query += ` LIMIT $${paramIndex}`
      params.push(filters.limit)
      paramIndex++
    }

    if (filters.offset) {
      query += ` OFFSET $${paramIndex}`
      params.push(filters.offset)
    }

    return (await db(query, params)) as Job[]
  }

  static async getJobById(id: number) {
    const db = getDatabase()
    const result = await db`
      SELECT j.*, c.name as company_name, c.logo_url as company_logo_url, c.website as company_website,
             c.description as company_description, c.address as company_address
      FROM jobs j
      LEFT JOIN companies c ON j.company_id = c.id
      WHERE j.id = ${id}
    `
    return result[0] as Job & { company_website?: string; company_description?: string; company_address?: string }
  }

  static async incrementJobViews(id: number) {
    const db = getDatabase()
    await db`UPDATE jobs SET views_count = views_count + 1 WHERE id = ${id}`
  }

  static async searchSuggestions(query: string) {
    const db = getDatabase()
    const results = await db`
      SELECT DISTINCT title
      FROM jobs
      WHERE title ILIKE ${`%${query}%`} AND is_filled = false
      ORDER BY title
      LIMIT 10
    `
    return results.map((r) => r.title)
  }

  static async getCategories() {
    const db = getDatabase()
    const results = await db`
      SELECT category, COUNT(*) as count
      FROM jobs
      WHERE is_filled = false AND (expires_at IS NULL OR expires_at > NOW())
      GROUP BY category
      ORDER BY count DESC
    `
    return results
  }

  static async getSuburbs() {
    const db = getDatabase()
    const results = await db`
      SELECT suburb, COUNT(*) as count
      FROM jobs
      WHERE is_filled = false AND (expires_at IS NULL OR expires_at > NOW())
      GROUP BY suburb
      ORDER BY count DESC
    `
    return results
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
    const values = fields.map((field) => data[field as keyof Job])

    if (fields.length === 0) return null

    const setClause = fields.map((field, index) => `${field} = $${index + 2}`).join(", ")
    const query = `UPDATE jobs SET ${setClause}, updated_at = NOW() WHERE id = $1 RETURNING *`

    const result = await db(query, [id, ...values])
    return result[0] as Job
  }

  static async deleteJob(id: number, employerId: number) {
    const db = getDatabase()
    await db`DELETE FROM jobs WHERE id = ${id} AND employer_id = ${employerId}`
  }
}
