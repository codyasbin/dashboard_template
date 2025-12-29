// ============================================
// ORDERS PAGE DUMMY DATA
// Replace this data with your API calls
// ============================================

export const ordersData = [
  {
    id: "ORD-001",
    customer: {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      avatar: "/avatars/01.png",
    },
    items: [
      { name: "Wireless Headphones Pro", quantity: 1, price: 299.99 },
      { name: "Organic Cotton T-Shirt", quantity: 2, price: 79.98 },
    ],
    total: 379.97,
    status: "delivered",
    paymentStatus: "paid",
    date: "2024-12-29",
    shippingAddress: "123 Main St, New York, NY 10001",
  },
  {
    id: "ORD-002",
    customer: {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      avatar: "/avatars/02.png",
    },
    items: [
      { name: "Smart Watch Series X", quantity: 1, price: 449.99 },
    ],
    total: 449.99,
    status: "shipped",
    paymentStatus: "paid",
    date: "2024-12-28",
    shippingAddress: "456 Oak Ave, Los Angeles, CA 90001",
  },
  {
    id: "ORD-003",
    customer: {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      avatar: "/avatars/03.png",
    },
    items: [
      { name: "Running Shoes Elite", quantity: 1, price: 189.99 },
      { name: "Yoga Mat Premium", quantity: 1, price: 49.99 },
    ],
    total: 239.98,
    status: "processing",
    paymentStatus: "paid",
    date: "2024-12-28",
    shippingAddress: "789 Pine St, Chicago, IL 60601",
  },
  {
    id: "ORD-004",
    customer: {
      name: "William Kim",
      email: "will@email.com",
      avatar: "/avatars/04.png",
    },
    items: [
      { name: "Home Security Camera", quantity: 2, price: 399.98 },
    ],
    total: 399.98,
    status: "pending",
    paymentStatus: "pending",
    date: "2024-12-27",
    shippingAddress: "321 Elm St, Houston, TX 77001",
  },
  {
    id: "ORD-005",
    customer: {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      avatar: "/avatars/05.png",
    },
    items: [
      { name: "Bluetooth Speaker", quantity: 1, price: 79.99 },
    ],
    total: 79.99,
    status: "delivered",
    paymentStatus: "paid",
    date: "2024-12-27",
    shippingAddress: "654 Maple Dr, Phoenix, AZ 85001",
  },
  {
    id: "ORD-006",
    customer: {
      name: "Liam Brown",
      email: "liam.brown@email.com",
      avatar: "/avatars/06.png",
    },
    items: [
      { name: "LED Desk Lamp", quantity: 3, price: 179.97 },
      { name: "Wireless Headphones Pro", quantity: 1, price: 299.99 },
    ],
    total: 479.96,
    status: "shipped",
    paymentStatus: "paid",
    date: "2024-12-26",
    shippingAddress: "987 Cedar Ln, San Diego, CA 92101",
  },
  {
    id: "ORD-007",
    customer: {
      name: "Emma Wilson",
      email: "emma.wilson@email.com",
      avatar: "/avatars/07.png",
    },
    items: [
      { name: "Organic Cotton T-Shirt", quantity: 5, price: 199.95 },
    ],
    total: 199.95,
    status: "cancelled",
    paymentStatus: "refunded",
    date: "2024-12-25",
    shippingAddress: "147 Birch St, Dallas, TX 75201",
  },
  {
    id: "ORD-008",
    customer: {
      name: "Noah Garcia",
      email: "noah.garcia@email.com",
      avatar: "/avatars/08.png",
    },
    items: [
      { name: "Smart Watch Series X", quantity: 1, price: 449.99 },
      { name: "Running Shoes Elite", quantity: 1, price: 189.99 },
    ],
    total: 639.98,
    status: "delivered",
    paymentStatus: "paid",
    date: "2024-12-24",
    shippingAddress: "258 Spruce Ave, Austin, TX 78701",
  },
]

export const orderStatsData = {
  totalOrders: 15678,
  pendingOrders: 234,
  completedOrders: 14892,
  cancelledOrders: 552,
  totalRevenue: 1234567.89,
  avgOrderValue: 78.76,
}
