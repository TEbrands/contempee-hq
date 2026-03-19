import React from 'react'
import PlaceholderChart from '../shared/PlaceholderChart'

/**
 * Catalogue
 * ──────────
 * Tab: Product & Inventory > Catalogue
 * Product listing, images, pricing, and variant management.
 */
export default function Catalogue() {
  return (
    <div className="flex flex-col gap-6">
      <div className="card flex flex-col gap-3">
        <h4 className="font-heading text-base font-light text-[#3d3530]">Product Catalogue</h4>
        <div className="placeholder-block h-64">
          <span className="text-xs font-body text-brand-taupe">Grid / table — connect Shopify product catalogue</span>
        </div>
      </div>

      <div className="card flex flex-col gap-3">
        <h4 className="font-heading text-base font-light text-[#3d3530]">Pricing Overview</h4>
        <PlaceholderChart label="Price distribution across catalogue" height="h-44" />
      </div>
    </div>
  )
}
