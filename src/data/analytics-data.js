// ============================================
// ANALYTICS PAGE DUMMY DATA
// Replace this data with your API calls
// ============================================

// Traffic Sources
export const trafficSourcesData = [
  { source: "Direct", visitors: 12453, percentage: 35, fill: "var(--chart-1)" },
  { source: "Organic Search", visitors: 8234, percentage: 23, fill: "var(--chart-2)" },
  { source: "Social Media", visitors: 6123, percentage: 17, fill: "var(--chart-3)" },
  { source: "Referral", visitors: 5432, percentage: 15, fill: "var(--chart-4)" },
  { source: "Email", visitors: 3567, percentage: 10, fill: "var(--chart-5)" },
]

// Page Views (Last 30 days)
export const pageViewsData = [
  { date: "Dec 01", views: 4200, uniqueVisitors: 3100 },
  { date: "Dec 02", views: 3800, uniqueVisitors: 2900 },
  { date: "Dec 03", views: 5100, uniqueVisitors: 3800 },
  { date: "Dec 04", views: 4600, uniqueVisitors: 3400 },
  { date: "Dec 05", views: 4900, uniqueVisitors: 3600 },
  { date: "Dec 06", views: 3200, uniqueVisitors: 2400 },
  { date: "Dec 07", views: 2800, uniqueVisitors: 2100 },
  { date: "Dec 08", views: 4500, uniqueVisitors: 3300 },
  { date: "Dec 09", views: 4800, uniqueVisitors: 3500 },
  { date: "Dec 10", views: 5200, uniqueVisitors: 3900 },
  { date: "Dec 11", views: 5600, uniqueVisitors: 4200 },
  { date: "Dec 12", views: 5100, uniqueVisitors: 3800 },
  { date: "Dec 13", views: 3400, uniqueVisitors: 2600 },
  { date: "Dec 14", views: 3100, uniqueVisitors: 2300 },
  { date: "Dec 15", views: 4700, uniqueVisitors: 3500 },
  { date: "Dec 16", views: 5000, uniqueVisitors: 3700 },
  { date: "Dec 17", views: 5400, uniqueVisitors: 4000 },
  { date: "Dec 18", views: 5800, uniqueVisitors: 4300 },
  { date: "Dec 19", views: 5300, uniqueVisitors: 3900 },
  { date: "Dec 20", views: 3600, uniqueVisitors: 2700 },
  { date: "Dec 21", views: 3300, uniqueVisitors: 2500 },
  { date: "Dec 22", views: 4900, uniqueVisitors: 3600 },
  { date: "Dec 23", views: 5200, uniqueVisitors: 3800 },
  { date: "Dec 24", views: 4100, uniqueVisitors: 3000 },
  { date: "Dec 25", views: 2900, uniqueVisitors: 2200 },
  { date: "Dec 26", views: 5500, uniqueVisitors: 4100 },
  { date: "Dec 27", views: 6200, uniqueVisitors: 4600 },
  { date: "Dec 28", views: 6800, uniqueVisitors: 5000 },
  { date: "Dec 29", views: 7100, uniqueVisitors: 5300 },
]

// Device Breakdown
export const deviceBreakdownData = [
  { device: "Desktop", sessions: 45234, percentage: 52 },
  { device: "Mobile", sessions: 34567, percentage: 40 },
  { device: "Tablet", sessions: 6890, percentage: 8 },
]

// Top Pages
export const topPagesData = [
  { page: "/", title: "Home", views: 23456, avgTime: "2:34", bounceRate: 32 },
  { page: "/products", title: "Products", views: 18234, avgTime: "3:12", bounceRate: 28 },
  { page: "/about", title: "About Us", views: 12890, avgTime: "1:45", bounceRate: 45 },
  { page: "/contact", title: "Contact", views: 8567, avgTime: "1:23", bounceRate: 52 },
  { page: "/blog", title: "Blog", views: 7234, avgTime: "4:56", bounceRate: 22 },
]

// Conversion Funnel
export const conversionFunnelData = [
  { stage: "Visitors", count: 45000, percentage: 100 },
  { stage: "Product Views", count: 28000, percentage: 62 },
  { stage: "Add to Cart", count: 12000, percentage: 27 },
  { stage: "Checkout", count: 6000, percentage: 13 },
  { stage: "Purchase", count: 3200, percentage: 7 },
]

// Geographic Data
export const geographicData = [
  { country: "United States", visitors: 45234, percentage: 42 },
  { country: "United Kingdom", visitors: 18567, percentage: 17 },
  { country: "Canada", visitors: 12345, percentage: 11 },
  { country: "Germany", visitors: 9876, percentage: 9 },
  { country: "Australia", visitors: 8765, percentage: 8 },
  { country: "France", visitors: 6543, percentage: 6 },
  { country: "Others", visitors: 7543, percentage: 7 },
]

// Analytics Summary Stats
export const analyticsSummaryData = {
  totalVisitors: 125678,
  visitorsChange: 12.5,
  pageViews: 456789,
  pageViewsChange: 8.3,
  avgSessionDuration: "3:24",
  sessionChange: 5.2,
  bounceRate: 34.5,
  bounceChange: -2.1,
}
