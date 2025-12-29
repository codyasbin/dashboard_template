"use client"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

// Revenue Chart - Area Chart
export function RevenueChart({ data, className }) {
  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "var(--chart-1)",
    },
    expenses: {
      label: "Expenses",
      color: "var(--chart-2)",
    },
  }

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Revenue Overview</CardTitle>
        <CardDescription>Monthly revenue and expenses comparison</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-2)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--chart-2)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
            <XAxis 
              dataKey="month" 
              tickLine={false} 
              axisLine={false}
              className="text-xs fill-muted-foreground"
            />
            <YAxis 
              tickLine={false} 
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
              className="text-xs fill-muted-foreground"
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="var(--chart-1)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="var(--chart-2)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorExpenses)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

// Sales by Category - Pie Chart
export function SalesByCategoryChart({ data, className }) {
  const chartConfig = {
    electronics: { label: "Electronics", color: "var(--chart-1)" },
    clothing: { label: "Clothing", color: "var(--chart-2)" },
    home: { label: "Home & Garden", color: "var(--chart-3)" },
    sports: { label: "Sports", color: "var(--chart-4)" },
    others: { label: "Others", color: "var(--chart-5)" },
  }

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Sales by Category</CardTitle>
        <CardDescription>Distribution of sales across categories</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
              nameKey="name"
              strokeWidth={2}
              stroke="var(--background)"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: entry.fill }}
              />
              <span className="text-xs text-muted-foreground">{entry.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Weekly Activity - Bar Chart
export function WeeklyActivityChart({ data, className }) {
  const chartConfig = {
    visitors: { label: "Visitors", color: "var(--chart-1)" },
    pageViews: { label: "Page Views", color: "var(--chart-2)" },
    orders: { label: "Orders", color: "var(--chart-3)" },
  }

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Weekly Activity</CardTitle>
        <CardDescription>Visitors, page views, and orders by day</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
            <XAxis 
              dataKey="day" 
              tickLine={false} 
              axisLine={false}
              className="text-xs fill-muted-foreground"
            />
            <YAxis 
              tickLine={false} 
              axisLine={false}
              className="text-xs fill-muted-foreground"
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="visitors" fill="var(--chart-1)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="orders" fill="var(--chart-3)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

// Traffic Overview - Line Chart
export function TrafficChart({ data, className }) {
  const chartConfig = {
    views: { label: "Page Views", color: "var(--chart-1)" },
    uniqueVisitors: { label: "Unique Visitors", color: "var(--chart-3)" },
  }

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Traffic Overview</CardTitle>
        <CardDescription>Page views and unique visitors over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
            <XAxis 
              dataKey="date" 
              tickLine={false} 
              axisLine={false}
              className="text-xs fill-muted-foreground"
              tickFormatter={(value) => value.split(" ")[1]}
            />
            <YAxis 
              tickLine={false} 
              axisLine={false}
              className="text-xs fill-muted-foreground"
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="views"
              stroke="var(--chart-1)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
            <Line
              type="monotone"
              dataKey="uniqueVisitors"
              stroke="var(--chart-3)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
