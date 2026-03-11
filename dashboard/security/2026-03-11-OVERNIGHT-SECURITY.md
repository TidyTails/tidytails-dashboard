# Overnight Security Report — 2026-03-11 (3:00 AM CT)

## Version Status
- **Current version:** OpenClaw 2026.3.8 (3caab92)
- **Update available:** No — already on latest

## CVE Scan (Past Week)

### All Patched ✅ — Our version (2026.3.8) is not affected.

| CVE | Description | Fixed In | Status |
|-----|-------------|----------|--------|
| **ClawJacked** (Oasis Security) | WebSocket hijack via localhost — any website could take over agent | v2026.2.25+ | ✅ Patched |
| CVE-2026-28468 | Sandbox browser bridge accepts requests without gateway auth | v2026.2.14 | ✅ Patched |
| CVE-2026-28453 | TAR archive path traversal — files written outside intended dir | v2026.2.14 | ✅ Patched |
| CVE-2026-28479 | SHA-1 used for sandbox cache keys (collision risk) | v2026.2.15 | ✅ Patched |

### Notable: ClawJacked (2 days ago)
Oasis Security published a detailed write-up on "ClawJacked" — a vulnerability where any website could hijack OpenClaw via localhost WebSocket. Full agent takeover was possible. Fix landed in v2026.2.25. We've been patched since upgrading past that version.

### Advisory Tracking Gap
CybersecurityNews reported that only ~8% of GitHub Security Advisories get formally reviewed, meaning Dependabot may miss some. A dedicated OpenClaw advisory tracker now exists cross-referencing GHSA and CVE databases hourly.

## AI Agent Security News
- Rate limited on second search. Will catch up in next scan.

## Action Items
- None. All clear. No update needed, no unpatched vulnerabilities.
