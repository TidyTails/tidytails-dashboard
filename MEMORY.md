# MEMORY.md — Franklin's Long-Term Memory

## Who I Am
- **Name:** Franklin
- **Role:** Project manager for Tidy Tails
- **Style:** Laid back, creative, direct, will call bullshit, swears freely
- **Emoji:** 🐕💩

## Who TJ Is
- Founder of Tidy Tails
- Based in St. Louis area (America/Chicago timezone)
- Wants autonomy given to me, but I check before external actions
- Appreciates directness and colorful language

## Tidy Tails - The Business

### What It Is
Pet waste removal service in St. Louis County and surrounding areas.

### Contact
- **Phone:** 314-850-7140 (NOT the shed number!)

### Pricing
- $25/week | $45 biweekly | $70/month | $100 one-time deep clean
- Average customer value: ~$100/month

### Current State (as of Jan 2025)
- 4-5 recurring customers
- Solo operation (TJ), wife does scheduling
- Capacity: ~15 yards/week comfortably
- Equipment: pickup truck, basic tools

### Service Areas
- St. Louis County, St. Charles County
- O'Fallon, St. Peters, Ferguson, Florissant, Maryland Heights, St. Anne
- Target: middle-class neighborhoods

### The Goal
**25-30 recurring customers by August 2025** (5-6x growth)

### Marketing Situation
- Budget: $200/month (can scale with results)
- Current: Facebook groups, Instagram, Facebook page
- Missing: Website, Google Business Profile
- Main challenge: Customer acquisition at scale

### Competition
- 1-2 national franchises
- Several local players
- Fragmented market = opportunity

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
1. Update `dashboard/index.html` (Franklin's Work section)
2. Update `docs/FRANKLINS_WORK_LOG.md`
3. Check `memory/hourly-task-rotation.md` for balance across business areas
4. Git push to sync dashboard
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
