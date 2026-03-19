import React from 'react'
import TabLayout from '../shared/TabLayout'
import HRTeam from './HRTeam'
import HRPerformance from './HRPerformance'
import Onboarding from './Onboarding'

/**
 * HR
 * ───
 * Section wrapper for all HR tabs.
 * Route: /hr
 */
export default function HR() {
  const tabs = [
    { id: 'team',        label: 'Team',        component: <HRTeam /> },
    { id: 'performance', label: 'Performance', component: <HRPerformance /> },
    { id: 'onboarding',  label: 'Onboarding',  component: <Onboarding /> },
  ]

  return <TabLayout title="HR" tabs={tabs} />
}
