# Conversational CRM Workflow
*Created: March 21, 2026 — Overnight Sprint*

## The Problem
TJ gets leads via text, Facebook DM, screenshots, and forwarded messages. These need to be:
1. Logged somewhere (not just lost in chat history)
2. Responded to (draft a reply TJ can send)
3. Followed up on (set a reminder if they don't convert)

Currently this falls through the cracks. Franklin needs to catch these automatically.

---

## The Flow: Lead Comes In → Auto-Process

### Trigger: TJ Forwards a Lead
When TJ sends Franklin any of these:
- Screenshot of a text/DM conversation
- Forwarded message from a potential customer
- "Got a lead from [name]" or similar
- Any message mentioning a new person asking about service

### Franklin's Auto-Response (3 steps, every time):

#### Step 1: LOG IT (immediate)
```
Append to memory/YYYY-MM-DD.md:
- Lead name (extract from message/screenshot)
- Source (text, FB, Nextdoor, referral, etc.)
- What they asked about
- Location if mentioned
- Timestamp
```

Also add to `memory/customers/database.json` as:
```json
{
  "status": "lead",
  "source": "facebook|text|nextdoor|referral|walk-in",
  "firstContact": "YYYY-MM-DD",
  "notes": [{"date": "...", "note": "Initial inquiry via..."}]
}
```

#### Step 2: DRAFT A RESPONSE (immediate)
Draft a reply TJ/Jamie can copy-paste. Follow these rules:
- **Warm and neighborly** (not corporate)
- **Include pricing** ($25/wk, $45 biweekly, $70/mo flat)
- **Mention free first cleanup** if it's a cold lead
- **Ask about:** number of dogs, yard size, preferred day
- **Sign as Jamie** (she's the face of Tidy Tails)
- **Include phone:** 314-850-7140

Template:
```
Hey [Name]! Thanks for reaching out 😊 

We'd love to help keep your yard clean! Here's what we offer:

✅ Weekly — $25/visit
✅ Biweekly — $45/visit  
✅ Monthly flat rate — $70/mo (our most popular!)

We cover [their area] and can usually start within a few days. How many dogs do you have? And is there a day of the week that works best?

Oh — and your first cleanup is on us! 🐕

- Jamie, Tidy Tails
📞 314-850-7140
```

#### Step 3: SET FOLLOW-UP (immediate)
Create a cron reminder:
- **If lead came from FB/Nextdoor:** Follow up in 24 hours
- **If lead came from text/referral:** Follow up in 48 hours
- **If lead was a screenshot with no reply yet:** Follow up in 2 hours

Reminder text: "Hey TJ — did [Lead Name] ever respond? They reached out about [service] on [date]. Want me to draft a follow-up?"

---

## When TJ Says "They Signed Up"

1. Update lead status → `"active"` in database
2. Fill in service details (frequency, day, dogs, address)
3. Set 7-day check-in reminder ("How was the first cleanup?")
4. Set 30-day review request reminder

---

## When TJ Says "They Ghosted" or No Response

1. Update lead status → `"prospect"` (not dead yet)
2. Set 2-week "reheat" reminder
3. Draft a gentle follow-up message:
```
Hey [Name], just checking in! We still have availability in [area] if you're interested. No pressure at all — just didn't want you to think we forgot about you 😊

- Jamie, Tidy Tails
```

---

## Screenshot Processing
When TJ forwards a screenshot:
1. Describe what you see (OCR isn't always perfect)
2. Ask TJ to confirm: "Looks like [Name] from [platform] asking about [service]. That right?"
3. Once confirmed, run the 3-step flow above

---

## Quick Commands for TJ
- **"New lead: [name], [source]"** → Franklin logs + drafts response + sets follow-up
- **"[Name] signed up"** → Franklin updates to active, sets check-in reminders  
- **"[Name] ghosted"** → Franklin sets reheat reminder + drafts follow-up
- **"Show me open leads"** → Franklin pulls all status="lead" from database
- **"Follow-up check"** → Franklin shows all overdue follow-ups

---

## Integration Points
- **customer-tracker skill:** All data lives in the same database.json
- **HEARTBEAT.md:** Every heartbeat, check for overdue follow-ups
- **morning-briefing:** Include open leads + overdue follow-ups in daily brief
- **cron reminders:** Auto-fire follow-up reminders at set intervals

---

## The Goal
Zero leads fall through the cracks. Every inquiry gets:
- ✅ Logged within the conversation
- ✅ Response drafted immediately  
- ✅ Follow-up scheduled automatically
- ✅ Tracked until converted or explicitly dead
