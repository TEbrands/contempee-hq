import React from 'react'
import PlaceholderChart from '../shared/PlaceholderChart'

/**
 * CreativeInsights
 * ─────────────────
 * Tab: Marketing > Creative Insights
 * Analyses top-performing ad creatives, hooks, and visual formats.
 */
export default function CreativeInsights() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Top Performing Creatives</h4>
          <PlaceholderChart label="Creative thumbnails + CTR — connect Meta Ads" height="h-52" />
        </div>
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Hook Analysis</h4>
          <PlaceholderChart label="Hook type vs thumb-stop rate" height="h-52" />
        </div>
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Format Breakdown</h4>
          <PlaceholderChart label="Video vs static vs carousel performance" height="h-52" />
        </div>
      </div>

      <div className="card flex flex-col gap-3">
        <h4 className="font-heading text-base font-light text-[#3d3530]">Creative Fatigue Tracker</h4>
        <PlaceholderChart label="Frequency vs CTR over time — connect Meta Ads" height="h-44" />
      </div>
    </div>
  )
}
