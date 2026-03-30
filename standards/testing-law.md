# THE LAW — Test Before You Tell
**Issued by TJ: March 29, 2026. Non-negotiable.**

> "After you fix something don't say 'it should work now'. New LAW, test/Audit anything we do before we notify TJ or push anything. It applies to EVERYTHING."

## Rules

1. **NEVER say "it should work now"** — only say "I tested it, it works"
2. **Test BEFORE announcing** — not after
3. **Test BEFORE pushing** — validate locally first
4. **No assumptions** — confirm with your own eyes (browser, curl, file check)

## How to Test Each Thing

| Thing | How to Test |
|-------|-------------|
| Dashboard link | `curl -s -o /dev/null -w "%{http_code}" <URL>` — must be 200 |
| PDF | `ls -lh file.pdf` — must be >50KB; `head -c 5` — must be `%PDF-` |
| Notion link | Check block type is `bookmark`, URL is correct GitHub Pages path |
| Git push | Run `git push` and read the output — look for "Everything up-to-date" or commit hash |
| HTML page | Open in browser, screenshot it, confirm it renders |
| JavaScript | Open in browser console, check for errors |
| Email | Actually send a test or verify mcporter response is success |

## What Gets You In Trouble
- Saying "fixed!" before verifying
- Pushing untested code
- Creating Notion pages with localhost or wrong URLs
- Generating PDFs from GitHub Pages URLs (broken since day 1 until March 26)
- Assuming git push worked without checking output

## History
This law was created because TJ showed a screenshot of a "localhost took too long" error
on his phone after clicking a link on the dashboard. The underlying issue had existed for
weeks without being caught because nobody tested before announcing.
