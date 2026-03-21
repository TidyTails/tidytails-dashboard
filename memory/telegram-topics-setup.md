# Telegram Topics Setup Guide
*Created: March 21, 2026 — Overnight Sprint*

## What This Is
Telegram groups with "Topics" enabled let you organize conversations into channels — like Slack but in Telegram. Instead of one messy chat, TJ gets dedicated topics for each business area. Franklin can respond contextually in each topic.

---

## Step-by-Step: TJ's 5-Minute Setup

### Step 1: Create the Group (1 min)
1. Open Telegram → Hamburger menu (☰) → **New Group**
2. Name it: **"HQ"** (or "Command Center" or whatever you want)
3. Add the Franklin bot as a member (search for the bot username)
4. Tap **Create**

### Step 2: Enable Topics (1 min)
1. Tap the group name at top → **Edit** (pencil icon)
2. Scroll down → Toggle **Topics** ON
3. Save

### Step 3: Create Topics (3 min)
Create these 5 topics by tapping the "+" button:

| # | Topic Name | Icon | Purpose |
|---|-----------|------|---------|
| 1 | 🐕 Tidy Tails | 🐕 | Dog waste biz — leads, customers, marketing, scooping |
| 2 | 🏠 Sheds | 🏠 | TuffShed/WoodMaster — quotes, ads, lot updates |
| 3 | 🚗 MOTRA | 🚗 | Autonomous vehicle venture (parked, but ready when needed) |
| 4 | 🤖 Franklin Admin | 🤖 | Agent status, skill updates, system stuff |
| 5 | 📋 Daily Accountability | 📋 | Morning briefings, EOD recaps, task tracking |

### Step 4: Pin Key Messages (optional, 1 min)
In each topic, send a brief "what goes here" message and pin it.

---

## Recommended System Prompts per Topic

### 🐕 Tidy Tails
```
This topic is for Tidy Tails pet waste removal business. Focus on: customer management, lead tracking, marketing strategy, ad copy, competitive intel, and scooping schedule. Always reference the customer database and competitive landscape from memory. Jamie is the face of the business — all customer-facing content says Jamie, not TJ.
```

### 🏠 Sheds
```
This topic is for TuffShed/WoodMaster shed sales. Focus on: shed ad copy, lumber pricing, lot inventory, lead follow-up, and competitor monitoring. Contact: Darius, 636-354-7406. Website: backyardbuildingsstl.com. Check current promos at tuffshed.com/special-offers/ before writing any ads.
```

### 🚗 MOTRA
```
This topic is for the MOTRA autonomous vehicle fleet care venture. Currently parked — only activate when TJ says "let's pick up MOTRA." Reference memory/motra-business-idea.md for full context. Don't bring up MOTRA in other topics unless asked.
```

### 🤖 Franklin Admin
```
This topic is for agent management — skill updates, system status, cron job management, memory maintenance, and technical discussions about the AI setup. Keep it meta. Don't mix business content here.
```

### 📋 Daily Accountability
```
This topic is for daily accountability. Morning: briefing with top 3-5 priorities. Evening: recap of what got done. Track commitments and follow through. Be direct about what's overdue. This is where we keep each other honest.
```

---

## OpenClaw Config Changes Needed

In `openclaw.json`, the Telegram channel config needs the group added. The exact config depends on the current setup, but here's what to add/modify:

```jsonc
{
  "channels": {
    "telegram": {
      // ... existing bot config ...
      "groups": {
        "hq": {
          "chatId": "<GROUP_CHAT_ID>",  // TJ gets this after creating the group
          "topics": {
            "tidy-tails": {
              "threadId": "<TOPIC_THREAD_ID>",
              "systemPrompt": "This topic is for Tidy Tails pet waste removal..."
            },
            "sheds": {
              "threadId": "<TOPIC_THREAD_ID>",
              "systemPrompt": "This topic is for TuffShed/WoodMaster..."
            },
            "motra": {
              "threadId": "<TOPIC_THREAD_ID>",
              "systemPrompt": "This topic is for MOTRA..."
            },
            "admin": {
              "threadId": "<TOPIC_THREAD_ID>",
              "systemPrompt": "This topic is for agent management..."
            },
            "accountability": {
              "threadId": "<TOPIC_THREAD_ID>",
              "systemPrompt": "This topic is for daily accountability..."
            }
          }
        }
      }
    }
  }
}
```

### How to Get the Chat ID and Thread IDs
1. After creating the group + topics, send a message in each topic
2. Use the Telegram Bot API: `https://api.telegram.org/bot<TOKEN>/getUpdates`
3. Look for `message.chat.id` (group) and `message.message_thread_id` (topic)
4. Or: Forward a message from each topic to @userinfobot or similar

### Alternative: Franklin Can Help
Once TJ creates the group and sends a message in each topic, Franklin can extract the IDs from the bot's update feed and configure everything automatically.

---

## Benefits
- **No more context switching** — shed talk stays in sheds, dog talk stays in dogs
- **Better memory** — Franklin knows which business context he's in
- **Daily accountability** — dedicated space for morning priorities + EOD recaps
- **Clean history** — scroll back in one topic without wading through everything
- **MOTRA ready** — when TJ wants to pick it up, the topic is waiting

---

## Next Steps for TJ
1. ✅ Create group (5 min)
2. ✅ Tell Franklin the group name so he can extract IDs
3. ✅ Franklin configures openclaw.json
4. ✅ Done — start using topics
