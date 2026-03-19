import React, { useState } from 'react'

/**
 * TabLayout
 * ─────────
 * Reusable tab bar + content area used by every dashboard section.
 *
 * Props:
 *   title   {string}   Section heading
 *   tabs    {Array}    [{ id, label, component: <JSX> }]
 */
export default function TabLayout({ title, tabs = [] }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? '')

  const activeContent = tabs.find((t) => t.id === activeTab)?.component

  return (
    <div className="flex flex-col h-full">
      {/* Section header */}
      <div className="px-8 pt-8 pb-0 border-b border-brand-sand bg-brand-cream">
        <h2 className="section-heading mb-4">{title}</h2>
        {tabs.length > 0 && (
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Tab content */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        {activeContent ?? (
          <p className="text-brand-taupe font-body text-sm">No content available.</p>
        )}
      </div>
    </div>
  )
}
