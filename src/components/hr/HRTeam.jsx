import React from 'react'
import MetricTile from '../shared/MetricTile'
import PlaceholderChart from '../shared/PlaceholderChart'

/**
 * HRTeam
 * ───────
 * Tab: HR > Team
 * Headcount, org structure, and open roles.
 */
export default function HRTeam() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricTile label="Total Headcount"  value="—"  delta="Connect HRIS" />
        <MetricTile label="Open Roles"       value="—"  delta="Connect ATS" />
        <MetricTile label="Avg Tenure"       value="— yrs" delta="Connect HRIS" />
        <MetricTile label="Departments"      value="—"  delta="Connect HRIS" />
      </div>

      <div className="card flex flex-col gap-3">
        <h4 className="font-heading text-base font-light text-[#3d3530]">Org Chart</h4>
        <div className="placeholder-block h-56">
          <span className="text-xs font-body text-brand-taupe">Org chart — connect HRIS</span>
        </div>
      </div>

      <div className="card flex flex-col gap-3">
        <h4 className="font-heading text-base font-light text-[#3d3530]">Open Roles Pipeline</h4>
        <PlaceholderChart label="Roles by stage in hiring pipeline" height="h-44" />
      </div>
    </div>
  )
}
