---
name: pdf-generator
description: Generate PDF documents from markdown content for reports, briefings, and deliverables. Use when creating Morning Briefing PDFs, End of Day summaries, Ad Copy PDFs, Lead lists, or any document that needs to be emailed and uploaded to the dashboard.
---

# PDF Generator

Create professional, branded PDF deliverables.

## Standard Workflow

### Step 1: Create Styled HTML

Use the template at `dashboard/templates/briefing-v2.html` (dark theme, matches dashboard v3) or create custom HTML.

**Key CSS Classes:**
- `.section-header.dog-waste` — Green header for Tidy Tails
- `.section-header.sheds` — Brown header for TuffShed/WoodMaster
- `.section-header.systems` — Blue header for systems/ops
- `.section-header.ideas` — Purple header for news/ideas
- `.section-header.leads` — Teal header for commercial leads
- `.section-header.ads` — Red header for ad copy
- `.highlight` — Yellow callout box (also .success, .info, .danger)
- `.card` — Content card (also .green, .blue, .purple, .orange)
- `.ad-copy` — Styled ad copy block
- `.lead-card` — Styled lead entry

### Step 2: Generate PDF via Browser

```
1. Write HTML to dashboard/pdfs/temp-[name].html
2. browser action=open targetUrl=file:///path/to/temp.html profile=openclaw
3. browser action=pdf targetId=[from step 2] profile=openclaw
4. Copy output file to dashboard/pdfs/[FINAL_NAME].pdf
5. Delete temp HTML file
```

### Step 3: Update Dashboard & Push

1. Update link in dashboard/index.html to point to PDF
2. Git add, commit, push
3. Email PDF to recipient if required

## Document Types

### Morning Briefing
- Sections: Dog Waste, Sheds, Systems, News & Ideas
- Filename: `MORNING_BRIEFING_YYYY-MM-DD.pdf`
- Email to: cartervhomes@gmail.com

### End of Day Summary
- Sections: Dog Waste (Completed/In Progress), Sheds, Systems, Tomorrow
- Filename: `EOD_SUMMARY_YYYY-MM-DD.pdf`
- Email to: cartervhomes@gmail.com

### Shed Ad Copy
- Section: Ads (red header)
- Use `.ad-copy` class for each ad
- Filename: `SHED_ADS_YYYY-MM-DD.pdf`
- Email to: cartervhomes@gmail.com

### Commercial Leads
- Section: Leads (teal header)
- Use `.lead-card` class for each lead
- Filename: `COMMERCIAL_LEADS_YYYY-MM-DD.pdf`
- Email to: jamiedabrowski710@gmail.com

## Quality Standards

Every PDF must be:
- ✅ Clean and professional
- ✅ Color-coded by category
- ✅ Easy to scan (headers, bullets, tables)
- ✅ Properly sized (letter format)
- ✅ >100KB (not a blank file)

## Example HTML Structure

```html
<div class="section">
    <div class="section-header dog-waste">🐕 DOG WASTE (Tidy Tails)</div>
    <h3>Today's Priorities</h3>
    <ul>
        <li><strong>Task 1</strong> — description</li>
    </ul>
    <div class="highlight">
        💡 Key insight or callout
    </div>
</div>
```

## After Creating PDF

1. Verify file size >100KB
2. Update dashboard links
3. Email to recipient
4. Git push
5. Update task board
