# 🔍 Tidy Tails Website Conversion Audit
## tidytailsstl.com — March 12, 2026

**Auditor:** Franklin (Autonomous Task)
**Purpose:** Identify why the website isn't generating leads and provide actionable fixes
**Bottom Line:** The site copy is excellent. The technical foundation is solid. But the site is **completely invisible to search engines** and missing critical conversion elements that turn visitors into customers.

---

## 🚨 CRITICAL: Site Not Indexed in Search Engines

**This is the single biggest problem.** Searching for "tidytailsstl.com", "Tidy Tails pet waste St Louis", "pooper scooper Ferguson MO", or any variation returns **ZERO results** for TJ's site.

### What This Means
- All the blog posts, city pages, and SEO work is doing NOTHING right now
- The site only gets traffic from people who already know the exact URL
- Every marketing dollar spent driving people to "search for us" is wasted
- Competitors (Doggie Doodies, Poop 2 Scoop, Little Stinkers of MO) own all the organic traffic

### Why It's Happening (Likely Causes)
1. **No Google Search Console setup** — Google doesn't know the site exists
2. **Site is only ~1 week old** (sitemap shows lastmod March 6, 2026)
3. **No backlinks** — no external sites link to tidytailsstl.com
4. **No Google Business Profile linked** — GBP is the #1 local search signal

### Fix It (TJ's Action Items — Do This FIRST)
1. **Set up Google Search Console** (10 minutes)
   - Go to https://search.google.com/search-console
   - Add property: tidytailsstl.com
   - Verify via DNS (add TXT record in Cloudflare)
   - Submit sitemap: https://tidytailsstl.com/sitemap.xml
   - Request indexing for homepage and all city pages

2. **Set up Google Business Profile** (if not already done)
   - Go to https://business.google.com
   - Claim/create "Tidy Tails" listing
   - Set service area (all 11 cities)
   - Link to tidytailsstl.com
   - Add photos (see Photo section below)

3. **Install Google Analytics 4** (5 minutes)
   - Create GA4 property at analytics.google.com
   - Add the gtag.js snippet to `<head>` of every page
   - Without this, TJ is flying completely blind on traffic

**Expected Impact:** Within 2-4 weeks of Search Console setup, pages should start appearing in Google. With GBP, local pack results could show within days.

---

## 🔴 HIGH PRIORITY Issues

### 1. No Photos — Trust Killer
**Current state:** The entire site uses only `logo.jpg`. No photos of TJ. No before/after yard shots. No action photos. No dog photos.

**Why this matters:** People hire LOCAL SERVICE providers based on trust. Photos of the actual person showing up at their house are the #1 trust signal. Without them, TJ looks like a faceless franchise — the opposite of his brand.

**Fix:**
- [ ] **TJ headshot** — casual, smiling, with a dog if possible. This goes in the "Meet TJ" section
- [ ] **Before/after photos** — take 3-4 pairs at next service visits (phone is fine)
- [ ] **Action shot** — TJ doing the work (shows professionalism)
- [ ] **Happy dog photo** — shows TJ is dog-friendly
- [ ] **Truck/equipment photo** — shows legitimacy

**Timeline:** Take photos this week. Add to site this weekend. This alone could double conversion rate.

### 2. No Reviews/Testimonials
**Current state:** Zero customer reviews on the website. The blog has one generic fake quote ("That's the most common thing we hear from new customers").

**Why this matters:** 93% of consumers read reviews before hiring a local service. Without them, the site has zero social proof.

**Fix:**
- [ ] Add a testimonials section to homepage with real customer quotes
- [ ] Ask current 4-5 customers for a 1-2 sentence review (text them directly)
- [ ] Add Google review link/widget once GBP is set up
- [ ] Add star ratings to structured data

### 3. No Facebook Pixel
**Current state:** No tracking pixel installed.

**Why this matters:** Every visitor to the site disappears forever. With a pixel, TJ could retarget them with Facebook/Instagram ads for pennies.

**Fix:**
- [ ] Create Facebook Pixel in Meta Business Suite
- [ ] Add pixel code to `<head>` of all pages
- [ ] Set up retargeting audience: "People who visited in last 30 days"
- [ ] Run $2/day retargeting ad: "Still thinking about a cleaner yard?"

### 4. Brand Confusion — Multiple "Tidy Tails" Companies
**Found in search results:**
- Tidy Tails Waste Solutions (Atlanta, GA) — tidytailswastesolutions.com
- Tidy Tails (Charleston, SC) — tidytailschs.com
- Tidy Tails Pet Care — tidytailspetcare.com
- Tidy Tails (Valrico, FL) — teen-owned, getting press coverage
- Tidiest Tails — tidiesttails.com

**Why this matters:** When someone searches "Tidy Tails pet waste removal," they might find the Atlanta or Charleston company instead. The Atlanta one has 5-star Google and TrustPilot reviews, getting press coverage.

**Fix:**
- [ ] Always brand as "Tidy Tails STL" in all marketing (the domain helps)
- [ ] Focus on "St. Louis" in all titles and headlines
- [ ] Build local backlinks (see below) to establish geographic authority
- [ ] Consider adding "STL" to GBP name if allowed by Google guidelines

### 5. No Urgency or Scarcity
**Current state:** No seasonal promotions, limited spots messaging, or time-sensitive offers on the site.

**Fix:**
- [ ] Add a banner: "🌸 Spring Special: Free First Cleanup with Weekly Service — Limited to 10 New Customers"
- [ ] Add "Only accepting X new customers this month" (creates urgency)
- [ ] Seasonal CTAs that change quarterly

---

## 🟡 MEDIUM PRIORITY Issues

### 6. FormSubmit.co — No Tracking, No Auto-Reply
The contact form uses free FormSubmit.co. Problems:
- No auto-reply to the customer (they don't know if it worked)
- No lead tracking or CRM integration
- No notification if TJ misses the email

**Fix Options:**
- **Quick:** Add FormSubmit's `_autoresponse` parameter for auto-reply
- **Better:** Switch to Google Forms (free, tracks submissions)
- **Best:** Use a CRM like HubSpot Free (tracks leads, sends auto-replies, follows up)

### 7. Missing FAQ Schema Markup
The homepage has great FAQ content but it's not marked up with FAQSchema. This means Google can't show it as rich snippets in search results.

**Fix:** Add `FAQPage` structured data to the homepage (I can generate this code).

### 8. Empty Social Media Links
The schema.org `sameAs` array is empty `[]`. No Facebook, Instagram, or social links anywhere.

**Fix:**
- [ ] Create/link Tidy Tails STL Facebook page
- [ ] Create/link Instagram account
- [ ] Add social links to website footer and schema

### 9. No Social Proof Numbers
Missing impact stats like "500+ yards cleaned" or "50+ happy customers served."

**Fix:** Add a stats bar: yards cleaned, dogs served, 5-star rating, years in business.

### 10. Blog Section Underutilized
The homepage blog section just shows titles with no previews, no images, no engagement hooks.

**Fix:** Show blog post previews with thumbnails and first paragraph excerpts.

---

## ✅ What's Working Well

Credit where it's due — these are genuinely good:

1. **Copy is excellent** — conversational, authentic TJ voice, addresses real pain points
2. **Pricing is clear** — no hidden fees, easy to understand tiers
3. **City pages exist** — proper local SEO structure with neighborhoods, zip codes
4. **Schema markup is solid** — LocalBusiness + Service structured data
5. **Mobile-responsive** — site works on phones
6. **Fast loading** — static HTML on Cloudflare, sub-200ms response times
7. **Blog content is quality** — the "Is a Pooper Scooper Service Worth It?" post is genuinely persuasive
8. **Contact form exists** — multiple CTAs (call, text, form)
9. **robots.txt and sitemap** — both properly configured
10. **SSL/HTTPS** — secure connection

---

## 📋 Priority Action List (Ordered by Impact)

| # | Action | Time | Impact | Cost |
|---|--------|------|--------|------|
| 1 | Set up Google Search Console + submit sitemap | 10 min | 🔴 CRITICAL | Free |
| 2 | Set up/verify Google Business Profile | 15 min | 🔴 CRITICAL | Free |
| 3 | Install Google Analytics 4 | 5 min | 🔴 HIGH | Free |
| 4 | Take & add photos (TJ, yards, dogs) | 30 min | 🔴 HIGH | Free |
| 5 | Get 3-5 customer reviews (text them) | 10 min | 🔴 HIGH | Free |
| 6 | Add spring promo banner | 5 min | 🟡 MEDIUM | Free |
| 7 | Install Facebook Pixel | 5 min | 🟡 MEDIUM | Free |
| 8 | Add FAQ schema markup | 5 min | 🟡 MEDIUM | Free |
| 9 | Set up form auto-reply | 5 min | 🟡 MEDIUM | Free |
| 10 | Add social media links | 10 min | 🟢 LOW | Free |

**Total time to fix everything: ~2 hours**
**Total cost: $0**
**Expected impact: 5-10x more organic visibility within 30 days**

---

## 🏆 Competitor Comparison

| Feature | Tidy Tails | Doggie Doodies | POOP 911 | Little Stinkers |
|---------|-----------|----------------|----------|-----------------|
| Google indexed | ❌ NO | ✅ Yes | ✅ Yes | ✅ Yes |
| Google reviews | ❓ Unknown | ✅ Yes | ✅ Yes | ✅ Yes |
| Photos on site | ❌ Logo only | ✅ Yes | ✅ Yes | ✅ Yes |
| Facebook Pixel | ❌ No | ❓ Unknown | ✅ Yes | ❓ Unknown |
| Analytics | ❌ No | ✅ Likely | ✅ Yes | ❓ Unknown |
| Blog content | ✅ Quality | ❌ Poor | ✅ Yes | ❌ None |
| Site speed | ✅ Fast | ⚠️ Slow | ✅ OK | ✅ OK |
| Pricing clarity | ✅ Excellent | ⚠️ Confusing | ❌ Hidden | ✅ Good |
| Mobile | ✅ Good | ⚠️ OK | ✅ Good | ✅ Good |

**TJ's site is better built than most competitors. The ONLY thing holding it back is visibility — and that's 100% fixable.**

---

## 💡 Quick Win: FAQ Schema Code

Add this to the homepage `<head>` section:

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Do I need to be home for the service?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Nope! Most of our customers aren't home. Just make sure we can access your yard (leave gate unlocked or provide a code), and we'll take care of the rest. We'll text you when the job is complete."
            }
        },
        {
            "@type": "Question",
            "name": "What do you do with the waste?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We bag it and take it with us. You'll never have to deal with it — that's the whole point!"
            }
        },
        {
            "@type": "Question",
            "name": "Is there a contract?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Never. You can start, stop, or change your service anytime with no penalties or cancellation fees. We earn your business every visit."
            }
        },
        {
            "@type": "Question",
            "name": "Do you work in winter?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! We scoop year-round in St. Louis. Snow, rain, or shine — your dogs don't stop, and neither do we."
            }
        },
        {
            "@type": "Question",
            "name": "What if my dog is in the yard?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No problem! I'm great with dogs and they usually love the visit. Just let me know if there's anything I should know about your pup."
            }
        },
        {
            "@type": "Question",
            "name": "How do I pay?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We invoice monthly via email. Easy online payment — no hassle, no checks to write."
            }
        }
    ]
}
</script>
```

---

*Generated by Franklin | March 12, 2026 | Autonomous Task*
*This audit should be shared with TJ as a priority action item.*
