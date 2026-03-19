import React from 'react'
import TabLayout from '../shared/TabLayout'
import BrandIdentity from './BrandIdentity'
import BrandAssets from './BrandAssets'
import BrandGuidelines from './BrandGuidelines'

/**
 * Brand
 * ──────
 * Section wrapper for all Brand tabs.
 * Route: /brand
 */
export default function Brand() {
  const tabs = [
    { id: 'identity',   label: 'Brand Identity', component: <BrandIdentity /> },
    { id: 'assets',     label: 'Assets',         component: <BrandAssets /> },
    { id: 'guidelines', label: 'Guidelines',     component: <BrandGuidelines /> },
  ]

  return <TabLayout title="Brand" tabs={tabs} />
}
