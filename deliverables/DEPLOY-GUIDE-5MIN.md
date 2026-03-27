# 🚀 Deploy Missing Pages to Cloudflare — 5 Minutes

## ⚠️ CRITICAL: 4 Pages Are BUILT But NOT LIVE

These pages exist in the repo but return the homepage on tidytailsstl.com:

| Page | URL (BROKEN) | What It Does |
|------|-------------|--------------|
| **Paw-ty** | tidytailsstl.com/pawty | Saturday event sign-up + QR landing |
| **Spring** | tidytailsstl.com/spring | Spring deep clean promo |
| **Calculator** | tidytailsstl.com/calculator | Poop calculator (lead gen) |
| **Commercial** | tidytailsstl.com/commercial | Commercial services page |

## 🔧 How to Fix (Pick One)

### Option A: Cloudflare Pages Dashboard (Easiest)
1. Go to **dash.cloudflare.com** → Pages → your Tidy Tails project
2. Check what repo/branch it deploys from
3. Upload the missing HTML files (they're in `tidy-tails/website/`)
4. Redeploy

### Option B: Push to the Cloudflare Source Repo
If the site deploys from a separate GitHub repo (not tidytails-dashboard):
1. Clone that repo
2. Copy `pawty.html`, `spring.html`, `calculator.html`, `commercial.html` into it
3. `git add . && git commit -m "Add missing pages" && git push`
4. Cloudflare auto-deploys

### Option C: Wrangler CLI
```bash
npx wrangler pages deploy tidy-tails/website/ --project-name=<your-project>
```

## 🐾 SATURDAY WORKAROUND

**The QR flyers now point to the GitHub Pages backup:**
`tidytails.github.io/tidytails-dashboard/tidy-tails/website/pawty.html`

This URL works RIGHT NOW. Print the flyers — the QR codes will work even without Cloudflare deploy.

**Shorter share link for texting:**
`tidytails.github.io/tidytails-dashboard/dashboard/pawty.html`

## Files Ready to Deploy
All in `tidy-tails/website/`:
- `pawty.html` — Event landing page with sign-up form
- `spring.html` — Spring promo page
- `calculator.html` — Poop calculator
- `commercial.html` — Commercial services
- `free-cleanup.html` — Free cleanup offer
- `refer.html` — Referral page
- `review.html` — Review page
