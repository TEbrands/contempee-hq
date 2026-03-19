import React from 'react'
import MetricTile from '../shared/MetricTile'
import PlaceholderChart from '../shared/PlaceholderChart'

/**
 * Home
 * ────
 * Executive summary / landing view of the Contempee HQ dashboard.
 * Displays top-level KPIs and a snapshot of each business section.
 */
export default function Home() {
  return (
    <div className="px-8 py-8 flex flex-col gap-8">
      {/* Welcome */}
      <div>
        <h2 className="section-heading">Good morning, Contempee</h2>
        <p className="font-body text-sm text-brand-taupe mt-1">
          Here's your business overview for today.
        </p>
      </div>

      {/* Top KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricTile label="Revenue (MTD)"    value="£—"   delta="Connect data source" />
        <MetricTile label="Orders (MTD)"     value="—"    delta="Connect data source" />
        <MetricTile label="Avg Order Value"  value="£—"   delta="Connect data source" />
        <MetricTile label="Active Customers" value="—"    delta="Connect data source" />
      </div>

      {/* Section snapshots */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card flex flex-col gap-3">
          <h3 className="font-heading text-lg font-light text-[#3d3530]">Marketing</h3>
          <PlaceholderChart label="Revenue by channel — connect analytics" height="h-36" />
        </div>
        <div className="card flex flex-col gap-3">
          <h3 className="font-heading text-lg font-light text-[#3d3530]">Operations</h3>
          <PlaceholderChart label="Fulfilment rate & SLA — connect data" height="h-36" />
        </div>
        <div className="card flex flex-col gap-3">
          <h3 className="font-heading text-lg font-light text-[#3d3530]">Product & Inventory</h3>
          <PlaceholderChart label="Stock levels by SKU — connect inventory" height="h-36" />
        </div>
        <div className="card flex flex-col gap-3">
          <h3 className="font-heading text-lg font-light text-[#3d3530]">HR</h3>
          <PlaceholderChart label="Headcount & open roles — connect HRIS" height="h-36" />
        </div>
      </div>
    </div>
  )
}
