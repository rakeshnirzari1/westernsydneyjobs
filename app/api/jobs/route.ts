import { type NextRequest, NextResponse } from "next/server"
import { Database } from "@/lib/database"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    const filters = {
      search: searchParams.get("search") || undefined,
      category: searchParams.get("category") || undefined,
      suburb: searchParams.get("location") || undefined,
      job_type: searchParams.get("type") || undefined,
      salary_min: searchParams.get("minSalary") ? Number.parseInt(searchParams.get("minSalary")!) : undefined,
      experience_level: searchParams.get("experience") || undefined,
      is_featured: searchParams.get("featured") === "true" ? true : undefined,
      limit: searchParams.get("limit") ? Number.parseInt(searchParams.get("limit")!) : 20,
      offset: searchParams.get("offset") ? Number.parseInt(searchParams.get("offset")!) : 0,
    }

    const jobs = await Database.getJobs(filters)

    return NextResponse.json({
      success: true,
      data: jobs,
      total: jobs.length,
    })
  } catch (error) {
    console.error("Error fetching jobs:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch jobs" }, { status: 500 })
  }
}
