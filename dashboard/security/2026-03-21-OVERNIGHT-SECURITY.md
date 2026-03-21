# Overnight Security Report — 2026-03-21

## Version Check
- **Current:** OpenClaw 2026.3.13 (61d171a)
- **Update Available:** No — already on latest
- **Action:** None needed

## CVE Scan Results

### CVEs Found (all patched in our version)

| CVE | Severity | Affects | Fixed In | Description |
|-----|----------|---------|----------|-------------|
| CVE-2026-25253 | **CRITICAL** | < unknown | ~2026.2.x | RCE via malicious URL — one-click auth token exfiltration |
| CVE-2026-31996 | HIGH | < 2026.2.19 | 2026.2.19 | Input validation bypass in tools.exec.safeBins allowing unintended filesystem ops |
| CVE-2026-32016 | HIGH | < 2026.2.22 (macOS) | 2026.2.22 | Path validation bypass in exec-approval allowlist via basename-only entries |
| CVE-2026-32013 | HIGH | < 2026.2.25 | 2026.2.25 | Symlink traversal in agents.files.get/set allowing unauthorized file read/write |

### Status: ✅ ALL PATCHED
Our version (2026.3.13) is well ahead of all fix versions. No action required.

### Notable Context
- AWS launched Managed OpenClaw on Lightsail, which surfaced renewed attention to CVE-2026-25253
- RedPacket Security published CVE alerts for three OpenClaw vulns on March 20 (yesterday)
- No active exploitation reported for any of these CVEs

## AI Agent Security News
- Rate limited on second search query. Will retry in next scan cycle.

## Summary
🟢 **All clear.** No update needed. All known CVEs patched. No action items for TJ.
