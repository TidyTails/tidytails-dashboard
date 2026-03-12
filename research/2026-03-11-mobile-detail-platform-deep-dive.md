# 🔍 RICO Deep Dive: Mobile Detailing Platform + AV Play

**Prepared:** March 11, 2026  
**For:** TJ & Adonis  
**Subject:** Feasibility analysis of a mobile detailing marketplace with autonomous vehicle servicing pivot

---

## 1. Market Size & Validation

### Total Addressable Market (TAM)

| Metric | Value | Source | Confidence |
|--------|-------|--------|------------|
| US Car Wash & Auto Detailing (total) | ~$14.6–20B annually | IBISWorld 2024; various market reports | HIGH |
| Global Mobile Car Wash Service Market | $6.96B (2024), projected $12.96B by 2030 | Grand View Research | HIGH |
| Global Car Detailing Services Market | $41.4B (2024), projected $58B by 2030 | Grand View Research | HIGH |
| US Mobile Detailing (subset) | ~$3–5B estimated | Derived from global figures (US ~40-50% of market) | MEDIUM |

**Growth Rate:** Mobile car wash/detailing is growing at **8.8–11.2% CAGR** depending on the source, significantly outpacing the broader car wash market (~5% CAGR). The mobile/on-demand segment is the fastest-growing sub-category.

*Source: Grand View Research, Mordor Intelligence, Persistence Market Research*

### Serviceable Addressable Market (SAM)
- **Mobile detailing specifically** (not car washes, not fixed-location): ~$3–5B in the US
- Platform-addressable portion (independent operators open to marketplace model): ~$1.5–2.5B
- **Confidence: MEDIUM** — market sizing for "mobile detailing only" is imprecise because many reports lump it with car washes

### Serviceable Obtainable Market (SOM)
- Realistic Year 1–3 capture in a single metro: $2–5M revenue
- With 5–10 metros: $10–50M GMV (platform gross merchandise value)
- At 20% take rate: $2–10M platform revenue
- **Confidence: MEDIUM**

### The "15,000+ Independent Contractors" Claim

**Verdict: UNDERSTATED, not overstated.**

- IBISWorld reports **~57,900 car wash and detailing businesses** in the US (2024), up ~2% YoY
- The "hand wash and detailing" segment accounts for approximately **20% of industry revenue**, suggesting **10,000–15,000+ businesses** focused primarily on detailing
- However, this massively undercounts sole proprietors and side-hustle detailers who don't register as formal businesses
- The true number of individuals doing mobile detailing (including part-time, unlicensed, cash-based) is likely **50,000–100,000+**
- On Thumbtack alone, there are thousands of detailing pros listed
- **Confidence: HIGH** that 15,000 is conservative for *active* independent detailers; the real number is much higher

### Average Revenue Per Mobile Detailer

| Type | Annual Revenue | Source | Confidence |
|------|---------------|--------|------------|
| Solo operator (part-time) | $30,000–60,000 | Industry blogs, ZipRecruiter | MEDIUM |
| Solo operator (full-time) | $60,000–180,000 | MobileTechRX, Detail King | MEDIUM |
| Average across all establishments | ~$250,000 | IBISWorld (includes multi-employee shops) | HIGH |
| Top performers | $200,000–500,000+ | Industry case studies | MEDIUM |

Average ticket: **$120–200** for a standard mobile detail; **$250–500+** for full/paint correction details.
Average jobs per day for a solo operator: 2–4
Gross margin per job: **50–70%** (supplies cost ~$15–20/car)

*Source: MobileTechRX, Detail King, HouseCallPro, ZipRecruiter*

### Industry Breakdown: Independent vs. Franchise vs. Employed

| Category | Estimated % | Notes |
|----------|------------|-------|
| Independent owner-operators | 70–80% | The vast majority; very fragmented |
| Franchise operations | 5–10% | DetailXPerts, NXT LVL Detail, etc. |
| Employed by larger companies | 10–20% | Spiffy W-2s, dealership detail teams |

**The industry is EXTREMELY fragmented.** Even the largest chains hold single-digit market share. IBISWorld confirms this. No single player dominates.

**Confidence: HIGH**

---

## 2. Competitor Landscape

### 🔴 The Graveyard (Dead/Pivoted)

#### Cherry (2012) — DEAD
- **What:** YC-backed "Uber for car washes" in San Francisco
- **Funding:** Raised capital (exact amount unclear, small seed)
- **What happened:** Shut down December 2012 after ~1 year. Pivoted team to a new venture.
- **Why it died:** Couldn't make unit economics work. Low margins, tough competition ("compete with every 13-year-old kid who wants to buy a PlayStation"). Too small a TAM in a single city at $29/wash.
- **Key lesson:** Car washing (not detailing) is commoditized and low-margin. They charged too little.

*Source: TechCrunch, Hacker News*

#### Luxe (Valet + Car Services) — DEAD
- **What:** On-demand parking + car services (wash, fuel, etc.) in SF
- **Funding:** Raised ~$75M total
- **What happened:** Shut down ~2018. Tried to be too many things. Valet economics didn't work.
- **Key lesson:** Don't bundle too many services. Focus matters.

*Source: Wikipedia, Crunchbase*

#### Washos — EFFECTIVELY DEAD / ABSORBED
- **What:** On-demand mobile car wash/detailing app in LA/OC, later expanded to Miami/Fort Lauderdale
- **Funding:** Raised funding over 1 round from 5 investors (exact amount not disclosed publicly, likely <$5M)
- **What happened:** Founder Bertrand Patriarca left Washos and became CEO of Washé in November 2021, essentially merging his expertise into the competitor. Washos website appears inactive or redirecting.
- **Why it died/faded:** Scaling challenges in a competitive LA market. Couldn't differentiate from the dozens of mobile detailers already advertising on Yelp/Google.
- **Key lesson:** The founder's move to Washé suggests he saw marketplace model (Washé) as more viable than managing his own fleet.

*Source: Tracxn, PR Newswire, Crunchbase*

### 🟡 Still Alive But Small/Niche

#### Washé — ALIVE (Small)
- **Status:** Active, marketplace model connecting car owners with mobile detailers
- **Funding:** $4.1M raised over 2 rounds (seed stage)
- **HQ:** New York
- **Model:** Pure marketplace — connects customers with independent detailers. Washé takes a cut.
- **Geography:** Limited markets
- **CEO:** Bertrand Patriarca (former Washos founder, joined 2021)
- **Strengths:** Marketplace model (asset-light), experienced leadership
- **Weaknesses:** Small scale, limited brand recognition, hasn't broken out
- **Key insight:** THIS IS THE CLOSEST COMP to what TJ is proposing. Still tiny. Still hasn't cracked it.

*Source: Tracxn, Crunchbase, PR Newswire*

#### MobileWash — ALIVE (Small)
- **Status:** Active, app available on iOS/Android
- **Model:** Marketplace connecting customers with mobile washers/detailers in LA area
- **Funding:** Limited (appears bootstrapped or lightly funded)
- **Geography:** Primarily Southern California
- **Strengths:** Clean app, decent reviews
- **Weaknesses:** Very limited geography, doesn't appear to be growing aggressively
- **Key insight:** Exists as proof of concept but hasn't scaled

*Source: App stores, ZoomInfo, Crunchbase*

#### Matic — STATUS UNCLEAR
- Could not find significant evidence of a car detailing startup called "Matic" that's active in this space. May be defunct or may be confused with another company. If TJ has a specific URL, worth investigating.
- **Confidence: LOW**

### 🟢 Alive & Significant

#### Spiffy — ALIVE & GROWING (THE BIG ONE)
- **Status:** Active, largest player in on-demand car care
- **Funding:** **$90–126M raised** over 8–13 rounds (depending on source; includes Series C of $30M in Feb 2023)
- **Revenue:** Hit **$50M in revenue** (2023), reportedly **$87.7M in 2024** per Latka
- **HQ:** Durham, NC (Triangle area)
- **Fleet:** 280+ company-owned vans, 4M+ completed services
- **Employees:** All W-2 employees (150+ technicians initially, now likely 500+)
- **Model:** **NOT a marketplace.** Spiffy is a vertically integrated operator. They own the vans, employ the technicians, control quality. Think "Uber Black with employees" not "Uber marketplace."
- **Markets:** 20+ cities
- **Key customers:** Car dealerships (reconditioning), fleet managers (rental companies, corporate fleets), enterprise accounts
- **Recent pivot:** Evolving into "Digital Servicing" platform for dealerships — selling software + mobile service operating system to dealers
- **Strengths:** Deep pockets, proven unit economics, enterprise focus, W-2 quality control, 4M+ services track record
- **Weaknesses:** Capital-intensive model, not a marketplace (different thesis than TJ's), focused on B2B/fleet not consumer
- **Key insight:** Spiffy deliberately chose NOT to be a marketplace. They tried it early and realized quality control required owning the labor force. They've now pivoted heavily toward B2B dealership software. **This is the biggest signal in the space.**

*Source: Tracxn, CB Insights, PitchBook, BusinessWire, GetLatka, Spiffy website*

### 🔵 General Marketplaces with Detailing Presence

#### Thumbtack
- **Detailing presence:** YES, significant. Car detailing is a listed category.
- **Model:** Lead-gen — pros pay $15–28 per lead (not per conversion). Effectively ~15–20% take rate.
- **Strengths:** Massive user base, brand recognition, existing trust
- **Weaknesses:** Not specialized; detailers compete on price; generic experience
- **Threat level for TJ: MEDIUM-HIGH** — customers already go here

#### Angi (formerly Angie's List / HomeAdvisor)
- **Detailing presence:** YES, but secondary category. More focused on home services.
- **Model:** Lead-gen + subscription
- **Threat level: MEDIUM** — not their focus but customers do find detailers here

#### TaskRabbit
- **Detailing presence:** MINIMAL. More focused on handyman/moving/general tasks.
- **Threat level: LOW**

#### Yelp / Google Business
- Not platforms per se, but the **actual incumbent** for how most people find mobile detailers today. Google search + Yelp reviews is the dominant discovery mechanism.
- **Threat level: VERY HIGH** — this is the real competition

### VC-Backed Startups in Adjacent Spaces

| Company | Focus | Funding | Status |
|---------|-------|---------|--------|
| **Spiffy** | On-demand car care (operator model) | $90–126M | Active, pivoting to SaaS |
| **Washé** | Mobile detailing marketplace | $4.1M | Active, small |
| **Cherry** | On-demand car wash | ~$3M (est.) | Dead (2012) |
| **Luxe** | Valet + car services | ~$75M | Dead (~2018) |
| **Washos** | On-demand detailing | <$5M (est.) | Dead/absorbed |

**Notable absence:** No YC or major VC-backed startup has successfully built a pure marketplace for mobile detailing and scaled it nationally. This is either an opportunity or a warning sign.

---

## 3. Platform Economics

### Take Rate Benchmarks

| Platform | Take Rate | Model |
|----------|-----------|-------|
| Uber (rideshare) | 25–30% | Commission on each ride |
| DoorDash | 15–30% | Tiered commission |
| TaskRabbit | 15% | Commission on payment |
| Thumbtack | ~15–20% effective | Per-lead fee |
| Airbnb | ~14–16% total (split host/guest) | Service fees |
| Handy (home services) | ~20–25% | Commission |
| **Realistic for detailing marketplace** | **15–20%** | Commission |

A 20% take rate on mobile detailing is achievable but pushes it — detailers already have thin margins after supplies, gas, and time. Going above 20% risks losing supply to Yelp/word-of-mouth.

### Unit Economics Model

**Assumptions for a single transaction:**

| Item | Value |
|------|-------|
| Average ticket (mobile detail) | $150 |
| Platform take rate | 20% |
| Platform revenue per job | $30 |
| Detailer payout | $120 |
| Detailer COGS (supplies, gas) | $25–35 |
| Detailer net per job | $85–95 |
| Detailer hourly equivalent (2-hr job) | $42–47/hr |

**Customer Acquisition Cost (CAC):**
- For home services marketplaces: typically **$30–80** per new customer
- For detailing specifically: $25–50 via Google/Facebook ads (competitive but not insane)
- Organic/referral can bring this down significantly
- **Confidence: MEDIUM**

**Detailer Acquisition Cost:**
- Much cheaper — detailers are hungry for leads
- Estimated $10–30 per onboarded detailer via Instagram/Facebook groups, detailing forums
- The supply side is easier than demand side in this market
- **Confidence: MEDIUM**

**Repeat Rate / Customer Lifetime:**
- Average consumer gets their car detailed **2–4x per year**
- Subscription models (e.g., monthly) can push this to 12x/year for basic washes
- Premium detailing (paint correction, ceramic coating) is typically annual
- LTV at $150/detail, 3x/year, 3-year retention, 20% take = **$270 platform LTV**
- With $50 CAC, **LTV:CAC ratio = 5.4x** — that's solid if achievable
- **Confidence: MEDIUM** — retention is the big unknown

### Can the Unit Economics Work?

**Short answer: Yes, but barely at small scale.**

The challenge isn't unit economics per se — it's **volume**. At $30 revenue per transaction and $50 CAC, you need customers to rebook at least twice just to break even on acquisition. The business only works with strong retention and high density in each market.

**Comparison:** DoorDash loses money on most individual orders but makes it up on volume and frequency. Detailing has MUCH lower frequency than food delivery (3x/year vs. 3x/week), which fundamentally changes the math.

---

## 4. The AV Bridge

### Current State of AV Fleets (March 2026)

| Company | Fleet Size | Status | Markets |
|---------|-----------|--------|---------|
| **Waymo** | ~2,500 vehicles (up from ~1,500 in 2024) | LEADING. 400K+ rides/week, targeting 1M/week by EOY 2026 | Phoenix, SF, LA, Austin, Atlanta; expanding to Miami, DC, San Diego, Las Vegas |
| **Zoox (Amazon)** | ~100–200 test vehicles | Planning paid launch in Las Vegas and SF in 2026. Partnered with Uber. | SF, Las Vegas, expanding to Dallas, Phoenix |
| **Tesla** | ~240–500 vehicles (disputed) | Launched Austin robotaxi June 2025. 19% availability rate. Struggling. | Austin, SF Bay Area |
| **Cruise (GM)** | 0 (robotaxi fleet) | **SHUT DOWN December 2024.** GM exited robotaxi entirely. | N/A |
| **Motional (Hyundai/Aptiv)** | Small test fleet | Restructuring after layoffs | Las Vegas, limited |

**Total AV fleet today: ~3,000–3,500 vehicles nationally**

*Source: Waymo blog, Electrek, CNBC, Reuters, The Verge*

### Who Services AV Fleets Currently?

This is a KEY finding:

- **Waymo** partners with **Avis Budget Group** for fleet maintenance (including cleaning). They also have their own depot teams that hand-wash vehicles.
- AVs **cannot go through traditional car washes** — the brushes can damage sensors worth $100K+, soap residue can blind cameras/LiDAR
- All AV cleaning is currently done **by hand at dedicated depots**
- Waymo charges riders cleaning fees for messes (vomit, trash, smoking odors)
- Cleaning is **more frequent and more critical** for AVs because:
  - Interior cleanliness matters (no driver to monitor)
  - Sensor cleanliness is **mission-critical** (dirty sensors = car can't drive)
  - Cameras record everything — quality is visible

**Key quote from CNN:** *"Soap residue or water spots could effectively 'blind' an autonomous car. A traditional car wash's heavy brushes could jar the vehicle's sensors, disrupting their calibration and accuracy."*

*Source: CNN, Automotive Fleet, Waymo blog, Slate, Reddit r/waymo*

### Is There a Gap?

**YES — but it's nuanced:**

1. **The gap is REAL:** AVs need specialized cleaning (sensor-safe products, hand-wash only, interior sanitization between rides). This is currently done in-house or through legacy fleet management partners (Avis). No specialized AV cleaning company exists at scale.

2. **But the gap is SMALL today:** ~3,000 vehicles nationally. Even at 1 detail/day, that's $450K/day in revenue ($150/clean) = **~$164M/year total addressable AV cleaning market today.** That's tiny.

3. **The gap will grow:** If Waymo hits 3,500+ vehicles by EOY 2026, and Zoox/Tesla add another 1,000–2,000, the fleet could be 5,000–10,000 by 2027–2028. At 50,000+ by 2030 (optimistic), the market becomes meaningful.

### Timeline: When Does AV Fleet Market Get Big Enough?

| Year | Estimated US AV Fleet | Estimated Annual Cleaning Revenue |
|------|----------------------|----------------------------------|
| 2026 | ~3,500–5,000 | $50–100M |
| 2027 | ~7,000–15,000 | $100–250M |
| 2028 | ~15,000–30,000 | $250–500M |
| 2030 | ~50,000–100,000 (optimistic) | $500M–1.5B |

**Confidence: LOW** — AV timelines have historically been wildly optimistic. Cruise's shutdown is a reminder.

### Does Mobile Detailing → AV Servicing Make Strategic Sense?

**The Argument FOR:**
- Building a network of trained, vetted mobile detailers creates a **ready workforce** that can be upskilled for AV-specific cleaning
- Geographic density in key AV markets (SF, LA, Phoenix, Austin) is where mobile detailing demand already exists
- Platform/scheduling software transfers directly
- Trust/reputation with fleet managers is transferable
- You'd be the only player with both consumer demand AND fleet capability

**The Argument AGAINST:**
- AV companies will likely build their own depot infrastructure (Waymo already has)
- AV cleaning is fundamentally different from consumer detailing (sensor protocols, depot-based, not mobile)
- The skills don't overlap as much as they seem (a great paint corrector isn't automatically good at LiDAR sensor cleaning)
- AV companies may prefer vertically integrated solutions (like Spiffy's model) over a marketplace of independent contractors
- The timeline to AV fleet maturity is uncertain and could be 5–10+ years away

**Verdict on AV bridge: PLAUSIBLE BUT SPECULATIVE (Confidence: LOW-MEDIUM)**

The mobile detailing platform should be able to stand on its own. If it can't, the AV pivot doesn't save it.

---

## 5. Moats & Risks

### Potential Moats

| Moat Type | Strength | Notes |
|-----------|----------|-------|
| **Network effects** | WEAK-MEDIUM | More detailers → better coverage → more customers → more detailers. But network effects in local services are weak because supply is local, not global. |
| **Supply lock-in** | WEAK | Detailers have zero switching costs. They'll use your platform AND Thumbtack AND Yelp AND word-of-mouth simultaneously. |
| **Data/matching** | MEDIUM | Over time, better matching (right detailer for right job type, predictive scheduling) could create value. But this takes millions of transactions. |
| **Brand/trust** | MEDIUM | A trusted brand for detailing could matter, but takes years and $$$ to build. |
| **Geographic density** | MEDIUM | First-mover advantage in specific metros could create local network effects. |

### Why Hasn't Someone Already Won This?

This is the **most important question.** Several well-funded attempts have been made (Cherry, Luxe, Washos, and indirectly Spiffy). None has become the "Uber of detailing." Why?

1. **Low frequency kills marketplace dynamics.** Food delivery works at 3x/week. Rideshare works at 5x/week. Detailing is 3x/YEAR. You can't build a habit loop at that frequency. Customer acquisition cost never gets amortized fast enough.

2. **Local services are brutally hard to scale.** You can't use a SF detailer's reviews to get customers in Miami. You have to rebuild supply AND demand in every single market.

3. **Google/Yelp is "good enough."** When someone wants a mobile detailer, they Google "mobile detailing near me" and call someone. The friction of this process isn't high enough to justify downloading a new app.

4. **Supply doesn't need the platform.** Good detailers are already booked solid through word-of-mouth. The ones who need marketplace leads tend to be newer/lower quality — adverse selection problem.

5. **Trust is personal.** People find a detailer they trust and stick with them. The relationship becomes person-to-person, not platform-to-person. Marketplace gets disintermediated.

### Biggest Risks / Reasons This Could Fail

1. **Disintermediation** — Customers and detailers connect on your platform, then go direct. Classic marketplace leakage problem.
2. **Quality control at scale** — Without W-2 employees (Spiffy's approach), you can't control quality. One bad detailer damages your brand.
3. **CAC > LTV** — If customer acquisition costs can't be brought below ~$30 and repeat rates stay at 2–3x/year, the math doesn't work.
4. **Existing platform competition** — Thumbtack, Yelp, Google already serve this function adequately.
5. **Chicken-and-egg** — Need detailers to attract customers, need customers to attract detailers. Standard cold-start problem.
6. **Regulatory/insurance complexity** — Mobile detailers need commercial insurance, may need permits for water runoff in certain jurisdictions.
7. **Seasonality** — Demand is highly seasonal (peak in spring/summer, drops in winter in many markets).

### Steelman: The Strongest Case FOR

> "The mobile detailing industry is a $3–5B market growing at 10%+ annually with NO dominant digital platform. Sixty thousand businesses, mostly mom-and-pop, with zero technology sophistication. The closest parallel is what Uber did to black cars or what DoorDash did to restaurants — take a fragmented, analog industry and make it bookable, trackable, and trustworthy through a single app. The fact that Cherry and Washos failed in 2012–2017 doesn't mean the market isn't ready NOW — smartphones are more ubiquitous, consumers expect on-demand everything, and the gig economy infrastructure (payments, background checks, insurance) is commoditized. Start in one city, nail the playbook, then replicate. The AV angle is a cherry on top — position yourself as the cleaning partner of choice before Waymo even needs to look outside their depots. The team that builds this now will have the data, the network, and the trust when AV fleets scale to 100K+ vehicles."

### Steelman: The Strongest Case AGAINST

> "Every 3–5 years, someone raises VC money for 'Uber for car detailing.' Cherry tried it in 2012 and died. Washos tried it in 2016–2017 and faded. Spiffy — the most successful company in the space, with $126M raised — deliberately chose NOT to be a marketplace because they realized quality control required owning the labor. The fundamental problem hasn't changed: detailing is low-frequency, high-variance in quality, and easily disintermediated. Customers don't need another app for something they do 3 times a year — they need a good detailer's phone number. Thumbtack and Yelp already solve discovery well enough. The AV angle is a pipe dream — Waymo operates 2,500 cars and already has Avis cleaning them. You're building a business predicated on a market that might not exist for 5–10 years, if ever. Meanwhile, you'll burn cash trying to solve a problem that Google Maps already solved: finding a local service provider."

---

## 6. Comparable Playbooks

### How Uber Started (Relevant Parallels)
- **2010:** Started as black car service ("UberCab") in SF only. Premium positioning, not commodity.
- **2011:** Rebranded to Uber. Still only luxury black cars.
- **2013:** Launched UberX — opened platform to anyone with a car. This was the breakthrough.
- **Key insight:** Started premium (high-margin, low-volume) to prove the model, then went mass-market.
- **Lesson for TJ:** Consider starting with premium detailing (higher tickets, better margins) rather than basic washes. Cherry died trying to compete on $29 washes.

### How DoorDash Won
- **2013:** Stanford students built Palo Alto Delivery. Started by serving restaurants that DIDN'T have their own delivery.
- **Key insight:** DoorDash went to the suburbs — markets underserved by Grubhub/Seamless (which focused on dense cities). They served restaurants that nobody else bothered with.
- **Lesson for TJ:** Don't launch in SF/LA where Spiffy and every competitor already is. Launch in mid-tier markets (think Charlotte, Nashville, Columbus) where there's demand but no platform. Be the first platform in markets nobody else is serving.

### How Thumbtack/Angi Approached Fragmented Services
- Both took a horizontal approach — serve EVERY home service category, not just one
- This gives them enough volume across categories to justify customer acquisition
- Neither has "won" detailing specifically — it's a small category within their platform
- **Lesson for TJ:** A vertical play (detailing only) means you need MUCH higher engagement per customer. Consider whether adjacent services (window tinting, PPF, ceramic coating, interior repair) should be on the platform from day 1.

### What TJ Can Learn

1. **Start premium, not commodity.** Cherry died at $29. Uber started at 1.5x taxi rates. Higher tickets = better unit economics = easier path to profitability.
2. **Pick underserved markets.** Don't fight Spiffy in Raleigh or compete with 10,000 detailers in LA. Find cities where demand exists but discovery is terrible.
3. **Own the customer relationship.** Build a subscription/membership model to increase frequency and reduce disintermediation. "DetailClub: $49/month for a monthly wash + quarterly detail."
4. **Quality is everything.** Spiffy went W-2 for a reason. If TJ uses independent contractors, invest HEAVILY in vetting, ratings, and quality guarantees (re-do any job for free).
5. **Build software first, marketplace second.** Give detailers scheduling, invoicing, CRM tools for free. Lock them in with software, THEN layer on demand generation. This is the Shopify playbook for detailers.

---

## 7. VERDICT

### Is This Worth Pursuing?

**CONDITIONAL YES — with significant caveats.**

The market is real ($3–5B, growing 10%+). The fragmentation is real (57,000+ businesses, no dominant platform). The timing may finally be right (post-COVID demand for convenience, gig infrastructure maturity). The AV angle, while speculative, is a compelling long-term differentiator for investor storytelling.

**BUT** — the graveyard of "Uber for car detailing" startups is real. The failure pattern is clear: low frequency, disintermediation, quality control, and the "good enough" alternatives (Google, Yelp, word-of-mouth). Any attempt at this must address these structural challenges head-on.

### Conditions for Pursuing

✅ **Go if:**
- TJ has detailing industry expertise or a co-founder who does
- They can start with <$50K and bootstrap proof of concept in ONE city
- They're willing to spend 6+ months manually matchmaking before building tech
- They focus on premium services ($150+ tickets), not commodity washes
- They can achieve 40%+ repeat booking rate within 6 months

❌ **Don't go if:**
- The plan is to raise VC money before proving unit economics
- They want to launch in 5+ cities simultaneously
- They're counting on the AV play as the primary business case
- They can't differentiate from Thumbtack/Yelp in a concrete way

### First 90 Days Playbook

**Week 1–2: Validate**
- Interview 30+ mobile detailers in target city. What do they charge? How do they get customers? What tools do they use? Would they pay for leads?
- Interview 30+ potential customers. How do they find detailers? What's the pain point? Would they use an app?
- Verify Washé's current status and learn from their model

**Week 3–4: Choose Your City**
- Ideal first market: Mid-size metro (500K–2M population), limited Spiffy presence, growing tech/professional population, car culture (think Austin, Nashville, Charlotte, Tampa, Denver)
- Map the existing supply (how many detailers on Google Maps, Thumbtack, Yelp)

**Week 5–8: Manual MVP**
- Don't build an app yet. Use a landing page + Calendly + Venmo/Stripe
- Personally curate 10–15 vetted detailers
- Drive demand through Instagram, local Facebook groups, Nextdoor
- Personally handle every booking. Understand the friction.
- Target: 50–100 completed bookings

**Week 9–12: Measure & Decide**
- What's the repeat rate? (Target: 30%+ rebook within 60 days)
- What's the CAC? (Target: <$40)
- What's the NPS? (Target: 60+)
- Are detailers staying on platform or going direct? (Target: <20% leakage)
- If metrics hit targets → build the app, raise a small seed round
- If metrics miss → pivot or kill

### The AV Play: Timeline to Pursue
- **Don't mention AV to customers or detailers.** It's irrelevant to them.
- **Do mention AV to investors.** It's a compelling narrative for a seed/Series A pitch.
- **Year 2–3:** Once you have 500+ vetted detailers in AV-heavy markets (SF, Phoenix, Austin, LA), begin conversations with AV fleet operations teams
- **Year 3–5:** If AV fleets hit 10K+ vehicles, formalize AV-specific training and B2B fleet contracts
- **Never:** Don't build the business around AV. Build it to stand alone. AV is optionality, not strategy.

---

## Sources & Confidence Summary

| Finding | Confidence | Key Sources |
|---------|------------|-------------|
| Market size ($14–20B total car wash/detail) | HIGH | IBISWorld, Grand View Research, Mordor Intelligence |
| 57,900 businesses in US | HIGH | IBISWorld 2024 |
| Mobile detailing growing 8–11% CAGR | HIGH | Multiple market research firms |
| Spiffy: $90–126M raised, $87M revenue | HIGH | Tracxn, CB Insights, PitchBook, GetLatka |
| Spiffy uses W-2 model, not marketplace | HIGH | Spiffy website, press releases |
| Cherry, Luxe dead | HIGH | TechCrunch, Wikipedia |
| Washos absorbed into Washé | MEDIUM | PR Newswire, Tracxn (limited data) |
| Washé: $4.1M raised, still active | MEDIUM | Tracxn, Crunchbase |
| Waymo fleet: ~2,500 vehicles | HIGH | Waymo blog, Electrek, multiple sources |
| Waymo uses Avis + in-house for cleaning | HIGH | Waymo blog, CNN, Reddit, Automotive Fleet |
| AV fleet projections beyond 2027 | LOW | Analyst estimates, historically unreliable |
| Unit economics projections | MEDIUM | Based on industry averages, not validated |
| Consumer detailing frequency 2–4x/year | MEDIUM | Industry sources, surveys |

---

*Report prepared using data available as of March 11, 2026. Market conditions and company statuses may change. This is research, not investment advice.*
