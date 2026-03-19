import React from 'react'

/**
 * BrandAssets
 * ────────────
 * Tab: Brand > Assets
 * Central library for logos, imagery, and downloadable brand assets.
 */
export default function BrandAssets() {
  return (
    <div className="flex flex-col gap-6">
      <div className="card flex flex-col gap-3">
        <h4 className="font-heading text-base font-light text-[#3d3530]">Logo Files</h4>
        <div className="placeholder-block h-40">
          <span className="text-xs font-body text-brand-taupe">Asset library — connect DAM / Google Drive</span>
        </div>
      </div>
      <div className="card flex flex-col gap-3">
        <h4 className="font-heading text-base font-light text-[#3d3530]">Photography Library</h4>
        <div className="placeholder-block h-52">
          <span className="text-xs font-body text-brand-taupe">Image grid — connect DAM / Cloudinary</span>
        </div>
      </div>
    </div>
  )
}
