# Overnight Security Report — March 10, 2026 (3:00 AM)

## Version Check
- **Current version:** OpenClaw 2026.3.8 (3caab92)
- **Update available:** No
- **Action taken:** None needed

## CVE Scan Results

All recent CVEs affect versions **prior to 2026.2.15** — we are **PATCHED** on 2026.3.8.

### CVE-2026-28468 (Browser Bridge Auth Bypass)
- **Affected:** < 2026.2.14
- **Risk:** Local attackers could access browser control endpoints without auth
- **Status:** ✅ Patched (we're on 2026.3.8)

### CVE-2026-28453 (TAR Path Traversal)
- **Affected:** < 2026.2.14
- **Risk:** Malicious TAR archives could write files outside intended directory
- **Status:** ✅ Patched

### CVE-2026-28479 (SHA-1 Sandbox Cache)
- **Affected:** < 2026.2.15
- **Risk:** Deprecated SHA-1 hashing for sandbox IDs vulnerable to collision attacks
- **Status:** ✅ Patched

### ClawJacked (Oasis Security Research)
- **Published:** ~March 3, 2026
- **Risk:** Websites could hijack OpenClaw via localhost WebSocket
- **Fix:** v2026.2.25+
- **Status:** ✅ Patched

### 40,000+ Exposed Instances (Infosecurity Magazine)
- **Published:** ~March 6, 2026
- **Summary:** SecurityScorecard found 40K+ exposed OpenClaw instances, 549 correlated with breach activity
- **Our exposure:** Low risk — running on local Mac mini, not publicly exposed

## AI Agent Security News
- Rate limited on second search. Will retry in morning briefing if needed.

## Summary
🟢 **All clear.** No update needed, all known CVEs patched. No action required.
