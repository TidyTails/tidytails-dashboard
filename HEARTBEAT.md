# HEARTBEAT.md — Franklin's Periodic Check-In

## Priority Order (rotate through, 2-4 checks/day)

### 1. Memory Auto-Save (EVERY HEARTBEAT)
- Review the last few messages in conversation history
- Check if any decisions, customer updates, business changes, or important context hasn't been saved
- If unsaved context exists: append to `memory/YYYY-MM-DD.md` (today's date)
- If a significant lesson or long-term insight: also update `MEMORY.md`
- This prevents context from falling through cracks between sessions
- **Rule:** If TJ mentioned a customer, lead, price change, competitor update, or business decision — WRITE IT DOWN

### 2. Customer/Lead Activity
- Check if any follow-up reminders are due (cron jobs or memory notes)
- Check `memory/customers/database.json` for overdue check-ins (>14 days)
- If TJ forwarded any lead screenshots recently, ensure they're logged

### 3. Email Check
- Scan for urgent unread messages
- Flag anything requiring TJ's attention

### 4. Calendar/Events
- Upcoming events in next 24-48h
- Any STL community events relevant to Tidy Tails (from event calendar)

### 5. Weather (If Relevant)
- Check STL weather if it could affect scooping schedule
- Rain = potential reschedule notification

### 6. Phone Compliance Auto-Check (EVERY HEARTBEAT)
- Run: `git -C ~/tidy-tails diff --name-only HEAD~3..HEAD 2>/dev/null | grep ".html$"` (or check dashboard/)
- For each new .html file committed in last 24h, verify it contains at least one phone number
- Tidy Tails pages: must contain `314-850-7140` or `850-7140`
- Sheds pages: must contain `636-354-7406` or `354-7406`
- If missing: add footer block `📱 Text or call (314) 850-7140 — Jamie` before `</body>` and commit
- **Why:** Chief catches this every 2 hours. We should catch it immediately.

### 7. Blog/SEO Auto-Deploy (EVERY HEARTBEAT)
- Check for any untracked .html files in `tidy-tails/website/blog/` or `tidy-tails/website/`
- Run: `cd ~/tidy-tails && git status --short | grep "^??" | grep ".html"`
- If any untracked HTML files found: `git add <file> && git commit -m "deploy: <filename> SEO page" && git push origin main`
- Also check `dashboard/` for any untracked HTML deliverables not yet committed
- **Why:** Every hour a new page sits undeployed = lost SEO indexing time. Auto-deploy within 2 hours of creation.

### 7. Competitive Pulse (1x/week max)
- Quick check on competitor activity if it's been >7 days
- Update `memory/competitive-intel.md` if anything changed

## State Tracking
Track check timestamps in `memory/heartbeat-state.json`

## Quiet Hours
- 11 PM - 7 AM: HEARTBEAT_OK unless truly urgent
- If nothing new since last check: HEARTBEAT_OK
