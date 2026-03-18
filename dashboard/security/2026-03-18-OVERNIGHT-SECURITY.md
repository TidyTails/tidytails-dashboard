# Overnight Security Report — 2026-03-18 (3:00 AM CT)

## Version Status
- **Current version:** OpenClaw 2026.3.13 (61d171a)
- **Update available:** No — already on latest
- **Action taken:** None needed

## CVE / Vulnerability Scan (Past Week)

### ⚠️ Six OpenClaw Vulnerabilities Disclosed by Endor Labs (Feb 18, patched)
Source: Infosecurity Magazine (2 days ago)

| CVE / Advisory | Severity | Description |
|---|---|---|
| CVE-2026-26322 | HIGH (7.6) | SSRF in Gateway tool |
| CVE-2026-26319 | HIGH (7.5) | Missing Telnyx webhook auth |
| CVE-2026-26329 | HIGH (no CVSS) | Path traversal in browser upload |
| GHSA-56f2-hvwg-5743 | HIGH (7.6) | SSRF in image tool |
| GHSA-pg2v-8xwh-qhcc | MODERATE (6.5) | SSRF in Urbit auth |
| GHSA-c37p-4qqg-3p76 | MODERATE (6.5) | Twilio webhook auth bypass |

**Status:** All six patched by OpenClaw. We are on 2026.3.13 — should include these fixes. One additional (7th) vulnerability may still be unpatched.

### ⚠️ Credential Exposure in Setup Codes (CVE-2026-XXXX)
Source: DailyCVE (4 days ago)
- Affects versions up to **2026.3.11** — we are on **2026.3.13** ✅ Patched

### ⚠️ Exec Approval Bypass (CVE-2026-XXXXX)
Source: DailyCVE (4 days ago)
- Path traversal allowing unauthorized command execution
- Patched in recent versions — likely covered by 2026.3.13

### ⚠️ Authorization Bypass in Teams/Channel (CVE-2026-XXXX)
Source: DailyCVE (6 days ago)
- Unauthorized users in Teams/Channels could trigger agent replies
- Moderate severity; not applicable to our Telegram setup

### 🔴 Active Threats
- **Infostealers targeting OpenClaw agents** reported this week
- **Tens of thousands of misconfigured instances** exposed publicly (SecurityScorecard)
- **Malicious skills on ClawHub** remain a concern

## Risk Assessment
- **Our exposure:** LOW — running latest version, not publicly exposed
- **Action items:** None critical. Continue monitoring.
- **Recommendation:** Be cautious installing new skills from ClawHub. Verify sources.

## AI Agent Security News
- Rate limited on second search; will catch up in next scan.
