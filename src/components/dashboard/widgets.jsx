"use client"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  MoreHorizontal, 
  ArrowUpRight, 
  TrendingUp, 
  TrendingDown,
  Package,
  ShoppingBag,
  User,
  AlertTriangle,
  CreditCard,
  Settings
} from "lucide-react"

// Recent Sales Widget
export function RecentSales({ data, className }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>You made {data.length} sales recently</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((sale) => (
            <div key={sale.id} className="flex items-center gap-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src={sale.customer.avatar} alt={sale.customer.name} />
                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                  {getInitials(sale.customer.name)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{sale.customer.name}</p>
                <p className="text-xs text-muted-foreground truncate">
                  {sale.customer.email}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">+{formatCurrency(sale.amount)}</p>
                <Badge 
                  variant={sale.status === "completed" ? "default" : "secondary"}
                  className="text-[10px] px-1.5"
                >
                  {sale.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Top Products Widget
export function TopProducts({ data, className }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
    }).format(amount)
  }

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
        <CardDescription>Best performing products this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.slice(0, 5).map((product, index) => (
            <div key={product.id} className="flex items-center gap-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted text-sm font-medium">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{product.name}</p>
                <p className="text-xs text-muted-foreground">{product.category}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{formatCurrency(product.revenue)}</p>
                <span className={cn(
                  "flex items-center justify-end gap-0.5 text-xs",
                  product.growth >= 0 ? "text-success" : "text-destructive"
                )}>
                  {product.growth >= 0 ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {Math.abs(product.growth)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Notifications/Activity Feed
export function ActivityFeed({ data, className }) {
  const iconMap = {
    order: ShoppingBag,
    user: User,
    alert: AlertTriangle,
    payment: CreditCard,
    system: Settings,
  }

  const colorMap = {
    order: "bg-chart-1/10 text-chart-1",
    user: "bg-chart-2/10 text-chart-2",
    alert: "bg-warning/10 text-warning",
    payment: "bg-success/10 text-success",
    system: "bg-muted text-muted-foreground",
  }

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest notifications and updates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item) => {
            const Icon = iconMap[item.type] || Package
            return (
              <div key={item.id} className="flex gap-3">
                <div className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                  colorMap[item.type]
                )}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium">{item.title}</p>
                    {!item.read && (
                      <span className="h-2 w-2 rounded-full bg-primary shrink-0 mt-1.5" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground truncate">
                    {item.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

// Quick Actions Widget
export function QuickActions({ className }) {
  const actions = [
    { label: "Add Product", icon: Package, color: "bg-chart-1/10 text-chart-1" },
    { label: "New Order", icon: ShoppingBag, color: "bg-chart-2/10 text-chart-2" },
    { label: "Add Customer", icon: User, color: "bg-chart-3/10 text-chart-3" },
    { label: "View Reports", icon: TrendingUp, color: "bg-chart-4/10 text-chart-4" },
  ]

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks and shortcuts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto flex-col gap-2 py-4"
            >
              <div className={cn("rounded-lg p-2", action.color)}>
                <action.icon className="h-4 w-4" />
              </div>
              <span className="text-xs">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
