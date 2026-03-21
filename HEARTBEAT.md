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

### 6. Competitive Pulse (1x/week max)
- Quick check on competitor activity if it's been >7 days
- Update `memory/competitive-intel.md` if anything changed

## State Tracking
Track check timestamps in `memory/heartbeat-state.json`

## Quiet Hours
- 11 PM - 7 AM: HEARTBEAT_OK unless truly urgent
- If nothing new since last check: HEARTBEAT_OK
