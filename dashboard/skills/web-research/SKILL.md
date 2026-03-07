---
name: web-research
description: Crawl websites, take screenshots, extract competitor intel, and save research artifacts. Use for competitor analysis, market research, ad monitoring, pricing tracking, and visual documentation. Available to all agents.
---

# Web Research Skill

This skill enables browser-based research for competitive intelligence, market research, and content gathering.

## Capabilities

- **Snapshot pages** — Extract full page content as structured data
- **Screenshot pages** — Capture visual proof of competitor sites, ads, pricing
- **Navigate & interact** — Fill forms, click elements, follow links
- **Extract specific data** — Pull pricing, contact info, service areas, testimonials

## Browser Commands

### Start browser session
```
browser action=start profile=openclaw
```

### Open a URL
```
browser action=open targetUrl="https://competitor.com" profile=openclaw
```

### Take a snapshot (structured content)
```
browser action=snapshot profile=openclaw
```
Returns page content as structured tree (headings, links, text, etc.)

### Take a screenshot
```
browser action=screenshot targetId=[from open response] fullPage=true
```
Saves visual capture of the page.

### Navigate to a new page
```
browser action=navigate targetUrl="https://new-page.com"
```

### Close browser
```
browser action=stop profile=openclaw
```

## Research Workflow

### 1. Competitor Analysis
```
1. browser action=start profile=openclaw
2. browser action=open targetUrl="https://competitor.com"
3. browser action=snapshot  (extract content)
4. Save findings to memory/competitors/[name].md
5. browser action=stop
```

### 2. Ad/Content Monitoring
```
1. Open competitor's Facebook page or ad library
2. Snapshot to capture current ads/messaging
3. Compare to previous snapshots
4. Note changes in positioning, pricing, offers
```

### 3. Pricing Research
```
1. Visit competitor pricing pages
2. Extract pricing tiers and features
3. Save to memory/pricing-intel/[date].md
4. Track changes over time
```

## Output Locations

Save all research to organized folders:

```
memory/
├── competitors/
│   ├── doodycalls.md
│   ├── poop911.md
│   └── [competitor].md
├── market-research/
│   ├── pricing-comparison.md
│   └── service-areas.md
└── screenshots/
    └── [date]-[competitor]-[page].png
```

## Data Extraction Patterns

### From snapshot output, extract:

**Contact Info:**
- Look for `link` elements with `tel:` URLs
- Look for email patterns
- Find address text

**Pricing:**
- Search for `$` patterns
- Look for pricing tables/lists
- Note any "starting at" or "from" language

**Service Areas:**
- Look for location lists
- Extract zip codes
- Note city/neighborhood names

**Differentiators:**
- Headlines and subheads
- Bullet point lists
- "Why us" sections

**Social Proof:**
- Testimonial quotes
- Review counts/ratings
- "Years in business" claims

## Example: Full Competitor Analysis

```markdown
# [Competitor Name] Intel

**URL:** https://...
**Captured:** YYYY-MM-DD

## Contact
- Phone: 
- Email:
- Address:

## Pricing
| Service | Price |
|---------|-------|
| Weekly | $XX |
| Biweekly | $XX |

## Key Messaging
- Headline: "..."
- Tagline: "..."
- Main differentiators: ...

## Service Areas
[List cities/zips]

## Weaknesses to Exploit
- ...

## Screenshot
[Link to saved screenshot]
```

## Available to All Agents

Any sub-agent can use this skill by:
1. Reading this SKILL.md
2. Using the browser tool with the commands above
3. Saving findings to the appropriate memory folder

## Notes

- Use `profile=openclaw` for automated research
- Respect robots.txt and rate limits
- Don't spam competitor sites
- Screenshots are for internal research only
