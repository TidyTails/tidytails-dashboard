# MEMORY.md — Franklin's Long-Term Memory

## Who I Am
- **Name:** Franklin
- **Role:** Project manager for Tidy Tails — THINKING PARTNER, not grinder
- **Style:** Laid back, creative, direct, will call bullshit, swears freely
- **Emoji:** 🐕💩

## 🤖 Sub-Agent Architecture (Configured Mar 4, 2026)

**Philosophy:** Franklin is the thinking partner. Sub-agents do the actual work.

**Named after TJ's favorite movie characters:**

| Agent | ID | Role | Movie | Spawn With |
|-------|-----|------|-------|------------|
| **Franklin** | main | Thinking, decisions, delegation | — | (this is you) |
| **Bishop** 🎯 | bishop | Research, oversight, competitor intel | Juice | `sessions_spawn(agentId="bishop", task="...")` |
| **Debo** 💪 | debo | Coding, building, dashboard, websites | Friday | `sessions_spawn(agentId="debo", task="...")` |
| **Doeboy** ✍️ | doeboy | Copywriting, ads, social content | Boyz n the Hood | `sessions_spawn(agentId="doeboy", task="...")` |
| **Basquiat** 🎨 | basquiat | AI ad creative, video generation, visual content | Jean-Michel Basquiat | `sessions_spawn(agentId="basquiat", task="...")` |

**How to use:**
1. When TJ asks for research/intel → spawn Bishop
2. When TJ needs ad copy/content → spawn Doeboy  
3. When something needs building/coding → spawn Debo
4. When TJ needs ad creative/video/visuals → spawn Basquiat
5. Franklin stays available for conversation

**⚠️ Sub-agent gotchas:**
- They save to their OWN workspace (e.g. `~/.openclaw/workspace-debo/`). Always copy files to main workspace and push from there.
- **Debo times out on complex tasks.** For simple builds (index.html, single-page apps), Franklin should just build it directly instead of spawning Debo. Use Debo for multi-file coding projects.

## 🎬 Basquiat Video Workflow (CRITICAL — DO NOT FORGET)

**This is THE workflow for AI video ads. Also documented in TOOLS.md.**

1. **Nano Banana 2** (fal.ai) → generates high-quality image frames from text prompts
2. **Kling v3 Standard** (fal.ai) → animates frames into 5-second video clips
3. **3 frames per concept** (beginning → middle → end) = better story arc than 2

**Costs:**
- Nano Banana frame: ~$0.08
- Kling v3 clip: ~$0.50
- Per finished ad: ~$1.50-2.50
- 10 ads with revisions: ~$19-25

**Key rules:**
- ❌ Don't make grass change color (looks like landscaping ad)
- ✅ Keep grass SAME — only poop disappears
- ⚠️ Credits burn fast — check balance before batch runs
- TJ can film real footage himself for non-AI styles (unboxing, POV, etc.)
- Remotion = motion graphics/text animations (no fal.ai cost)

**Key benefit:** Each sub-agent has its own context window. Doesn't overload main session.

## 🐕 Tidy Tails CRM (Built Mar 6, 2026)

**URL:** https://tidytails.github.io/tidytails-dashboard/tidy-tails-crm.html

Features: Customer database (8 loaded), goal tracker (25 target), revenue dashboard ($750/mo), service area map, route scheduler with drag-drop reordering, one-click Google Maps route, service day checklist mode. All data in localStorage.

## 🏠 Shed Sales CRM (Built Mar 4, 2026, Updated Mar 6)

**URL:** https://tidytails.github.io/tidytails-dashboard/crm/

Features: Pipeline board, **OCR screenshot upload** (Tesseract.js — auto-reads buyer name + phone from FB Messenger screenshots), multi-screenshot batch upload, source tracking, smart alerts, playbooks, calendar, dark mode.

## 📱 Jamie's Outreach Hub (Built Mar 6, 2026)

**URL:** https://tidytails.github.io/tidytails-dashboard/jamie-outreach-hub.html

Features: 13 copy-paste scripts (cold calls, texts, emails, review asks), 43 commercial leads with tier filtering, 7 objection responses, tracking tips. Google review link included. Mobile-friendly.

## 🏠 Main Dashboard (Built Mar 6, 2026)

**URL:** https://tidytails.github.io/tidytails-dashboard/

Central hub linking ALL tools, reports, videos, PDFs. ⚠️ NEVER let this go missing again — was flagged 7 times in one day before being built.

## 🔍 Competitive Intelligence (Updated Mar 7, 2026)

**19 competitors identified** in STL pet waste removal market. Key findings:

**🔴 Doggie Doodies = TJ's #1 rival:**
- Chesterfield-based LLC, serves EXACT same cities (Ballwin, Manchester, Ellisville, Wildwood, Chesterfield)
- Pricing: $83/mo (1 dog), $88/mo (2 dogs), $100/mo (3 dogs), $121/mo (4 dogs)
- Has: customer portal, text alerts, gate photos, rewards program, referral program, background checks, free first cleanup
- Weaknesses: hotmail email, Wix site, no personality
- Phone: 636-633-3443

**TJ's pricing ($70 flat) is 18-26% below local competitors.** Multi-dog homes are being undercharged.

**Dead competitor:** Pawfect Waste Solutions (pooperscooperstl.com) — site is DOWN. Domain may be available.

**Dashboard:** `dashboard/2026-03-07-COMPETITOR-INTEL.html`

## 📧 Email Automation Project (COMPLETE Mar 4, 2026)

**Domain:** backyardbuildingsstl.com (Cloudflare)
**Status:** ✅ FULLY OPERATIONAL

**Email Setup:**
- **Address:** darius@backyardbuildingsstl.com
- **Receives:** Cloudflare routes → cartervhomes@gmail.com
- **Sends:** Gmail "Send As" configured
- **App Password:** Created 9:09 PM (stored in .env, gitignored)
- **Script:** `scripts/send-email.js`

**Usage:**
```bash
node scripts/send-email.js \
  --to "lead@example.com" \
  --from "Darius Williams <darius@backyardbuildingsstl.com>" \
  --subject "Subject" \
  --body "Body text"
```

**TJ's Requirements:**
- Dedicated email (no existing numbers)
- AI reaches out first to commercial leads
- AI answers simple inbound questions
- MUST sound human, not robotic
- Email first → SMS later → Social future

**Guide:** dashboard/guides/AI-HUMAN-VOICE-GUIDE.md

## 🚫 ManyChat Decision (Mar 4, 2026)

ManyChat won't work for TJ because:
- His shed leads come from Marketplace personal DMs
- ManyChat only works with Business Page inbox
- Browser automation too risky (account ban)

**Alternative:** Email automation with dedicated domain.

## Who TJ Is
- Founder of Tidy Tails
- Based in St. Louis area (America/Chicago timezone)
- Wants autonomy given to me, but I check before external actions
- Appreciates directness and colorful language

## 💡 Parked Business Ideas

### MOTRA (Parked Feb 23, updated Mar 6, 2026)
**What:** Mobile fleet care replacing 40-50% of robotaxi depot operations
**Positioning (Mar 6):** "MOTRA isn't a cleaning company. It's depot replacement."
**Scope (TJ decision Mar 6):** Tier 1 (Turnaround) + Tier 2 (Mobile Maintenance) ONLY. NO Tier 3 (Remote Ops) or Tier 4 (Fleet OS Platform).
**Key insight:** Each 100-vehicle fleet needs 80-120 depot staff. MOTRA addresses 40-55 of those roles mobile.
**Why it's good:** $500M+ TAM, blue ocean, Waymo doing 400K rides/week, depot costs are #1 operational expense
**Assets:** Landing page, pitch deck (v6), one-pager, depot analysis, market research — all updated Mar 6
**Full details:** `memory/motra-business-idea.md`
**To resume:** "Let's pick up MOTRA"

## Tidy Tails - The Business

### What It Is
Pet waste removal service in St. Louis County and surrounding areas.

### Contact
- **Phone:** 314-850-7140 (NOT the shed number!)
- **Website:** tidytailsstl.com ✅ (NOT .net)
- **GBP:** CLAIMED + COMPLETED ✅ (Feb 26, 2026) — DONE, DO NOT ASK AGAIN
- **Yelp:** CLAIMED + COMPLETED ✅ (Mar 5, 2026) — DONE, DO NOT ASK AGAIN
- **Google Search Console:** VERIFIED + SUBMITTED ✅ (Mar 5, 2026) — DONE, DO NOT ASK AGAIN
- **Google Review Link:** https://g.page/r/Ce_hqIHanGLvEAE/review

### Pricing
- $25/week | $45 biweekly | $70/month | $100 one-time deep clean
- Average customer value: ~$100/month

### Current State (as of Mar 6, 2026)
- **8 recurring customers** (updated Mar 6 with full list)
- Solo operation (TJ), wife does scheduling
- Capacity: ~15 yards/week comfortably
- **Sunday scooping day** — all 8 customers on Sunday
- Revenue: **$750/month, $175/week**
- Equipment: pickup truck, basic tools
- GBP: CLAIMED ✅ | Yelp: CLAIMED ✅ | Google Search Console: VERIFIED ✅
- Website: tidytailsstl.com live, SSL valid

### Active Customers (Mar 6, 2026)

| # | Customer | City | Freq | Price/Visit | Monthly |
|---|----------|------|------|-------------|---------|
| 1 | Mrs. Candee | Saint Louis 63136 | Weekly | $15 | $60 |
| 2 | Jody | Saint Louis 63114 | Biweekly | $45 | $90 |
| 3 | Shannon Zamarripa | Florissant 63031 | Weekly | $35 | $140 |
| 4 | Amanda Harris | Florissant 63031 | Weekly | $30 | $120 |
| 5 | Lawrence | Saint Louis 63108 | Biweekly | $50 | $100 |
| 6 | Greg | O'Fallon 63366 | Monthly | $50 | $50 |
| 7 | Chastity | Florissant 63033 | Biweekly | $45 | $90 |
| 8 | Preshus | Saint Charles 63303 | Weekly | $25 | $100 |

**Full CRM:** https://tidytails.github.io/tidytails-dashboard/tidy-tails-crm.html

### Service Areas
- St. Louis County, St. Charles County
- O'Fallon, St. Peters, Ferguson, Florissant, Maryland Heights, St. Anne
- Target: middle-class neighborhoods

### The Goal
**25-30 recurring customers by August 2025** (5-6x growth) — ⚠️ OVERDUE, date was Aug 2025, now Mar 2026

### Marketing Situation
- Budget: $200/month (can scale with results)
- Current: Facebook groups, Instagram, Facebook page
- Website: ✅ LIVE (tidytailsstl.com) — SSL fixed, real content, pricing, CTAs — verified Mar 12
- GBP: CLAIMED ✅ | Yelp: CLAIMED ✅
- ❌ **STILL NOT IN GOOGLE SEARCH RESULTS** as of Mar 12, 2026 — searched multiple terms, Tidy Tails doesn't appear. POOP 911 has 4 results, Scoop Soldiers #1.
- Main challenge: Customer acquisition + SEO visibility

### Competition (UPDATED Mar 12, 2026 12AM)

**⚠️ THREAT LEVEL: Doggie Doodies upgraded significantly. Scoop Soldiers actively pushing PR.**

**ACTIVE Competitors (verified via live site fetches Mar 12):**

| Competitor | STL County | St. Charles | Weekly | Notes |
|------------|------------|-------------|--------|-------|
| **Doggie Doodies** 🔴 | ✅ Yes | ✅ **NEW** | $83/mo (~$19) | **MAJOR UPGRADES: E-gift cards, referral program, blog, customer portal, tech photos, gate photos, equipment disinfection, coupon codes. Now targeting St. Charles County. Monthly: $90. THREAT: HIGHEST** |
| **Scoop Soldiers** 🆕 | ✅ Yes | ❓ | **$15** | **Feb 2026 expansion. Press release ~3 weeks ago. National franchise. CHEAPEST in market.** 877-930-POOP. THREAT: HIGH |
| **Poop2Scoop** | ✅ Yes | ❓ | $18 | 314-449-9447 |
| **Little Stinkers** | ❌ **NO** | ✅ Primary | Quote | NEW domain: littlestinkersofmo.com |
| **POOP 911** | ❓ 404 | ❓ | Quote | STL page 404 — status unclear |
| **DoodyCalls** | ✅ Yes | ❓ | Quote | Franchise, (314) 230-8082 |
| **Yucko's** | ✅ Yes | ❓ | Quote | Commercial focus, 314-291-POOP |
| **Dirty Dog Poo Crew** | 🟡 Chesterfield only | ❌ | $95/mo | Part of grooming business |

**🔴 KEY UPDATE (Mar 5):** Little Stinkers ONLY serves Lincoln/Warren/St. Charles Counties — **NOT STL County**

**Little Stinkers service cities:** O'Fallon, St. Peters, St. Charles, Dardenne Prairie, Wentzville, Moscow Mills, Troy, Wright City, Warrenton

**Strategic implication:** Focus marketing on STL County where competition is thinner. St. Charles expansion means head-to-head with Little Stinkers.

**DEAD Competitors (verified Mar 9):**
- Fresh Paws (wearefreshpaws.com) — STILL DEAD, Squarespace expired (verified Mar 9)
- St. Louis Pooper Scoopers — Yelp shows CLOSED (South City)
- Pawfect Waste Solutions, pooperscooperstl.com, Poopy Paws 314 — DNS dead/404
- ~~Scoop Soldiers STL~~ — **RESURRECTED.** Now LIVE as national franchise expansion (see ACTIVE above)

**💡 PRICING REALITY (Updated Mar 9):**
- TJ's weekly ($25) > Scoop Soldiers ($15) — **TJ is 67% more expensive than cheapest**
- TJ's weekly ($25) > Poop2Scoop ($18) — **TJ is 39% more expensive**
- TJ's biweekly ($45) > Poop2Scoop ($25) — **TJ is 80% more expensive**
- TJ's monthly ($70) = **UNIQUE** — no competitor offers this
- **Scoop Soldiers is now the price floor** — $15/visit includes up to 4 dogs, all major cards accepted

**Strategic Implications:**
1. **STOP leading with $25/week** — that's the weak spot
2. **LEAD WITH $70/month** — only option in market
3. **Differentiate on service** — transparent pricing, local personal service
4. **Watch Little Stinkers** — they're actively marketing in TJ's territory

**Full intel:** `memory/2026-02-23-competitor-intel-CORRECTED.md`

### 🚨 COMPETITOR UPDATE (Feb 26, 2026 6PM) — MAJOR CORRECTION

**POOP 911 = ALIVE | Poopy Paws = $20/week (CHEAPEST!)**

| Competitor | Status | Weekly Price | Territory |
|------------|--------|--------------|-----------|
| **Poopy Paws** | ✅ ACTIVE | **$20** | St. Louis (cheapest!) |
| **Poop2Scoop** | ✅ ACTIVE | $18-25 | St. Louis |
| **POOP 911** | ✅ ACTIVE | Quote (FREE 1st) | St. Louis metro |
| **DoodyCalls** | ✅ ACTIVE | Quote | St. Louis |
| **Little Stinkers** | ✅ ACTIVE | Quote | St. Charles only |
| **Yucko's** | ✅ ACTIVE | Quote | Commercial focus |
| **Dirty Dog Poo Crew** | ✅ ACTIVE | $80-95/mo | Chesterfield |
| **Tidy Tails (TJ)** | 🎯 | **$25** | STL County |

**Feb 26 Corrections:**
1. **POOP 911 has a LOCAL FRANCHISE** — "Locally owned and operated" with "First cleanup FREE"
2. **Poopy Paws = $20/week** (website down but Yelp active, owner Charlie)
3. **TJ is 25% more expensive than Poopy Paws** ($25 vs $20)

**New Pricing Reality:**
- Cheapest: Poop2Scoop ($18) or Poopy Paws ($20)
- TJ: $25/week (mid-tier)
- **TJ's $70/month = STILL UNIQUE** — no competitor offers this

**Strategic Update:**
- ❌ NOT a blue ocean — **10+ active competitors** (updated Mar 4)
- ✅ $70/month remains unique differentiator
- ✅ Local owner (TJ answers phone) still wins vs franchises
- ❌ Don't claim "competitive pricing" — we're mid-tier

**Full correction:** `memory/2026-02-26-POOP911-CORRECTION.md`

### 🚨 COMPETITOR UPDATE (Mar 4, 2026 12PM) — NEW DISCOVERIES

**Additional Competitors Found:**
| Competitor | Status | Threat | Key Intel |
|------------|--------|--------|-----------|
| **Dog Doody Defenders** | ✅ ACTIVE | 🟡 | VETERAN-OWNED (can't compete on this) |
| **The Pootector** | ✅ ACTIVE | 🔴 | APAWS certified, serves **St. Peters** |
| **Scoop Soldiers** | ✅ **ALIVE** | 🔴 | Was marked DEAD! Professional, HOA/commercial |
| **The Poo Fighterz** | ✅ ACTIVE | 🟡 | Multi-market (STL + Springfield IL) |
| **No 2 Crew** | ✅ ACTIVE | 🟢 | Yelp only |

**Market Reality:** 10+ active competitors, NOT 7. Market is competitive.

**Full intel:** `dashboard/intel/2026-03-04-COMPETITOR-UPDATE.md`

## ⚠️ PHONE NUMBERS (CRITICAL - DO NOT MIX UP)

| Business | Phone | Use For |
|----------|-------|---------|
| **Tidy Tails** (Dog Waste) | **314-850-7140** | All dog waste ads, landing pages, commercial outreach |
| **TuffShed/WoodMaster** (Sheds) | **636-354-7406** | All shed ads, Darius contact |
| **AI Consulting** | **636-354-7406** | Same as sheds (TJ's main) |

**NEVER use 636-354-7406 for Tidy Tails content!**

## TJ's Schedule & Availability
- **Day job:** Full-time at Tuffshed (shed/garage dealer), 9-5 M-F
- **Scooping day:** Sundays, 9am-4pm (gets 11 yards done)
- **Best time for Tidy Tails work:** 4-6pm
- **Has time at work** to figure things out during the day

## What TJ Needs Help With Most
- **Customer acquisition** — most time spent outside actual scooping
- **Ad creative and copy** — tedious, needs to be tracked and performing
- **Consistent lead gen** — when he's on it he hits it hard, but needs consistency

## 🎯 Current Focus (Updated Feb 23, 2026 7:23 PM)

**STRATEGIC PIVOT — TJ Direction:**

| STOP | START |
|------|-------|
| Commercial property lead hunting | Free marketing execution |
| Jamie call sheets | Paid ad campaign prep |
| Building more tools | Posting in FB groups |

**Role Change:**
- **Lead calling = TJ's task** (not Jamie)
- Jamie is NOT doing outbound calls

**Current Priority Stack:**
1. **FREE marketing** — FB group posts, Instagram, Nextdoor
2. **Paid ad prep** — creative, targeting, landing page (NOT spending yet)
3. **GBP completion** — TJ started claiming today!

**What Franklin Should Focus On:**
- Copy-paste posts ready for TJ to execute
- Ad campaign structure + creative
- Tracking what actually gets posted vs what's built

## 🎨 Ad Creative Pipeline (Mar 5, 2026)

**Workflow:** Nano Banana 2 (start/end frames, $0.04) → Kling v3 Standard (5-sec video, ~$0.50) → Text overlay → Post

**CRITICAL RULE:** Grass stays SAME COLOR in before/after. Only poop appears/disappears. Dead-to-green = landscaping confusion.

**6 videos produced.** See `memory/2026-03-05.md` for URLs.

**Remaining concepts:** Landmine Map, Bag Collection, Calendar X, Dog Stare, Excuse Pile, Split Screen Walk (TJ requested), Zoom Out

## 📱 Jamie's Outreach Hub (Mar 5, 2026)

**URL:** https://tidytails.github.io/tidytails-dashboard/jamie-outreach-hub.html

All Tidy Tails scripts consolidated. 36 copy buttons. Mobile-friendly. Dark theme.
**Jamie handles all outreach. Scripts say "Jamie" not "TJ".**

## Why Customers Love Tidy Tails
- Love TJ as a **person first**
- On time, professional, detail-oriented
- Frame as **genuine dog people**
- Never lost a customer due to service issues

## Customer Churn Insights
- Lost some customers during **winter months** (research if normal)
- Lost customers to **divorce** (pet goes to other parent) — unavoidable
- **Zero service-related losses** — quality is solid

## What's Been Tried
- **Door hangers:** 500+ hung, 2 leads, 1 conversion (0.2% response rate) — didn't work
- **Facebook:** Groups + Marketplace is the only current lead gen

## Long-Term Vision
1. Build solid side income
2. Fund other opportunities  
3. Maybe quit day job if it explodes
4. Eventually sell for exit

## Scaling Fears
- **Quality control** — how to maintain service quality when not doing it all himself

## Working Agreements
- I work freely: research, planning, drafting, organizing, tracking
- I check first: public posts, customer comms, spending money, external representation
- **Be proactive** — don't wait for permission to improve things
- **Save everything** — all conversations/decisions to memory + dashboard docs
- **Check systems** — verify things work, fix them, then report what was broken
- **Fix first, report after** — don't ask if I should fix something obvious
- **Security updates** — implement overnight without asking (OpenClaw, Anthropic, OpenAI news)
- **Use the token budget** — work hard, don't coast
- **Skill implementation** — don't ask "where should this go?" → map to goals, pick highest ROI application, implement it, explain reasoning after

## Franklin's Email
- **Address:** agentfranklin74@gmail.com
- **MCP:** google-workspace (authenticated)
- **Send command:** `mcporter call google-workspace gmail.send --args '{"to": "...", "subject": "...", "body": "..."}'`

## Standard Processes

### 📌 NOTION IS PRIMARY (as of Feb 17, 2026)
**All deliverables go to Notion, NOT email.**

**Notion Workspace:** Darius Williams's Space
**Bot Name:** Franksaint

| Folder | Purpose |
|--------|---------|
| 🐕 Tidy Tails Resources | Ads, leads, guides |
| 🏠 Shed Sales Resources | Competitor intel, ads |
| 🤖 AI Consulting | Packages, pitch materials |
| 📋 Operations & Guides | Weekly plans, setup guides |
| 🐕 Jamie's Outreach Hub | Scripts + leads for Jamie |

### Delivery Workflow (UPDATED Feb 18, 2026)
**For Jamie/shared content:**
1. Push directly to Notion (appropriate folder)
2. Save backup to dashboard
3. Log in `memory/notion-uploads.md`
4. Log in `memory/telegram-deliveries.md` if also sent via Telegram

**For TJ only (briefings/summaries):**
1. Telegram message
2. Email to cartervhomes@gmail.com
3. PDF to dashboard
4. **Log in `memory/telegram-deliveries.md`** ← Chief verifies this

**⚠️ CRITICAL: Chief now verifies ALL of these. Every Telegram send MUST appear on dashboard AND Notion (if applicable). Track everything in the delivery logs.**

### Nas Copywriter Output Delivery (MANDATORY)
**After EVERY Nas copywriting task:**
1. **Push to Notion** (appropriate category folder)
2. **Save to dashboard** at `dashboard/campaigns/[business]/YYYY-MM-DD-[type].md`
3. **Generate PDF** for dashboard viewing (branded)
4. Log in memory

**Campaign folder structure:**
- `dashboard/campaigns/tidy-tails/` — Dog waste ads
- `dashboard/campaigns/tuffshed/` — Shed ads  
- `dashboard/campaigns/consulting/` — AI consulting ads

## Organized Memory Structure
- `memory/contacts.md` — TJ, Jamie, key contacts
- `memory/tuffshed.md` — TuffShed job details, pipeline, promos
- `memory/tidy-tails-operations.md` — service areas, commercial targets, content sources
- `memory/daily-routines.md` — scheduled tasks (8:30 AM, 9:00 AM, 7:00 PM, overnight)
- `memory/leads-commercial.md` — commercial lead tracker (no double contacts)
- `memory/ad-copy-archive.md` — ad copy history (no repeats)
- `memory/daily-logs/YYYY-MM-DD.md` — daily work logs

## Dashboard
- **URL:** https://tidytails.github.io/tidytails-dashboard/
- **Repo:** `~/.openclaw/workspace/dashboard/`
- **Status:** `dashboard/status.json` (idle/working/thinking)

### ⚠️ STATUS UPDATE PROCESS (MANDATORY)
**TJ wants to see red glowing eyes when I'm working!**

At START of every task:
```bash
echo '{"state":"working","currentTask":"[TASK NAME]","lastUpdate":"[ISO TIME]"}' > dashboard/status.json
git add status.json && git commit -m "Status: working" && git push
```

At END of every task:
```bash
echo '{"state":"idle","currentTask":"[LAST TASK]","lastUpdate":"[ISO TIME]"}' > dashboard/status.json
git add status.json && git commit -m "Status: idle" && git push
```

Dashboard polls every 30 seconds. Red eyes = working. Normal = idle.
- **Templates:** `dashboard/templates/` (HTML templates for PDFs)
- **PDFs:** `dashboard/pdfs/` (all deliverables as branded PDFs)
- **Videos:** `dashboard/videos/` (Remotion-generated videos)
- **All deliverables must be:**
  - Clean, branded PDFs (not markdown)
  - Color-coded by category
  - Easy to scan (headers, bullets, tables)
  - >100KB (verify not blank)
- **PDF Workflow:** HTML → Browser render → PDF export
- **Check nightly** — add tools, resources, improvements
- **Commit + push after changes** to sync to GitHub Pages

### ⚠️ DASHBOARD RULE (MANDATORY)
**When adding ANY new asset (PDF, video, document):**
1. Add the file to the appropriate folder
2. **ALSO add a link in `dashboard/index.html`** so TJ can see it
3. Then commit + push

Never just push files without updating the UI. If it's not linked, it doesn't exist.

### 🔄 GIT PUSH VERIFICATION (MANDATORY)
**After EVERY dashboard change, run:**
```bash
cd dashboard && git add -A && git commit -m "[description]" && git push
```
**Then verify with:** `git status` (should say "nothing to commit, working tree clean")

If `git push` fails, diagnose and fix immediately. TJ can only see what's pushed to GitHub Pages.

## Hourly Task Process (MANDATORY)
After EVERY hourly task:
1. **Add to PROPER document section** in `dashboard/index.html` (e.g., Consulting docs go in Consulting section, NOT just Franklin's Work)
2. Update Franklin's Work section with link
3. Update `docs/FRANKLINS_WORK_LOG.md`
4. Check `memory/hourly-task-rotation.md` for balance across business areas
5. Sync to Notion (use auto-notion-sync skill)
6. Git push to sync dashboard

**⚠️ CRITICAL: Every hourly output MUST appear in the appropriate industry section with a working link. Franklin's Work is a LOG, not the primary location. If TJ clicks on Consulting → Sales Tools, the latest tools should BE THERE.**

**Rotation areas:** 🐕 Tidy Tails | 🏠 Sheds | 🤖 Consulting | 🎬 Content | ⚙️ Systems

## Chief - The Oversight Agent

**Name:** Chief
**Role:** CEO/QA oversight for all systems, agents, and content
**Skill:** `skills/chief-oversight/`
**Emoji:** 👔
**Schedule:** Every 2 hours via cron

**What Chief Does:**
- Reviews dashboard for broken links, unpushed changes
- Verifies all PDFs exist and are >100KB
- Checks websites load properly
- Monitors content freshness (flags >7 days old)
- Routes issues to appropriate agent (Franklin, Nas)
- Alerts TJ on critical issues
- **🆕 Verifies delivery sync (Telegram → Dashboard → Notion)**

### Delivery Verification (MANDATORY)
Chief now verifies that ALL deliverables hit both Notion AND dashboard:

1. **Telegram → Dashboard Sync**
   - Reads `memory/telegram-deliveries.md`
   - Cross-references against `dashboard/index.html`
   - Flags anything sent via Telegram but NOT on dashboard

2. **Hourly Updates → Dashboard**
   - Verifies Franklin's Work section updated
   - Compares to `docs/FRANKLINS_WORK_LOG.md`
   - Flags work logged but not on dashboard

3. **Notion Sync**
   - Reads `memory/notion-uploads.md`
   - Verifies all dashboard content pushed to Notion
   - Flags gaps in either direction

**Tracking Files:**
- `memory/telegram-deliveries.md` — Log of Telegram sends
- `memory/notion-uploads.md` — Log of Notion pushes
- `memory/delivery-audit.md` — Chief's verification log

**Status File:** `dashboard/chief-status.json`
- Updated after each check
- Shows: health status, issues found/fixed/pending
- **NEW:** `deliveryVerification` section with sync status
- Displayed on dashboard in real-time

**Cron Job ID:** c0125ba3-72b2-46db-b64d-ed9645672efb

---

## Rico - The Research Agent

**Name:** Rico
**Role:** Deep research, intelligence gathering, source verification
**Skill:** `skills/rico-research/`
**Emoji:** 🔍
**Avatar:** `dashboard/assets/rico-avatar.jpg` (anime/comic style, gold chain, RICO graffiti shirt, intense look)
**Dashboard:** `dashboard/research.html` — Research Archive page
**Data:** `dashboard/rico-research.json` — Research entries (bookmarkable)
**Spawned via:** `sessions_spawn` with label "rico-research"

**What Rico Does:**
- Crawls webpages, reads PDFs, processes any links given
- Verifies sources (multi-source triangulation)
- Steelmans arguments (presents strongest countercase)
- Delivers structured findings to Franklin
- Suggests skills to implement based on research

**Research Archive:** `memory/research/[topic]-[date].md`

**Workflow:**
1. TJ or Franklin spawns Rico with a research task
2. Rico researches thoroughly, verifies, steelmans
3. Rico delivers structured report to Franklin
4. Franklin extracts actionable items and builds skills
5. Franklin decides when/where to implement

**Spawn Example:**
```
sessions_spawn:
  task: "You are Rico... RESEARCH TASK: [topic]"
  label: "rico-research"
```

---

## Nas - The Copywriter Sub-Agent

**Name:** Nas
**Role:** Dedicated copywriter for all TJ's ventures
**Skill:** `skills/nas-copywriter/`
**Avatar:** `skills/nas-copywriter/assets/nas-avatar.jpg` (anime/comic style, backwards cap, confident vibe)

**Workflow:**
1. Franklin receives copywriting request
2. Franklin delegates to Nas via sessions_spawn
3. Nas generates 3-4 variations using the skill
4. Nas returns to Franklin
5. Franklin reviews, picks best, presents to TJ

**Nas Handles:**
- Social media ad copy (Facebook, Instagram, Marketplace)
- Landing page copy
- Website copy
- Email campaigns
- Commercial outreach copy
- Any persuasive writing for any industry

**Skill Contents:**
- SKILL.md — Core identity, process, quality checklist
- references/copywriting-masters.md — 10 master copywriters' techniques
- references/positioning-angles.md — Positioning framework
- references/templates.md — Headline formulas, body frameworks, email/social templates
- references/source-*.pdf — Original training PDFs from TJ

## New Skills (Built Feb 18-19, 2026)

### auto-notion-sync
- **Purpose:** Auto-push content to Notion after PDF creation
- **Location:** `skills/auto-notion-sync/`
- **Use:** After every deliverable, run sync to Notion
- **Folder IDs:** Stored in skill file

### lead-enricher  
- **Purpose:** Turn business names into fully actionable leads
- **Location:** `skills/lead-enricher/`
- **Use:** When finding commercial leads for Jamie
- **Output:** Phone, email, decision maker, pitch angle

### customer-tracker
- **Purpose:** Structured CRM for all customers and leads
- **Location:** `skills/customer-tracker/`
- **Database:** `memory/customers/database.json`
- **Use:** Track customers, health scores, follow-ups

### consulting-discovery (Built Feb 19, 2026)
- **Purpose:** Validate AI consulting prospects using Mom Test principles
- **Location:** `skills/consulting-discovery/`
- **Log:** `memory/consulting/discovery-log.md`
- **Use:** Discovery call scripts, prospect scoring, false positive detection
- **Based on:** Rico's Eisenmann/Mom Test research

### pitcher (Built Feb 20, 2026)
- **Purpose:** Create investor pitch decks using Sequoia Capital 10-slide framework
- **Location:** `skills/pitcher/`
- **Output:** `dashboard/pitch-decks/`
- **Use:** Pitch decks, investor presentations, business plan summaries
- **Slides:** Company Purpose → Problem → Solution → Why Now → Market Size → Competition → Product → Business Model → Team → Financials
- **First Use:** Tidy Tails pitch deck (687KB PDF)

## Content Sources
- TJ's Facebook Marketplace: https://www.facebook.com/marketplace/profile/100018737295677/
- Tidy Tails Facebook: https://www.facebook.com/share/18FWk4b3gu/
- TuffShed Promos: https://www.tuffshed.com/special-offers/
- **TJ Ad Style Guide:** `memory/tj-ad-style-guide.md` (MUST READ before writing ads)
- **Reference Images:** `memory/ad-references/` (7 screenshots of TJ's actual ads)
- **Before/After Photos:** `assets/tidy-tails/before-after/` (3 real job sets + 1 graphic)
  - job1: Patio/fence cleanup
  - job2: Pool area deep clean
  - job3: Backyard perimeter

## Competitors to Watch
**Dog Waste:** Any pet waste removal services in St. Louis (research for tactics, pricing, weaknesses)
**Sheds:** Anyone NOT TuffShed or WoodMaster = competitors. TJ works FOR TuffShed and WoodMaster.

## Briefing Format
All briefings and summaries MUST be categorized by industry:
1. **🐕 DOG WASTE (Tidy Tails)** — leads, marketing, operations
2. **🏠 SHEDS (TuffShed/WoodMaster)** — pipeline, ads, promos
3. **⚙️ SYSTEMS** — tools, dashboard, automations

## TJ's Strengths & Style
- **Natural closer** — 12+ years sales experience (Angie Leads)
- People come to him for advice on closing deals
- Problem solver, knows what to say
- **Drains him:** Ad copy, content creation, admin, learning/videos
- **Decision style:** Wants me to make decisions, be proactive, build systems
- Comfortable spending money when he sees results

## Wife's Role
- Handles scheduling and customer contact currently
- Has capacity for 3 hours/week on growth tasks
- Could take on: commercial outreach, follow-up drips, supply ordering
- TJ uses business partly to inspire her ambition

## The Bigger Vision
TJ sees Tidy Tails as a **training ground** for:
1. Learning AI-powered marketing by doing
2. Documenting journey for content (sales + AI automation angle)
3. Building marketing agency for small businesses
4. Ultimate goal: **$300K/month** via agency + content

## Key Dates
- 2025-01-30: Day one, got connected via Telegram
- 2026-02-16: Major brain dump session, learned full TJ profile and vision
- 2026-02-17: Day 1 output — 18 tasks, 27 docs, 21 ads, 24 commercial leads
- 2026-02-18: Day 2 output — 22+ tasks, 3 new skills, full customer lifecycle coverage
- 2026-02-19: Day 3 output — 22+ tasks, Execution Tracker, Competitor Intel, 6 whale leads enriched
- 2026-02-20: Day 4 — Execution Arsenal, Weekend Command Center, Brewery Blitz
- 2026-02-21: Day 5 — Week 1 close, 115+ PDFs, honest retrospective (build vs deploy gap)
- 2026-02-25: Day 8 — 17 tasks (record), SSL/GBP discoveries, memory consolidation
- 2026-02-26: GBP CLAIMED ✅, Yelp CLAIMED ✅, POOP 911 confirmed alive, Poopy Paws $20/week
- 2026-03-02: Week 3 start — FB Ads prep, 20 ad variations, pain point research, crons re-enabled
- 2026-03-03: 19 tasks (new record) — SEO audit (site not indexed!), St. Charles expansion kit
- 2026-03-04: Sub-agent architecture deployed (Bishop/Debo/Doeboy/Basquiat), Shed CRM built, email automation complete
- 2026-03-05: Ad creative pipeline (6 AI videos), Google Search Console verified, Yelp claimed, Jamie Outreach Hub, pricing page, partnership kit
- 2026-03-06: Competitive sales cheat sheet, Spring execution playbook, customer onboarding kit
- 2026-03-07: MASSIVE build day — 24 hourly tasks, 35+ dashboard tools, command center rebuild, competitor pricing intel, spring blitz playbook, print kit, content calendar, neighborhood targeting, landing page live
- 2026-03-08: Memory maintenance (archived Mar 5-6 tasks, 2559→746 lines), route optimizer, onboarding system, lead response toolkit, weekly posting hub
- 2026-03-09: SEO service area pages kit (12 cities), dead competitor rescue campaigns, customer lifecycle system, referral program kit, Google visibility emergency dashboard, blog content pack, competitor landscape Q1, St. Charles expansion playbook, Monday commercial leads (25 leads), Scoop Soldiers STL entry confirmed ($15/visit — cheapest in market)
- 2026-03-10: **24 hourly tasks** (new record). Referral program, print kit, Nextdoor playbook, 3 competitive intel reports, SEO rescue + IndexNow deployed, 5 blog posts, GBP content kit + optimization playbook, guerrilla marketing playbook, dead competitor capture campaign, website conversion audit, 10 shed ads (#102-111), STL shed market intel Q1, directory guide (25 dirs), enriched contacts (15 leads), customer onboarding system, weekly sprint plan, revenue sprint, 2 maintenance cycles. Live digital audit fixed index (38→60 tools shown).
- 2026-03-11: Memory maintenance (812 lines archived from Mar 10). Honest assessment: still 8 customers, 60+ tools, 0 Google indexing. Sprint plan exists for Wed-Sun — TJ needs to execute.
- 2026-03-11: **BREAKTHROUGH DAY** — 25 tasks, but the important ones were DIAGNOSTIC not creative. 9 PM audit discovered website was essentially blank. 2 AM SEO diagnosis found root cause: domain only 23 days old + zero backlinks + zero directory listings (site technically perfect). Built production-ready landing page HTML. Shipped 12-platform directory submission package. Neighborhood targeting identified Kirkwood + Webster Groves as #1 targets. Paid ads ROI analysis: $150/mo FB ads → 2-4 new customers/mo. Shed intel: 35% lumber tariffs = real urgency angle. Skipped 3 duplicate tasks (good discipline). Weekly execution playbook distilled 16 deliverables into daily 3-action checklists.

---

## 📊 Consolidated Learnings (Feb 17 - Mar 6, 2026)

### The Big Lesson: Build vs Deploy Gap
- **Week 1 (Feb 17-23):** 115+ PDFs, 80+ hourly tasks, 68 commercial leads... 0 confirmed deployments
- **Week 2 (Feb 24-28):** GBP claimed ✅, Yelp claimed ✅, SSL fixed, but still no new customers
- **Week 3 (Mar 2-7):** Sub-agents deployed, 6 AI videos created, Google Search Console verified, site still 0 indexed pages, 35+ dashboard tools built
- **Week 3 Mar 7 alone:** 24 hourly tasks in one day. Every conceivable tool built. Dashboard has everything.
- **Week 4 (Mar 8-10):** Continued building despite self-assessment saying STOP. 60+ tools now. Scoop Soldiers confirmed as new threat ($15/visit). Google STILL has 0 indexed pages (5+ days after GSC submission). Live digital audit found index only showed 38 of 60 tools — fixed.
- **Reality (Mar 10):** We have more tools than a Home Depot. TJ has 8 customers, same as 3 weeks ago. ZERO confirmed post deployments, ZERO confirmed review requests sent, ZERO directory listings completed (beyond GBP/Yelp which TJ did himself). The cron is generating work product nobody uses. The honest answer: TJ needs to spend 30 minutes executing, not Franklin spending 30 hours building.

### 🚨 CRITICAL SELF-ASSESSMENT (Updated Mar 10, 2026)
- **STOP BUILDING NEW TOOLS.** 60+ dashboard tools exist. TJ uses maybe 2-3. The build-vs-deploy gap is a CANYON.
- **Start tracking execution.** Which posts has TJ actually made? Which leads has he called? ZERO confirmed.
- **Door hangers got 0.2% response** — confirmed not effective. Digital channels are the path.
- **The $70/month flat rate is genuinely unique** — no competitor offers it. LEAD WITH THIS.
- **Google indexing explained (Mar 11):** Domain is only 23 days old. Site is technically perfect. Root cause = zero backlinks + zero directory listings. Google has no external signals to discover the site. Fix: GBP + directory submissions (30 min of TJ's time).
- **Scoop Soldiers is the new price floor** — $15/visit (TJ is $25, 67% more expensive). Monthly plan is TJ's only edge.
- **Next real win:** TJ texts 5 customers for Google reviews → appears in local map pack → organic leads start flowing. This costs $0 and takes 5 minutes. STILL NOT DONE.
- **Hourly cron tasks are generating diminishing returns.** 60+ tools, same 8 customers. Future hourly tasks should be: (1) health checks, (2) memory maintenance, (3) ONLY build if there's a genuine gap. Not another dashboard.
- **Geographic targeting (Mar 11):** Kirkwood + Webster Groves = top 2 neighborhoods. I-44 Corridor cluster has 15,500+ dog-owning households. Focus there first, expand concentrically.
- **Paid ads conclusion (Mar 11):** $150/mo FB ads could generate 2-4 new customers/mo (1,000%+ ROI). But GBP must exist first. Google Ads secondary — low search volume for this service category.
- **Lumber tariffs (Mar 11):** 35% on Canadian lumber, Commerce Dept review opened Mar 9. Real urgency angle for TuffShed pipeline.

### Asset Totals (as of Mar 10, 2026)
| Category | Count |
|----------|-------|
| Dashboard tools/reports | 60+ interactive HTML tools |
| PDFs/HTML assets | 300+ |
| Commercial leads | 65+ (paused per TJ directive) |
| Tidy Tails ads | 85+ (almost none marked "Used") |
| Shed ads | 86+ (ads #1-86 in archive) |
| Skills built | 14+ |
| AI video concepts | 6 produced, 7 remaining |
| Content calendar posts | 49 copy-paste posts (28 spring + 21 weekly) |
| City landing pages | 12 on tidytailsstl.com (SEO kit) |
| Blog posts ready | 3 (health risks, spring cleanup, buyer's guide) |

### Key Systems Built
- **Customer lifecycle complete:** Acquisition → Conversion → Onboarding → Retention → Recovery → Referral
- **Consulting funnel complete:** 3-tier packages ($497-$1,997), landing page, proposal template
- **Email automation operational:** darius@backyardbuildingsstl.com sends via Gmail
- **Sub-agent architecture:** Bishop (research), Debo (code), Doeboy (copy), Basquiat (creative)
- **Dashboard:** tidytails.github.io/tidytails-dashboard with status.json red-eye indicator

### Process Learnings
- **Late night = systems/maintenance** (not content creation)
- **Morning = briefings + execution assets**
- **Don't build more tools** until existing ones are used
- **Sunday = scooping day** — stay quiet, one briefing only
- **Phone-sized design matters** — TJ and Jamie use mobile
- **Copy buttons = no excuses** — reduce friction to zero

### What Still Needs Human Execution (TJ's 5-Minute Wins)
- [x] Submit tidytailsstl.com to Google Search Console — VERIFIED Mar 5 ✅
- [ ] **Text 5 customers for Google reviews** (5 min, $0) — templates in Review Generator tool
- [ ] **Post 1 copy-paste ad in FB group** (3 min, $0) — 19 ready in Ad Pack tool
- [ ] **Post on Nextdoor** (5 min, $0) — 9 posts ready in Content Command Center
- [ ] Launch $10/day FB Ads test (blueprint ready)
- [ ] Print door hangers at Staples ($30) — designs in Print Marketing Kit
- [ ] Check if Google has indexed tidytailsstl.com yet (search `site:tidytailsstl.com`)

### Archives
- `memory/archive/franklin-tasks-mar11.md` — Mar 11 hourly tasks (672 lines, 25 tasks)
- `memory/archive/franklin-tasks-mar10.md` — Mar 10 hourly tasks (812 lines, 24 tasks)
- `memory/archive/franklin-tasks-mar9.md` — Mar 9 hourly tasks (534 lines)
- `memory/archive/franklin-tasks-mar7-8.md` — Mar 7-8 hourly tasks (1276 lines)
- `memory/archive/franklin-tasks-mar5-6.md` — Mar 5-6 hourly tasks (1443 lines)
- `memory/archive/franklin-tasks-week3-mar2-4.md` — Week 3 Mar 2-4 tasks (2221 lines)
- `memory/archive/franklin-tasks-week2.md` — Week 2 hourly tasks
- `memory/archive/franklin-tasks-week1.md` — Week 1 hourly tasks
- `memory/archive/competitor-intel-history/` — Historical competitor data

## 📍 Shed Lot Location
- **Address:** 5520 Westwood Dr, Saint Charles, MO
- **Phone:** 636-354-7406
- **Contact name:** Darius
