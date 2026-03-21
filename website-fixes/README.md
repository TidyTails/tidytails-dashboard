# 🔧 Website Fixes — 5 Broken City Pages

**Created:** March 20, 2026 9:04 PM
**Issue:** SEO audit found 5 city pages serving homepage content instead of city-specific landing pages

## The Problem

These 5 URLs are in the sitemap but serve the generic homepage instead of city-specific content:
- `/olivette` — 63132, inner-ring suburb
- `/university-city` — 63130/63132, The Loop area
- `/south-city` — South St. Louis City neighborhoods
- `/south-county` — Mehlville/Oakville/Affton area
- `/wentzville` — 63385, fast-growing St. Charles County

Google sees these as **duplicate content** of the homepage → they get zero search ranking.

## The Fix

Each HTML file in this folder is a **complete, production-ready city page** that matches the exact template used by Florissant and Ferguson (which work correctly).

### Each page includes:
- ✅ City-specific `<title>`, `<meta description>`, and `<h1>`
- ✅ LocalBusiness structured data (JSON-LD) with correct city/zip
- ✅ `<link rel="canonical">` pointing to correct URL
- ✅ `og:title`, `og:description`, `og:url` meta tags
- ✅ `geo.region` and `geo.placename` meta tags
- ✅ Hyper-local neighborhood names and landmarks
- ✅ City-specific hero text and intro copy
- ✅ Pre-populated SMS text links with city name
- ✅ Full pricing grid, benefits, CTA sections
- ✅ Cross-linking service areas nav
- ✅ Mobile responsive, matches existing site design exactly

## How to Deploy

### If site is on Cloudflare Pages / static hosting:
1. Copy each `.html` file to the site's root directory
2. Rename to match URL path (e.g., `olivette.html` → served at `/olivette`)
3. Most static hosts handle this automatically — `olivette.html` serves at `/olivette`
4. Deploy/push to trigger rebuild

### If using a site builder (Carrd, etc.):
1. Open each file, copy the content sections
2. Create new pages at the matching URLs
3. Paste the content, ensuring meta tags match

### After deploying:
1. Visit each URL and verify it shows city-specific content (not homepage)
2. Check Google Search Console → URL Inspection for each page
3. Request re-indexing for all 5 URLs
4. Monitor impressions in GSC over next 2-4 weeks

## Files

| File | URL | Zip | Neighborhoods |
|------|-----|-----|---------------|
| `olivette.html` | `/olivette` | 63132 | Stacy Park, Warson Park, Olive Blvd, Tower Hill, Dielman |
| `university-city.html` | `/university-city` | 63130 | Delmar Loop, Parkview, Ruth Park, Heman Park, University Hills |
| `south-city.html` | `/south-city` | 63116 | Tower Grove, Bevo, Dutchtown, Holly Hills, Carondelet, The Hill |
| `south-county.html` | `/south-county` | 63125 | Mehlville, Oakville, Affton, Lemay, Concord, Green Park |
| `wentzville.html` | `/wentzville` | 63385 | Downtown, Pearce Blvd, Highway N, Quail Ridge |

## SEO Impact

These 5 pages represent **5 entire markets** Google currently can't rank Tidy Tails for:
- "pet waste removal Olivette" → currently invisible
- "pooper scooper University City" → currently invisible
- "dog poop cleanup South City St Louis" → currently invisible
- "pet waste removal South County" → currently invisible
- "pooper scooper Wentzville" → currently invisible

Fixing = immediate eligibility for local search in all 5 areas.
