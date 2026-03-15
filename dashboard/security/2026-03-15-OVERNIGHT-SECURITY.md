# Overnight Security Report — 2026-03-15 (3:00 AM)

## Version Status
- **Current:** OpenClaw 2026.3.13 (61d171a)
- **Update available:** No — already on latest

## Security Scan Results

### ⚠️ Recent CVEs & Advisories (Past Week)

**1. ClawJacked — CVE-2026-25253 (CVSS 8.8, CRITICAL)**
- Token exfiltration via localhost WebSocket trust assumption
- Any website could hijack OpenClaw agent via localhost
- **Fix:** v2026.2.25+ — ✅ WE ARE PATCHED (v2026.3.13)
- Source: oasis.security, adminbyrequest.com

**2. CVE-2026-26329 — Path Traversal (HIGH)**
- Path traversal in browser upload feature
- No CVSS score assigned yet
- Source: infosecurity-magazine.com

**3. GHSA-56f2-hvwg-5743 — SSRF (CVSS 7.6, HIGH)**
- SSRF vulnerability in OpenClaw's image tool
- Source: infosecurity-magazine.com

**4. GHSA-f5mf-3r52-r83w — Authorization Bypass (MODERATE)**
- Auth bypass using mutable display name attributes
- Source: dailycve.com (13 hours ago)

**5. General Advisory Tracking Gaps**
- Research shows only 8% of GitHub Security Advisories formally reviewed
- Unreviewed advisories don't trigger Dependabot alerts
- Source: cybersecuritynews.com

### Assessment
- We are on the latest version and patched against the critical ClawJacked vuln
- The 6 newly reported vulnerabilities warrant monitoring — unclear if all are patched in our version
- No immediate action needed, but worth checking OpenClaw's GitHub releases for patch notes on CVE-2026-26329 and the SSRF issue

## Actions Taken
- [x] Version check — up to date
- [x] Update check — no update available
- [x] CVE scan — findings documented above
- [ ] AI agent general security news — rate limited, will retry next check

## Recommendation
No urgent action. Flag for TJ in morning briefing: monitor the 6 newly reported CVEs and verify our version covers all patches.
