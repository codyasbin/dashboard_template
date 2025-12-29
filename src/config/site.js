// Site configuration - Easy to modify for your needs
export const siteConfig = {
  name: "DashFlow",
  description: "A modern, scalable dashboard template built with Next.js and shadcn/ui",
  url: "https://dashflow.example.com",
  author: "Your Name",
  logo: "/logo.svg",
  
  // Navigation items - Add/remove as needed
  mainNav: [
    {
      title: "Dashboard",
      href: "/",
      icon: "LayoutDashboard",
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: "BarChart3",
    },
    {
      title: "Customers",
      href: "/customers",
      icon: "Users",
    },
    {
      title: "Products",
      href: "/products",
      icon: "Package",
    },
    {
      title: "Orders",
      href: "/orders",
      icon: "ShoppingCart",
    },
    {
      title: "Settings",
      href: "/settings",
      icon: "Settings",
    },
  ],

  // Quick actions for sidebar
  quickActions: [
    {
      title: "Add Customer",
      icon: "UserPlus",
      action: "addCustomer",
    },
    {
      title: "New Order",
      icon: "Plus",
      action: "newOrder",
    },
    {
      title: "Generate Report",
      icon: "FileText",
      action: "generateReport",
    },
  ],

  // Footer links
  footerLinks: [
    { title: "Documentation", href: "/docs" },
    { title: "Support", href: "/support" },
    { title: "Terms", href: "/terms" },
    { title: "Privacy", href: "/privacy" },
  ],
}

export const dashboardConfig = {
  // Currency settings
  currency: {
    code: "USD",
    symbol: "$",
    locale: "en-US",
  },

  // Date format
  dateFormat: {
    short: "MMM dd",
    long: "MMMM dd, yyyy",
    withTime: "MMM dd, yyyy HH:mm",
  },

  // Chart colors - These map to your CSS variables
  chartColors: {
    primary: "var(--chart-1)",
    secondary: "var(--chart-2)",
    tertiary: "var(--chart-3)",
    quaternary: "var(--chart-4)",
    quinary: "var(--chart-5)",
  },

  // Pagination defaults
  pagination: {
    defaultPageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
  },

  // Refresh intervals (in ms)
  refreshIntervals: {
    stats: 60000, // 1 minute
    charts: 300000, // 5 minutes
    notifications: 30000, // 30 seconds
  },
}
