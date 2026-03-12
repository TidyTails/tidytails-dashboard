# 🔍 SEO City Page Audit — March 12, 2026

## Critical Finding: 4 City Pages Serving Duplicate Content

The site has 14+ city landing pages in the sitemap, but **4 of them are serving the exact same generic homepage content** instead of unique local pages. Google treats duplicate content across multiple URLs as a negative signal and may refuse to index any of them.

### Status of All City Pages

| City | Status | Unique Title? | Unique Content? |
|------|--------|---------------|-----------------|
| Ferguson | ✅ DONE | Yes | Yes |
| Florissant | ✅ DONE | Yes | Yes |
| Maryland Heights | ✅ DONE | Yes | Yes |
| O'Fallon | ✅ DONE | Yes | Yes |
| St. Charles | ✅ DONE | Yes | Yes |
| St. Peters | ✅ DONE | Yes | Yes |
| Chesterfield | ✅ DONE | Yes | Yes |
| Ballwin | ✅ DONE | Yes | Yes |
| Creve Coeur | ✅ DONE | Yes | Yes |
| Hazelwood | ✅ DONE | Yes | Yes |
| Bridgeton | ✅ DONE | Yes | Yes |
| **Kirkwood** | ❌ DUPLICATE | No — generic title | Serves homepage |
| **Webster Groves** | ❌ DUPLICATE | No — generic title | Serves homepage |
| **Olivette** | ❌ DUPLICATE | No — generic title | Serves homepage |
| **University City** | ❌ DUPLICATE | No — generic title | Serves homepage |

### Why This Matters

- **Kirkwood + Webster Groves are our #1 target neighborhoods** per the heat map analysis
- These pages exist in the sitemap.xml, so Google is being told to crawl them
- When Google crawls them and finds identical content to the homepage, it may:
  - Refuse to index ANY of them
  - Lower trust signals for the entire domain
  - Treat the site as thin/spammy content
- `site:tidytailsstl.com` returns **0 results** on Brave Search — the site is still not indexed

### What I Built

Complete, production-ready HTML pages for all 4 missing cities:

1. **`deliverables/city-pages/kirkwood.html`** — References Downtown Kirkwood, Farmers' Market, Kirkwood Park, Meramec River trails, specific neighborhoods (Meramec Highlands, Westchester, North/South Kirkwood)
2. **`deliverables/city-pages/webster-groves.html`** — References Old Webster, Farmers Market, Lockwood/Plant Ave, Memorial Park, Victorian homes, specific neighborhoods (Tuxedo Park, Bristol Heights, Old Webster)
3. **`deliverables/city-pages/olivette.html`** — References Olive Blvd, central county location, specific streets (Dielman, Price, Warson, Old Bonhomme)
4. **`deliverables/city-pages/university-city.html`** — References Delmar Loop, Wash U, Parkview/Ames Place historic districts, MetroLink trails

Each page includes:
- ✅ Unique `<title>` tag with city name
- ✅ Unique `<meta description>` with city name
- ✅ Unique `<canonical>` URL
- ✅ Unique `<og:*>` tags
- ✅ Unique Schema.org LocalBusiness JSON-LD with correct ZIP code
- ✅ Unique body copy mentioning local landmarks and neighborhoods
- ✅ Correct geo.placename meta tag
- ✅ Internal linking to all other city pages (updated nav includes new 4 cities)
- ✅ Matching design/CSS to existing pages (Chesterfield template)

### TJ's Action Items

1. **Deploy these 4 pages** to replace the duplicate ones on the site
2. **Update the service-areas-nav** on the existing 10 city pages to include Kirkwood, Webster Groves, Olivette, and University City links
3. **Update sitemap.xml** to include `/olivette` and `/university-city` (currently missing)
4. **Resubmit sitemap** via Google Search Console
5. **Request indexing** for each new page in Google Search Console

### Bigger Picture: Why We're Still Not Indexed

The domain is ~1 month old. Even with perfect SEO:
- Google takes 2-8 weeks to crawl and index new domains
- Zero backlinks = low crawl priority
- Duplicate content pages actively hurt the process

Fixing these 4 pages removes a significant negative signal and gives Google 4 more unique, locally-relevant pages to discover.
