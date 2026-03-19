import React from 'react'
import MetricTile from '../shared/MetricTile'
import PlaceholderChart from '../shared/PlaceholderChart'

/**
 * Email
 * ──────
 * Tab: Marketing > Email
 * Tracks email campaign performance — open rates, click rates, revenue, and list health.
 */
export default function Email() {
  return (
    <div className="flex flex-col gap-6">
      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricTile label="Open Rate"       value="—%"  delta="Connect Klaviyo / Mailchimp" />
        <MetricTile label="Click Rate"      value="—%"  delta="Connect email platform" />
        <MetricTile label="Revenue (Email)" value="£—"  delta="Connect attribution" />
        <MetricTile label="List Size"       value="—"   delta="Connect email platform" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Campaign Performance</h4>
          <PlaceholderChart label="Open & click rate by campaign" height="h-52" />
        </div>
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Revenue by Flow</h4>
          <PlaceholderChart label="Automated flow revenue breakdown" height="h-52" />
        </div>
      </div>

      <div className="card flex flex-col gap-3">
        <h4 className="font-heading text-base font-light text-[#3d3530]">List Growth & Health</h4>
        <PlaceholderChart label="Subscriber growth, unsubscribes, deliverability" height="h-40" />
      </div>
    </div>
  )
}
