"use client"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  CreditCard, 
  Activity,
  Package,
  ShoppingCart,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"

const iconMap = {
  DollarSign,
  Users,
  CreditCard,
  Activity,
  Package,
  ShoppingCart,
  BarChart3,
}

export function StatsCard({ 
  title, 
  value, 
  description, 
  icon, 
  trend, 
  trendValue, 
  format = "number",
  className,
  ...props 
}) {
  const Icon = typeof icon === "string" ? iconMap[icon] : icon
  
  const formatValue = (val) => {
    if (format === "currency") {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(val)
    }
    if (format === "percent") {
      return `${val}%`
    }
    return new Intl.NumberFormat("en-US").format(val)
  }

  return (
    <Card className={cn("relative overflow-hidden", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {Icon && (
          <div className="rounded-lg bg-primary/10 p-2">
            <Icon className="h-4 w-4 text-primary" />
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formatValue(value)}</div>
        <div className="flex items-center gap-1 mt-1">
          {trend && (
            <span className={cn(
              "flex items-center text-xs font-medium",
              trend === "up" ? "text-success" : "text-destructive"
            )}>
              {trend === "up" ? (
                <ArrowUpRight className="h-3 w-3" />
              ) : (
                <ArrowDownRight className="h-3 w-3" />
              )}
              {trendValue}%
            </span>
          )}
          {description && (
            <span className="text-xs text-muted-foreground">{description}</span>
          )}
        </div>
      </CardContent>
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
    </Card>
  )
}

export function StatsCardSkeleton({ className }) {
  return (
    <Card className={cn("relative overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="h-4 w-24 bg-muted animate-pulse rounded" />
        <div className="h-8 w-8 bg-muted animate-pulse rounded-lg" />
      </CardHeader>
      <CardContent>
        <div className="h-8 w-32 bg-muted animate-pulse rounded mb-2" />
        <div className="h-3 w-24 bg-muted animate-pulse rounded" />
      </CardContent>
    </Card>
  )
}

export function MiniStatsCard({ title, value, icon, className }) {
  const Icon = typeof icon === "string" ? iconMap[icon] : icon
  
  return (
    <div className={cn(
      "flex items-center gap-3 rounded-lg border bg-card p-3",
      className
    )}>
      {Icon && (
        <div className="rounded-lg bg-primary/10 p-2 shrink-0">
          <Icon className="h-4 w-4 text-primary" />
        </div>
      )}
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground truncate">{title}</p>
        <p className="text-lg font-semibold truncate">{value}</p>
      </div>
    </div>
  )
}
