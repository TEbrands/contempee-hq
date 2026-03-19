import React from 'react'
import MetricTile from '../shared/MetricTile'
import PlaceholderChart from '../shared/PlaceholderChart'

/**
 * CustomerService
 * ────────────────
 * Tab: Operations > Customer Service
 *
 * Tracks support ticket volume, response times, CSAT, and resolution rates.
 *
 * ── CODEOWNERS ──────────────────────────────────────────────────────────────
 * This file is owned by @Mscontempee26 via CODEOWNERS.
 * Changes to this file require a PR reviewed by @Mscontempee26.
 * ────────────────────────────────────────────────────────────────────────────
 */
export default function CustomerService() {
  return (
    <div className="flex flex-col gap-6">
      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricTile label="Open Tickets"       value="—"   delta="Connect helpdesk" />
        <MetricTile label="Avg First Response" value="— hrs" delta="Connect helpdesk" />
        <MetricTile label="Resolution Rate"    value="—%"  delta="Connect helpdesk" />
        <MetricTile label="CSAT Score"         value="—/5" delta="Connect survey tool" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Ticket Volume by Day</h4>
          <PlaceholderChart label="New vs resolved tickets — connect Gorgias / Zendesk" height="h-52" />
        </div>
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">CSAT Trend</h4>
          <PlaceholderChart label="Customer satisfaction score over time" height="h-52" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Top Issue Categories</h4>
          <PlaceholderChart label="Ticket reason breakdown — connect helpdesk tags" height="h-44" />
        </div>
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Agent Performance</h4>
          <PlaceholderChart label="Tickets closed per agent — connect helpdesk" height="h-44" />
        </div>
      </div>
    </div>
  )
}
