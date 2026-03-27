---
name: auto-notion-sync
description: Automatically sync PDFs and content to Notion after creation. Call this skill after generating any deliverable to ensure it lands in both dashboard AND Notion.
---

# Auto Notion Sync

**Purpose:** Eliminate forgotten Notion uploads. Every deliverable hits both dashboard AND Notion automatically.

## When to Use

Call this skill (or use the `notion_sync` function) AFTER:
- Creating any PDF
- Generating any deliverable for TJ or Jamie
- Completing any hourly task with output

## Notion Folder IDs

| Folder | Page ID | Use For |
|--------|---------|---------|
| 🐕 Tidy Tails Resources | `30bccdb3-7d1f-8119-b8e5-f1d746e3471f` | Dog waste ads, guides, strategies |
| 🏠 Shed Sales Resources | `30bccdb3-7d1f-8141-bd04-d94756de0610` | TuffShed ads, competitor intel |
| 🤖 AI Consulting | (search: "AI Consulting") | Agency packages, pitch materials |
| 📋 Operations & Guides | `30bccdb3-7d1f-8135-85b6-db48b6cd377c` | SOPs, weekly plans, setup guides |
| 🐕 Jamie's Outreach Hub | `30bccdb3-7d1f-8119-9470-e538c5e709dc` | Commercial leads, call scripts |

## Auto-Categorization Rules

| Content Contains | → Folder |
|------------------|----------|
| "Tidy Tails", "dog waste", "scooping", "residential", "review" | 🐕 Tidy Tails |
| "shed", "TuffShed", "WoodMaster", "garage", "barn" | 🏠 Shed Sales |
| "consulting", "agency", "AI marketing", "package" | 🤖 AI Consulting |
| "Jamie", "commercial", "outreach", "call sheet", "leads" | 🐕 Jamie's Hub |
| "EOD", "briefing", "operations", "guide", "setup" | 📋 Operations |

## Sync Process

### Step 1: Determine Folder
```
Based on content/filename, pick the appropriate Notion folder from the table above.
```

### Step 2: Create Notion Page
⚠️ CORRECT PDF URL: `https://tidytails.github.io/tidytails-dashboard/dashboard/pdfs/[FILENAME].pdf`
❌ WRONG URL: `https://tidytails.github.io/tidytails-dashboard/pdfs/[FILENAME].pdf` (404!)

⚠️ **CRITICAL: PDF links MUST use `bookmark` blocks, NOT plain text.**
- Plain text URLs in paragraphs are NOT clickable in Notion
- The `bookmark` block type renders as a clickable card/link
- NEVER put a URL as plain text in a paragraph — TJ can't click it

```bash
mcporter call notion API-post-page --args '{
  "parent": {"page_id": "[FOLDER_ID]"},
  "properties": {
    "title": [{"text": {"content": "[TITLE]"}}]
  },
  "children": [
    {"type": "paragraph", "paragraph": {"rich_text": [{"type": "text", "text": {"content": "[DESCRIPTION]"}}]}},
    {"type": "bookmark", "bookmark": {"url": "https://tidytails.github.io/tidytails-dashboard/dashboard/pdfs/[FILENAME].pdf"}}
  ]
}'
```

### ❌ WRONG (plain text — NOT clickable):
```json
{"type": "paragraph", "paragraph": {"rich_text": [{"type": "text", "text": {"content": "PDF: https://example.com/file.pdf"}}]}}
```

### ✅ RIGHT (bookmark block — CLICKABLE):
```json
{"type": "bookmark", "bookmark": {"url": "https://example.com/file.pdf"}}
```

### Step 3: Log the Upload
Add entry to `memory/notion-uploads.md`:
```
| [TIME] | [TITLE] | [FOLDER] | pdfs/[FILENAME].pdf | ✅ |
```

### Step 4: Update Telegram Deliveries (if sent)
Add entry to `memory/telegram-deliveries.md`:
```
| [DATE] | [TIME] | [DESCRIPTION] | ✅ | ✅ |
```

## Quick Sync Command

For any new PDF, run this pattern:
```bash
# 1. Determine folder based on content
FOLDER_ID="30bccdb3-7d1f-8119-b8e5-f1d746e3471f"  # Tidy Tails example

# 2. Create page — MUST use bookmark block for clickable PDF link!
mcporter call notion API-post-page --args '{
  "parent": {"page_id": "'$FOLDER_ID'"},
  "properties": {"title": [{"text": {"content": "YOUR TITLE"}}]},
  "children": [
    {"type": "paragraph", "paragraph": {"rich_text": [{"type": "text", "text": {"content": "YOUR DESCRIPTION"}}]}},
    {"type": "bookmark", "bookmark": {"url": "https://tidytails.github.io/tidytails-dashboard/dashboard/pdfs/YOUR_FILE.pdf"}}
  ]
}'
# ⚠️ NEVER put URLs as plain text in paragraphs — they won't be clickable!

# 3. Log it
echo "| $(date +%H:%M) | YOUR TITLE | 🐕 Tidy Tails | pdfs/YOUR_FILE.pdf | ✅ |" >> memory/notion-uploads.md
```

## ⚠️ EOD & Briefing Deliverable Lists — MUST INCLUDE LINKS

When creating EOD summaries or any Notion page that lists deliverables:
- **NEVER** list deliverables as plain comma-separated text
- **ALWAYS** create individual bullet items with clickable links to the dashboard tool
- Each deliverable gets its own `bulleted_list_item` with a `link` in the rich_text

### ✅ RIGHT (each deliverable is a clickable bullet):
```json
{"type": "bulleted_list_item", "bulleted_list_item": {"rich_text": [
  {"type": "text", "text": {"content": "Directory Submission Kit — ", "link": null}, "annotations": {"bold": true}},
  {"type": "text", "text": {"content": "Open on Dashboard →", "link": {"url": "https://tidytails.github.io/tidytails-dashboard/dashboard/directory-submission-kit.html"}}}
]}}
```

### ❌ WRONG (text dump, nothing clickable):
```json
{"type": "bulleted_list_item", "bulleted_list_item": {"rich_text": [
  {"type": "text", "text": {"content": "Directory Submission Kit, Event Prep, Paid Ads Guide..."}}
]}}
```

## Integration with Hourly Tasks

At the END of every hourly task, before setting status to idle:

1. ✅ PDF created and saved to `dashboard/pdfs/`
2. ✅ Link added to `dashboard/index.html`
3. ✅ **Run auto-notion-sync** ← THIS SKILL
4. ✅ Git commit and push
5. ✅ Set status to idle

## Chief Verification

Chief checks every 2 hours:
- `memory/notion-uploads.md` entries match `dashboard/index.html` links
- Any gaps are flagged and assigned to Franklin

---

*This skill ensures nothing falls through the cracks. Dashboard ↔ Notion always in sync.*
