import React from 'react'
import TabLayout from '../shared/TabLayout'
import ProductOverview from './ProductOverview'
import Inventory from './Inventory'
import Catalogue from './Catalogue'

/**
 * Product
 * ────────
 * Section wrapper for all Product & Inventory tabs.
 * Route: /product
 */
export default function Product() {
  const tabs = [
    { id: 'overview',  label: 'Overview',   component: <ProductOverview /> },
    { id: 'inventory', label: 'Inventory',  component: <Inventory /> },
    { id: 'catalogue', label: 'Catalogue',  component: <Catalogue /> },
  ]

  return <TabLayout title="Product & Inventory" tabs={tabs} />
}
