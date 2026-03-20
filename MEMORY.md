# MEMORY.md — Franklin's Long-Term Memory
*Last major overhaul: March 15, 2026 11 PM | Last maintenance: March 20, 2026 2 AM*

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

### Online Presence
- GBP: VERIFIED ✅ (Mar 17, 2026) — Profile verified but only **7% complete**. DO NOT ASK ABOUT VERIFICATION AGAIN.
- Yelp: CLAIMED ✅ (Mar 5) — DO NOT ASK AGAIN
- Google Search Console: VERIFIED ✅ (Mar 5) — DO NOT ASK AGAIN
- **✅ SSL RENEWED** (Feb 16, 2026) — Valid until May 17, 2026. Blocker removed.
- **✅ INDEXED ON GOOGLE** (confirmed Mar 18 3:03 PM) — URL on Google, page indexed, HTTPS ✅, FAQ schema ✅, sitemap submitted (17 pages discovered)
- **✅ GSC DONE** — TJ submitted sitemap + URL inspection confirmed indexed. #1 blocker RESOLVED.
- **⚠️ BRAND NAME COLLISION:** 8+ other "Tidy Tails" businesses nationally compete for branded search. Always use "Tidy Tails STL" in citations.
- **MapQuest listing EXISTS** (auto-generated, Olivette MO 63132) — free citation
- **BringFido.com** — pet services directory covers Florissant. TJ NOT listed. Free listing.
- **Doggie Doodies pricing confirmed** — $83/mo weekly, $85/mo biweekly, $90/mo monthly (Mar 18 live scrape)
- **NEW: Dirty Dog Wash "Poo Crew"** — Chesterfield groomer added waste removal. $95/mo (1-2 dogs weekly). 43 Yelp reviews, 66 FB reviews. Cross-sell advantage but HIGHER than TJ.
- **⚠️ POOP 911 STATUS UNCERTAIN** (Mar 20 update) — Florissant page was 404 at 4 AM but BACK UP at 8 AM with full content. Likely transient outage, NOT confirmed withdrawal. TJ should call (877) POOP-911 to verify.
- **⚠️ DoodyCalls STL LIKELY CLOSING** — Page still loads but STL is MISSING from their official locations page. Franchise winding down.
- **❌ Poop2Scoop CLOSED** — PetWorks listing says "paused or closed." Veteran-owned, operated since 2017.
- **❌ Pawfect Waste Solutions SITE DOWN** — pooperscooperstl.com returns "SITE NOT FOUND"
- **3-4 of 7 STL competitors have withdrawn/closed** — Market thinning (POOP 911 status uncertain as of Mar 20 8AM)
- **North County has ZERO active local competitors** — TJ's home turf is wide open
- **Only 3-4 active competitors remain:** Doggie Doodies (West County + now Florissant), Scoop Soldiers (national franchise), Dirty Dog Wash (Chesterfield only), POOP 911 (uncertain)
- **Scoop Soldiers confirmed $15/visit** — up to 4 dogs included. First service FREE. Only real overlap with TJ's territory.
- **ZERO Google reviews** vs competitors with 6+ — Still #1 weakness
- Google Review Link: https://g.page/r/Ce_hqIHanGLvEAE/review
- 21 city/area landing pages built on tidytailsstl.com
- 4 blog posts published
- Technical SEO: B+ (schema, meta, sitemap, robots.txt all solid)
- Off-page SEO: F (zero backlinks, zero directory listings beyond GBP/Yelp)
- **Directory blitz kit ready** — 20 directories mapped with copy-paste info, TJ just needs to execute

### Service Areas
- St. Louis County, St. Charles County
- O'Fallon, St. Peters, Ferguson, Florissant, Maryland Heights, St. Anne
- **Best expansion targets:** Kirkwood + Webster Groves (I-44 Corridor, 15,500+ dog-owning households)

### The Goal
**25-30 recurring customers by August 2025** — ⚠️ OVERDUE by 7+ months (now March 2026)

### Active Customers (Last verified Mar 6, 2026 — NEEDS UPDATE)

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

---

## 🔍 Competitive Landscape (Updated Mar 18, 2026 7AM)

### ACTIVE Competitors — Definitive Table

| Competitor | Territory | Weekly Price | Monthly | Threat | Key Notes |
|------------|-----------|-------------|---------|--------|-----------|
| **POOP 911** 🔴 | South STL/City (70+ zips) | $11.95-$13.95 | ~$52 | HIGH | National franchise, FREE first cleanup, lowest price. **Florissant page NOW 404** (confirmed Mar 20). Still has main STL page. |
| **Scoop Soldiers** 🔴 | STL County + surrounding | ~$15 | ~$60 | HIGH | National franchise, **officially launched STL Feb 6 2026** (EIN Presswire). 24hr support, sanitization/deodorizer add-ons, commercial+residential. Led by Michayla Sims. Also expanding to Cincinnati. First service FREE. |
| **Dog Doody Defenders** 🔴 | Chesterfield + Florissant | $17 | $54/mo monthly plan | HIGH | Florissant-based (Daniel Boone Dr). Now offers dog walking, yard deodorizing, kennel cleaning. Twice-weekly $27. On Yelp, MapQuest, FB. **Direct competitor in TJ's core territory.** |
| **Poop2Scoop** 🟡 | STL County | $18 | ~$78 | MED | Veteran-owned, smart add-on pricing, aPaws member |
| **Doggie Doodies** 🔴 | Ballwin/Chesterfield + St. Charles + **NOW FLORISSANT** + Kirkwood/Creve Coeur/MD Heights/Eureka/Fenton/Valley Park/Twin Oaks/Des Peres/Cottleville/New Town | $19.15 | $83 | **HIGHEST** | TJ's #1 rival. **NOW IN FLORISSANT** (TJ's core territory!). Customer portal, rewards ("Clean Paw Paws"), referral, e-gift cards, blog (posting Feb 2026), COMMERCIAL page live (HOAs, waste stations, installations). Pre-visit team photos + gate photos. FREE first cleanup with coupon codes. Phone: (636)633-3443. Biweekly=$85/mo, Monthly=$90/mo. Hotmail + Wix = weaknesses. |
| **Dr. Scoops** 🟡 | Ballwin/Manchester/Chesterfield/Kirkwood/Webster Groves | Quote | Quote | MED | NEW (found Mar 16). Solo op Adam Hughes, since 2023. Own site (getdrscoops.com), FB (39 likes), Nextdoor, Petworks. Insured, background-checked. Covers our expansion targets! |
| **Dirty Dog Wash Poo Crew** 🟡 | Chesterfield (10mi radius) | ~$22 | $95 | MED | Cross-sell from grooming business |
| **DoodyCalls** 🟡 | STL County | Quote | Quote | MED | National franchise |
| **Yucko's** 🟡 | STL County + City + St. Charles | Quote | Quote | LOW | Commercial focus, since 1990, phone-only M-F 8-3 |
| **Little Stinkers** 🟢 | St. Charles ONLY (NOT STL County) | Quote | Quote | LOW | Only Lincoln/Warren/St. Charles Counties |
| **Clean Turf STL** 🟡 | Ballwin/West County | Quote | Quote | MED | Dual service (cleaning + pet waste), Wix, no reviews |
| **The Pootector** 🟡 | St. Peters area | Quote | Quote | MED | aPaws certified |
| **Doggy Doods** 🟢 | St. Charles County | Quote | Quote | LOW | Solo operator Eugene, 6 testimonials |
| **The Poo Fighterz** 🟢 | STL + Springfield IL | Quote | Quote | LOW | Multi-market |

### NEW Competitors Found (Mar 16 3PM sweep)
| **No 2 Crew** 🟡 | Wildwood (West County) | Quote | Quote | MED | Spinoff from The Watering Bowl doggy daycare (since 2010). On Yelp. |
| **Tidy Pup** 🟡 | Saint Peters | Quote | Quote | MED | ⚠️ SIMILAR NAME to Tidy Tails! Yelp, Facebook, Yellow Pages. |
| **Millie's Pooper Scoopers** 🟡 | STL + St. Charles | Quote | Quote | MED | Yellow Pages listing |
| **Green Sweep** 🟢 | St. Peters | Quote | Quote | LOW | Yelp only |
| **The Dog Poo Guru** 🟢 | St. Peters | Quote | Quote | LOW | Yelp only |
| **Pooanators** 🟡 | STL area | Quote | Quote | MED | On Yelp, multiple STL searches |

### DEAD Competitors (confirmed Mar 20)
Pawfect (404), Fresh Paws (DNS expired), Poopy Paws (DNS failure — 358 orphaned FB followers + Nextdoor page still up), STL Pooper Scoopers (Yelp CLOSED), Super Scoopers STL (Yelp CLOSED), **Pawfect Waste Solutions** (pooperscooperstl.com — 404, never launched)

### Search Visibility (Mar 20 — SEO Audit Score: 30/100)
- **On-page SEO: A-** — schema, meta tags, sitemap, robots.txt, canonicals all solid
- **Off-page SEO: F** — zero backlinks, zero directory listings beyond GBP/Yelp, zero reviews
- Google Search Console confirmed indexed (Mar 18) but organic visibility near-zero
- `site:tidytailsstl.com` on Brave = 0 results. Not in top 10 for core keywords.
- Not showing in Yelp Florissant results despite being claimed since Mar 5
- **Root cause:** No GA4, GBP only 7% complete, zero reviews, zero backlinks
- **The metaphor:** "Built a Porsche but never put gas in it." 35 pages of well-optimized content nobody can find.
- **Fix:** 2 hours of TJ's time ($0 cost) — GSC sitemap submission ✅ done, GA4 setup, GBP completion, review request texts

### Pricing Reality (Updated Mar 20 — LIVE SCRAPE)
- POOP 911: $11.95/wk (~$52/mo) — cheapest in market
- Dog Doody Defenders: $17/wk, **$54/mo monthly plan** — undercuts TJ's $70/mo by 23%
- Scoop Soldiers: $15/visit (first FREE) — price floor
- Poop 2 Scoop: $18/wk (~$78/mo) — veteran-owned
- Doggie Doodies: $19.15/wk ($83/mo), biweekly $85/mo, monthly $90/mo
- **Tidy Tails: $25/wk | $45 biweekly | $70/mo | $100 deep clean — MOST EXPENSIVE weekly indie**
- ⚠️ TJ's $70/mo undercut by DDD's $54/mo, but BEATS Doggie Doodies ($90/mo) and Dirty Dog Wash ($95/mo)
- Strategy: DON'T lower prices — awareness problem, not price problem at 8 customers. Lead with $70/mo value.
- **Petworks.com** — free marketplace, TJ NOT listed. Easy win.
- **MapQuest listing EXISTS** (auto-generated, Olivette MO 63132) — free citation

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
- **Maintenance over creation.** 60+ tools exist. Don't build #61.
- **Track execution.** Which posts has TJ actually made? Which leads called? Verify.
- **Competitive monitoring.** Market is moving — Doggie Doodies expanded, Scoop Soldiers entered.
- **Memory cleanup.** Keep context lean for better performance.
- Late night = systems/maintenance. Morning = briefings. Don't build more tools until existing ones are used.

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

## 📊 Asset Inventory (Mar 19, 2026)

| Category | Count |
|----------|-------|
| Dashboard tools/reports | 75+ |
| PDFs/HTML deliverables | 350+ |
| Tidy Tails ads written | 100+ |
| Shed ads written | 110+ |
| Skills built | 14+ |
| AI video concepts | 6 produced |
| City landing pages | 23 (added Kirkwood + Webster Groves) |
| Blog posts | 13 (synced 6 missing from live site + 1 new commercial post) |
| Content calendar posts | 76+ copy-paste ready |
| Commercial leads | 37 (added 6 North County vet clinics) |
| Interactive tools | 15+ (pricing calc, review blitz, GBP kit, battle card, referral mgr, event calendar, community kit, weekend sprint, commercial call sheet, etc.) |
| FB groups mapped | 32+ (with strategy, member counts, posting schedule) |
| Live landing pages | 3 (free-cleanup, refer, spring-landing) |

---

## 🗓️ Key Milestones
- **Feb 16, 2026:** tidytailsstl.com domain registered
- **Feb 17:** Day 1 output — 18 tasks, 27 docs, 21 ads, 24 commercial leads
- **Feb 26:** GBP CLAIMED ✅, Yelp CLAIMED ✅
- **Mar 4:** Sub-agent architecture deployed, email automation complete
- **Mar 5:** Google Search Console verified, 6 AI videos created
- **Mar 7:** 24 hourly tasks, 35+ dashboard tools built in one day
- **Mar 11:** BREAKTHROUGH — discovered website was essentially blank, root cause: domain only 23 days old + zero backlinks
- **Mar 14:** 15+ tasks. Found 2 new competitors (Clean Turf STL, Yuckos). Pricing strategy: $88/mo recommended.
- **Mar 15:** 18+ tasks. 12 city SEO pages, payment calculator, premium pricing toolkit, Nextdoor launch kit, Facebook ads campaign kit. Competitive pricing audit confirmed TJ is most expensive in market. Memory overhaul completed.
- **Mar 16:** Shed site HTTPS fixed + robots.txt/sitemap/schema added. 6 new competitors found (20+ total). Directory blitz kit + spring content blitz shipped. Memory consolidation: archived 30+ stale files, pruned memory/ from cluttered to clean. Both sites STILL not indexed (Day 30+). Paid ads analysis: NOT YET — fix foundation first. Week action plan: 5 tasks / 2 hours / $0. Citation blitz guide: 20 directories mapped. Review request kit: 8 personalized texts. Spring social media pack: 12 posts for 4 weeks.
- **Mar 17:** MASSIVE output day (12+ deliverables). GBP confirmed VERIFIED but only 7% complete. TJ frustrated: "tired of being stagnant." Key deliverables: competitor battle card (live pricing), directory blitz kit (20 dirs), neighborhood saturation kit, 90-day growth sprint, Google Ads launch kit, pricing calculator (live competitor scrape), GBP optimization kit, review/referral text blitz (personalized per customer), spring cleanup blitz (15 posts), lumber intel ($600/MBF — 22% surge). CRITICAL: competitor pricing confirmed TJ is most expensive ($25/wk vs POOP 911 $11.95, DD $17). Memory consolidation pass at 11 PM.
- **Mar 18:** 5 overnight tasks (12AM-5AM). SEO recovery audit (site A+ technically, ZERO indexed), FB group blitz guide (32+ groups mapped), competitive sweep (DD in Florissant!), Florissant customer defense kit (protecting 47% revenue), dashboard cleanup (12→5 priority banners). Memory maintenance + archival at 6AM.
- **Mar 19:** BIGGEST DAY EVER — 15+ tasks spanning 3AM-11PM. Key outputs: commercial call sheet (26 leads, tap-to-call), SEO blog (dog poop laws), Kirkwood+Webster Groves city pages, POOP 911 Florissant withdrawal CONFIRMED (404), review request texts tool, GBP quick-complete checklist, community posting kit (15 groups), free first cleanup landing page (LIVE), referral program (LIVE at /refer), event marketing calendar (14 STL events), Spring 2026 master playbook (39 tasks across 15 weeks), competitive intel sweep (3 dead competitors, we're INVISIBLE on search), North County vet blitz (6 new leads), Google Ads campaign kit, weekend launch texts, weekend sprint brief. franklin-tasks.md archived (2208→737 lines). MEMORY.md updated.
- **Mar 20:** 🌱 FIRST DAY OF SPRING. 1 AM: Built 7-piece ready-to-post content kit across 5 platforms (Facebook x3, Instagram x2, Nextdoor, GBP) — Jamie can post all in ~20 minutes. 12 AM: Full technical SEO audit — **SEO Score: 30/100** (great on-page, zero off-page). Key finding: 18 city pages patched with cross-links (+54 internal links). Root cause of zero visibility = no GSC setup + no GA4 + GBP only 7% + zero backlinks + zero reviews. "Built a Porsche but never put gas in it." 2 AM: Memory maintenance — archived 796 lines, trimmed task log 94%.

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

## Memory File Structure (Updated Mar 16, 2026)
- `memory/YYYY-MM-DD.md` — Daily logs (recent only; older archived)
- `memory/franklin-tasks.md` — Current hourly task log
- `memory/archive/` — All archived task logs, old daily files, stale docs
- `memory/contacts.md` — Key contacts
- `memory/tuffshed.md` — Shed job details, pipeline
- `memory/competitive-intel.md` — Detailed competitor profiles
- `memory/motra-business-idea.md` — MOTRA details (parked)
- `memory/hourly-task-rotation.md` — Task rotation balance
- `memory/tj-ad-style-guide.md` — TJ's voice/style rules for ad copy
- `memory/notion-uploads.md` — Notion sync tracking
- `memory/fb-groups-target-list.md` — Facebook group targets for posting
