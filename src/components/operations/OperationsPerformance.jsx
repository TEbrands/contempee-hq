import React from 'react'
import MetricTile from '../shared/MetricTile'
import PlaceholderChart from '../shared/PlaceholderChart'

/**
 * OperationsPerformance
 * ──────────────────────
 * Tab: Operations > Operations Performance
 *
 * Tracks fulfilment, dispatch, delivery, and warehouse KPIs.
 *
 * ── CODEOWNERS ──────────────────────────────────────────────────────────────
 * This file is owned by @Mscontempee26 via CODEOWNERS.
 * Changes to this file require a PR reviewed by @Mscontempee26.
 * ────────────────────────────────────────────────────────────────────────────
 */
export default function OperationsPerformance() {
  return (
    <div className="flex flex-col gap-6">
      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricTile label="Orders Dispatched"  value="—"   delta="Connect OMS / Shopify" />
        <MetricTile label="On-Time Dispatch"   value="—%"  delta="Connect fulfilment data" />
        <MetricTile label="Avg Dispatch Time"  value="— hrs" delta="Connect warehouse data" />
        <MetricTile label="Return Rate"        value="—%"  delta="Connect returns data" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Dispatch Volume by Day</h4>
          <PlaceholderChart label="Bar chart — orders dispatched daily" height="h-52" />
        </div>
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">SLA Compliance</h4>
          <PlaceholderChart label="% orders within SLA — rolling 30 days" height="h-52" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Carrier Performance</h4>
          <PlaceholderChart label="On-time delivery by carrier" height="h-44" />
        </div>
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Returns Analysis</h4>
          <PlaceholderChart label="Return reasons breakdown" height="h-44" />
        </div>
      </div>
    </div>
  )
}
