# Overnight Security Report — 2026-03-12 (3:00 AM CT)

## Update Summary
- **Previous version:** OpenClaw 2026.3.8
- **Updated to:** OpenClaw 2026.3.11
- **Update type:** Patch (auto-updated per policy)
- **Config backup:** /Users/halpininc/.openclaw/openclaw.json.bak
- **Gateway restart:** NOT performed (will restart via next cron or manual action)

## Known CVE Status (All Patched)
Our install (now 2026.3.11) is patched against all known vulnerabilities:

| CVE / Advisory | Severity | Description | Patched Since |
|---|---|---|---|
| CVE-2026-26322 | High (7.6) | SSRF in Gateway tool | Feb 2026 |
| CVE-2026-26319 | High (7.5) | Missing Telnyx webhook auth | Feb 2026 |
| CVE-2026-26329 | High | Path traversal in browser upload | Feb 2026 |
| GHSA-56f2-hvwg-5743 | High (7.6) | SSRF in image tool | Feb 2026 |
| GHSA-pg2v-8xwh-qhcc | Moderate (6.5) | SSRF in Urbit auth | Feb 2026 |
| GHSA-c37p-4qqg-3p76 | Moderate (6.5) | Twilio webhook auth bypass | Feb 2026 |
| CVE-2026-29609 | - | DoS in fetchWithGuard | Feb 2026 |
| ClawJacked | Critical | WebSocket hijack via localhost | v2026.2.25+ |

## Security News (Past Week)
- **6 new OpenClaw CVEs disclosed** (Endor Labs, Feb 18) — all patched in our version
- **ClawJacked vulnerability** (Oasis Security) — full agent takeover via localhost WebSocket. Fixed in v2026.2.25+. We're on 2026.3.11 ✅
- **40,000+ exposed OpenClaw instances** found by SecurityScorecard — reminder to keep gateway auth tight and not expose ports publicly
- **Advisory tracking gap** between GitHub and CVE databases noted by researchers — some advisories not triggering Dependabot alerts

## Risk Assessment
- **Current risk level:** LOW
- All known CVEs patched
- No new zero-days found
- Gateway not publicly exposed (local only via Telegram channel)

## Action Items
- [ ] Gateway restart needed to fully activate 2026.3.11 (next cron or manual)
- [ ] No critical issues requiring TJ's attention
