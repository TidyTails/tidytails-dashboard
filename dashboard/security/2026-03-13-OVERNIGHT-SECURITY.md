# Overnight Security Report — 2026-03-13 (3:00 AM)

## Update Summary
- **Previous version:** OpenClaw 2026.3.11
- **Updated to:** OpenClaw 2026.3.12
- **Update type:** Patch (auto-updated)
- **Config backup:** `/Users/halpininc/.openclaw/openclaw.json.bak`
- **Gateway restart:** NOT performed (will restart via next cron or manual action)

## 2026.3.12 Release Highlights
### Security Fixes
- **GHSA-99qw-6mr3-36qr**: Disabled implicit workspace plugin auto-load — cloned repos can no longer execute plugin code without explicit trust
- **Device pairing**: Switched `/pair` and QR setup codes to short-lived bootstrap tokens (no more shared gateway credentials in pairing payloads)

### Notable Features
- Dashboard v2 refresh (modular views, command palette, mobile tabs)
- GPT-5.4 and Anthropic fast mode toggles
- Ollama/vLLM/SGLang moved to provider-plugin architecture
- Kubernetes install docs added
- `sessions_yield` for sub-agent orchestrators
- Slack Block Kit support

### Bug Fixes
- Cron duplicate message replay fix
- Telegram model picker persistence fix
- TUI duplicate assistant reply fix
- Kimi Coding tool format fixes

## CVE/Vulnerability Scan (Past Week)
| CVE | Severity | Affected | Status |
|-----|----------|----------|--------|
| CVE-2026-26329 | High | Path traversal in browser upload | Fixed in versions > 2026.3.7 ✅ |
| TOCTOU Path Traversal | Moderate | <= 2026.3.7 | Fixed ✅ |
| Mutable Script Drift (TOCTOU) | Critical | <= 2026.3.7 | Fixed ✅ |
| Workspace Boundary Bypass | High | <= 2026.2.25 | Fixed ✅ |
| SSRF in image tool (GHSA-56f2-hvwg-5743) | High (CVSS 7.6) | Older versions | Fixed ✅ |
| "ClawJacked" agent takeover (Oasis Security) | Critical | Older versions | Addressed in recent releases ✅ |

## Assessment
- **All known CVEs are patched** in our current version (2026.3.12)
- **No critical vulnerabilities** affecting our version found
- The 2026.3.12 security fixes (plugin auto-load, pairing tokens) add defense-in-depth
- **No action needed from TJ** — routine patch update

## AI Agent Security News
- Rate limited on broader AI agent security news search — will retry in next check cycle
