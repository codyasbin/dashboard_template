import {
  PageContainer,
  PageHeader,
  Section,
  Grid,
  StatsCard,
  RevenueChart,
  SalesByCategoryChart,
  WeeklyActivityChart,
  RecentSales,
  TopProducts,
  ActivityFeed,
  QuickActions,
} from "@/components/dashboard"
import { Button } from "@/components/ui/button"
import { Download, Plus, CalendarDays } from "lucide-react"
import {
  statsData,
  revenueChartData,
  salesByCategoryData,
  weeklyActivityData,
  recentSalesData,
  topProductsData,
  notificationsData,
} from "@/data/dashboard-data"

export default function DashboardPage() {
  return (
    <PageContainer>
      {/* Page Header */}
      <PageHeader
        title="Dashboard"
        description="Welcome back! Here's what's happening with your business."
      >
        <Button variant="outline" size="sm" className="gap-2">
          <CalendarDays className="h-4 w-4" />
          <span className="hidden sm:inline">Dec 2024</span>
        </Button>
        <Button size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Export</span>
        </Button>
      </PageHeader>

      {/* Stats Cards */}
      <Section>
        <Grid cols={4}>
          {statsData.map((stat) => (
            <StatsCard
              key={stat.id}
              title={stat.title}
              value={stat.value}
              description={stat.description}
              icon={stat.icon}
              trend={stat.trend}
              trendValue={stat.trendValue}
              format={stat.format}
            />
          ))}
        </Grid>
      </Section>

      {/* Charts Row */}
      <Section>
        <div className="grid gap-4 lg:grid-cols-7">
          <RevenueChart data={revenueChartData} className="lg:col-span-4" />
          <SalesByCategoryChart data={salesByCategoryData} className="lg:col-span-3" />
        </div>
      </Section>

      {/* Second Row - Activity & Quick Actions */}
      <Section>
        <div className="grid gap-4 lg:grid-cols-7">
          <WeeklyActivityChart data={weeklyActivityData} className="lg:col-span-4" />
          <QuickActions className="lg:col-span-3" />
        </div>
      </Section>

      {/* Third Row - Sales, Products, Activity */}
      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <RecentSales data={recentSalesData} />
          <TopProducts data={topProductsData} />
          <ActivityFeed data={notificationsData} />
        </div>
      </Section>
    </PageContainer>
  )
}
