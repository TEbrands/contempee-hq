import React from 'react'

/**
 * PlaceholderChart
 * ────────────────
 * Renders a labelled placeholder box where a chart will be integrated.
 * Replace this component with a real chart library (e.g. Recharts) when ready.
 *
 * Props:
 *   label   {string}  Description of the chart
 *   height  {string}  Tailwind height class, default "h-48"
 */
export default function PlaceholderChart({ label = 'Chart', height = 'h-48' }) {
  return (
    <div className={`placeholder-block ${height} w-full`}>
      <div className="flex flex-col items-center gap-2 text-center px-4">
        <svg
          className="w-8 h-8 text-brand-sand"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
        <span className="text-xs font-body text-brand-taupe">{label}</span>
      </div>
    </div>
  )
}
