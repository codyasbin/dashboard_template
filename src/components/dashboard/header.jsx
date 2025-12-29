"use client"

import * as React from "react"
import { Bell, Search, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import ToggleTheme from "@/components/toggleTheme"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function DashboardHeader({ className }) {
  return (
    <header className={cn(
      "sticky top-0 z-50 flex h-14 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6",
      className
    )}>
      {/* Mobile sidebar trigger */}
      <SidebarTrigger className="md:hidden" />

      {/* Search */}
      <div className="flex-1 md:max-w-md">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full pl-8 h-9 bg-muted/50 border-0 focus-visible:bg-background"
          />
        </div>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative h-9 w-9">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground font-medium">
            3
          </span>
          <span className="sr-only">Notifications</span>
        </Button>

        {/* Theme Toggle */}
        <ToggleTheme />

        {/* User Avatar (mobile only, desktop is in sidebar) */}
        <Avatar className="h-8 w-8 md:hidden">
          <AvatarImage src="/avatars/user.png" alt="User" />
          <AvatarFallback className="bg-primary/10 text-primary text-xs">
            JD
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
