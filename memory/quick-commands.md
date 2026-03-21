# Quick Commands — Repeatable Workflows
*Created: March 21, 2026 — Overnight Sprint*

These are the things TJ asks for repeatedly, packaged as quick-trigger workflows. Just say the phrase and Franklin runs the full chain.

---

## 🏠 "Write shed ads" / "Shed ad time"

### What Franklin Does:
1. **Check current promos** — Scrape tuffshed.com/special-offers/ for active deals
2. **Check lumber prices** — Quick web search for current lumber/MBF pricing
3. **Read TJ's style guide** — Load `memory/tj-ad-style-guide.md`
4. **Check ad archive** — Load `memory/ad-copy-archive.md` to avoid repeats
5. **Spawn Doeboy** — Generate 3-4 ad variations (FB Marketplace + Instagram)
6. **Format for copy-paste** — Mobile-friendly, ready to post
7. **Archive** — Save new ads to `memory/ad-copy-archive.md` with date

### Output: 3-4 ad variations with:
- FB Marketplace format (title, price, category, description)
- Instagram caption version
- Current promo integrated
- Lumber price urgency angle if applicable

### Optional add-on: "with video"
- Also spawn Basquiat for AI video (Nano Banana 2 → Kling v3 pipeline)
- Adds ~$1.50-2.50 per video concept

---

## 🪵 "Lumber check" / "What's lumber at?"

### What Franklin Does:
1. **Web search** — Current lumber futures / MBF pricing
2. **Compare** — vs. last known price ($600/MBF as of Mar 17)
3. **Calculate** — % change, tariff impact (45% on Canadian lumber)
4. **Shed price impact** — Estimate what this means for shed pricing
5. **Draft angle** — If significant change, draft a "today's price is tomorrow's discount" talking point

### Output:
```
🪵 Lumber: $XXX/MBF (up/down X% from last check)
📦 Tariff impact: +45% on Canadian = $XXX effective
🏠 Shed impact: ~$X,XXX added to average shed
💬 Angle: "[one-liner for customer conversations]"
```

---

## 🔥 "Reheat leads" / "Follow up time"

### What Franklin Does:
1. **Pull cold leads** — From `memory/customers/database.json` where status = "lead" or "prospect" and last contact > 7 days
2. **Draft personalized follow-ups** for each:
   - Reference their original inquiry
   - Mention something timely (season, weather, promo)
   - Warm, no-pressure tone
   - Sign as Jamie
3. **Format for copy-paste** — One message per lead, ready to send

### Output per lead:
```
📱 [Lead Name] — last contact [date] via [source]
Original ask: [what they wanted]

Draft message:
"Hey [Name]! Just checking in — spring is here and we're booking up fast in [area]. 
Still have a spot for you if you're interested! First cleanup is free 🐕
- Jamie, 314-850-7140"
```

---

## 📊 "How are the ads doing?" / "FB analytics" / "Ad check"

### What Franklin Does:
1. **Check what's been posted** — Ask TJ which ads are live (we can't access FB Ads Manager directly)
2. **If TJ shares screenshots/data:**
   - Analyze reach, engagement, clicks, cost per lead
   - Compare to benchmarks (pet services: 2-5% CTR, $5-15 CPL)
   - Identify top performer and why
   - Recommend: kill, scale, or tweak each ad
3. **If no data available:**
   - Remind TJ how to check (FB Ads Manager → Campaigns → select date range)
   - Ask for screenshot of results
   - Draft next ad variations based on what's been running

### Output:
```
📊 Ad Performance Summary
- Ad 1: [name] — [reach] reach, [clicks] clicks, [CTR]% CTR → [VERDICT]
- Ad 2: [name] — [reach] reach, [clicks] clicks, [CTR]% CTR → [VERDICT]

💡 Recommendation: [scale/kill/tweak + why]
📝 Next steps: [specific actions]
```

---

## 🐕 "New customer" / "Add customer"

### What Franklin Does:
1. **Ask for details** (or extract from message):
   - Name, phone, address
   - Number of dogs + names
   - Service frequency preference
   - How they found us
2. **Add to database.json** with full schema
3. **Set reminders:**
   - 7-day post-first-service check-in
   - 30-day review request
   - 90-day referral ask (if health score is good)
4. **Update daily log**

---

## 📱 "Post something" / "What should I post today?"

### What Franklin Does:
1. **Check content calendar** — What's scheduled for today?
2. **Check what's been posted recently** — Avoid repeats
3. **Consider timing** — Season, weather, local events, holidays
4. **Generate 2-3 options:**
   - Facebook post (personal + business page)
   - Nextdoor post
   - Instagram caption + hashtags
5. **Format for copy-paste** on each platform

---

## 📋 "Morning brief" / "What's up today?"

### What Franklin Does:
1. Run morning-briefing skill
2. Include: weather, schedule, top 3 priorities, any overdue follow-ups
3. Lead/customer status snapshot
4. Any competitive intel updates
5. One motivational/strategic thought

---

## 🔍 "Competitor check" / "What's the competition doing?"

### What Franklin Does:
1. **Quick sweep** — Check top 3-4 competitor websites for changes
2. **Pricing check** — Any price changes?
3. **New competitors** — Quick search for new entrants
4. **Google ranking** — Where are we vs them for key terms?
5. **Update** — Save findings to `memory/competitive-intel.md`

---

## Usage
These aren't rigid commands — they're triggers. TJ can say any variation and Franklin should recognize the intent and run the workflow. The key is: **no back-and-forth asking what to do**. Just do the workflow and present results.
