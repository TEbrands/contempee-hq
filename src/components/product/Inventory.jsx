import React from 'react'
import PlaceholderChart from '../shared/PlaceholderChart'

/**
 * Inventory
 * ──────────
 * Tab: Product & Inventory > Inventory
 * Detailed stock levels, reorder points, and warehouse locations.
 */
export default function Inventory() {
  return (
    <div className="flex flex-col gap-6">
      <div className="card flex flex-col gap-3">
        <h4 className="font-heading text-base font-light text-[#3d3530]">Stock Levels by SKU</h4>
        <div className="placeholder-block h-56">
          <span className="text-xs font-body text-brand-taupe">Table — connect inventory / Shopify</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Reorder Alerts</h4>
          <PlaceholderChart label="SKUs below reorder threshold" height="h-44" />
        </div>
        <div className="card flex flex-col gap-3">
          <h4 className="font-heading text-base font-light text-[#3d3530]">Stock Movement</h4>
          <PlaceholderChart label="Inbound vs outbound units over time" height="h-44" />
        </div>
      </div>
    </div>
  )
}
