# Overnight Security Report — April 2, 2026 (3:00 AM CT)

**Agent:** Franklin  
**Run time:** 2026-04-02 03:00 AM America/Chicago  
**Status:** ✅ All clear — update applied, known CVEs patched

---

## 1. Version Update

| | Version |
|---|---|
| **Before** | 2026.3.31 |
| **After** | 2026.4.1 |
| **Config backup** | `/Users/halpininc/.openclaw/openclaw.json.bak` ✅ |
| **Update type** | Minor (patch) — auto-update approved |

### What changed in 2026.4.1:
- **Plugins/ClawHub:** Fixed plugin API compatibility against active runtime version; resolves stale 1.2.0 constant preventing installs
- **Plugins/uninstall:** Accept `clawhub:` specs and versionless package names as uninstall targets
- **Channels/plugins:** Keep bundled channel plugins loadable from legacy `channels.<id>` config under restrictive allowlists; `openclaw doctor` no longer gives misleading guidance
- **Plugins/bundled runtimes:** ⚠️ Critical fix — restores externalized bundled plugin runtime deps that were broken by the 2026.3.31 externalization change. Bundled plugins keep their declared runtime deps after install.
- **Memory/QMD:** Multiple fixes for MCP query collection filters, cross-process locking, and CJK BM25 query handling

**No breaking changes detected.**

⚠️ **Gateway restart required** — update is installed but gateway is still running the old version. Restart needed for changes to take effect. Franklin will NOT restart from this session — restart is scheduled via next cron task.

---

## 2. CVE / Vulnerability Report

### CVE-2026-32920 — Arbitrary Code Execution via Auto-Discovery of Workspace Plugins
- **Severity:** HIGH (CVSS 8.4)
- **Affected:** OpenClaw < 2026.3.12
- **Issue:** OpenClaw auto-discovered and loaded plugins from `.OpenClaw/extensions/` without trust verification. Attackers could embed malicious plugins in cloned repos.
- **Our version:** 2026.4.1 ✅ **PATCHED** (fixed in 2026.3.12)
- **No exploitation known**

### CVE-2026-32982 — Telegram Bot Token Exposure in Error Logs
- **Severity:** HIGH (CVSS 7.5)
- **Affected:** OpenClaw < 2026.3.13
- **Issue:** `fetchRemoteMedia` function exposed Telegram bot tokens in error messages when media downloads failed. Tokens leaked to logs and error surfaces.
- **Our version:** 2026.4.1 ✅ **PATCHED** (fixed in 2026.3.13)
- **No exploitation known**

### ClawJacked (CVE-2026-25253) — Cross-Site WebSocket Hijacking
- **Severity:** HIGH (CVSS 8.8) — disclosed January 2026
- **Affected:** Unspecified older versions
- **Issue:** Any website could steal auth tokens and run arbitrary code via localhost WebSocket hijacking
- **Our version:** 2026.4.1 ✅ **PATCHED** (fixed in v2026.2.25+)
- **No exploitation known**

**Summary: All known CVEs are patched. No action required beyond gateway restart.**

---

## 3. AI Agent Security News (Past Week)

- **Adversa AI** won "Most Innovative Agentic AI Security" at RSA Conference 2026 — agentic AI security is now a formal discipline
- **Exabeam** expanded Agent Behavior Analytics to detect AI agent misuse across ChatGPT, Copilot, and Gemini — enterprise monitoring for AI agent activity is becoming standard
- General trend: prompt injection, tool misuse, and cross-agent privilege escalation are top concerns heading into mid-2026

---

## 4. Action Items

| Priority | Action | Owner |
|---|---|---|
| 🔴 HIGH | **Restart gateway** to activate 2026.4.1 | Franklin (via cron) |
| ✅ DONE | Update OpenClaw 2026.3.31 → 2026.4.1 | Franklin |
| ✅ DONE | Back up openclaw.json | Franklin |
| ✅ DONE | CVE review — all patched | Franklin |

---

*Generated automatically by Franklin at 3:00 AM CT*
