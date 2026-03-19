/**
 * Contempee Brand Constants
 * ─────────────────────────
 * Single source of truth for brand colours, typography, and design tokens.
 * Import this file wherever brand values are needed.
 */

// ── Colour Palette ──────────────────────────────────────────────────────────
export const COLORS = {
  cream:  '#F7F4F2',  // Page / app background
  linen:  '#E7E1D7',  // Sidebar background
  sand:   '#DED5C8',  // Card borders, dividers
  stone:  '#D7D3C8',  // Subtle borders
  taupe:  '#C9BEAB',  // Muted text, secondary elements
  warm:   '#C5B8A8',  // Hover states
  blush:  '#E9E1DF',  // Accent / highlight
  ink:    '#3d3530',  // Primary text
  muted:  '#7a6f65',  // Secondary text
}

// ── Typography ───────────────────────────────────────────────────────────────
export const FONTS = {
  heading: '"Cormorant Garamond", Georgia, serif',
  body:    '"DM Sans", ui-sans-serif, system-ui, sans-serif',
}

// ── Navigation Structure ─────────────────────────────────────────────────────
// Each section maps to a route and a set of tabs.
export const NAV_SECTIONS = [
  {
    id:    'home',
    label: 'Home',
    path:  '/',
    tabs:  [],
  },
  {
    id:    'marketing',
    label: 'Marketing',
    path:  '/marketing',
    tabs:  [
      { id: 'performance',       label: 'Performance' },
      { id: 'creative-insights', label: 'Creative Insights' },
      { id: 'creative-engine',   label: 'Creative Engine' },
      { id: 'email',             label: 'Email' },
      { id: 'calendar',          label: 'Marketing Calendar' },
    ],
  },
  {
    id:    'operations',
    label: 'Operations',
    path:  '/operations',
    tabs:  [
      { id: 'performance',      label: 'Operations Performance' },
      { id: 'customer-service', label: 'Customer Service' },
    ],
  },
  {
    id:    'product',
    label: 'Product & Inventory',
    path:  '/product',
    tabs:  [
      { id: 'overview',   label: 'Overview' },
      { id: 'inventory',  label: 'Inventory' },
      { id: 'catalogue',  label: 'Catalogue' },
    ],
  },
  {
    id:    'brand',
    label: 'Brand',
    path:  '/brand',
    tabs:  [
      { id: 'identity',  label: 'Brand Identity' },
      { id: 'assets',    label: 'Assets' },
      { id: 'guidelines', label: 'Guidelines' },
    ],
  },
  {
    id:    'hr',
    label: 'HR',
    path:  '/hr',
    tabs:  [
      { id: 'team',        label: 'Team' },
      { id: 'performance', label: 'Performance' },
      { id: 'onboarding',  label: 'Onboarding' },
    ],
  },
]
