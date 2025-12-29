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
  Mail, 
  Phone, 
  MapPin,
  Filter,
  Download,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { customersData, customerStatsData } from "@/data/customers-data"

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCustomers = customersData.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase())
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

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "success"
      case "inactive":
        return "secondary"
      case "pending":
        return "warning"
      default:
        return "default"
    }
  }

  return (
    <PageContainer>
      {/* Page Header */}
      <PageHeader
        title="Customers"
        description="Manage your customer relationships and data."
      >
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          Add Customer
        </Button>
      </PageHeader>

      {/* Stats */}
      <Section>
        <Grid cols={4}>
          <StatsCard
            title="Total Customers"
            value={customerStatsData.totalCustomers}
            icon="Users"
            description="all time"
          />
          <StatsCard
            title="Active Customers"
            value={customerStatsData.activeCustomers}
            icon="Activity"
            trend="up"
            trendValue={5.2}
            description="this month"
          />
          <StatsCard
            title="New This Month"
            value={customerStatsData.newThisMonth}
            icon="Users"
            trend="up"
            trendValue={12.5}
            description="vs last month"
          />
          <StatsCard
            title="Churn Rate"
            value={customerStatsData.churnRate}
            format="percent"
            icon="Activity"
            trend="down"
            trendValue={0.8}
            description="vs last month"
          />
        </Grid>
      </Section>

      {/* Customer List */}
      <Section>
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle>All Customers</CardTitle>
                <CardDescription>
                  A list of all customers including their details and status.
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search customers..."
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
                    <th className="text-left font-medium py-3 px-2">Customer</th>
                    <th className="text-left font-medium py-3 px-2 hidden md:table-cell">Location</th>
                    <th className="text-left font-medium py-3 px-2 hidden lg:table-cell">Orders</th>
                    <th className="text-left font-medium py-3 px-2">Total Spent</th>
                    <th className="text-left font-medium py-3 px-2">Status</th>
                    <th className="text-right font-medium py-3 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomers.map((customer) => (
                    <tr key={customer.id} className="border-b last:border-0 hover:bg-muted/50">
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src={customer.avatar} alt={customer.name} />
                            <AvatarFallback className="bg-primary/10 text-primary text-xs">
                              {getInitials(customer.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{customer.name}</p>
                            <p className="text-xs text-muted-foreground">{customer.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 hidden md:table-cell">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span className="text-sm">{customer.location}</span>
                        </div>
                      </td>
                      <td className="py-3 px-2 hidden lg:table-cell">
                        {customer.totalOrders}
                      </td>
                      <td className="py-3 px-2 font-medium">
                        {formatCurrency(customer.totalSpent)}
                      </td>
                      <td className="py-3 px-2">
                        <Badge variant={getStatusColor(customer.status)}>
                          {customer.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-2 text-right">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Showing {filteredCustomers.length} of {customersData.length} customers
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
