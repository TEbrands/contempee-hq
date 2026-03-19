import React from 'react'
import MetricTile from '../shared/MetricTile'
import PlaceholderChart from '../shared/PlaceholderChart'

/**
 * MarketingPerformance
 * ─────────────────────
 * Tab: Marketing > Performance
 * Tracks paid and organic channel performance, ROAS, CAC, and revenue attribution.
 */
export default function MarketingPerformance() {
  return (
    <div className="flex flex-col gap-6">
      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricTile label="Total Ad Spend"  value="£—" delta="Connect Meta / Google Ads" />
        <MetricTile label="ROAS"            value="—x" delta="Connect ad platforms" />
        <MetricTile label="CAC"             value="£—" delta="Connect ad platforms" />
        <MetricTile label="Revenue (Paid)"  value="£—" delta="Connect attribution" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Spend vs Revenue by Channel</h4>
          <PlaceholderChart label="Bar chart — Meta, Google, Email, Organic" height="h-52" />
        </div>
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">ROAS Trend</h4>
          <PlaceholderChart label="Line chart — rolling 30 days" height="h-52" />
        </div>
      </div>

      <div className="card flex flex-col gap-3">
        <h4 className="font-heading text-base font-light text-[#3d3530]">Channel Breakdown Table</h4>
        <div className="placeholder-block h-40">
          <span className="text-xs font-body text-brand-taupe">Table — connect ad platform data</span>
        </div>
      </div>
    </div>
  )
}
