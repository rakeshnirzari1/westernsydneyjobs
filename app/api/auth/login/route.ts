import { type NextRequest, NextResponse } from "next/server"

// Mock user data - replace with real database queries
const mockUsers = [
  {
    id: "1",
    email: "john@example.com",
    password: "password123", // In real app, this would be hashed
    firstName: "John",
    lastName: "Doe",
    userType: "job_seeker",
    phone: "0400 000 000",
  },
  {
    id: "2",
    email: "employer@techcorp.com",
    password: "password123",
    firstName: "Sarah",
    lastName: "Smith",
    userType: "employer",
    phone: "0400 111 111",
    companyId: "1",
  },
]

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Find user by email
    const user = mockUsers.find((u) => u.email === email)

    if (!user || user.password !== password) {
      return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 })
    }

    // In a real app, you would:
    // 1. Hash and compare passwords
    // 2. Generate JWT token or session
    // 3. Set secure cookies

    const { password: _, ...userWithoutPassword } = user

    const response = NextResponse.json({
      success: true,
      user: userWithoutPassword,
      message: "Login successful",
    })

    // Set a simple session cookie (in production, use proper JWT/session management)
    response.cookies.set("auth-token", user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return response
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ success: false, error: "Login failed" }, { status: 500 })
  }
}
