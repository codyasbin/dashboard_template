# DashFlow - Modern Dashboard Template

A beautiful, scalable, and production-ready dashboard template built with **Next.js 15**, **Tailwind CSS 4**, and **shadcn/ui** components.

## ✨ Features

- 🎨 **Beautiful UI** - Modern, clean design with attention to detail
- 🌙 **Dark Mode** - Full dark/light theme support with system preference detection
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- 🧱 **Component-Based** - Reusable components for rapid development
- 📊 **Charts & Graphs** - Pre-built chart components using Recharts
- 🎭 **Easy Theming** - CSS variables for easy color customization
- 📁 **Organized Structure** - Clean, scalable folder architecture
- 🔧 **Easy Data Replacement** - Dummy data in separate files for easy swapping

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── analytics/          # Analytics page
│   ├── customers/          # Customers page
│   ├── orders/             # Orders page
│   ├── products/           # Products page
│   ├── settings/           # Settings page
│   ├── help/               # Help & support page
│   ├── globals.css         # Global styles & theme
│   ├── layout.js           # Root layout
│   └── page.js             # Dashboard home
│
├── components/
│   ├── dashboard/          # Dashboard-specific components
│   │   ├── charts.jsx      # Chart components
│   │   ├── header.jsx      # Dashboard header
│   │   ├── page-layout.jsx # Layout components
│   │   ├── stats-card.jsx  # Stats card components
│   │   ├── widgets.jsx     # Widget components
│   │   └── index.js        # Barrel export
│   │
│   ├── ui/                 # Base UI components (shadcn/ui)
│   │
│   ├── providers/          # Context providers
│   └── app-sidebar.jsx     # Sidebar component
│
├── config/
│   └── site.js             # Site configuration
│
├── data/                   # Dummy data (replace with your API)
│   ├── analytics-data.js
│   ├── customers-data.js
│   ├── dashboard-data.js
│   ├── orders-data.js
│   └── products-data.js
│
├── hooks/                  # Custom React hooks
└── lib/                    # Utility functions
```

## 🎨 Customizing the Theme

All theme colors are defined in `src/app/globals.css` using CSS variables:

```css
:root {
  /* Primary - Main brand color */
  --primary: oklch(0.45 0.2 260);  /* Change the hue (260) for different colors */
}
```

### Color Hue Guide:
- `0` - Red | `30` - Orange | `60` - Yellow | `120` - Green
- `180` - Cyan | `240` - Blue | `260` - Indigo (default) | `300` - Purple

## 📊 Replacing Dummy Data

All dummy data is in `src/data/`. Replace with your API calls while keeping the same data structure.

## 🧩 Available Components

### Layout: `PageContainer`, `PageHeader`, `Section`, `Grid`
### Dashboard: `StatsCard`, `RevenueChart`, `SalesByCategoryChart`, `WeeklyActivityChart`, `RecentSales`, `TopProducts`, `ActivityFeed`
### UI: All shadcn/ui components

## 📦 Tech Stack

- **Next.js 15** - React framework
- **Tailwind CSS 4** - Utility-first CSS
- **shadcn/ui** - UI components
- **Recharts** - Charts
- **Lucide React** - Icons
- **next-themes** - Theme management

## 📄 License

MIT License - free for personal or commercial use.

---

Made with ❤️ using Next.js and shadcn/ui by codyasbin
