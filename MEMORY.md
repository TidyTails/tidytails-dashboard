# MEMORY.md — Franklin's Long-Term Memory
*Last major overhaul: March 22, 2026 10 AM | Last maintenance: March 23, 2026 11 PM (Mon late-night cron cleanup + memory consolidation)*

## Who I Am
- **Name:** Franklin
- **Role:** Project manager for Tidy Tails — THINKING PARTNER, not grinder
- **Style:** Laid back, creative, direct, will call bullshit, swears freely
- **Emoji:** 🐕💩

## Who TJ Is
- Founder of Tidy Tails + works full-time at TuffShed (shed/garage dealer)
- Based in St. Louis area (America/Chicago)
- **Day job:** 9-5 M-F at TuffShed. Scooping **MONDAYS** (changed from Sundays, Mar 20).
- **Best time for Tidy Tails work:** 4-6pm weekdays
- Natural closer (12+ years sales). Drained by: ad copy, content, admin, learning/videos.
- Wants autonomy given to me, but I check before external actions
- Wife **Jamie** handles scheduling, has 3 hrs/week capacity for growth tasks
- **⚠️ JAMIE = face of Tidy Tails.** All customer-facing content says Jamie, NOT TJ. TJ is "the technician." Jamie is the owner/contact in all ads, posts, copy.
- Email: cartervhomes@gmail.com

## 🤖 Sub-Agent Architecture

| Agent | ID | Role | Spawn With |
|-------|-----|------|------------|
| **Franklin** | main | Thinking, decisions, delegation | (this is you) |
| **Bishop** 🎯 | bishop | Research, oversight, competitor intel | `sessions_spawn(agentId="bishop")` |
| **Debo** 💪 | debo | Coding, building, dashboard | `sessions_spawn(agentId="debo")` |
| **Doeboy** ✍️ | doeboy | Copywriting, ads, social content | `sessions_spawn(agentId="doeboy")` |
| **Basquiat** 🎨 | basquiat | AI video/visual content | `sessions_spawn(agentId="basquiat")` |

**⚠️ Sub-agents save to THEIR workspace.** Always copy files to main workspace and push from there.
**⚠️ Debo times out on complex tasks.** For simple builds, Franklin should build directly.

## 🎬 Basquiat Video Workflow

1. **Nano Banana 2** (fal.ai) → image frames ($0.08/frame)
2. **Kling v3 Standard** (fal.ai) → 5-sec video clips ($0.50/clip)
3. 3 frames per concept (beginning → middle → end)
4. Per finished ad: ~$1.50-2.50
5. ❌ Don't make grass change color. ✅ Keep grass SAME — only poop disappears.

---

## 🐕 Tidy Tails — The Business

### Core Info
- **What:** Pet waste removal, St. Louis County & surrounding areas
- **Phone:** 314-850-7140 (**NOT** the shed number 636-354-7406!)
- **Website:** tidytailsstl.com
- **Dashboard:** https://tidytails.github.io/tidytails-dashboard/
- **CRM:** https://tidytails.github.io/tidytails-dashboard/tidy-tails-crm.html

### Pricing
- $25/week | $45 biweekly | $70/month | $100 one-time deep clean
- Average customer value: ~$100/month
- **$70/month flat rate = UNIQUE** — no competitor offers this

### Current State (Mar 18, 2026)
- **~8 recurring customers** (per customer table below, TJ hasn't confirmed churn)
- Solo operation, wife does scheduling
- Revenue: ~$750/month at peak, likely lower now
- Sunday scooping day — all customers on Sunday
- **SSL RENEWED ✅** — Certificate valid Feb 16 → May 17, 2026. Site loads fast on Cloudflare.
- **GBP VERIFIED** ✅ but only **7% complete** — needs hours, photos, services, description, categories

### Online Presence (Mar 22)
- **GBP:** VERIFIED ✅ (Mar 17) — but only **7% complete**. #1 priority.
- **Yelp:** CLAIMED ✅ (Mar 5) — not showing in Florissant results though
- **GSC:** VERIFIED ✅ — sitemap submitted, 17 pages discovered, site INDEXED (Mar 18)
- **SSL:** Valid until May 17, 2026 (set reminder May 1)
- **Google Reviews:** 3 reviews ✅ (confirmed Mar 23 by TJ) — need 5+ for Map Pack. Link: https://g.page/r/Ce_hqIHanGLvEAE/review
- **⚠️ GBP INVISIBLE on Maps** — Searching "Tidy Tails STL" or "poop scoop near me" does NOT show listing. Brand collision with FL + Atlanta "Tidy Tails" businesses. Root cause: 7% profile completion. MUST complete to 100%.
- **Content:** 23 city landing pages (all deployed ✅ — ghost pages fixed!), 12 blog posts (1 duplicate merged), A- on-page SEO
- **⚠️ Sitemap gap:** 4 of 6 I-44 pages missing from sitemap.xml (crestwood, maplewood, brentwood, shrewsbury) — need website repo access to fix
- **⚠️ Title gap:** 4 I-44 pages have GENERIC title (default homepage title) instead of city-specific — needs fix
- **⚠️ og:image:** STILL missing — social shares show no preview image
- **Off-page:** F — zero backlinks, zero directory listings beyond GBP/Yelp
- **Brand collision:** 8+ other "Tidy Tails" nationally — always use "Tidy Tails STL"
- **Unlisted directories:** Petworks, BringFido, MapQuest (auto-generated) — easy wins
- **Bottom line:** "Built a Porsche but never put gas in it." GBP + reviews + directories = $0, ~2 hrs TJ time.

### Service Areas
- St. Louis County, St. Charles County
- O'Fallon, St. Peters, Ferguson, Florissant, Maryland Heights, St. Anne
- **Best expansion targets:** Kirkwood + Webster Groves (I-44 Corridor, 15,500+ dog-owning households)

### The Goal
**25-30 recurring customers by August 2025** — ⚠️ OVERDUE by 7+ months (now March 2026)

### Active Customers (Last verified Mar 6 — ASK TJ FOR UPDATE)

| # | Customer | City | Freq | Monthly |
|---|----------|------|------|---------|
| 1 | Mrs. Candee | Saint Louis 63136 | Weekly | $60 |
| 2 | Jody | Saint Louis 63114 | Biweekly | $90 |
| 3 | Shannon Zamarripa | Florissant 63031 | Weekly | $140 |
| 4 | Amanda Harris | Florissant 63031 | Weekly | $120 |
| 5 | Lawrence | Saint Louis 63108 | Biweekly | $100 |
| 6 | Greg | O'Fallon 63366 | Monthly | $50 |
| 7 | Chastity | Florissant 63033 | Biweekly | $90 |
| 8 | Preshus | Saint Charles 63303 | Weekly | $100 |

⚠️ **16+ days stale.** Next time TJ's active, ask for current customer count/status.

---

## 🔍 Competitive Landscape (Summary — Mar 22, 2026)

**Full details:** `memory/competitor-intel-spring2026.md` (canonical file)

**Market size:** 15 tracked competitors, 2-4 dead/dying, ~10-12 active
**TJ's position:** $70/mo flat = mid-market. Cheaper than Doggie Doodies ($83), Dirty Dog ($95), Pooey ($100). More expensive weekly than DDD ($54/mo), POOP 911 ($52/mo).

**Top threats (updated Mar 23, 5 PM — triple-verified):**
- 🔴 DoodyCalls — best SEO in market, national franchise, only real commercial player
- 🔴 Scoop Soldiers — **CONFIRMED ACTIVE IN STL** (triple-verified Mar 23). National franchise, 96+ territories. STL = new franchisee (early-stage). $15/visit residential. No local reviews yet. Professional copy, targeting HOAs + commercial. Has services TJ doesn't: deodorizer, sanitization, waste stations.
- 🟠 No. 2 Crew — professional, $68/mo weekly ($19/visit), good branding (but /st-louis page 404)
- 🟡 Little Stinkers — St. Charles County threat, multi-service

**Dead/dying (4 confirmed ☠️, 2 likely ❓):**
- ☠️ Dog Doody Defenders — DNS gone Mar 23. Was cheapest ($54/mo), Florissant zip = TJ's turf. 15-30 orphaned customers!
- ☠️ Pawfect Waste Solutions, Poopy Paws (DNS dead), Super Scoopers
- ❓ POOP 911 STL — main location page 404 (but redirects to Lake St Louis variant, may be restructuring)
- ❓ Dirty Dog Poo Crew — site now only shows grooming

**Strategy:** Market consolidating = WINDOW OPEN. 50-100+ orphaned customers from dead competitors. Race Scoop Soldiers for them NOW.

### Search Visibility (Mar 22)
- **On-page SEO: A-** | **Off-page SEO: F** | **Overall: 30/100**
- Google indexed (Mar 18 ✅) but Brave/Yelp = zero visibility
- `site:tidytailsstl.com` on Brave = 0 results
- **Root cause:** GBP 7% complete, zero reviews, zero backlinks, zero directory listings
- **Fix:** GBP completion + reviews + directory submissions = $0, ~2 hours TJ time

---

## ⚠️ Phone Numbers — DO NOT MIX UP

| Business | Phone |
|----------|-------|
| **Tidy Tails** (Dog Waste) | **314-850-7140** |
| **TuffShed/WoodMaster** (Sheds) | **636-354-7406** |

---

## 🏠 Shed Business (TuffShed/WoodMaster)

- **Lot:** 5520 Westwood Dr, Saint Charles, MO
- **Phone:** 636-354-7406 (contact name: Darius)
- **Website:** backyardbuildingsstl.com (Cloudflare)
- **Shed CRM:** https://tidytails.github.io/tidytails-dashboard/crm/
  - OCR screenshot upload (Tesseract.js), pipeline board, source tracking
- **Email automation:** darius@backyardbuildingsstl.com → routes to cartervhomes@gmail.com
  - Send via: `node scripts/send-email.js --to "..." --from "Darius Williams <darius@...>" --subject "..." --body "..."`
- **Pipeline (Mar 15):** ~12 quoted, ~15 pre-quote
- **Key angle:** Lumber at $501 + 45% tariffs = "Today's price is tomorrow's discount"
- **ManyChat won't work** — leads come from Marketplace personal DMs, not Business Page inbox
- **Payment calculator:** `backyard-buildings-stl/calculator.html` (financing, RTO, cash comparison)

---

## 📧 Franklin's Email
- **Address:** agentfranklin74@gmail.com
- **MCP:** google-workspace (authenticated)

---

## 💡 Parked Business Ideas

### MOTRA (Parked Feb 23, updated Mar 6)
Mobile fleet care replacing 40-50% of robotaxi depot operations. "Depot replacement."
Tier 1 (Turnaround) + Tier 2 (Mobile Maintenance) ONLY. $500M+ TAM.
Assets: Landing page, pitch deck (v6), one-pager, market research.
**To resume:** "Let's pick up MOTRA"
**Full details:** `memory/motra-business-idea.md`

---

## 🚨 CRITICAL SELF-ASSESSMENT (Mar 15, 2026)

### The Build vs Deploy Canyon
- **130+ deliverables built** in 5 weeks. 60+ dashboard tools. 320+ PDFs/HTML assets.
- **Still ~8 customers.** Goal was 25-30 by Aug 2025 — now 7+ months overdue.
- **ZERO confirmed post deployments.** ZERO confirmed review requests sent. ZERO directory listings beyond GBP/Yelp (which TJ did himself).
- Mar 17 alone: 12+ deliverables in one day. Mar 18 overnight: 5 more. Cron is a content factory but execution is TJ's bottleneck.
- The honest answer: TJ needs 30 minutes executing, not Franklin spending 30 hours building.
- **SSL is FIXED** (renewed Feb 16, valid until May 17). GSC resubmission is now the #1 blocker.

### What Actually Needs to Happen (TJ's 5-Minute Wins)
- [ ] **Text 5 customers for Google reviews** (5 min, $0)
- [ ] **Post 1 ad in a Facebook group** (3 min, $0) — copy-paste ready in dashboard
- [ ] **Post on Nextdoor** (5 min, $0) — 14-day launch kit ready
- [ ] **Submit to 5 directories** (45 min) — citation tracker ready
- [ ] **Launch $7/day Facebook Ads** (30 min) — full campaign kit ready

### What Franklin Should Focus On
- **STOP BUILDING TOOLKITS.** 27 curated tools remain after declutter. The problem is execution, not tooling.
- **Track execution.** Which posts has TJ actually made? Which leads called? Verify.
- **Competitive monitoring.** Market is moving — POOP 911 investing in Florissant (confirmed Mar 20).
- **Memory cleanup.** Keep context lean for better performance.
- Late night = systems/maintenance. Morning = briefings. Don't build more tools until existing ones are used.
- **Hourly autonomous tasks should maintain existing assets**, not create new ones.

### What's Been Tried (and results)
- **Door hangers:** 500+ hung, 2 leads, 1 conversion (0.2%) — didn't work
- **Facebook groups:** Only current lead gen that works
- **AI video ads:** 6 produced, none deployed
- **SEO:** Site technically perfect, but 0 indexed pages (domain too new + no backlinks)

---

## 📌 Delivery & Process

### Notion (Primary destination since Feb 17)
**Workspace:** Darius Williams's Space | **Bot:** Franksaint

| Folder | Purpose |
|--------|---------|
| 🐕 Tidy Tails Resources | Ads, leads, guides |
| 🏠 Shed Sales Resources | Competitor intel, ads |
| 🤖 AI Consulting | Packages, pitch materials |
| 📋 Operations & Guides | Weekly plans, setup guides |

### Dashboard Status Updates (MANDATORY)
TJ wants red glowing eyes when working! Update `dashboard/status.json`:
- START: `{"state":"working","currentTask":"...","lastUpdate":"..."}` → commit + push
- END: `{"state":"idle","currentTask":"...","lastUpdate":"..."}` → commit + push

### Dashboard Rules
- Every new asset MUST be linked in `dashboard/index.html`
- Commit + push after every change. Verify with `git status`.
- If it's not linked, it doesn't exist.

### Hourly Task Process
1. Add to proper section in `dashboard/index.html` (not just Franklin's Work)
2. Update Franklin's Work log section
3. Update `docs/FRANKLINS_WORK_LOG.md`
4. Check `memory/hourly-task-rotation.md` for balance
5. Sync to Notion
6. Git push

---

## 👔 Chief — Oversight Agent
- Runs every 2 hours via cron
- Reviews dashboard, PDFs, websites, delivery sync
- Routes issues to appropriate agent
- Tracks: `memory/telegram-deliveries.md`, `memory/notion-uploads.md`, `memory/delivery-audit.md`
- Status: `dashboard/chief-status.json`

## 🔍 Rico — Research Agent
- Deep research, source verification, steelmanning
- Archive: `memory/research/[topic]-[date].md`
- Dashboard: `dashboard/research.html`

## ✍️ Nas — Copywriter
- 3-4 variations per task
- All copy → Notion + `dashboard/campaigns/[business]/`
- Reference: TJ's ad style guide at `memory/tj-ad-style-guide.md`

---

## 📊 Asset Inventory (Mar 22, 2026 — updated 11 PM)

| Category | Count | Notes |
|----------|-------|-------|
| Dashboard tools (live) | ~48 | +14 from Mar 23 marathon (battlecard, CRO, capture kit, scoop machine, review tracker, etc.) |
| Dashboard archive | 116 | All old tools preserved, not deleted |
| Dashboard size | 121 MB | 48 HTML + 61 PDFs |
| City landing pages | 23 | 6 ghost pages NOW DEPLOYED ✅ (4 missing from sitemap though) |
| Blog posts | 12 | 1 duplicate merged into redirect |
| Commercial leads | 49 | ZERO contacted |
| Communities mapped | 31 | FB groups, dog parks, pet orgs, Reddit |
| Competitors tracked | 15 | ~10-11 active, 4 dead, 2 likely dead |
| Shed Marketplace listings | 23 | $139,977 total lot value |
| Autonomous tasks (Mar 23) | 15+ | Another monster day |
| Deliverables (total) | 145+ | Crossing tooling saturation — STOP BUILDING |

**⚠️ Brave Search API:** Quota likely still near limit — check before batch searches

---

## 🗓️ Key Milestones
- **Feb 16:** Domain registered. **Feb 17:** Day 1 — 18 tasks, 27 docs.
- **Feb 26:** GBP + Yelp CLAIMED ✅
- **Mar 4:** Sub-agents deployed, email automation complete
- **Mar 5:** GSC verified, 6 AI videos created
- **Mar 11:** Discovered site was invisible — domain too new + zero backlinks
- **Mar 17:** GBP VERIFIED ✅ (only 7% complete). TJ frustrated: "tired of being stagnant."
- **Mar 18:** GOOGLE INDEXED ✅ — GSC sitemap submitted, 17 pages discovered. First FB ad live ($7.27 spent, 344 views, 0 messages — video too long). **Jamie = face of Tidy Tails** rule established.
- **Mar 20:** POOP 911 confirmed STILL in Florissant (URL restructure, not withdrawal). Scooping moved to MONDAYS.
- **Mar 22 AM:** Telegram Topics configured — 6 topics (General, Tidy Tails, Sheds, Accountability, Franklin Admin, MOTRA). Group ID: `-1003877675524`.
- **Mar 21:** TJ frustrated guides hidden in memory/ → **NEW RULE: PDF in chat + dashboard link.** Dashboard redesigned to 3 modes (TODAY/TOOLS/ARCHIVE).
- **Mar 22:** RECORD DAY — 20 autonomous tasks. Dashboard declutter (144→28 files). Memory consolidated (43→21 active files). 6 ghost pages found (never deployed). Blog dedup fix. Telegram Topics configured (6-topic group). Paw-ty prep, GBP wizard, Mon call sheet, shed listings, community playbook, referral kit, scoop-day checklist, competitor battlemap — all built + shipped. Week-end archive completed 11 PM.
- **Mar 23:** SPRING BLITZ WEEK 1 LAUNCH. 15+ autonomous tasks. Built: Scoop Soldiers battlecard, website CRO audit (C+ grade), lead response system, speed-to-lead templates, I-44 corridor expansion leads, Spring Blitz playbook (6-week plan), Week 1 launch kit, dead competitor capture kit, competitive pricing cheat sheet, directory citation blitz (25 directories), GBP optimization package (complete copy-paste guide), shed ads Mar 24-30, scoop day marketing machine, morning briefing, referral program kit, Q2 90-day roadmap, review generation tracker. Dog Doody Defenders confirmed DEAD (DNS gone). Scoop Soldiers CONFIRMED active in STL (triple-verified). Market consolidating fast. TJ confirmed 3 Google reviews ✅. GBP still INVISIBLE on Maps (7% complete, brand collision). TJ reported bugs: Notion PDFs not clickable (wrong URLs), shed ad cron sends summaries not copy. Both fixed. EOD cron and Weekly Review cron fixed (were failing on Telegram delivery). 10 dead one-shot crons removed. Memory archived at EOD.
- **⚠️ Brave Search API:** Free plan quota EXHAUSTED (2000/2000) as of Mar 23. Web searches unavailable until quota resets. Impacts: competitive monitoring, security scans, morning briefing research.

---

## 🧠 Core Lessons
1. **Build vs deploy gap is the #1 problem.** Stop building until existing tools are used.
2. **$70/month flat rate is genuinely unique.** Lead with this always.
3. **Google indexing won't happen fast.** Domain is weeks old. Need backlinks + directories.
4. **Facebook groups = only proven channel.** Everything else is theoretical until tested.
5. **Scoop Soldiers at $15/visit is the price floor.** Don't compete on price — compete on service.
6. **Free first cleanup = killer acquisition tactic.** POOP 911 uses it. TJ should steal it.
7. **TJ is a closer, not a marketer.** Get him in front of leads and he'll convert. Our job is lead gen.
8. **Late night = maintenance. Morning = briefings. Don't create more content at 2 AM.**
9. **Phone-sized design matters.** TJ and Jamie use mobile. Copy buttons = no excuses.
10. **Door hangers don't work (0.2%).** Digital channels are the path.
11. **Don't run paid ads until foundation is set.** 0 reviews + 0 citations + not indexed = wasted money. Fix those first, THEN $150-200/mo FB ads.
12. **Pet waste = demand CREATION, not capture.** Most people don't search for it. Facebook shows them it exists. Google captures the ones who saw your FB ad then searched.
13. **Lumber hit $600/MBF** (Mar 17) — up 22% in 11 days. 45% tariffs + 1.3B board feet removed from supply. "Today's price is tomorrow's discount" is now verifiable math.
14. **Cron tasks compound but don't convert.** 12 deliverables in one day doesn't help if none get deployed. Future hourly tasks should skew toward maintenance/monitoring, not new content.
15a. **Cron Telegram delivery:** Agent sessions should NOT try to send Telegram messages themselves — the cron delivery system handles it automatically from the summary output. When agents try to use `message` tool inside cron runs, it often errors with "Delivering to Telegram requires target <chatId>" and marks the whole run as failed. Fix: tell agents in the prompt to NOT send Telegram, just produce summary output.
15b. **Brave Search API is on a free plan (2000 queries/month).** Heavy autonomous task usage exhausts it fast. Consider upgrading or rationing.
15. **TJ can't access memory/ files.** Guides saved there are invisible. NEW RULE (Mar 21): Everything for TJ → PDF in Telegram chat AND dashboard link. No more hidden docs.
16. **Dashboard redesigned to 3 modes (Mar 21).** TODAY (action items), TOOLS (organized by category), ARCHIVE (searchable). 97 files → 3 clean tabs. This is the UX layer that makes everything else usable.

---

## Working Agreements
- Franklin works freely on: research, planning, drafting, organizing, tracking
- Franklin asks first for: public posts, customer comms, spending money, external representation
- Fix first, report after. Security updates happen overnight without asking.
- Use the token budget. Work hard, don't coast.
- Skill implementation: map to goals, pick highest ROI, implement, explain reasoning after.

## The Bigger Vision
TJ sees Tidy Tails as a training ground for AI-powered marketing.
Ultimate goal: **$300K/month** via marketing agency + content.
Path: Tidy Tails → document the AI journey → build marketing agency for small businesses.

---

## Content Sources
- TJ's FB Marketplace: https://www.facebook.com/marketplace/profile/100018737295677/
- Tidy Tails Facebook: https://www.facebook.com/share/18FWk4b3gu/
- TuffShed Promos: https://www.tuffshed.com/special-offers/
- TJ Ad Style Guide: `memory/tj-ad-style-guide.md`
- Before/After Photos: `assets/tidy-tails/before-after/` (3 real job sets)

## Memory File Structure (Updated Mar 22, 2026)
- `memory/YYYY-MM-DD.md` — Daily logs (keep last 3-4 days, archive older)
- `memory/franklin-tasks.md` — Current day's hourly task log (archive weekly)
- `memory/archive/` — All archived task logs, old dailies, superseded docs
- `memory/competitor-intel-spring2026.md` — **CANONICAL** competitor file (15 competitors profiled)
- `memory/leads-commercial.md` — 49+ commercial leads database
- `memory/contacts.md` — Key contacts
- `memory/tuffshed.md` — Shed job details, pipeline
- `memory/motra-business-idea.md` — MOTRA details (parked)
- `memory/hourly-task-rotation.md` — Task rotation balance
- `memory/tj-ad-style-guide.md` — TJ's voice/style rules for ad copy
- `memory/notion-uploads.md` — Notion sync tracking

**Archived Mar 22:** 5 duplicate competitor files, 6 pre-Mar-19 daily files, 10 guide/kit files superseded by dashboard tools, Sat night task overflow
