"use client"

import { useState } from "react"
import {
  PageContainer,
  PageHeader,
  Section,
  Grid,
  StatsCard,
} from "@/components/dashboard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Plus, 
  Search, 
  MoreHorizontal, 
  Filter,
  Download,
  ChevronLeft,
  ChevronRight,
  Eye
} from "lucide-react"
import { ordersData, orderStatsData } from "@/data/orders-data"

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredOrders = ordersData.filter(
    (order) =>
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

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

  const getStatusVariant = (status) => {
    switch (status) {
      case "delivered":
        return "success"
      case "shipped":
        return "info"
      case "processing":
        return "warning"
      case "pending":
        return "secondary"
      case "cancelled":
        return "destructive"
      default:
        return "default"
    }
  }

  const getPaymentVariant = (status) => {
    switch (status) {
      case "paid":
        return "success"
      case "pending":
        return "warning"
      case "refunded":
        return "secondary"
      default:
        return "default"
    }
  }

  return (
    <PageContainer>
      {/* Page Header */}
      <PageHeader
        title="Orders"
        description="Track and manage customer orders."
      >
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          Create Order
        </Button>
      </PageHeader>

      {/* Stats */}
      <Section>
        <Grid cols={4}>
          <StatsCard
            title="Total Orders"
            value={orderStatsData.totalOrders}
            icon="ShoppingCart"
            description="all time"
          />
          <StatsCard
            title="Pending Orders"
            value={orderStatsData.pendingOrders}
            icon="ShoppingCart"
            description="awaiting action"
          />
          <StatsCard
            title="Total Revenue"
            value={orderStatsData.totalRevenue}
            format="currency"
            icon="DollarSign"
            trend="up"
            trendValue={12.5}
            description="this month"
          />
          <StatsCard
            title="Avg. Order Value"
            value={orderStatsData.avgOrderValue}
            format="currency"
            icon="CreditCard"
            trend="up"
            trendValue={3.2}
            description="vs last month"
          />
        </Grid>
      </Section>

      {/* Orders List */}
      <Section>
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle>All Orders</CardTitle>
                <CardDescription>
                  View and manage all customer orders.
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search orders..."
                    className="w-full pl-8 sm:w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left font-medium py-3 px-2">Order ID</th>
                    <th className="text-left font-medium py-3 px-2">Customer</th>
                    <th className="text-left font-medium py-3 px-2 hidden md:table-cell">Date</th>
                    <th className="text-right font-medium py-3 px-2">Total</th>
                    <th className="text-left font-medium py-3 px-2 hidden lg:table-cell">Payment</th>
                    <th className="text-left font-medium py-3 px-2">Status</th>
                    <th className="text-right font-medium py-3 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="border-b last:border-0 hover:bg-muted/50">
                      <td className="py-3 px-2">
                        <span className="font-medium font-mono">{order.id}</span>
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={order.customer.avatar} alt={order.customer.name} />
                            <AvatarFallback className="bg-primary/10 text-primary text-xs">
                              {getInitials(order.customer.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{order.customer.name}</p>
                            <p className="text-xs text-muted-foreground hidden sm:block">
                              {order.items.length} item{order.items.length > 1 ? "s" : ""}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 hidden md:table-cell text-muted-foreground">
                        {new Date(order.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </td>
                      <td className="py-3 px-2 text-right font-medium">
                        {formatCurrency(order.total)}
                      </td>
                      <td className="py-3 px-2 hidden lg:table-cell">
                        <Badge variant={getPaymentVariant(order.paymentStatus)}>
                          {order.paymentStatus}
                        </Badge>
                      </td>
                      <td className="py-3 px-2">
                        <Badge variant={getStatusVariant(order.status)}>
                          {order.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-2 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Showing {filteredOrders.length} of {ordersData.length} orders
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>
    </PageContainer>
  )
}
