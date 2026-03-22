# Overnight Security Report — 2026-03-22 (3:00 AM CT)

## Version Check
- **Current:** OpenClaw 2026.3.13 (61d171a)
- **Update Available:** None — already on latest

## CVE Scan Results

### CVE-2026-25253 — RCE via Malicious URL (CRITICAL)
- **Affects:** Versions prior to fix (disclosed late Jan 2026)
- **Impact:** Remote attacker could fully compromise machine via crafted webpage that exfiltrates auth tokens
- **Status:** ✅ PATCHED — our version (2026.3.13) is well past the fix
- **Sources:** proarch.com, InfoQ

### CVE-2026-32049 — Media Byte Limit Bypass
- **Affects:** Versions prior to 2026.2.22
- **Impact:** Inbound media byte limits not enforced before buffering, possible resource exhaustion
- **Status:** ✅ PATCHED — we're on 2026.3.13

### CVE-2026-31998 — Authorization Bypass (Synology Chat Plugin)
- **Affects:** Versions prior to 2026.2.23
- **Impact:** dmPolicy allowlist with empty allowedUserIds fails open (allows all DMs)
- **Status:** ✅ PATCHED — not using Synology Chat plugin, but patched anyway

### CVE-2026-32016 — Exec Allowlist Path Bypass (macOS)
- **Affects:** Versions prior to 2026.2.22 on macOS
- **Impact:** Local attackers could bypass exec-approval allowlist via basename-only entries
- **Status:** ✅ PATCHED — we're on 2026.3.13

## AI Agent Security News
- Rate limited on second search. Will check in next scan.

## Summary
- **No update needed** — already on latest (2026.3.13)
- **All known CVEs patched** — 4 CVEs found, all fixed in versions we're past
- **No action required**
- **Threat level:** LOW ✅
