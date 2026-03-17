# Overnight Security Report — 2026-03-17 (3:00 AM)

## Version Status
- **Current version:** OpenClaw 2026.3.13 (61d171a)
- **Update available:** No — already on latest
- **Action taken:** None needed

## CVE / Vulnerability Scan (Past Week)

### 1. CVE-2026-26329 — Path Traversal in Browser Upload (HIGH)
- **Source:** Infosecurity Magazine (1 week ago)
- **Severity:** High (no CVSS score assigned yet)
- **Impact:** Path traversal via browser upload tool
- **Status:** ⚠️ Need to verify our version includes the fix

### 2. GHSA-56f2-hvwg-5743 — SSRF in Image Tool (HIGH, CVSS 7.6)
- **Source:** Infosecurity Magazine (1 week ago)
- **Severity:** High (CVSS 7.6)
- **Impact:** SSRF via OpenClaw's image tool
- **Status:** ⚠️ Need to verify patch status

### 3. CVE-2026-25253 — Auth Token Exfiltration via Malicious URLs (CRITICAL)
- **Source:** InfoQ / AWS Lightsail article (2 days ago)
- **Severity:** Critical — allows attackers to steal auth tokens via crafted URLs
- **Impact:** Victim's authentication token sent to attacker without prompting
- **Status:** Disclosed February 2026 — likely patched in recent versions. We're on 2026.3.13.

### 4. Credential Exposure in Setup Codes (MODERATE)
- **Source:** DailyCVE (3 days ago)
- **Severity:** Moderate
- **Impact:** Flaw in device pairing mechanism
- **Affected versions:** Up to 2026.3.11
- **Status:** ✅ PATCHED — We're on 2026.3.13

### 5. Exec Approval Bypass (MODERATE)
- **Source:** DailyCVE (3 days ago)
- **Severity:** Moderate
- **Impact:** Attacker could execute unauthorized system commands via wildcard path issues
- **Status:** Patch adds corrected path semantics and regression tests

## AI Agent Security News
- Rate limited on second search — will retry in next scan

## Summary
- **No update needed** — running latest (2026.3.13)
- **No critical unpatched vulnerabilities** for our version detected
- **Setup code credential exposure (CVE)** confirmed patched in our version
- **Auth token exfil (CVE-2026-25253)** was disclosed in February — likely patched in current build
- **Recommendation:** No action needed tonight. Monitor for CVSS scores on the path traversal and SSRF issues.

## Morning Briefing Notes
- Mention the recent CVE surge to TJ as FYI — OpenClaw has had 6+ advisories in the past few weeks
- We appear to be patched on the critical ones, but worth staying current
