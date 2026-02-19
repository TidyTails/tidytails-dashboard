---
name: customer-tracker
description: Structured CRM for Tidy Tails customers and leads. Track status, service details, follow-ups, and health scores. Use for any customer management task.
---

# Customer Tracker

**Purpose:** Single source of truth for all Tidy Tails customers and leads. No more scattered info across memory files.

## Data Location

**Primary file:** `memory/customers/database.json`
**Backup/readable:** `memory/customers/customers.md`

## Customer Schema

```json
{
  "id": "cust_001",
  "type": "residential|commercial",
  "status": "active|paused|cancelled|lead|prospect",
  "name": "Customer Name",
  "contact": {
    "phone": "314-555-1234",
    "email": "customer@email.com",
    "address": "123 Main St, Chesterfield MO 63017"
  },
  "service": {
    "frequency": "weekly|biweekly|monthly|one-time",
    "day": "Sunday",
    "price": 25,
    "dogs": 2,
    "dogNames": ["Max", "Bella"],
    "accessNotes": "Gate code: 1234, dogs are friendly",
    "hotSpots": "Back left corner, along fence line"
  },
  "dates": {
    "firstContact": "2026-01-15",
    "firstService": "2026-01-22",
    "lastService": "2026-02-18",
    "nextService": "2026-02-25"
  },
  "billing": {
    "method": "venmo|cash|check|invoice",
    "balance": 0,
    "lifetimeValue": 250
  },
  "health": {
    "score": 8,
    "lastCheckIn": "2026-02-04",
    "referrals": 1,
    "reviews": 1,
    "complaints": 0
  },
  "notes": [
    {"date": "2026-02-18", "note": "Added second dog, increased to biweekly"}
  ],
  "tags": ["referral-source", "champion", "commercial"]
}
```

## Health Scoring

| Action | Points |
|--------|--------|
| Gives referral | +3 |
| Leaves review | +3 |
| Responds to check-ins | +1 |
| Pays on time | +1 |
| Upgrades service | +2 |
| Complains | -2 |
| Late payment | -1 |
| Threatens cancel | -5 |
| Actually cancels | Remove from active |

**Score Ranges:**
- 8-10: Champion (ask for referrals!)
- 5-7: Healthy (maintain relationship)
- 3-4: At risk (extra attention needed)
- 0-2: Critical (save or let go)

## Commands

### Add New Customer
```
Use customer-tracker to add:
- Name: John Smith
- Phone: 314-555-1234
- Address: 123 Oak St, Chesterfield
- Service: Weekly, Sundays, $25
- Dogs: 2 (Max, Bella)
```

### Update Customer
```
Use customer-tracker to update cust_001:
- Add note: "Requested biweekly starting March"
- Change frequency to biweekly
- Update price to $45
```

### Check Customer Health
```
Use customer-tracker to show at-risk customers (health < 5)
```

### Log Service
```
Use customer-tracker to log service for cust_001:
- Date: 2026-02-18
- Notes: "Heavy cleanup, back corner"
```

### Find Follow-ups Due
```
Use customer-tracker to show customers needing check-in:
- Last check-in > 14 days
- Health score < 6
- New customers (< 30 days)
```

## Quick Views

### All Active Customers
```bash
cat memory/customers/database.json | jq '.customers[] | select(.status == "active")'
```

### This Week's Services
```bash
cat memory/customers/database.json | jq '.customers[] | select(.service.day == "Sunday")'
```

### Champions (for referral asks)
```bash
cat memory/customers/database.json | jq '.customers[] | select(.health.score >= 8)'
```

### At-Risk (need attention)
```bash
cat memory/customers/database.json | jq '.customers[] | select(.health.score < 5)'
```

## Integration with Other Skills

### With auto-notion-sync:
- Push customer list updates to Notion weekly

### With lead-enricher:
- New leads start as `status: "lead"` in database
- Convert to `status: "active"` when they sign up

### With morning-briefing:
- Pull customer stats for daily briefing
- Highlight follow-ups needed

## Reporting

### Weekly Stats
```
Active customers: X
New this week: X
Cancelled this week: X
Revenue this week: $X
Champions (8+): X
At-risk (<5): X
```

### Customer Lifecycle
```
Lead → Prospect → Active → [Paused] → Cancelled
                    ↓
                 Champion (referrals, reviews)
```

## File Structure

```
memory/customers/
├── database.json      # Primary structured data
├── customers.md       # Human-readable backup
├── leads.md          # Commercial leads (Jamie's list)
└── changelog.md      # All changes logged
```

## Initialization

First time setup:
```bash
mkdir -p memory/customers
echo '{"customers": [], "lastUpdated": "'$(date -Iso)'"}' > memory/customers/database.json
```

## Current Customer Snapshot

Based on TJ's info:
- 4-5 recurring customers
- Zero service-related churn
- Lost some to divorce (unavoidable)
- Lost some to winter pause

**Goal:** 25-30 customers by August 2025

---

*Know your customers. Know your business. This is the foundation for scale.*
