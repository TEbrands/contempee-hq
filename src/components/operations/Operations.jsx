import React from 'react'
import TabLayout from '../shared/TabLayout'
import OperationsPerformance from './OperationsPerformance'
import CustomerService from './CustomerService'

/**
 * Operations
 * ───────────
 * Section wrapper for all Operations tabs.
 * Route: /operations
 *
 * ── CODEOWNERS ──────────────────────────────────────────────────────────────
 * The entire src/components/operations/ folder is owned by @Mscontempee26.
 * All PRs modifying files in this folder require their review and approval.
 * ────────────────────────────────────────────────────────────────────────────
 */
export default function Operations() {
  const tabs = [
    { id: 'performance',      label: 'Operations Performance', component: <OperationsPerformance /> },
    { id: 'customer-service', label: 'Customer Service',       component: <CustomerService /> },
  ]

  return <TabLayout title="Operations" tabs={tabs} />
}
