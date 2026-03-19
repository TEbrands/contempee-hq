import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/shared/Sidebar'
import Home from './components/home/Home'
import Marketing from './components/marketing/Marketing'
import Operations from './components/operations/Operations'
import Product from './components/product/Product'
import Brand from './components/brand/Brand'
import HR from './components/hr/HR'

/**
 * App
 * ────
 * Root application component.
 * Renders the persistent Sidebar alongside the main content area,
 * and defines all top-level routes for the Contempee HQ dashboard.
 */
export default function App() {
  return (
    <div className="flex min-h-screen bg-brand-cream font-body">
      {/* Persistent sidebar navigation */}
      <Sidebar />

      {/* Main content area */}
      <main className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/marketing"  element={<Marketing />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/product"    element={<Product />} />
          <Route path="/brand"      element={<Brand />} />
          <Route path="/hr"         element={<HR />} />
          {/* Fallback */}
          <Route path="*"           element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}
