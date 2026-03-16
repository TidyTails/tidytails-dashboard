# Overnight Security Report — 2026-03-16 (3:00 AM)

## Version Check
- **Current version:** OpenClaw 2026.3.13 (61d171a)
- **Update available:** No — already on latest

## CVE / Vulnerability Scan (Past Week)

### CVE-2026-25253 — Token Exfiltration → Full Gateway Compromise (CVSS 8.8)
- **Affects:** Versions before 2026.1.29
- **Status:** ✅ PATCHED (we're on 2026.3.13)
- Localhost WebSocket trust issue allowed token theft and RCE

### "ClawJacked" — Agent Takeover via Localhost WebSocket
- **Disclosed by:** Oasis Security
- **Fix:** v2026.2.25+
- **Status:** ✅ PATCHED
- Any website could hijack OpenClaw via localhost WebSocket

### CVE-2026-26322 — SSRF in Gateway Tool (CVSS 7.6)
- **Status:** ✅ PATCHED (disclosed last week, fix in recent releases)

### CVE-2026-26319 — Missing Telnyx Webhook Auth (CVSS 7.5)
- **Status:** ✅ PATCHED

### CVE-2026-26329 — Path Traversal in Browser Upload (High)
- **Status:** ✅ PATCHED

### GHSA-56f2-hvwg-5743 — SSRF in Image Tool (CVSS 7.6)
- **Status:** ✅ PATCHED

### General Notes
- 255 total security advisories now listed on OpenClaw's GitHub
- AWS launched managed OpenClaw on Lightsail amid all this security attention
- OpenClaw has had a rough few weeks security-wise, but patches are shipping fast
- Our version (2026.3.13) postdates all disclosed patches

## Assessment
**Risk Level: LOW** — All known CVEs are patched in our current version. No action needed.

## Recommendations
- Keep auto-update checks running nightly
- Monitor for new advisories — the volume of disclosures is high right now
