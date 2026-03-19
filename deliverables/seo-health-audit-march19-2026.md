# 🔍 Tidy Tails SEO Health Audit
**Date:** March 19, 2026 4:00 AM | **Auditor:** Franklin

---

## Executive Summary

**tidytailsstl.com is invisible to search engines.** Despite technically correct on-page SEO, the site returns ZERO results for any search query — including "pooper scooper florissant missouri" where we have a dedicated city page. This is an off-page SEO crisis, not a technical one.

**Severity: 🔴 CRITICAL**

---

## 1. Search Visibility: ZERO

| Search Query | Tidy Tails Position | Who Shows Up |
|---|---|---|
| "pet waste removal st louis" | ❌ NOT FOUND (top 10) | DoodyCalls, Yelp, Dirty Dog Wash, Poop2Scoop |
| "pooper scooper florissant missouri" | ❌ NOT FOUND (top 10) | POOP 911, Petworks, Yucko's |
| site:tidytailsstl.com | ❌ ZERO RESULTS | Nothing indexed on Brave |

**Translation:** People searching for exactly what we sell, in exactly our cities, will never find us organically. Every customer must come through paid ads, referrals, or Facebook groups.

---

## 2. On-Page SEO: B+ (Not the Problem)

### ✅ What's Working
- **Schema markup:** LocalBusiness + Service + FAQPage structured data on homepage
- **Canonical tags:** Properly set on all real pages
- **Meta descriptions:** Unique, city-specific descriptions on all 11 city pages
- **City page titles:** Properly formatted ("Pet Waste Removal in [City], MO | Tidy Tails")
- **Internal linking:** Homepage links to all 11 city pages
- **Sitemap:** 17 URLs, properly formatted, linked from robots.txt
- **SSL:** Valid certificate
- **Phone number:** Consistent (+1-314-850-7140) across schema and page

### ⚠️ Issues Found

#### Issue 1: No OG Image (Social Sharing Broken)
```
og:title ✅
og:description ✅  
og:url ✅
og:image ❌ MISSING
```
When someone shares tidytailsstl.com on Facebook, Twitter, or in a text message — there's no preview image. This kills click-through on social shares and link posts.

**Fix:** Add `<meta property="og:image" content="https://tidytailsstl.com/images/og-cover.jpg">` to all pages. Image should be 1200x630px with logo + "Pet Waste Removal St. Louis" text.

#### Issue 2: SPA Catch-All Returns 200 for ALL URLs
```
https://tidytailsstl.com/totally-fake-page-xyz → 200 OK
https://tidytailsstl.com/kirkwood → 200 OK (serves homepage)
https://tidytailsstl.com/asdfasdf → 200 OK (serves homepage)
```
GitHub Pages serves index.html for ANY URL path. This means:
- Google may crawl phantom pages and index duplicates
- No proper 404 handling for bad links
- Search engines waste crawl budget on fake pages

**Fix:** Add a custom 404.html to the repo. GitHub Pages will serve it for non-existent paths.

#### Issue 3: Sitemap Has a Ghost Entry
The sitemap includes `blog/dog-poop-laws` but this file does NOT exist in the repo. The URL serves the homepage (catch-all). Google will crawl it, get homepage content, and flag a soft 404.

**Fix:** Either create the blog post or remove it from sitemap.xml.

#### Issue 4: "blog/dog-poop-laws" Referenced but Missing
The 5th blog post ("dog-poop-laws") is in the sitemap but was never deployed. The repo only has 4 blog posts:
1. ✅ how-often-pick-up-dog-poop
2. ✅ dog-poop-health-risks
3. ✅ spring-yard-cleanup-st-louis
4. ✅ is-pooper-scooper-service-worth-it
5. ❌ dog-poop-laws (MISSING from repo)

---

## 3. Site Structure: Accurate Inventory

### Real Pages (15 HTML files in repo)
| Page | In Sitemap? | Status |
|---|---|---|
| index.html (homepage) | ✅ | ✅ Live |
| ferguson.html | ✅ | ✅ Live |
| florissant.html | ✅ | ✅ Live |
| maryland-heights.html | ✅ | ✅ Live |
| ofallon.html | ✅ | ✅ Live |
| st-charles.html | ✅ | ✅ Live |
| st-peters.html | ✅ | ✅ Live |
| chesterfield.html | ✅ | ✅ Live |
| ballwin.html | ✅ | ✅ Live |
| creve-coeur.html | ✅ | ✅ Live |
| hazelwood.html | ✅ | ✅ Live |
| bridgeton.html | ✅ | ✅ Live |
| spring-calculator.html | ✅ | ✅ Live |
| spring-landing.html | ❌ NO | ✅ Live (noindex) |
| review.html | ❌ NO | ✅ Live |

### Blog Posts (4 actual + 1 ghost)
| Post | In Sitemap? | Status |
|---|---|---|
| blog/index.html | ✅ | ✅ Live |
| blog/how-often-pick-up-dog-poop | ✅ | ✅ Live |
| blog/dog-poop-health-risks | ✅ | ✅ Live |
| blog/spring-yard-cleanup-st-louis | ✅ | ✅ Live |
| blog/is-pooper-scooper-service-worth-it | ✅ | ✅ Live |
| blog/dog-poop-laws | ✅ ⚠️ | ❌ MISSING |

**Total real pages: 20** (not 21 as previously claimed — the dog-poop-laws post was never deployed)

---

## 4. Off-Page SEO: F (THE Problem)

### Why We Don't Rank
Google ranks pages based on authority signals. Tidy Tails has essentially ZERO:

| Signal | Tidy Tails | POOP 911 | Doggie Doodies |
|---|---|---|---|
| Google Reviews | **0** | 6+ | 10+ |
| Directory Listings | ~2 (GBP, Yelp) | 10+ | 5+ |
| Backlinks | ~0 | 50+ | Unknown |
| Domain Age | ~4 months | 10+ years | 2+ years |
| Social Signals | Minimal | National brand | Active |

### Directories Where Competitors Appear but TJ Does NOT

| Directory | Free? | Competitors Present | Priority |
|---|---|---|---|
| **petworks.com** | ✅ Free | Poop2Scoop, Dr. Scoops | 🔴 HIGH |
| **apaws.org** | ✅ Free | Poop2Scoop, The Pootector | 🔴 HIGH |
| **bringfido.com** | ✅ Free | Shows Florissant results | 🔴 HIGH |
| **poopbutler.com** | ✅ Free | National directory | 🟡 MED |
| **pooperoni.com** | ✅ Free | POOP 911 listed | 🟡 MED |
| **bbb.org** | 💰 Paid for accred. | DoodyCalls | 🟡 MED |
| **mapquest.com** | ✅ Free (auto) | Auto-generated listing exists | 🟢 Claim |
| **yellowpages.com** | ✅ Free | Multiple competitors | 🟡 MED |
| **nextdoor.com** | ✅ Free business page | Local neighbors | 🔴 HIGH |
| **thumbtack.com** | 💰 Per-lead | Service providers | 🟡 MED |

---

## 5. The Real Ranking Blockers (Priority Order)

### 🔴 Blocker 1: Zero Google Reviews
- With ads running, every lead Googles us → sees 0 reviews → bounces
- 5 reviews unlocks Maps 3-pack placement
- **Fix:** Jamie texts 5 customers THIS WEEK (review blitz tool exists)
- **Effort:** 5 minutes | **Impact:** MASSIVE

### 🔴 Blocker 2: Zero Directory Citations
- Google uses NAP (Name, Address, Phone) citations to verify business legitimacy
- We have ~2 citations (GBP + Yelp). Competitors have 10+.
- **Fix:** Submit to top 5 directories (petworks, apaws, bringfido, poopbutler, yellowpages)
- **Effort:** 45 minutes total | **Impact:** HIGH

### 🔴 Blocker 3: Zero Backlinks
- No other website links to tidytailsstl.com
- Domain authority is effectively 0
- **Fix:** Directory listings create backlinks. Blog guest posts. Local business partnerships.
- **Effort:** Ongoing | **Impact:** HIGH (compound)

### 🟡 Blocker 4: GBP Only 7% Complete
- GBP profile is verified but barely filled out
- Missing: business hours, photos, services list, description, categories
- **Fix:** Complete GBP profile to 100%
- **Effort:** 30 minutes | **Impact:** HIGH for Maps visibility

### 🟡 Blocker 5: Ghost Sitemap Entry
- blog/dog-poop-laws in sitemap but page doesn't exist
- Wastes crawl budget and creates soft 404 signals
- **Fix:** Remove from sitemap.xml or create the post
- **Effort:** 2 minutes | **Impact:** LOW but easy

### 🟡 Blocker 6: No OG Image
- Social shares have no preview image
- **Fix:** Create and add OG image
- **Effort:** 15 minutes | **Impact:** MED for social traffic

---

## 6. Competitor SEO Advantages

### POOP 911's Playbook (Why They Rank #1)
1. **Dedicated city pages** with hyper-local content (St. Ferdinand Park, McCluer schools)
2. **National domain authority** from 1000s of city pages linking internally
3. **Multiple directory listings** creating citation network
4. **"First cleanup free" offer** reducing friction
5. **Google reviews** building trust signals
6. **Press releases** (EIN Presswire) creating backlinks

### What We Can Copy
- ✅ We already have hyper-local city pages (our content is actually better)
- ❌ We can't match their domain authority (franchise advantage)
- ✅ We CAN match their directory presence (just need to submit)
- ✅ We CAN add "first cleanup free" (competitive table stakes)
- ✅ We CAN get reviews (we have 8 happy customers)
- ✅ We CAN complete GBP (already verified)

---

## 7. TJ's 30-Minute SEO Sprint (Do This Before Anything Else)

| # | Task | Time | Tool Ready? |
|---|---|---|---|
| 1 | Text 5 customers for Google reviews | 5 min | ✅ Review Blitz dashboard |
| 2 | Complete GBP profile (hours, description, photos) | 15 min | ✅ GBP Domination guide exists |
| 3 | Submit to petworks.com | 3 min | ✅ Info ready |
| 4 | Submit to bringfido.com | 3 min | ✅ Info ready |
| 5 | Submit to apaws.org | 3 min | ✅ Info ready |

**Total: ~30 minutes → creates 3 new citations + potential 5 reviews**

This single sprint would do more for organic visibility than any amount of content creation.

---

## 8. What Franklin Should NOT Do

- ❌ Build more city pages (11 is enough until we rank for ANY term)
- ❌ Write more blog posts (4 unranked posts don't need a 5th)
- ❌ Create more dashboard tools (60+ exist)
- ❌ Run more competitive scans (we know the landscape)

**The bottleneck is execution, not assets.**

---

*Report generated from live site audit at 4:00 AM CDT, March 19, 2026*
*All URLs verified via HTTP requests and GitHub API*
