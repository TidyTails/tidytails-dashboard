# Overnight Security Report — 2026-03-07 (3:00 AM CT)

## Version Status
- **Current version:** 2026.3.2
- **Update available:** No
- **Action taken:** None needed

## CVE Scan (Past Week)

### CVE-2026-29610 — PATH Command Hijacking (Published 2026-03-05)
- **Severity:** HIGH (CVSS 7.8)
- **Affected versions:** < 2026.2.14
- **Our status:** ✅ PATCHED (v2026.3.2)
- **Summary:** Attackers with local access could place malicious binaries in PATH to override allowlisted commands. Requires authenticated access to node-host execution or attacker-controlled directories.

### ClawJacked — WebSocket Hijack (CVE-2026-25593 + 6 related CVEs)
- **Severity:** HIGH (multiple CVEs, moderate to high)
- **Affected versions:** < 2026.2.25
- **Our status:** ✅ PATCHED (v2026.3.2)
- **Summary:** Malicious websites could hijack local OpenClaw agents via localhost WebSocket connection. Included path traversal in browser upload (CVE-2026-26329), SSRF in image tool (CVSS 7.6), and auth token theft (CVE-2026-25253).

### Additional CVEs Mentioned
- CVE-2026-24763, CVE-2026-25157, CVE-2026-25475, CVE-2026-26319, CVE-2026-26322
- All patched in versions we've already passed.

## AI Agent Security News
- Rate limited on second search. Will retry in next scan cycle.

## Assessment
**All clear.** We're on the latest version and all known CVEs are patched. No action required. The recent cluster of CVEs (Feb/early March) shows OpenClaw is getting serious security researcher attention — worth keeping a close eye on future disclosures.

## Recommendations
- Continue nightly version checks
- Consider enabling OpenClaw's security hardening options (run healthcheck skill)
- Monitor for any new CVEs in the next scan
