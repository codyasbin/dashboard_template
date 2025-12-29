"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

// Map of path segments to display names
const pathNameMap = {
  "": "Dashboard",
  "analytics": "Analytics",
  "customers": "Customers",
  "products": "Products",
  "orders": "Orders",
  "settings": "Settings",
  "help": "Help & Support",
}

export function Breadcrumbs({ className }) {
  const pathname = usePathname()
  
  // Split the pathname into segments
  const segments = pathname.split("/").filter(Boolean)
  
  // Build breadcrumb items
  const breadcrumbs = [
    { label: "Home", href: "/", isHome: true },
    ...segments.map((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/")
      const label = pathNameMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ")
      return { label, href, isHome: false }
    }),
  ]

  // Don't show breadcrumbs if we're on the home page
  if (segments.length === 0) {
    return null
  }

  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center", className)}>
      <ol className="flex items-center gap-1 text-sm">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1
          
          return (
            <li key={crumb.href} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
              )}
              {isLast ? (
                <span className="font-medium text-foreground">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className={cn(
                    "text-muted-foreground hover:text-foreground transition-colors",
                    crumb.isHome && "flex items-center gap-1"
                  )}
                >
                  {crumb.isHome && <Home className="h-3.5 w-3.5" />}
                  <span className={crumb.isHome ? "sr-only sm:not-sr-only" : ""}>
                    {crumb.label}
                  </span>
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

// Breadcrumb components for more customization if needed
export function BreadcrumbList({ children, className }) {
  return (
    <ol className={cn("flex items-center gap-1 text-sm", className)}>
      {children}
    </ol>
  )
}

export function BreadcrumbItem({ children, className }) {
  return (
    <li className={cn("flex items-center gap-1", className)}>
      {children}
    </li>
  )
}

export function BreadcrumbLink({ href, children, className }) {
  return (
    <Link
      href={href}
      className={cn(
        "text-muted-foreground hover:text-foreground transition-colors",
        className
      )}
    >
      {children}
    </Link>
  )
}

export function BreadcrumbPage({ children, className }) {
  return (
    <span className={cn("font-medium text-foreground", className)}>
      {children}
    </span>
  )
}

export function BreadcrumbSeparator({ className }) {
  return (
    <ChevronRight className={cn("h-3.5 w-3.5 text-muted-foreground/50", className)} />
  )
}
