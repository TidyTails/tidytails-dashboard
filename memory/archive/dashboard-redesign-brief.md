# Dashboard Redesign Brief — For Debo
*Created: March 21, 2026 — Overnight Sprint*
*Builder: Debo 💪 | Spec by: Franklin 🐕💩*

---

## Problem Statement
The current dashboard has 75+ tools/reports. It's overwhelming. TJ opens it and sees everything at once — banners, tools, archives, logs. There's no hierarchy. No "what do I need RIGHT NOW?"

**The fix:** 3-mode dashboard that shows the right thing at the right time.

---

## The 3 Modes

### MODE 1: TODAY (Default View)
**Purpose:** "Here's what matters right now." TJ opens dashboard, sees 3-5 items max.

**Layout:**
- Clean, phone-first design (TJ uses mobile 90% of the time)
- Big cards, easy to tap
- No scrolling needed for priority items

**What shows here (3-5 items, dynamically selected):**

| Priority | Item Type | Source | Example |
|----------|-----------|--------|---------|
| 1 | Overdue follow-ups | `database.json` leads with overdue contact | "🔥 Sarah hasn't responded (3 days)" |
| 2 | Today's appointments | Schedule/calendar | "📅 Scooping day — 8 yards" |
| 3 | Hot lead action needed | CRM lead status | "📱 New lead: Mike, Florissant — draft response ready" |
| 4 | Review request due | 30-day post-signup trigger | "⭐ Ask Mrs. Candee for a Google review" |
| 5 | Quick win available | Rotating suggestions | "📝 Post in STL Dog Owners (32K members) — copy ready" |

**Rules for TODAY items:**
- MAX 5 items. If more exist, show top 5 by urgency.
- Each item has: icon, one-line description, action button (tap to expand/act)
- Items auto-rotate based on what's actually pending
- If nothing is pending: show a "You're caught up 🎉" state with one proactive suggestion

**Data source:** `dashboard/today.json` — Franklin updates this daily (via morning briefing or heartbeat)

```json
{
  "lastUpdated": "2026-03-21T08:00:00-05:00",
  "items": [
    {
      "id": "today_001",
      "type": "follow-up",
      "priority": 1,
      "icon": "🔥",
      "title": "Sarah hasn't responded (3 days)",
      "detail": "FB lead from Mar 18. Draft follow-up ready.",
      "action": {"label": "See Draft", "link": "#draft-sarah"},
      "expires": "2026-03-22"
    }
  ]
}
```

### MODE 2: TOOLS
**Purpose:** All the tools, organized by category. This is the "toolbox."

**Layout:**
- Category headers with collapsible sections
- Search bar at top (filter tools by name)
- Each tool: icon + name + one-line description

**Categories:**

| Category | Tools |
|----------|-------|
| 📱 Marketing | Ad generator, content calendar, FB group list, posting kit, social media scheduler |
| 👥 Customers | CRM, customer database, review request tool, referral manager, health scores |
| 🔍 Competitive | Battle card, pricing comparison, competitor tracker, market research |
| 📊 Analytics | SEO audit, search visibility, ad performance, revenue tracker |
| 🗺️ Local SEO | GBP kit, directory blitz, citation tracker, city pages |
| 🏠 Sheds | Shed ad generator, lumber tracker, payment calculator, pipeline |
| ⚙️ Admin | Franklin status, agent logs, skill manager, memory browser |

**Each tool card:**
```html
<div class="tool-card" onclick="navigate(url)">
  <span class="tool-icon">📱</span>
  <div>
    <h3>Ad Generator</h3>
    <p>Copy-paste ready ads for FB, Nextdoor, Instagram</p>
  </div>
  <span class="arrow">→</span>
</div>
```

### MODE 3: ARCHIVE
**Purpose:** Historical data. Reports, past briefings, completed tasks, old campaigns.

**Layout:**
- Timeline view (newest first)
- Filter by: date range, category, type
- Each item: date + title + type badge + expand/view button

**What lives here:**
- Past morning briefings
- Completed campaign reports
- Old ad copy (with performance notes if available)
- Weekly/monthly summaries
- Archived competitive intel snapshots
- Franklin's work logs

**Data source:** `dashboard/archive.json` — append-only, Franklin adds entries after completing work

---

## Navigation

### Top Bar
```
[🐕 Tidy Tails Dashboard]

[TODAY]  [TOOLS]  [ARCHIVE]
  ^^^active tab highlighted
```

- Tabs at top, always visible
- TODAY is default on load
- Active tab = bold + underline + accent color
- Mobile: full-width tabs, easy thumb reach

### Franklin Status Indicator
Bottom-right floating badge:
- 🔴 Red glowing eyes = Franklin is working
- 🟢 Green = Franklin is idle
- Tap to see: current task, last update time, quick message Franklin

Reads from `dashboard/status.json` (existing system).

---

## Design Specs

### Colors & Style
- **Dark mode default** (TJ uses phone at night)
- Background: `#0a0a0a` or `#111111`
- Cards: `#1a1a1a` with subtle border `#333`
- Accent: `#4CAF50` (green — on brand for pet/lawn)
- Text: `#e0e0e0` (primary), `#888` (secondary)
- Urgent items: `#ff4444` glow/border

### Typography
- Headers: Bold, 18-20px
- Body: 14-16px
- Mobile-first: everything readable without zooming

### Interactions
- Tap card → expand or navigate
- Swipe between modes (mobile)
- Pull-to-refresh (if possible in static hosting)
- Copy buttons on any text content (existing pattern — keep it)

---

## Technical Approach

### Static Site (GitHub Pages)
- Same hosting as current: `tidytails.github.io/tidytails-dashboard/`
- Pure HTML/CSS/JS (no framework needed)
- Data files: `today.json`, `tools.json`, `archive.json`
- Franklin updates JSON files → git push → dashboard reflects changes

### File Structure
```
dashboard/
├── index.html          # Main 3-mode dashboard
├── status.json         # Franklin working/idle status
├── today.json          # TODAY mode items
├── tools.json          # TOOLS mode catalog
├── archive.json        # ARCHIVE mode entries
├── css/
│   └── dashboard.css   # Styles
├── js/
│   └── dashboard.js    # Mode switching, search, data loading
└── [existing tools]    # Keep all existing tool pages accessible
```

### Backward Compatibility
- All existing tool URLs must still work
- Old `index.html` content moves into TOOLS mode
- Nothing breaks — this is a reorganization, not a rebuild

---

## Franklin's Responsibilities (Post-Build)

### Daily Updates
- Update `today.json` during morning briefing (or heartbeat)
- Items auto-expire based on `expires` field
- Add to `archive.json` when work is completed

### What Populates TODAY
Franklin checks these sources each morning:
1. `database.json` — overdue follow-ups, review requests due
2. Cron reminders firing today
3. Content calendar — what's scheduled to post
4. Competitive alerts — anything urgent
5. Quick wins — rotating low-effort, high-impact suggestions

---

## Success Criteria
- [ ] TJ opens dashboard → sees 3-5 actionable items (not 75 tools)
- [ ] Each TODAY item has a clear action (not just info)
- [ ] Tools are findable via search in <5 seconds
- [ ] Archive is browsable by date
- [ ] Works perfectly on iPhone (phone-first)
- [ ] Dark mode by default
- [ ] Franklin status indicator works
- [ ] All existing tool links still function
- [ ] Page loads in <2 seconds

---

## NOT In Scope (V1)
- No login/auth (static site, same as now)
- No real-time data (refresh to update)
- No notifications (that's what Telegram is for)
- No database (JSON files on GitHub)

---

## Timeline
- **Debo builds V1:** ~2-3 hours estimated
- **Franklin populates data:** Same day
- **TJ reviews:** Next morning
- **Iterate:** Based on TJ's feedback

---

*Debo — this is your brief. Build it clean, build it mobile-first, make TJ want to open it every morning. Questions? Ask Franklin.*
