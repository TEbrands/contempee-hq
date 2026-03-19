import React from 'react'
import PlaceholderChart from '../shared/PlaceholderChart'

/**
 * Onboarding
 * ───────────
 * Tab: HR > Onboarding
 * Tracks new hire onboarding progress and time-to-productivity.
 */
export default function Onboarding() {
  return (
    <div className="flex flex-col gap-6">
      <div className="card flex flex-col gap-3">
        <h4 className="font-heading text-base font-light text-[#3d3530]">Active Onboarding</h4>
        <div className="placeholder-block h-48">
          <span className="text-xs font-body text-brand-taupe">New hire checklist progress — connect HRIS</span>
        </div>
      </div>
      <div className="card flex flex-col gap-3">
        <h4 className="font-heading text-base font-light text-[#3d3530]">Time to Productivity</h4>
        <PlaceholderChart label="Days from start date to full productivity — connect HRIS" height="h-44" />
      </div>
    </div>
  )
}
