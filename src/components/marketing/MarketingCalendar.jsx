import React from 'react'
import PlaceholderChart from '../shared/PlaceholderChart'

/**
 * MarketingCalendar
 * ──────────────────
 * Tab: Marketing > Marketing Calendar
 * Displays the planned campaign calendar and upcoming launch schedule.
 */
export default function MarketingCalendar() {
  return (
    <div className="flex flex-col gap-6">
      <div className="card flex flex-col gap-3">
        <h4 className="font-heading text-base font-light text-[#3d3530]">Campaign Calendar</h4>
        <PlaceholderChart label="Monthly calendar view — connect campaign planner" height="h-72" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Upcoming Launches</h4>
          <div className="placeholder-block h-40">
            <span className="text-xs font-body text-brand-taupe">List — connect campaign data</span>
          </div>
        </div>
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Key Dates & Promotions</h4>
          <div className="placeholder-block h-40">
            <span className="text-xs font-body text-brand-taupe">List — connect promotions calendar</span>
          </div>
        </div>
      </div>
    </div>
  )
}
