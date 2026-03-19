import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { NAV_SECTIONS } from './brandConstants'

/**
 * Sidebar
 * ───────
 * Persistent left-hand navigation for the Contempee HQ dashboard.
 * Highlights the active section and renders the brand wordmark at the top.
 */
export default function Sidebar() {
  const location = useLocation()

  return (
    <aside className="w-60 min-h-screen bg-brand-linen border-r border-brand-sand flex flex-col shrink-0">
      {/* Wordmark */}
      <div className="px-6 py-7 border-b border-brand-sand">
        <h1 className="font-heading text-2xl font-light tracking-widest text-[#3d3530] uppercase">
          Contempee
        </h1>
        <p className="font-body text-xs text-brand-taupe tracking-widest uppercase mt-0.5">
          HQ Dashboard
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-5 flex flex-col gap-1">
        {NAV_SECTIONS.map((section) => {
          const isActive =
            section.path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(section.path)

          return (
            <NavLink
              key={section.id}
              to={section.path}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <SectionIcon id={section.id} />
              <span>{section.label}</span>
            </NavLink>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-brand-sand">
        <p className="font-body text-xs text-brand-taupe">
          © {new Date().getFullYear()} Contempee
        </p>
      </div>
    </aside>
  )
}

/** Minimal inline SVG icons per section */
function SectionIcon({ id }) {
  const cls = 'w-4 h-4 shrink-0 text-brand-taupe'
  switch (id) {
    case 'home':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    case 'marketing':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      )
    case 'operations':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    case 'product':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    case 'brand':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    case 'hr':
      return (
        <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    default:
      return null
  }
}
