import React from 'react'
import { COLORS, FONTS } from '../shared/brandConstants'

/**
 * BrandIdentity
 * ──────────────
 * Tab: Brand > Brand Identity
 * Displays the live brand palette, typography, and core identity elements.
 */
export default function BrandIdentity() {
  const palette = [
    { name: 'Cream',  hex: COLORS.cream,  role: 'Page / app background' },
    { name: 'Linen',  hex: COLORS.linen,  role: 'Sidebar background' },
    { name: 'Sand',   hex: COLORS.sand,   role: 'Card borders, dividers' },
    { name: 'Stone',  hex: COLORS.stone,  role: 'Subtle borders' },
    { name: 'Taupe',  hex: COLORS.taupe,  role: 'Muted text, secondary elements' },
    { name: 'Warm',   hex: COLORS.warm,   role: 'Hover states' },
    { name: 'Blush',  hex: COLORS.blush,  role: 'Accent / highlight' },
  ]

  return (
    <div className="flex flex-col gap-8">
      {/* Colour Palette */}
      <div className="card flex flex-col gap-4">
        <h4 className="font-heading text-lg font-light text-[#3d3530]">Colour Palette</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {palette.map((swatch) => (
            <div key={swatch.hex} className="flex flex-col gap-2">
              <div
                className="h-16 rounded-lg border border-brand-stone"
                style={{ backgroundColor: swatch.hex }}
              />
              <div>
                <p className="font-body text-sm font-medium text-[#3d3530]">{swatch.name}</p>
                <p className="font-body text-xs text-brand-taupe">{swatch.hex}</p>
                <p className="font-body text-xs text-brand-taupe">{swatch.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div className="card flex flex-col gap-4">
        <h4 className="font-heading text-lg font-light text-[#3d3530]">Typography</h4>
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-body text-xs uppercase tracking-widest text-brand-taupe mb-1">Heading — Cormorant Garamond</p>
            <p className="font-heading text-4xl font-light text-[#3d3530]">The Art of Considered Living</p>
            <p className="font-heading text-2xl font-light text-[#3d3530] mt-1">Subheading in Cormorant Garamond</p>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-widest text-brand-taupe mb-1">Body — DM Sans</p>
            <p className="font-body text-base text-[#3d3530]">
              Body copy is set in DM Sans at regular weight. It is clean, modern, and highly legible across all screen sizes.
            </p>
            <p className="font-body text-sm text-brand-taupe mt-1">
              Secondary text and labels use DM Sans at 14px in the muted taupe tone.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
