"use client"

import type React from "react"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface ProtectedRouteProps {
  children: React.ReactNode
  requireAuth?: boolean
  allowedUserTypes?: ("job_seeker" | "employer" | "admin")[]
  redirectTo?: string
}

export function ProtectedRoute({
  children,
  requireAuth = true,
  allowedUserTypes,
  redirectTo = "/login",
}: ProtectedRouteProps) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isLoading) return

    if (requireAuth && !user) {
      router.push(redirectTo)
      return
    }

    if (user && allowedUserTypes && !allowedUserTypes.includes(user.userType)) {
      router.push("/dashboard")
      return
    }
  }, [user, isLoading, requireAuth, allowedUserTypes, redirectTo, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  if (requireAuth && !user) {
    return null
  }

  if (user && allowedUserTypes && !allowedUserTypes.includes(user.userType)) {
    return null
  }

  return <>{children}</>
}
