import {
  PageContainer,
  PageHeader,
  Section,
  Grid,
  StatsCard,
  TrafficChart,
} from "@/components/dashboard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, CalendarDays, TrendingUp, TrendingDown, Globe, Monitor, Smartphone, Tablet } from "lucide-react"
import {
  trafficSourcesData,
  pageViewsData,
  deviceBreakdownData,
  topPagesData,
  analyticsSummaryData,
} from "@/data/analytics-data"

export const metadata = {
  title: "Analytics",
}

export default function AnalyticsPage() {
  const formatNumber = (num) => {
    return new Intl.NumberFormat("en-US").format(num)
  }

  return (
    <PageContainer>
      {/* Page Header */}
      <PageHeader
        title="Analytics"
        description="Track your website performance and user behavior."
      >
        <Button variant="outline" size="sm" className="gap-2">
          <CalendarDays className="h-4 w-4" />
          Last 30 days
        </Button>
        <Button size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </PageHeader>

      {/* Summary Stats */}
      <Section>
        <Grid cols={4}>
          <StatsCard
            title="Total Visitors"
            value={analyticsSummaryData.totalVisitors}
            trend={analyticsSummaryData.visitorsChange >= 0 ? "up" : "down"}
            trendValue={Math.abs(analyticsSummaryData.visitorsChange)}
            icon="Users"
            description="vs last period"
          />
          <StatsCard
            title="Page Views"
            value={analyticsSummaryData.pageViews}
            trend={analyticsSummaryData.pageViewsChange >= 0 ? "up" : "down"}
            trendValue={Math.abs(analyticsSummaryData.pageViewsChange)}
            icon="BarChart3"
            description="vs last period"
          />
          <StatsCard
            title="Avg. Session"
            value={analyticsSummaryData.avgSessionDuration}
            trend={analyticsSummaryData.sessionChange >= 0 ? "up" : "down"}
            trendValue={Math.abs(analyticsSummaryData.sessionChange)}
            icon="Activity"
            format="text"
            description="duration"
          />
          <StatsCard
            title="Bounce Rate"
            value={analyticsSummaryData.bounceRate}
            trend={analyticsSummaryData.bounceChange <= 0 ? "up" : "down"}
            trendValue={Math.abs(analyticsSummaryData.bounceChange)}
            icon="Activity"
            format="percent"
            description="vs last period"
          />
        </Grid>
      </Section>

      {/* Traffic Chart */}
      <Section>
        <TrafficChart data={pageViewsData} />
      </Section>

      {/* Traffic Sources & Devices */}
      <Section>
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Traffic Sources */}
          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>Where your visitors come from</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trafficSourcesData.map((source) => (
                  <div key={source.source} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{source.source}</span>
                      <span className="text-muted-foreground">
                        {formatNumber(source.visitors)} ({source.percentage}%)
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${source.percentage}%`,
                          backgroundColor: source.fill,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Device Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Device Breakdown</CardTitle>
              <CardDescription>Sessions by device type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {deviceBreakdownData.map((device) => {
                  const iconMap = {
                    Desktop: Monitor,
                    Mobile: Smartphone,
                    Tablet: Tablet,
                  }
                  const Icon = iconMap[device.device] || Globe
                  return (
                    <div
                      key={device.device}
                      className="flex items-center gap-4 rounded-lg border p-4"
                    >
                      <div className="rounded-lg bg-primary/10 p-3">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{device.device}</p>
                        <p className="text-sm text-muted-foreground">
                          {formatNumber(device.sessions)} sessions
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">{device.percentage}%</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Top Pages */}
      <Section>
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
            <CardDescription>Most visited pages on your site</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left font-medium py-3 px-2">Page</th>
                    <th className="text-right font-medium py-3 px-2">Views</th>
                    <th className="text-right font-medium py-3 px-2">Avg. Time</th>
                    <th className="text-right font-medium py-3 px-2">Bounce Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {topPagesData.map((page) => (
                    <tr key={page.page} className="border-b last:border-0">
                      <td className="py-3 px-2">
                        <div>
                          <p className="font-medium">{page.title}</p>
                          <p className="text-xs text-muted-foreground">{page.page}</p>
                        </div>
                      </td>
                      <td className="text-right py-3 px-2">{formatNumber(page.views)}</td>
                      <td className="text-right py-3 px-2">{page.avgTime}</td>
                      <td className="text-right py-3 px-2">{page.bounceRate}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </Section>
    </PageContainer>
  )
}
