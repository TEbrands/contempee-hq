import React from 'react'
import MetricTile from '../shared/MetricTile'
import PlaceholderChart from '../shared/PlaceholderChart'

/**
 * ProductOverview
 * ────────────────
 * Tab: Product & Inventory > Overview
 * High-level snapshot of product performance and stock health.
 */
export default function ProductOverview() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricTile label="Active SKUs"        value="—"   delta="Connect inventory system" />
        <MetricTile label="Total Stock Value"  value="£—"  delta="Connect inventory system" />
        <MetricTile label="Low Stock Alerts"   value="—"   delta="Connect inventory system" />
        <MetricTile label="Best Seller (MTD)"  value="—"   delta="Connect sales data" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Revenue by Product</h4>
          <PlaceholderChart label="Top products by revenue this month" height="h-52" />
        </div>
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Stock Health</h4>
          <PlaceholderChart label="In stock / low stock / out of stock breakdown" height="h-52" />
        </div>
      </div>
    </div>
  )
}
