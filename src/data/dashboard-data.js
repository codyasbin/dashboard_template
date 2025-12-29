// ============================================
// DASHBOARD DUMMY DATA
// Replace this data with your API calls
// ============================================

// Stats Cards Data
export const statsData = [
  {
    id: "revenue",
    title: "Total Revenue",
    value: 45231.89,
    previousValue: 38420.50,
    format: "currency",
    icon: "DollarSign",
    trend: "up",
    trendValue: 20.1,
    description: "from last month",
  },
  {
    id: "subscriptions",
    title: "Subscriptions",
    value: 2350,
    previousValue: 2100,
    format: "number",
    icon: "Users",
    trend: "up",
    trendValue: 180.1,
    description: "+180 from last month",
  },
  {
    id: "sales",
    title: "Sales",
    value: 12234,
    previousValue: 11000,
    format: "number",
    icon: "CreditCard",
    trend: "up",
    trendValue: 19,
    description: "+19% from last month",
  },
  {
    id: "active",
    title: "Active Now",
    value: 573,
    previousValue: 480,
    format: "number",
    icon: "Activity",
    trend: "up",
    trendValue: 201,
    description: "+201 since last hour",
  },
]

// Revenue Chart Data (Monthly)
export const revenueChartData = [
  { month: "Jan", revenue: 4000, expenses: 2400 },
  { month: "Feb", revenue: 3000, expenses: 1398 },
  { month: "Mar", revenue: 9800, expenses: 2000 },
  { month: "Apr", revenue: 3908, expenses: 2780 },
  { month: "May", revenue: 4800, expenses: 1890 },
  { month: "Jun", revenue: 3800, expenses: 2390 },
  { month: "Jul", revenue: 4300, expenses: 3490 },
  { month: "Aug", revenue: 5100, expenses: 2100 },
  { month: "Sep", revenue: 4600, expenses: 2900 },
  { month: "Oct", revenue: 5400, expenses: 2300 },
  { month: "Nov", revenue: 6200, expenses: 2800 },
  { month: "Dec", revenue: 7100, expenses: 3100 },
]

// Sales by Category (Pie Chart)
export const salesByCategoryData = [
  { name: "Electronics", value: 4000, fill: "var(--chart-1)" },
  { name: "Clothing", value: 3000, fill: "var(--chart-2)" },
  { name: "Home & Garden", value: 2000, fill: "var(--chart-3)" },
  { name: "Sports", value: 2780, fill: "var(--chart-4)" },
  { name: "Others", value: 1890, fill: "var(--chart-5)" },
]

// Weekly Activity Data
export const weeklyActivityData = [
  { day: "Mon", visitors: 2400, pageViews: 4000, orders: 240 },
  { day: "Tue", visitors: 1398, pageViews: 3000, orders: 139 },
  { day: "Wed", visitors: 9800, pageViews: 12000, orders: 980 },
  { day: "Thu", visitors: 3908, pageViews: 5000, orders: 390 },
  { day: "Fri", visitors: 4800, pageViews: 6000, orders: 480 },
  { day: "Sat", visitors: 3800, pageViews: 4500, orders: 380 },
  { day: "Sun", visitors: 4300, pageViews: 5200, orders: 430 },
]

// Recent Sales/Transactions
export const recentSalesData = [
  {
    id: "1",
    customer: {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      avatar: "/avatars/01.png",
    },
    amount: 1999.00,
    status: "completed",
    date: "2024-12-29",
  },
  {
    id: "2",
    customer: {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      avatar: "/avatars/02.png",
    },
    amount: 39.00,
    status: "completed",
    date: "2024-12-28",
  },
  {
    id: "3",
    customer: {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      avatar: "/avatars/03.png",
    },
    amount: 299.00,
    status: "pending",
    date: "2024-12-28",
  },
  {
    id: "4",
    customer: {
      name: "William Kim",
      email: "will@email.com",
      avatar: "/avatars/04.png",
    },
    amount: 99.00,
    status: "completed",
    date: "2024-12-27",
  },
  {
    id: "5",
    customer: {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      avatar: "/avatars/05.png",
    },
    amount: 39.00,
    status: "completed",
    date: "2024-12-27",
  },
]

// Top Products
export const topProductsData = [
  {
    id: "1",
    name: "Wireless Headphones Pro",
    category: "Electronics",
    sales: 1234,
    revenue: 123400,
    growth: 12.5,
    image: "/products/headphones.png",
  },
  {
    id: "2",
    name: "Smart Watch Series X",
    category: "Electronics",
    sales: 856,
    revenue: 214000,
    growth: 8.2,
    image: "/products/watch.png",
  },
  {
    id: "3",
    name: "Running Shoes Elite",
    category: "Sports",
    sales: 743,
    revenue: 111450,
    growth: -2.1,
    image: "/products/shoes.png",
  },
  {
    id: "4",
    name: "Organic Cotton T-Shirt",
    category: "Clothing",
    sales: 621,
    revenue: 18630,
    growth: 15.7,
    image: "/products/tshirt.png",
  },
  {
    id: "5",
    name: "Home Security Camera",
    category: "Home & Garden",
    sales: 534,
    revenue: 80100,
    growth: 5.3,
    image: "/products/camera.png",
  },
]

// Notifications/Activity Feed
export const notificationsData = [
  {
    id: "1",
    type: "order",
    title: "New order received",
    description: "Order #12345 from Olivia Martin",
    time: "2 minutes ago",
    read: false,
  },
  {
    id: "2",
    type: "user",
    title: "New user registered",
    description: "Jackson Lee created an account",
    time: "1 hour ago",
    read: false,
  },
  {
    id: "3",
    type: "alert",
    title: "Low stock alert",
    description: "Wireless Headphones Pro is running low",
    time: "3 hours ago",
    read: true,
  },
  {
    id: "4",
    type: "payment",
    title: "Payment received",
    description: "$1,999.00 from William Kim",
    time: "5 hours ago",
    read: true,
  },
  {
    id: "5",
    type: "system",
    title: "System update completed",
    description: "Dashboard v2.0 is now live",
    time: "1 day ago",
    read: true,
  },
]

// Team Members
export const teamMembersData = [
  {
    id: "1",
    name: "Alex Thompson",
    role: "Admin",
    email: "alex@company.com",
    avatar: "/avatars/alex.png",
    status: "online",
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Manager",
    email: "sarah@company.com",
    avatar: "/avatars/sarah.png",
    status: "online",
  },
  {
    id: "3",
    name: "Mike Johnson",
    role: "Developer",
    email: "mike@company.com",
    avatar: "/avatars/mike.png",
    status: "away",
  },
  {
    id: "4",
    name: "Emily Davis",
    role: "Designer",
    email: "emily@company.com",
    avatar: "/avatars/emily.png",
    status: "offline",
  },
]

// Quick Stats for Mini Cards
export const quickStatsData = {
  todayOrders: 156,
  pendingOrders: 23,
  todayRevenue: 12450.00,
  conversionRate: 3.2,
  avgOrderValue: 79.81,
  returningCustomers: 68,
}
