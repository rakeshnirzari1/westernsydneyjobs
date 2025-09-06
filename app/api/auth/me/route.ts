import { type NextRequest, NextResponse } from "next/server"

// Mock user data
const mockUsers = [
  {
    id: "1",
    email: "john@example.com",
    firstName: "John",
    lastName: "Doe",
    userType: "job_seeker",
    phone: "0400 000 000",
  },
  {
    id: "2",
    email: "employer@techcorp.com",
    firstName: "Sarah",
    lastName: "Smith",
    userType: "employer",
    phone: "0400 111 111",
    companyId: "1",
  },
]

export async function GET(request: NextRequest) {
  try {
    const authToken = request.cookies.get("auth-token")?.value

    if (!authToken) {
      return NextResponse.json({ success: false, error: "Not authenticated" }, { status: 401 })
    }

    // Find user by token (in real app, decode JWT or lookup session)
    const user = mockUsers.find((u) => u.id === authToken)

    if (!user) {
      return NextResponse.json({ success: false, error: "Invalid session" }, { status: 401 })
    }

    return NextResponse.json({
      success: true,
      user,
    })
  } catch (error) {
    console.error("Auth check error:", error)
    return NextResponse.json({ success: false, error: "Authentication check failed" }, { status: 500 })
  }
}
