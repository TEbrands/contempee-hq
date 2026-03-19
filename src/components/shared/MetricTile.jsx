import React from 'react'

/**
 * MetricTile
 * ──────────
 * Reusable KPI card used across all dashboard sections.
 *
 * Props:
 *   label   {string}  Metric name
 *   value   {string}  Primary value (e.g. "£42,800")
 *   delta   {string}  Change indicator (e.g. "+12% vs last month")
 *   positive {bool}   Green delta if true, muted if false/undefined
 */
export default function MetricTile({ label, value, delta, positive }) {
  return (
    <div className="metric-tile">
      <span className="metric-label">{label}</span>
      <span className="metric-value">{value}</span>
      {delta && (
        <span
          className={`metric-delta ${
            positive === true
              ? 'text-emerald-600'
              : positive === false
              ? 'text-rose-500'
              : 'text-brand-taupe'
          }`}
        >
          {delta}
        </span>
      )}
    </div>
  )
}
