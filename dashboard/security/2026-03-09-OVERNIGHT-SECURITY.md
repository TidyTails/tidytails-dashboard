# Overnight Security Report — 2026-03-09 (3:00 AM)

## Update Status
- **Previous version:** 2026.3.7
- **New version:** 2026.3.8 (3caab92)
- **Update type:** Patch (auto-updated)
- **Config backup:** openclaw.json.bak created
- **Gateway restart:** NOT performed (will happen via next cron or manual restart)

## 2026.3.8 Release Highlights
- `openclaw backup create` and `openclaw backup verify` for local state archives
- macOS onboarding: remote gateway token field for remote mode
- Talk mode: configurable `talk.silenceTimeoutMs`
- TUI: auto-infer active agent from workspace
- Brave web search: opt-in `tools.web.search.brave.mode: "llm-context"`
- ACP provenance metadata and receipt injection
- **Fix:** macOS launchd restart re-enables disabled LaunchAgent before bootstrap
- **Fix:** macOS chat UI improvements (browser proxy routing, paste semantics, cron tab tolerance)
- **No breaking changes detected**

## CVE / Vulnerability Scan
### Known OpenClaw CVEs (all patched in our version):
- **ClawJacked (CVE-2026-25593 + related):** WebSocket hijack via localhost — patched in v2026.2.25+. We're on 2026.3.8. ✅
- **CVE-2026-28458:** Browser Relay CDP WebSocket no-auth — affects < 2026.2.1. ✅ Patched.
- **CVE-2026-26329:** Path traversal in browser upload (high severity) — patched. ✅
- **GHSA-56f2-hvwg-5743:** SSRF in image tool (CVSS 7.6) — patched. ✅
- **CVE-2026-25253:** Auth token theft — patched. ✅

### Assessment
No new unpatched vulnerabilities found. All known CVEs are addressed in our current version. The "ClawJacked" series from February was significant but fully mitigated since 2026.2.25.

### AI Agent Security News
- Rate limited on second search. Will check in next cycle.

## Action Items
- ⚠️ **Gateway restart needed** to activate 2026.3.8. Will happen on next cron cycle or manual restart.
- No critical vulnerabilities requiring immediate attention.
