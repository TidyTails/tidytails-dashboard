# 🔒 Overnight Security Report — April 4, 2026

**Generated:** 3:00 AM CDT (automated cron)  
**Scan completed:** 2026-04-04 ~08:07 UTC

---

## ✅ Version Status

| Item | Value |
|------|-------|
| Current version | **2026.4.2** |
| Update available | **No** — fully up to date |
| Node.js version | v25.5.0 |

No update was needed. Skipped update step.

---

## 🚨 CRITICAL FINDINGS — ACTION REQUIRED

### CVE-2026-33579 — Privilege Escalation (HIGH: 8.1–9.8 CVSS)

**Status: PATCHED in 2026.3.28 — our version (2026.4.2) is safe ✅**

- **What it does:** Any device with the lowest-level pairing permission could silently escalate to full admin access — no user interaction required
- **Impact if exploited:** Full instance takeover. Read all connected data, exfiltrate credentials, execute arbitrary tool calls, pivot to Telegram/Discord/Slack/files
- **Patched:** 2026-03-29 (OpenClaw 2026.3.28)
- **CVE listed:** 2026-03-31 (2-day gap = attackers had head start)
- **Discovered by:** AntAISecurityLab
- **Source:** [Blink](https://blink.new/blog/cve-2026-33579-openclaw-privilege-escalation-2026) | [Ars Technica](https://arstechnica.com/security/2026/04/heres-why-its-prudent-for-openclaw-users-to-assume-compromise/)

### CVE-2026-32922 — Critical Privilege Escalation (CRITICAL: 9.9 CVSS)

**Status: PATCHED in 2026.3.11 — our version (2026.4.2) is safe ✅**

- **What it does:** Different privilege escalation vector, patched earlier
- **Patched:** OpenClaw 2026.3.11 (before 33579)
- **Source:** [ARMO Security](https://www.armosec.io/blog/cve-2026-32922-openclaw-privilege-escalation-cloud-security/)

### ClawJacked — Localhost WebSocket Hijack

**Status: Patched in v2026.2.25+ — our version (2026.4.2) is safe ✅**

- **What it does:** Any website could hijack OpenClaw via localhost WebSocket
- **Discovered by:** Oasis Security
- **Source:** [Oasis Blog](https://www.oasis.security/blog/openclaw-vulnerability)

### Node.js CVE-2025-59466 + CVE-2026-21636

**Status: Node v25.5.0 — needs verification against patched version ⚠️**

- OpenClaw GitHub security page recommends Node.js v22.12.0 or later for patches to async_hooks DoS and permission model bypass
- We're on v25.5.0 — likely covered since it's a later major version, but recommend confirming Node.js 25.x changelog
- Note: The GitHub advisory referenced v22.12.0+ which is a minimum floor, not a maximum

---

## ✅ Authentication Configuration

Gateway auth is **CONFIGURED with token** — we are NOT in the 63% of unauthenticated instances mentioned in the Ars Technica article. Good.

```
auth.mode: token
auth.token: SET (redacted)
gateway.port: 18789
```

---

## ⚠️ Industry Context (Ars Technica — 11 hours ago)

The security community is raising serious concern about AI agents with broad access:

- 63% of 135,000 internet-exposed OpenClaw instances are running **without authentication**
- Meta banned OpenClaw from work laptops — executive said it "could lead to breaches"
- Security researchers broadly warning about LLM agents with autonomous access
- The 2-day gap between patch and CVE listing gave attackers a head start

**Our risk posture:** Lower than average — we have auth enabled, and we're on the latest version. But the broader concern about agent scope/permissions is worth keeping in mind.

---

## 📋 Summary: Action Items for TJ

| Priority | Item | Status |
|----------|------|--------|
| ✅ None urgent | OpenClaw version current | 2026.4.2 — no update needed |
| ✅ Done | CVE-2026-33579 patch | Covered by 2026.3.28+ |
| ✅ Done | CVE-2026-32922 patch | Covered by 2026.3.11+ |
| ✅ Done | Authentication enabled | Token auth configured |
| ⚠️ Low | Node.js CVE verification | On v25.5.0 — likely covered, worth double-checking |

**No immediate action required.** System is patched and protected. Mention the ⚠️ Node.js item to TJ as a low-priority note.

---

*Report saved to: dashboard/security/2026-04-04-OVERNIGHT-SECURITY.md*
