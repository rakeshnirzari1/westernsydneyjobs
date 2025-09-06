import { NextResponse } from "next/server"
import { Database } from "@/lib/database"

export async function GET() {
  try {
    const featuredJobs = await Database.getJobs({ is_featured: true, limit: 6 })

    return NextResponse.json({
      success: true,
      data: featuredJobs,
    })
  } catch (error) {
    console.error("Error fetching featured jobs:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch featured jobs" }, { status: 500 })
  }
}
