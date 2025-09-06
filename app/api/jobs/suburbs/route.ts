import { NextResponse } from "next/server"
import { Database } from "@/lib/database"

export async function GET() {
  try {
    const suburbs = await Database.getSuburbs()
    return NextResponse.json({ suburbs })
  } catch (error) {
    console.error("Error fetching suburbs:", error)
    return NextResponse.json({ suburbs: [] })
  }
}
