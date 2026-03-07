---
name: lead-enricher
description: Enrich commercial leads with phone numbers, emails, decision makers, and pitch angles. Use when you have a business name but need contact details for Jamie to call.
---

# Lead Enricher

**Purpose:** Turn a business name into a fully actionable lead with phone, email, decision maker, and custom pitch angle. Saves 5-10 minutes per lead.

## When to Use

- After identifying a potential commercial lead (property manager, apartment, HOA, vet clinic, daycare)
- Before adding to Jamie's call sheet
- When updating existing leads with missing info

## Input Required

Minimum: Business name + city/area
```
Example: "Parkway Properties, Chesterfield MO"
```

## Enrichment Process

### Step 1: Web Search
```bash
# Search for business website and contact info
web_search "[BUSINESS NAME] [CITY] phone contact"
```

### Step 2: Fetch Website
```bash
# Get the business website for details
web_fetch --url "[WEBSITE_URL]" --maxChars 5000
```

### Step 3: Extract Key Info

Look for:
- **Phone number** (main line, property management line)
- **Email** (general, property manager, contact form)
- **Decision maker** (property manager name, owner, office manager)
- **Number of properties/units** (for pricing estimate)
- **Service areas** (confirm they're in our zones)

### Step 4: Generate Pitch Angle

Based on business type:

| Business Type | Pitch Angle |
|---------------|-------------|
| Property Management | "Keep common areas clean for residents, reduce complaints" |
| Apartment Complex | "Maintain pet-friendly areas, attract pet-owning renters" |
| HOA | "Professional appearance, consistent service, one vendor" |
| Vet Clinic | "Clean outdoor relief areas for patients" |
| Dog Daycare | "Maintain play yards between cleanings" |
| Dog Park | "Regular maintenance keeps park usable and safe" |

### Step 5: Output Format

```markdown
## [BUSINESS NAME]

**Category:** [Property Management / Apartment / HOA / Vet / Daycare / Dog Park]
**Location:** [Address or Area]
**Phone:** [NUMBER]
**Email:** [EMAIL]
**Website:** [URL]
**Decision Maker:** [NAME + TITLE if found]
**Size:** [# properties / # units / # locations]
**Service Fit:** [Why they're a good target]
**Pitch Angle:** [Custom hook for this business]
**Notes:** [Anything else relevant]
```

## Quick Enrichment Commands

### For a single lead:
```bash
# 1. Search
web_search "Parkway Properties Chesterfield MO phone email contact"

# 2. Fetch their site
web_fetch --url "https://parkwayproperties.com/contact"

# 3. Build the lead entry
```

### For batch enrichment:
Process 5-7 leads at a time, use parallel searches when possible.

## Integration with Leads Database

After enrichment, add to `memory/leads-commercial.md`:
```markdown
### [NUMBER]. [BUSINESS NAME]
- **Type:** [Category]
- **Contact:** [Phone] | [Email]
- **Decision Maker:** [Name]
- **Location:** [Area]
- **Pitch:** [Custom angle]
- **Status:** New | Contacted | Interested | Closed | Dead
```

## Quality Checklist

Before marking a lead as "ready":
- [ ] Phone number verified (not just website, actual callable number)
- [ ] Correct business (not a different company with similar name)
- [ ] In service area (St. Louis County, St. Charles, etc.)
- [ ] Pitch angle is specific to their business
- [ ] No duplicate in existing leads database

## Enrichment Sources

1. **Google Search** — Primary source for contact info
2. **Company Website** — Contact page, about page, team page
3. **Google Maps** — Phone number, hours, reviews
4. **LinkedIn** — Decision maker names/titles (if needed)
5. **Facebook** — Some businesses list phone/email
6. **Yelp** — Phone numbers, sometimes owner names

## Example Enriched Lead

```markdown
### 15. St. Louis Animal Emergency Clinic

- **Type:** Veterinary Clinic (24/7 Emergency)
- **Contact:** (314) 822-7600 | info@stlanimalemergency.com
- **Decision Maker:** Hospital Administrator (call main line)
- **Locations:** Kirkwood + O'Fallon (2 locations!)
- **Size:** High traffic 24/7 operation
- **Pitch:** "Keep outdoor relief areas clean for patients and their stressed owners. 24/7 operation = constant use. Weekly service keeps it professional."
- **Status:** New
- **Notes:** Been in business 40+ years. Reputation-conscious. Two locations = potential for multi-site deal.
```

## Batch Output

For Jamie's call sheet, output as table:
```markdown
| # | Business | Phone | Decision Maker | Pitch Hook |
|---|----------|-------|----------------|------------|
| 1 | Parkway Properties | (314) 555-1234 | John Smith, PM | Keep common areas clean |
| 2 | Oak Hills Apartments | (314) 555-5678 | Front Office | Attract pet-owning renters |
```

---

*Fast enrichment = more calls = more customers. Don't make Jamie hunt for phone numbers.*
