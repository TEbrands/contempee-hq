import React from 'react'
import TabLayout from '../shared/TabLayout'
import MarketingPerformance from './MarketingPerformance'
import CreativeInsights from './CreativeInsights'
import CreativeEngine from './CreativeEngine'
import Email from './Email'
import MarketingCalendar from './MarketingCalendar'

/**
 * Marketing
 * ──────────
 * Section wrapper for all Marketing tabs.
 * Route: /marketing
 */
export default function Marketing() {
  const tabs = [
    { id: 'performance',       label: 'Performance',       component: <MarketingPerformance /> },
    { id: 'creative-insights', label: 'Creative Insights', component: <CreativeInsights /> },
    { id: 'creative-engine',   label: 'Creative Engine',   component: <CreativeEngine /> },
    { id: 'email',             label: 'Email',             component: <Email /> },
    { id: 'calendar',          label: 'Marketing Calendar', component: <MarketingCalendar /> },
  ]

  return <TabLayout title="Marketing" tabs={tabs} />
}
