"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, User, Building2, LogOut, Settings } from "lucide-react"
import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout, isLoading } = useAuth()

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-accent" />
              <span className="font-bold text-xl text-foreground">Western Sydney Jobs</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/jobs" className="text-foreground hover:text-accent transition-colors">
              Find Jobs
            </Link>
            <Link href="/companies" className="text-foreground hover:text-accent transition-colors">
              Companies
            </Link>
            {user?.userType === "employer" ? (
              <Link href="/employer-dashboard" className="text-foreground hover:text-accent transition-colors">
                Dashboard
              </Link>
            ) : (
              <Link href="/post-job" className="text-foreground hover:text-accent transition-colors">
                Post a Job
              </Link>
            )}
            <Link href="/resources" className="text-foreground hover:text-accent transition-colors">
              Resources
            </Link>
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoading ? (
              <div className="w-20 h-8 bg-gray-200 animate-pulse rounded" />
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{user.firstName}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <Link href="/jobs" className="text-foreground hover:text-accent transition-colors px-2 py-1">
                Find Jobs
              </Link>
              <Link href="/companies" className="text-foreground hover:text-accent transition-colors px-2 py-1">
                Companies
              </Link>
              {user?.userType === "employer" ? (
                <Link
                  href="/employer-dashboard"
                  className="text-foreground hover:text-accent transition-colors px-2 py-1"
                >
                  Dashboard
                </Link>
              ) : (
                <Link href="/post-job" className="text-foreground hover:text-accent transition-colors px-2 py-1">
                  Post a Job
                </Link>
              )}
              <Link href="/resources" className="text-foreground hover:text-accent transition-colors px-2 py-1">
                Resources
              </Link>

              <div className="flex flex-col space-y-2 pt-3 border-t border-border">
                {user ? (
                  <>
                    <Link href="/dashboard">
                      <Button variant="ghost" size="sm" className="justify-start w-full">
                        <User className="h-4 w-4 mr-2" />
                        Dashboard ({user.firstName})
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm" className="justify-start text-red-600" onClick={logout}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login">
                      <Button variant="ghost" size="sm" className="justify-start w-full">
                        <User className="h-4 w-4 mr-2" />
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
