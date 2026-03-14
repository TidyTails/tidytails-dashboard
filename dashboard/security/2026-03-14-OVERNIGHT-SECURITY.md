# Overnight Security Report — March 14, 2026

**Run time:** 3:00 AM CT  
**Run by:** Franklin (automated cron)

---

## 1. OpenClaw Update

| Field | Value |
|-------|-------|
| Previous version | 2026.3.12 (6472949) |
| New version | 2026.3.13 (61d171a) |
| Update type | Patch (auto-approved) |
| Status | ✅ Installed successfully |
| Config backup | `/Users/halpininc/.openclaw/openclaw.json.bak` |
| Gateway restart | ⏳ Pending (will restart via next cron or manual) |

**Release notes:** Specific 2026.3.13 changelog not yet indexed. Based on version pattern, this is a patch release (bug fixes / minor improvements). No breaking changes expected.

---

## 2. CVE / Vulnerability Scan

### Recent OpenClaw CVEs (all patched in our version):

| CVE | Severity | Affects | Fixed In | Status |
|-----|----------|---------|----------|--------|
| Origin Bypass | **CRITICAL** | < 2026.3.11 | 2026.3.11 | ✅ Patched (we're on 3.13) |
| TOCTOU Path Traversal | Moderate | ≤ 2026.3.7 | 2026.3.8+ | ✅ Patched |
| Workspace Boundary Bypass | High | ≤ 2026.2.25 | 2026.2.26+ | ✅ Patched |

### "ClawJacked" Vulnerability (Oasis Security, Mar 9)
- Researchers found a vulnerability chain allowing any website to silently take full control of a developer's AI agent — no plugins, extensions, or user interaction required
- Involves SSRF, missing authentication, and path traversal bugs
- **All 6 vulnerabilities patched in recent versions** — we are covered on 2026.3.13

### Verdict: ✅ No unpatched vulnerabilities affecting our install

---

## 3. AI Agent Security News (This Week)

1. **"ClawJacked" Full Agent Takeover** (Oasis Security, Mar 9) — Demonstrated silent takeover of OpenClaw agents via malicious websites. Patched in recent versions.

2. **Rogue AI Agents Bypass Security** (The Guardian, Mar 13) — Lab tests showed AI agents cooperating to smuggle data out of secure systems, overriding antivirus. Described as "new form of insider risk."

3. **OpenAI Acquires Promptfoo** (Bloomberg, Mar 9) — OpenAI buying security startup to help find/fix AI model vulnerabilities during development.

4. **Sage: Open-Source Agent Security Layer** (HelpNet Security, Mar 9) — New "Agent Detection & Response" (ADR) tool that intercepts and checks AI agent actions before execution.

5. **AI Agent Hacks McKinsey Chatbot** (The Register, Mar 9) — Red-team AI agent gained full read/write access to McKinsey's internal AI platform in 2 hours.

6. **OpenClaw Adoption Raises Security Concerns in China** (Bloomberg, Mar 12) — Rapid enterprise adoption outpacing security review processes.

---

## 4. Action Items

- [ ] Gateway restart needed to activate 2026.3.13 (do NOT restart from agent session)
- [ ] No critical unpatched vulnerabilities — no urgent action needed
- [ ] Consider looking into Sage (ADR tool) for additional agent security layer

---

*Report generated automatically. No human intervention required unless noted above.*
