# Technical SEO Audit — tidytailsstl.com
**Date:** March 20, 2026
**Auditor:** Franklin (automated crawl + manual analysis)

---

## 🟢 WHAT'S WORKING WELL

### Site Fundamentals ✅
- **Fast load times:** Homepage loads in ~0.15s, city pages ~0.13s
- **Mobile viewport:** Properly configured with responsive clamp() sizing
- **SSL:** HTTPS on all pages, HTTP/2 active
- **Structured data:** LocalBusiness schema on homepage, BlogPosting + FAQPage on blog posts
- **Sitemap:** Complete, recently updated (March 19), includes all pages
- **robots.txt:** Clean, references sitemap correctly
- **Title tags:** Unique per city page (for the 13 that work)
- **Meta descriptions:** Unique, keyword-rich, proper length
- **Canonical tags:** Present on all pages
- **Phone number:** Click-to-call on every page (314-850-7140)
- **Twitter cards:** Present with summary_large_image
- **Blog content:** 12 posts, good word count (1700+ words), proper BlogPosting schema
- **Internal linking:** Blog posts cross-link to each other
- **0 external CSS files:** All inline = no render-blocking stylesheets

### Site Architecture ✅
- 18 city landing pages in sitemap
- 12 blog posts covering key topics
- Landing pages: /free-cleanup, /spring-clean, /spring-calculator, /refer
- Clean URL structure (no query params, no trailing slashes on cities)

---

## 🔴 CRITICAL ISSUES (Fix These First)

### 1. FIVE CITY PAGES ARE BROKEN — Serving Homepage Instead
**Impact: HIGH** — Google will see these as duplicate content and may ignore them entirely.

| Page | Expected | Actual |
|------|----------|--------|
| /olivette | Olivette landing page | Homepage (duplicate) |
| /south-city | South City landing page | Homepage (duplicate) |
| /south-county | South County landing page | Homepage (duplicate) |
| /university-city | University City landing page | Homepage (duplicate) |
| /wentzville | Wentzville landing page | Homepage (duplicate) |

**Evidence:**
- Title tag = generic homepage title instead of city-specific
- H1 = "St. Louis's Trusted Pet Waste Removal Service" instead of city name
- These are in the sitemap but serving duplicate homepage content

**Fix:** Build actual city-specific landing pages for these 5 areas (same template as Florissant/Ferguson which work correctly). Or remove them from sitemap until ready.

### 2. NO 404 STATUS CODE — Missing Pages Return 200
**Impact: HIGH** — Google's index gets polluted with non-existent pages.

**Evidence:** `https://tidytailsstl.com/this-page-does-not-exist` returns HTTP 200 (serves homepage)

**Fix:** Configure hosting to return proper 404 status code for non-existent routes. This is likely a Cloudflare Pages / static hosting catch-all issue. Need a 404.html page that returns actual 404 status.

### 3. WWW vs NON-WWW — Both Serve Content (Duplicate)
**Impact: MEDIUM-HIGH** — Google may split page authority between two versions.

**Evidence:**
- `https://www.tidytailsstl.com/` → HTTP 200
- `https://tidytailsstl.com/` → HTTP 200
- Canonical points to `https://tidytailsstl.com` (no www)
- But www also serves content without redirecting

**Fix:** Set up 301 redirect from www → non-www (or vice versa). Canonical helps but a redirect is stronger.

---

## 🟡 IMPORTANT ISSUES (Fix Soon)

### 4. NO OG:IMAGE TAG
**Impact: MEDIUM** — Social media shares show no preview image.

**Evidence:** `og:image` meta tag is completely missing from homepage. Twitter card image also missing.

**Fix:** Add og:image pointing to a branded social share image (1200x630px recommended). Create one image and use it site-wide.

### 5. FAVICON IS A JPG (Should Be ICO/PNG/SVG)
**Impact: LOW-MEDIUM** — Some browsers won't display it properly; looks unprofessional in tabs.

**Evidence:** `<link rel="icon" type="image/jpeg" href="logo.jpg">`

**Fix:** Convert logo to proper favicon format. Use a 32x32 PNG or SVG. Add apple-touch-icon for iOS.

### 6. BLOG POSTS DON'T LINK TO CITY PAGES
**Impact: MEDIUM** — Missing internal link juice from content pages to money pages.

**Evidence:** Blog posts link to other blog posts and homepage, but NOT to city-specific landing pages.

**Fix:** Add contextual links from blog posts to relevant city pages. E.g., "spring yard cleanup" article should link to /florissant, /kirkwood, etc. with anchor text like "pet waste removal in Florissant."

### 7. CITY PAGES NOT LINKED FROM HOMEPAGE NAV
**Impact: MEDIUM** — Only some cities are linked from the service area map/list on homepage.

**Evidence:** Homepage links to 13 city pages, but sitemap lists 18. The 5 broken ones (Olivette, South City, etc.) are in the footer/sitemap but not properly built.

### 8. O'FALLON TITLE TAG ISSUE
**Impact: LOW** — The xargs parsing error suggests a special character issue in the O'Fallon title.

**Evidence:** Title extraction failed for /ofallon. The apostrophe in "O'Fallon" may be causing encoding issues.

**Fix:** Verify the O'Fallon page title renders correctly in browser and doesn't have HTML entity issues.

---

## 🔵 NICE-TO-HAVE IMPROVEMENTS

### 9. Add Breadcrumbs Schema
Blog posts and city pages could benefit from BreadcrumbList structured data for better SERP appearance.

### 10. Add FAQ Schema to City Pages
The homepage blog posts have FAQPage schema. City pages should too — "How much does pet waste removal cost in [City]?" etc.

### 11. Add Internal Search
No site search functionality. Not critical at this size but helps user experience.

### 12. Image Alt Tags
Only 2 images found on homepage (both logo). City pages and blog posts should have relevant images with descriptive alt text.

### 13. Missing Preconnect/Preload Hints
No resource hints for faster loading. Not critical since the site is already fast.

---

## 📊 SCORE SUMMARY

| Category | Score | Notes |
|----------|-------|-------|
| **Technical Foundation** | 7/10 | Good basics, 404 and redirect issues drag it down |
| **On-Page SEO** | 8/10 | Strong titles, metas, schema. Missing og:image |
| **Content** | 8/10 | 12 quality blog posts, good coverage. Need more internal links |
| **Local SEO** | 6/10 | Good city pages (13 of 18 work). 5 broken. Need GBP completion |
| **Site Architecture** | 7/10 | Clean structure, but broken catch-all hurts |
| **Overall** | 7.2/10 | Solid foundation with fixable issues |

---

## 🎯 PRIORITY FIX ORDER (Weekend Action Items)

1. **Fix 404 handling** — This affects EVERY non-existent URL on the site
2. **Fix or remove 5 broken city pages** — Either build them or pull from sitemap
3. **Set up www → non-www redirect** — One config change
4. **Add og:image** — Create one social share image, add to all pages
5. **Add blog → city page internal links** — 30 min of editing
6. **Fix favicon** — 5 min swap

**Estimated total fix time:** 2-3 hours for a developer
**Impact:** Going from 7.2 to 9.0+ eliminates the main reasons Google might deprioritize the site.
