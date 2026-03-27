# PDF Generation Standard

**Created:** March 26, 2026
**Why:** PDFs were being generated from GitHub Pages URLs that 404'd, producing blank/broken files for weeks without anyone catching it.

---

## Rules (Non-Negotiable)

### 1. ALWAYS Generate From Local HTML
```
✅ Serve locally → open in browser → browser pdf action
❌ NEVER open a GitHub Pages / Cloudflare URL to generate a PDF
```

**Method:**
1. Start local server: `npx serve -l 9234 . &`
2. Navigate browser to `http://localhost:9234/path/to/file.html`
3. Use `browser pdf` action to generate
4. Copy output to `dashboard/pdfs/`
5. Kill server when done

### 2. VALIDATE Every PDF Before Committing
Every PDF must pass ALL checks:
- **Size check:** > 50KB (anything under 50KB is almost certainly broken)
- **Header check:** First bytes must be `%PDF-`
- **Page check:** Must contain at least 1 `/Type /Page`

**Validation script:**
```bash
validate_pdf() {
  local f="$1"
  local size=$(wc -c < "$f")
  local header=$(head -c 5 "$f")
  if [ "$size" -lt 50000 ]; then echo "FAIL: $f too small (${size}B)"; return 1; fi
  if [ "$header" != "%PDF-" ]; then echo "FAIL: $f not a valid PDF"; return 1; fi
  echo "PASS: $f (${size}B)"
  return 0
}
```

### 3. SEND PDFs Directly to Telegram
Don't rely on GitHub Pages links for TJ to open. Always:
1. Send the PDF file directly via `message` tool with `filePath`
2. Include a caption describing the content
3. The GitHub link is a bonus, not the delivery method

### 4. HTML Source Files Are Sacred
- Every PDF MUST have a corresponding `.html` source file
- HTML goes in `dashboard/pdfs/` (for reports) or `deliverables/` (for tools/kits)
- If the HTML doesn't exist, the PDF can never be regenerated
- NEVER delete HTML source files

### 5. Git Push After Generation
- `git add` both the HTML and PDF
- Commit with descriptive message
- Push immediately
- Don't batch — push each deliverable as it's done

---

## Checklist (Copy This Into Every Cron That Generates PDFs)

```
PDF GENERATION CHECKLIST:
[ ] HTML created and saved locally
[ ] Local server running (npx serve)
[ ] Browser navigated to localhost URL (NOT GitHub Pages)
[ ] PDF generated via browser pdf action
[ ] PDF validated: >50KB, starts with %PDF-, has pages
[ ] PDF sent directly to Telegram via filePath
[ ] Both HTML + PDF committed and pushed
```

---

## What Went Wrong (March 26, 2026)

The EOD, Morning Briefing, and other cron tasks were:
1. Creating HTML locally ✅
2. Trying to open the file via GitHub Pages URL ❌
3. GitHub Pages returned 404 (file not deployed to Cloudflare/Pages)
4. Browser screenshot'd the 404 page
5. "PDF" was generated from the 404 screenshot (~18KB)
6. No validation caught it
7. Broken PDFs shipped to TJ for weeks

**Never again.**
