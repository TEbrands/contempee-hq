import React from 'react'
import PlaceholderChart from '../shared/PlaceholderChart'

/**
 * HRPerformance
 * ──────────────
 * Tab: HR > Performance
 * Tracks team performance reviews, OKRs, and engagement scores.
 */
export default function HRPerformance() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Performance Review Cycle</h4>
          <PlaceholderChart label="Review completion status — connect HRIS" height="h-52" />
        </div>
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Engagement Score</h4>
          <PlaceholderChart label="eNPS / engagement trend — connect survey tool" height="h-52" />
        </div>
      </div>
    </div>
  )
}
