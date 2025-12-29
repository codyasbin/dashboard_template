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
import { 
  Plus, 
  Search, 
  MoreHorizontal, 
  Filter,
  Download,
  ChevronLeft,
  ChevronRight,
  Star,
  Package
} from "lucide-react"
import { productsData, productStatsData } from "@/data/products-data"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = productsData.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  const getStatusVariant = (status) => {
    switch (status) {
      case "active":
        return "success"
      case "out-of-stock":
        return "destructive"
      case "low-stock":
        return "warning"
      default:
        return "secondary"
    }
  }

  const getStatusLabel = (status) => {
    switch (status) {
      case "active":
        return "In Stock"
      case "out-of-stock":
        return "Out of Stock"
      case "low-stock":
        return "Low Stock"
      default:
        return status
    }
  }

  return (
    <PageContainer>
      {/* Page Header */}
      <PageHeader
        title="Products"
        description="Manage your product catalog and inventory."
      >
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          Add Product
        </Button>
      </PageHeader>

      {/* Stats */}
      <Section>
        <Grid cols={4}>
          <StatsCard
            title="Total Products"
            value={productStatsData.totalProducts}
            icon="Package"
            description="in catalog"
          />
          <StatsCard
            title="Active Products"
            value={productStatsData.activeProducts}
            icon="Package"
            trend="up"
            trendValue={3.2}
            description="available"
          />
          <StatsCard
            title="Out of Stock"
            value={productStatsData.outOfStock}
            icon="Package"
            description="need restock"
          />
          <StatsCard
            title="Low Stock"
            value={productStatsData.lowStock}
            icon="Package"
            trend="down"
            trendValue={12}
            description="below threshold"
          />
        </Grid>
      </Section>

      {/* Product List */}
      <Section>
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle>All Products</CardTitle>
                <CardDescription>
                  Manage your products, inventory, and pricing.
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
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
                    <th className="text-left font-medium py-3 px-2">Product</th>
                    <th className="text-left font-medium py-3 px-2 hidden md:table-cell">SKU</th>
                    <th className="text-left font-medium py-3 px-2 hidden lg:table-cell">Category</th>
                    <th className="text-right font-medium py-3 px-2">Price</th>
                    <th className="text-right font-medium py-3 px-2 hidden sm:table-cell">Stock</th>
                    <th className="text-left font-medium py-3 px-2">Status</th>
                    <th className="text-right font-medium py-3 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="border-b last:border-0 hover:bg-muted/50">
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                            <Package className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              {product.rating}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 hidden md:table-cell text-muted-foreground">
                        {product.sku}
                      </td>
                      <td className="py-3 px-2 hidden lg:table-cell">
                        <Badge variant="outline">{product.category}</Badge>
                      </td>
                      <td className="py-3 px-2 text-right font-medium">
                        {formatCurrency(product.price)}
                      </td>
                      <td className="py-3 px-2 text-right hidden sm:table-cell">
                        {product.stock}
                      </td>
                      <td className="py-3 px-2">
                        <Badge variant={getStatusVariant(product.status)}>
                          {getStatusLabel(product.status)}
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
                Showing {filteredProducts.length} of {productsData.length} products
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
