# Contempee HQ Dashboard

The internal business intelligence dashboard for Contempee. Built with **React** and **Tailwind CSS**, it provides a unified view across Marketing, Operations, Product & Inventory, Brand, and HR — all in one place.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [How to Run Locally](#how-to-run-locally)
3. [Section & File Map](#section--file-map)
4. [Workflow: Making Changes](#workflow-making-changes)
5. [Brand Guidelines](#brand-guidelines)
6. [Access & Permissions](#access--permissions)

---

## Project Structure

```
contempee-hq/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx                        # Root component — routing & layout
│   ├── main.jsx                       # React entry point
│   ├── index.css                      # Tailwind directives + global styles
│   └── components/
│       ├── shared/                    # Reusable layout & utility components
│       │   ├── brandConstants.js      # Brand colours, fonts, nav structure
│       │   ├── Sidebar.jsx            # Persistent left-hand navigation
│       │   ├── TabLayout.jsx          # Tab bar + content wrapper (used by all sections)
│       │   ├── MetricTile.jsx         # KPI card component
│       │   └── PlaceholderChart.jsx   # Chart placeholder (replace with Recharts etc.)
│       ├── home/
│       │   └── Home.jsx               # Executive summary / landing page
│       ├── marketing/
│       │   ├── Marketing.jsx          # Section wrapper (tabs wired here)
│       │   ├── MarketingPerformance.jsx
│       │   ├── CreativeInsights.jsx
│       │   ├── CreativeEngine.jsx
│       │   ├── Email.jsx
│       │   └── MarketingCalendar.jsx
│       ├── operations/                # ← Mscontempee26 owns this folder
│       │   ├── Operations.jsx         # Section wrapper
│       │   ├── OperationsPerformance.jsx
│       │   └── CustomerService.jsx
│       ├── product/
│       │   ├── Product.jsx            # Section wrapper
│       │   ├── ProductOverview.jsx
│       │   ├── Inventory.jsx
│       │   └── Catalogue.jsx
│       ├── brand/
│       │   ├── Brand.jsx              # Section wrapper
│       │   ├── BrandIdentity.jsx      # Live colour palette + typography display
│       │   ├── BrandAssets.jsx
│       │   └── BrandGuidelines.jsx
│       └── hr/
│           ├── HR.jsx                 # Section wrapper
│           ├── HRTeam.jsx
│           ├── HRPerformance.jsx
│           └── Onboarding.jsx
├── .github/
│   └── CODEOWNERS                     # Access control rules
├── tailwind.config.js                 # Brand colours & fonts registered as Tailwind tokens
├── vite.config.js
├── postcss.config.js
├── package.json
└── .gitignore
```

---

## How to Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- [pnpm](https://pnpm.io/) (recommended) — or npm / yarn

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/TEbrands/contempee-hq.git
cd contempee-hq

# 2. Install dependencies
pnpm install

# 3. Start the development server
pnpm dev
```

The app will be available at **http://localhost:5173** by default.

### Other commands

| Command        | Description                          |
| -------------- | ------------------------------------ |
| `pnpm dev`     | Start local development server       |
| `pnpm build`   | Build for production (outputs `dist/`) |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint`    | Run ESLint across all source files   |

---

## Section & File Map

Each dashboard section lives in its own folder under `src/components/`. Every section follows the same pattern: a **section wrapper** (e.g. `Operations.jsx`) imports and wires the individual **tab components**.

| Section | Route | Folder | Tab Components |
|---|---|---|---|
| Home | `/` | `home/` | `Home.jsx` |
| Marketing | `/marketing` | `marketing/` | `MarketingPerformance`, `CreativeInsights`, `CreativeEngine`, `Email`, `MarketingCalendar` |
| **Operations** | `/operations` | **`operations/`** | **`OperationsPerformance`**, **`CustomerService`** |
| Product & Inventory | `/product` | `product/` | `ProductOverview`, `Inventory`, `Catalogue` |
| Brand | `/brand` | `brand/` | `BrandIdentity`, `BrandAssets`, `BrandGuidelines` |
| HR | `/hr` | `hr/` | `HRTeam`, `HRPerformance`, `Onboarding` |

> **Note:** The `operations/` folder is owned by `@Mscontempee26` via CODEOWNERS. All PRs touching that folder require their review.

---

## Workflow: Making Changes

All changes to this repository must go through a **pull request**. Direct pushes to `main` are blocked by branch protection.

### Step-by-step

```bash
# 1. Make sure you're on an up-to-date main branch
git checkout main
git pull origin main

# 2. Create a new branch for your changes
#    Use a descriptive name, e.g.:
git checkout -b ops/update-customer-service-kpis

# 3. Make your edits in the relevant component file(s)
#    e.g. src/components/operations/CustomerService.jsx

# 4. Stage and commit your changes
git add .
git commit -m "ops: add CSAT trend chart to CustomerService tab"

# 5. Push your branch to GitHub
git push origin ops/update-customer-service-kpis

# 6. Open a Pull Request on GitHub
#    Go to https://github.com/TEbrands/contempee-hq
#    Click "Compare & pull request"
#    Add a clear title and description of what changed and why

# 7. Wait for review
#    - Changes to src/components/operations/ require approval from @Mscontempee26
#    - All other changes require approval from @TEbrands
#    - Once approved, the PR can be merged into main
```

### Branch naming conventions

| Prefix | Use for |
|---|---|
| `ops/` | Operations section changes |
| `marketing/` | Marketing section changes |
| `product/` | Product & Inventory changes |
| `brand/` | Brand section changes |
| `hr/` | HR section changes |
| `shared/` | Shared components or layout |
| `fix/` | Bug fixes |
| `chore/` | Dependency updates, config changes |

---

## Brand Guidelines

### Colour Palette

All colours are registered as Tailwind tokens in `tailwind.config.js` and as JavaScript constants in `src/components/shared/brandConstants.js`.

| Token | Hex | Usage |
|---|---|---|
| `brand-cream` | `#F7F4F2` | Page / app background |
| `brand-linen` | `#E7E1D7` | Sidebar background |
| `brand-sand` | `#DED5C8` | Card borders, dividers |
| `brand-stone` | `#D7D3C8` | Subtle borders |
| `brand-taupe` | `#C9BEAB` | Muted text, secondary elements |
| `brand-warm` | `#C5B8A8` | Hover states |
| `brand-blush` | `#E9E1DF` | Accent / highlight |

**Usage in Tailwind:**
```jsx
<div className="bg-brand-cream border border-brand-sand text-brand-taupe">
```

**Usage in inline styles (when needed):**
```jsx
import { COLORS } from '../shared/brandConstants'
<div style={{ backgroundColor: COLORS.cream }}>
```

### Typography

| Role | Font | Tailwind class |
|---|---|---|
| Headings (h1–h6) | Cormorant Garamond | `font-heading` |
| Body text, labels, UI | DM Sans | `font-body` |

**Examples:**
```jsx
<h2 className="font-heading text-2xl font-light tracking-wide">Section Title</h2>
<p className="font-body text-sm text-brand-taupe">Supporting copy</p>
```

Both fonts are loaded from Google Fonts in `index.html`. No additional setup is needed.

### Component Patterns

**Always use the shared components** from `src/components/shared/` rather than creating one-off styles.

| Component | When to use |
|---|---|
| `<MetricTile>` | Any KPI or headline number |
| `<PlaceholderChart>` | Where a chart will eventually live |
| `<TabLayout>` | Section wrappers with tabs |

**Card pattern:**
```jsx
<div className="card">
  <h4 className="font-heading text-base font-light text-[#3d3530]">Card Title</h4>
  {/* content */}
</div>
```

**Metric tile pattern:**
```jsx
<MetricTile
  label="Revenue (MTD)"
  value="£42,800"
  delta="+12% vs last month"
  positive={true}
/>
```

**Adding a new tab to an existing section:**
1. Create the tab component file in the section folder (e.g. `src/components/operations/NewTab.jsx`)
2. Import it in the section wrapper (e.g. `Operations.jsx`)
3. Add it to the `tabs` array with an `id`, `label`, and `component`

---

## Access & Permissions

| User | Access Level | Can Edit |
|---|---|---|
| `@TEbrands` | Full admin | All files |
| `@Mscontempee26` | Collaborator (read + write via PR) | `src/components/operations/` only |

`@Mscontempee26` has **read access to the full repository** and can view all sections of the dashboard. However, the CODEOWNERS file and branch protection rules mean:

- They can only open PRs that modify files within `src/components/operations/`
- PRs touching any other folder require `@TEbrands` approval
- No one can push directly to `main` — all changes go through PRs

This is enforced by `.github/CODEOWNERS` and the branch protection rules on `main`.
