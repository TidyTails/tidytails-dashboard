# Overnight Security Report — 2026-03-08 (3:00 AM)

## Update Status
- **Previous version:** 2026.3.2
- **New version:** 2026.3.7 ✅ (patch update installed)
- **Config backup:** openclaw.json.bak created before update
- **Gateway restart:** NOT performed (will happen via next cron or manual restart)

## Release Notes Summary (2026.3.x series)
- PDF tool with native Anthropic/Google support
- Sessions attachment support (base64/utf8)
- Telegram streaming defaults changed to `partial`
- Config validation CLI (`openclaw config validate`)
- Memory search Ollama embeddings support
- Zalo plugin rebuilt to native JS integration
- Plugin SDK expansions (STT, hooks, session lifecycle)
- **No breaking changes affecting our setup**

## CVE / Vulnerability Scan
| CVE | Description | Status |
|-----|-------------|--------|
| CVE-2026-25253 | Auth token theft via WebSocket (RCE chain) | ✅ Patched in v2026.1.29 — we're safe |
| ClawJacked (log poisoning) | Prompt injection via log files | ✅ Patched in v2026.2.13 — we're safe |
| Agentic browser vulns (PleaseFix/PerplexedBrowser) | Hijack AI agents via browser | ℹ️ Affects Perplexity Comet, not OpenClaw directly |

## AI Agent Security News (This Week)
- **Lakera AI research** on memory injection attacks in production agentic systems
- **MIT study** found majority of agentic AI systems lack documented shutdown procedures
- **Zenity Labs** disclosed browser-based agent hijacking vulnerabilities
- No new OpenClaw-specific CVEs this week

## Risk Assessment
**LOW** — All known CVEs patched. Patch update applied cleanly. No breaking changes.

## Action Items
- [ ] Gateway restart needed to fully activate 2026.3.7 (next cron or manual)
- No urgent items for morning briefing
