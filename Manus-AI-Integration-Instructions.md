# Manus AI — Integration Instructions
## Contempee CS Hub → Contempee HQ Dashboard

---

## What This File Is

The file `cs-shift-tracker_136.html` is a fully built **Customer Service Hub** for the Contempee internal team. It is a single self-contained HTML file that includes all logic, styling, and functionality.

Please integrate this as a dedicated **CS (Customer Service) section** within the Contempee HQ Dashboard.

---

## Where It Should Live in the App

- Add a new top-level navigation item in the Contempee HQ Dashboard called **"CS Hub"**
- This section should only be visible to users with a **Customer Service** role
- It should NOT appear in navigation for Marketing, Operations, Product, Brand, HR, or Finance users
- The CS Hub should load as its own full page/section within the dashboard

---

## What the CS Hub Does — Full Feature List

### 1. Login & User Access
- Role-based login system with three roles: **Admin**, **Manager**, and **Agent**
- Each role sees different parts of the app:
  - **Agent** — can log shifts, raise escalations, view calendar, access documents
  - **Manager** — everything above plus dashboard and reports
  - **Admin** — full access including settings

### 2. Log Shift
- Agents log their shift **start** and **end** each day
- Records: agent name, date, shift type, actual start/end times (UK timezone), tickets open/closed, average first reply time, average resolution time, CSAT score, handover notes, overtime

### 3. Dashboard
- KPI summary cards showing team performance
- Agent status (online/offline/overdue)
- Charts for: First Reply Time, Resolution Time, CSAT, Tickets Closed, Backlog
- Filter by agent and date range (last 7/14/30 days or custom)
- Agent performance cards
- Handover notes feed
- Late starts and overtime log
- Weekly report with trend arrows
- Daily digest summary for the CS team

### 4. Escalations & Queries
- **Quick Query** — agents can submit fast questions by category (Dispatch/Shipping, Discount Approval, Warehouse Sync, Returns, General)
- **Formal Escalation** — structured escalation form with: issue description, what has been checked, what is needed, Gorgias ticket link, priority level (Low/Medium/High)
- Escalations can be tracked, filtered, and resolved with resolution notes

### 5. Issues Log
Three types of issues can be logged:
- **Misspack** — wrong or missing items in orders (includes fulfilment country, dispatch date, order numbers, packer, claimed status, cost, DOR reference)
- **Faulty/Damaged** — damaged products with cause, product type, avoidability, photos
- **Courier Issues** — lost, damaged, or late deliveries by courier (Evri, DHL, DPD, AU Post, UPS, FedEx, Royal Mail)
- All issues can be exported as CSV

### 6. CX Hub
- Daily Briefing tab
- Trends analysis
- Agent Coaching tab
- Issue Analysis tab
- Coverage planning tab

### 7. Team Calendar
- Monthly calendar view
- Click any day to add an event
- Event types: Product Launch, Holiday/Leave, Shift Cover Available, Note
- Urgency levels: Normal, Important, Urgent
- Can link to SOPs and add briefing notes

### 8. Guidelines & Documents
- Upload and store team documents, SOPs, training materials
- Categories: General, SOPs, Training, Issue Forms, Courier Info, Product Info, Other
- Quick links to 3PL Warehouse Systems: TSP (Mintsoft), Black Bear, Badger WMS

### 9. Export & Backup
- Export data as CSV or JSON:
  - All Shifts, Activity Log, Agent Report, Escalations, Late & OT, Calendar, Weekly Report, Full Backup, Issues Log, Issues Detail, Cost Report
- Restore from backup

### 10. Settings (Admin only)
- Manage users and roles
- Configure agent names, shift times, and colours
- Set performance targets (FRT, Resolution Time, CSAT, Punctuality)
- Noticeboard — publish messages to all agents at top of Log Shift page
- Gorgias cost input for cost-per-ticket analysis
- Messaging integration settings
- Data management (clear shift data, clear escalations, full reset)

---

## Important Technical Notes

- The app currently stores data in **localStorage** (the user's browser). If the Contempee HQ Dashboard uses a central database, please migrate the CS Hub data storage to match — so all agents share the same live data
- The app uses **UK timezone** throughout for all shift times
- The app uses the **Belleza** Google Font and a warm neutral colour palette — please preserve this styling within the CS section, or adapt to match the Contempee HQ design system if preferred
- The app includes a **Noticeboard** feature that shows a message to all agents at the top of the Log Shift page — this should remain functional

---

## Summary of What Is Needed

1. Add a **CS Hub** navigation section to Contempee HQ — visible only to CS team users
2. Embed or integrate the full HTML file as the CS Hub section
3. Migrate localStorage data to a shared database if the rest of the app uses one
4. Ensure role-based access (Agent / Manager / Admin) works within the existing Contempee HQ login system

---

*File to integrate: cs-shift-tracker_136.html*
*Also available in the GitHub repo: TEbrands/contempee-hq*
