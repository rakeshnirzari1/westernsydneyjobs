import { type NextRequest, NextResponse } from "next/server"
import { Database } from "@/lib/database"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")

    if (!query || query.length < 2) {
      return NextResponse.json({ suggestions: [] })
    }

    const suggestions = await Database.searchSuggestions(query)
    return NextResponse.json({ suggestions })
  } catch (error) {
    console.error("Error fetching search suggestions:", error)
    return NextResponse.json({ suggestions: [] })
  }
}
