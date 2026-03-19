import React from 'react'

/**
 * BrandGuidelines
 * ────────────────
 * Tab: Brand > Guidelines
 * Tone of voice, usage rules, and design principles.
 */
export default function BrandGuidelines() {
  return (
    <div className="flex flex-col gap-6">
      <div className="card flex flex-col gap-4">
        <h4 className="font-heading text-lg font-light text-[#3d3530]">Tone of Voice</h4>
        <div className="placeholder-block h-40">
          <span className="text-xs font-body text-brand-taupe">Guidelines — add brand voice documentation</span>
        </div>
      </div>
      <div className="card flex flex-col gap-4">
        <h4 className="font-heading text-lg font-light text-[#3d3530]">Usage Rules</h4>
        <div className="placeholder-block h-40">
          <span className="text-xs font-body text-brand-taupe">Do / Don't examples — add brand guidelines</span>
        </div>
      </div>
    </div>
  )
}
