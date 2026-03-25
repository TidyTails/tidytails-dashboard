# 🔍 Tidy Tails Website Conversion Audit
### March 25, 2026 — Franklin's 5 AM Deep Dive

---

## Executive Summary

**The site copy and design are solid. The conversion infrastructure is broken.**

TidyTailsSTL.com does a great job of selling the service — the copy is relatable, pricing is clear, CTAs are visible. But there is **zero tracking** installed. That means:
- You have no idea how many people visit your site
- You can't tell which marketing channels are working
- You can't retarget visitors who didn't convert
- You can't measure conversion rate (form fills vs. visitors)

**Every marketing action we've prepped (directory submissions, Nextdoor posts, competitor campaigns) will generate traffic you can't see.** This is like running a store without a cash register — customers are walking in, but you don't know how many or why.

---

## 🟢 What's Working Well (Kudos)

| Element | Grade | Notes |
|---------|-------|-------|
| **Headline & Value Prop** | A | "St. Louis's Trusted Pet Waste Removal Service" — clear, local, trustworthy |
| **"Sound Familiar?" Section** | A+ | Relatable pain points. This is great copywriting. |
| **Pricing Transparency** | A | All 4 tiers visible. "Most Popular" tag on weekly. Smart. |
| **3-Step Process** | A | Simple, reassuring. Removes friction. |
| **"Meet Jamie" Section** | A | Personal, authentic. This sells trust. |
| **FAQ Section** | A | Covers the exact questions prospects ask. Has FAQ schema markup. |
| **Location Pages** | B+ | 15 city pages with neighborhood-level detail. Great for local SEO. |
| **Blog Content** | A | 8+ articles, well-written, SEO-targeted topics. |
| **SEO Meta Tags** | A | Title, description, canonical, OG tags all present and well-written. |
| **Schema Markup** | A | LocalBusiness + Service + FAQPage structured data. Google loves this. |
| **Spring Calculator** | A | Fun, interactive lead magnet. Smart engagement tool. |
| **Contact Form** | B+ | Clean, simple, right fields. Good CTA button text. |
| **Phone/Text CTAs** | A | Multiple touchpoints. Phone number in header, hero, footer. |

**Bottom line: The above-the-fold experience and overall site quality is better than every competitor we crawled.** The content isn't the problem.

---

## 🔴 Critical Issues (Fix This Week)

### 1. NO GOOGLE ANALYTICS — Priority: 🚨 CRITICAL
**Impact: You're flying completely blind.**

There is no Google Analytics, no Google Tag Manager, no tracking of any kind on the site. This means:
- Zero visibility into traffic volume
- No way to know which pages get visited
- No conversion tracking on form submissions
- Can't tell if directory submissions, Nextdoor posts, or any marketing is driving traffic
- Can't optimize anything because there's nothing to measure

**Fix (15 minutes, $0):**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Sign in with the business Google account
3. Create a new GA4 property for tidytailsstl.com
4. Copy the tracking code (looks like `<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX">`)
5. Paste it in the `<head>` of every page on the site

**If the site is on a platform (Squarespace, Wix, etc.):** There's usually a "tracking code" or "analytics" field in settings.

**If it's custom HTML:** Add the script tag to the head of `index.html` and all other pages.

**Why this matters RIGHT NOW:** We have a 7-Day Customer Blitz Sprint planned. If you execute it without analytics, you'll have no idea what's working. Install GA4 BEFORE posting on Nextdoor, directories, etc.

---

### 2. NO FACEBOOK PIXEL — Priority: 🚨 HIGH
**Impact: Can't retarget visitors or measure any Facebook/Instagram ad performance.**

If you ever run Facebook ads (even boosted posts), you need the pixel installed to:
- Track who visits your site from Facebook
- Build retargeting audiences (people who visited but didn't fill out the form)
- Measure cost per lead from social

**Fix (10 minutes, $0):**
1. Go to [business.facebook.com](https://business.facebook.com) → Events Manager
2. Create a new pixel
3. Copy the base code
4. Add it to the `<head>` of every page
5. Set up a "Lead" event when the form is submitted

---

### 3. NO OG:IMAGE / TWITTER:IMAGE — Priority: ⚠️ HIGH
**Impact: When anyone shares your site on social media, there's NO preview image.**

The site has `og:title` and `og:description` but is **missing `og:image`**. This means:
- Facebook/Nextdoor shares show a blank gray box instead of a branded preview
- Twitter/X shares have no image
- LinkedIn shares look unfinished
- Every time someone shares your link, it looks unprofessional

**This directly hurts the Nextdoor/Facebook posting campaigns we've prepared.**

**Fix (5 minutes, $0):**
1. Create a branded image (1200x630px recommended) — could be your logo on the green background, or a yard photo with logo overlay
2. Upload it to your site (e.g., `/images/og-share.jpg`)
3. Add to the `<head>`:
```html
<meta property="og:image" content="https://tidytailsstl.com/images/og-share.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:image" content="https://tidytailsstl.com/images/og-share.jpg">
```

**I can generate this image for you if you want.**

---

### 4. FORM SUBMITS TO FORMSUBMIT.CO — Priority: ⚠️ MEDIUM
**Impact: Form works, but no conversion tracking and you're dependent on a free third-party service.**

The form action is `https://formsubmit.co/jamie@tidytailsstl.com`. This means:
- Leads go straight to email (good for simplicity)
- But there's no thank-you page redirect = can't track conversions in GA
- No backup/log of submissions (if email goes to spam, lead is lost)
- FormSubmit is free tier — limited features

**Fix options:**
- **Quick (5 min):** Add a FormSubmit `_next` parameter to redirect to a thank-you page. Then track that page in GA as a conversion.
- **Better (30 min):** Switch to Google Forms, Typeform, or a simple backend that logs submissions AND emails them.
- **Best (1 hour):** Set up a proper CRM integration (even a Google Sheet via Zapier).

---

## 🟡 Improvement Opportunities (Nice to Have)

### 5. No Reviews/Testimonials Section
**The site has zero social proof from actual customers.**

Jamie's personal bio is great, but there are no customer quotes, star ratings, or review counts. Even 2-3 short testimonials would significantly boost trust.

**Fix:** Add a "What Our Customers Say" section between the pricing and FAQ sections. Even informal quotes work: *"Jamie is always on time and my yard has never looked better." — Sarah, Chesterfield*

---

### 6. No Google Reviews Widget or Link
**Related to #5** — there's no link to Google reviews on the site. Once you have Google reviews (part of the Blitz Sprint), embed them or link to them prominently.

---

### 7. Location Pages Missing Form Embed
The Ferguson page (and likely others) have phone/text CTAs but no contact form. A visitor has to scroll back to the homepage to fill out the form. Each location page should either embed the form or have a prominent link to it.

---

### 8. No "Text Us" CTA on Homepage
The Ferguson location page has a "💬 Text Us" SMS link — smart! But the homepage doesn't. Many people prefer texting over calling. Add an SMS CTA to the hero section:
```html
<a href="sms:3148507140?body=Hi! I'm interested in pet waste removal.">💬 Text Us</a>
```

---

### 9. Blog Posts Need Internal CTAs
The blog content is well-written but could push harder toward conversion. Each post should end with:
- A clear CTA ("Ready to stop scooping? Get your free quote →")
- A link back to the contact form
- Maybe a pricing reminder

---

### 10. No Sitemap.xml Submitted
Check if `tidytailsstl.com/sitemap.xml` exists. If not, create one and submit it to Google Search Console. This helps Google find and index all your location pages and blog posts faster.

---

## 📋 Priority Action List

| Priority | Task | Time | Cost | Impact |
|----------|------|------|------|--------|
| 🚨 1 | Install Google Analytics (GA4) | 15 min | $0 | Can finally measure everything |
| 🚨 2 | Add OG:image for social sharing | 5 min | $0 | Every shared link looks professional |
| 🚨 3 | Install Facebook Pixel | 10 min | $0 | Retargeting + ad measurement ready |
| ⚠️ 4 | Add thank-you page for form tracking | 15 min | $0 | Track actual conversion rate |
| ⚠️ 5 | Add 2-3 customer testimonials | 20 min | $0 | Social proof = more trust = more leads |
| ⚠️ 6 | Add "Text Us" to homepage hero | 5 min | $0 | Catches text-preferred prospects |
| 🟢 7 | Add forms to location pages | 30 min | $0 | Fewer drop-offs on location pages |
| 🟢 8 | Add CTAs to blog posts | 20 min | $0 | Blog readers → leads |
| 🟢 9 | Create/submit sitemap.xml | 10 min | $0 | Faster indexing of all pages |

**Total time: ~2.5 hours | Total cost: $0**

---

## The Bottom Line

**Your website is a B+ in content and an F in measurement.** The copy sells. The design works. But without analytics, you're making every marketing decision in the dark.

Install GA4 before ANYTHING else this week. Before Nextdoor posts. Before directory submissions. Before the Blitz Sprint. Because all of that work generates traffic you can't see without it.

Once GA4 is in, you'll know within 2 weeks:
- How many people visit your site per day
- Where they come from (Google, Nextdoor, Facebook, direct)
- Which pages they look at
- Whether they fill out the form
- Your conversion rate

That data turns guessing into strategy.

---

*Audit by Franklin | March 25, 2026, 5:04 AM*
