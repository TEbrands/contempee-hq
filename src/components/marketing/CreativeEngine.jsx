import React from 'react'
import PlaceholderChart from '../shared/PlaceholderChart'

/**
 * CreativeEngine
 * ───────────────
 * Tab: Marketing > Creative Engine
 * Tracks the creative production pipeline — briefs, iterations, and launch status.
 */
export default function CreativeEngine() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Creative Pipeline</h4>
          <PlaceholderChart label="Kanban / status board — connect project management" height="h-56" />
        </div>
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Output Volume</h4>
          <PlaceholderChart label="Creatives produced per week — connect tracker" height="h-56" />
        </div>
      </div>

      <div className="card flex flex-col gap-3">
        <h4 className="font-heading text-base font-light text-[#3d3530]">Brief-to-Launch Timeline</h4>
        <PlaceholderChart label="Average days from brief to live — connect workflow data" height="h-40" />
      </div>
    </div>
  )
}
