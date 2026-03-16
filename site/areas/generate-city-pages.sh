#!/bin/bash
# City Landing Page Generator for Tidy Tails
# Generates unique SEO-optimized pages for each service area

OUTDIR="$(dirname "$0")"

generate_page() {
  local slug="$1"
  local city="$2"
  local county="$3"
  local zip="$4"
  local lat="$5"
  local lon="$6"
  local population="$7"
  local tagline="$8"
  local local_hook="$9"
  local neighborhood_text="${10}"
  local fun_fact="${11}"

cat > "$OUTDIR/$slug.html" << 'HEREDOC_END'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pet Waste Removal in CITY_NAME, MO | Tidy Tails Dog Poop Cleanup</title>
    <meta name="description" content="CITY_NAME's trusted pet waste removal service. Weekly yard cleanup starting at $25/week. Owner-operated, no contracts, free first visit. Serving CITY_NAME ZIP_CODE and surrounding areas. Call (314) 850-7140.">
    <meta name="keywords" content="pet waste removal CITY_NAME MO, dog poop cleanup CITY_NAME, pooper scooper CITY_NAME Missouri, yard cleanup CITY_NAME ZIP_CODE, dog waste removal COUNTY_NAME County">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://tidytails.github.io/tidytails-dashboard/site/areas/SLUG_NAME.html">

    <meta property="og:title" content="Pet Waste Removal in CITY_NAME, MO | Tidy Tails">
    <meta property="og:description" content="TAGLINE_TEXT">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://tidytails.github.io/tidytails-dashboard/site/areas/SLUG_NAME.html">
    <meta property="og:locale" content="en_US">

    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Tidy Tails Pet Waste Removal",
        "description": "Professional pet waste removal service in CITY_NAME, MO. Weekly yard cleanup, one-time cleanups, and spring cleanup specials.",
        "url": "https://tidytails.github.io/tidytails-dashboard/site/areas/SLUG_NAME.html",
        "telephone": "+13148507140",
        "email": "cartervhomes@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "CITY_NAME",
            "addressRegion": "MO",
            "postalCode": "ZIP_CODE",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": LAT_VAL,
            "longitude": LON_VAL
        },
        "areaServed": {
            "@type": "City",
            "name": "CITY_NAME",
            "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "COUNTY_NAME County, Missouri"
            }
        },
        "priceRange": "$$",
        "openingHours": "Mo-Sa 07:00-19:00",
        "paymentAccepted": "Cash, Venmo, Zelle, CashApp"
    }
    </script>

    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How much does pet waste removal cost in CITY_NAME?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tidy Tails weekly service in CITY_NAME starts at $25/week for one dog. Additional dogs are $5/week each. One-time spring cleanups start at $99."
                }
            },
            {
                "@type": "Question",
                "name": "What areas of CITY_NAME do you serve?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We serve all of CITY_NAME (ZIP_CODE) and surrounding neighborhoods in COUNTY_NAME County. NEIGHBORHOOD_TEXT"
                }
            },
            {
                "@type": "Question",
                "name": "Do I need to be home for pet waste removal in CITY_NAME?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No! Just make sure we can access your yard and we handle everything. You'll get a text when we're done."
                }
            }
        ]
    }
    </script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,800&display=swap" rel="stylesheet">
    <style>
        :root {
            --forest: #1a3a2a;
            --forest-deep: #0f261a;
            --sage: #4a7c59;
            --sage-light: #6b9e7a;
            --mint: #a8d5ba;
            --cream: #faf8f0;
            --cream-dark: #f0ece0;
            --gold: #d4a853;
            --gold-light: #e8c97a;
            --bark: #3d2b1f;
            --charcoal: #2c2c2c;
            --white: #ffffff;
            --text-dark: #1a1a1a;
            --text-body: #3a3a3a;
            --text-muted: #6b6b6b;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
            font-family: 'DM Sans', sans-serif;
            background: var(--cream);
            color: var(--text-body);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
        }

        /* Nav */
        nav {
            position: fixed; top: 0; left: 0; right: 0; z-index: 50;
            background: rgba(250, 248, 240, 0.95);
            backdrop-filter: blur(16px);
            border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .nav-inner {
            max-width: 1200px; margin: 0 auto;
            display: flex; align-items: center; justify-content: space-between;
            padding: 14px 24px;
        }
        .nav-logo {
            font-family: 'Fraunces', serif;
            font-weight: 800; font-size: 1.4rem;
            color: var(--forest); text-decoration: none;
            display: flex; align-items: center; gap: 8px;
        }
        .nav-links { display: flex; gap: 20px; align-items: center; }
        .nav-links a {
            text-decoration: none; color: var(--text-body);
            font-weight: 500; font-size: 0.92rem;
        }
        .nav-links a:hover { color: var(--sage); }
        .nav-cta {
            background: var(--forest) !important;
            color: var(--white) !important;
            padding: 10px 20px !important;
            border-radius: 10px !important;
            font-weight: 600 !important;
        }
        @media (max-width: 768px) {
            .nav-links a:not(.nav-cta) { display: none; }
        }

        /* Hero */
        .city-hero {
            padding: 140px 24px 80px;
            background: linear-gradient(165deg, var(--forest-deep) 0%, var(--forest) 40%, var(--sage) 100%);
            text-align: center;
            position: relative;
        }
        .city-hero::before {
            content: ''; position: absolute; inset: 0;
            background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .city-hero-inner {
            max-width: 800px; margin: 0 auto; position: relative; z-index: 2;
        }
        .city-badge {
            display: inline-flex; align-items: center; gap: 8px;
            background: rgba(212, 168, 83, 0.2);
            border: 1px solid rgba(212, 168, 83, 0.4);
            color: var(--gold-light);
            padding: 8px 18px; border-radius: 50px;
            font-size: 0.85rem; font-weight: 600;
            margin-bottom: 24px;
        }
        .city-hero h1 {
            font-family: 'Fraunces', serif;
            font-size: clamp(2rem, 5vw, 3.2rem);
            font-weight: 800; color: var(--white);
            line-height: 1.1; margin-bottom: 20px;
        }
        .city-hero h1 .gold { color: var(--gold-light); }
        .city-hero p {
            font-size: clamp(1rem, 2.2vw, 1.2rem);
            color: rgba(255,255,255,0.8);
            max-width: 600px; margin: 0 auto 32px;
        }
        .hero-actions {
            display: flex; gap: 14px;
            justify-content: center; flex-wrap: wrap;
        }
        .btn-primary {
            display: inline-flex; align-items: center; gap: 10px;
            background: var(--gold); color: var(--forest-deep);
            font-weight: 700; font-size: 1.05rem;
            padding: 16px 32px; border-radius: 14px;
            text-decoration: none;
            box-shadow: 0 4px 20px rgba(212,168,83,0.3);
            transition: all 0.2s;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 28px rgba(212,168,83,0.4); }
        .btn-secondary {
            display: inline-flex; align-items: center; gap: 10px;
            background: rgba(255,255,255,0.1);
            border: 2px solid rgba(255,255,255,0.25);
            color: var(--white);
            font-weight: 600; font-size: 1.05rem;
            padding: 14px 28px; border-radius: 14px;
            text-decoration: none; transition: all 0.2s;
        }
        .btn-secondary:hover { background: rgba(255,255,255,0.18); }

        /* Content Sections */
        .section { padding: 80px 24px; }
        .section-alt { background: var(--white); }
        .section-inner { max-width: 900px; margin: 0 auto; }
        .section-header {
            text-align: center;
            margin-bottom: 50px;
        }
        .section-header .tag {
            font-size: 0.8rem; font-weight: 700;
            color: var(--sage); letter-spacing: 0.1em;
            text-transform: uppercase; margin-bottom: 12px;
        }
        .section-header h2 {
            font-family: 'Fraunces', serif;
            font-size: clamp(1.6rem, 3.5vw, 2.2rem);
            font-weight: 700; color: var(--text-dark);
            line-height: 1.15; margin-bottom: 14px;
        }
        .section-header p { color: var(--text-muted); font-size: 1.05rem; }

        /* Why Choose */
        .benefits-grid {
            display: grid; grid-template-columns: repeat(3, 1fr);
            gap: 24px;
        }
        .benefit-card {
            padding: 32px 24px; text-align: center;
            background: var(--white); border-radius: 20px;
            border: 1px solid rgba(0,0,0,0.05);
            transition: transform 0.3s;
        }
        .section-alt .benefit-card { background: var(--cream); }
        .benefit-card:hover { transform: translateY(-4px); }
        .benefit-icon {
            width: 56px; height: 56px;
            background: linear-gradient(135deg, var(--sage), var(--forest));
            border-radius: 16px;
            display: flex; align-items: center; justify-content: center;
            margin: 0 auto 16px;
            font-size: 1.6rem;
        }
        .benefit-card h3 {
            font-size: 1.05rem; font-weight: 700;
            color: var(--text-dark); margin-bottom: 8px;
        }
        .benefit-card p { color: var(--text-muted); font-size: 0.9rem; }

        @media (max-width: 768px) {
            .benefits-grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; }
        }

        /* Pricing */
        .pricing-grid {
            display: grid; grid-template-columns: repeat(3, 1fr);
            gap: 24px; max-width: 900px; margin: 0 auto;
        }
        .price-card {
            padding: 32px 24px; border-radius: 20px;
            border: 2px solid rgba(0,0,0,0.06);
            background: var(--cream); text-align: center;
            transition: transform 0.3s; position: relative;
        }
        .price-card:hover { transform: translateY(-4px); }
        .price-card.featured {
            background: linear-gradient(165deg, var(--forest-deep), var(--forest));
            color: var(--white); border-color: var(--gold);
            box-shadow: 0 12px 40px rgba(26,58,42,0.2);
        }
        .price-card.featured .price-label { color: rgba(255,255,255,0.7); }
        .price-card.featured .price-amount { color: var(--gold-light); }
        .price-card.featured li { color: rgba(255,255,255,0.8); }
        .popular-tag {
            position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
            background: var(--gold); color: var(--forest-deep);
            font-size: 0.75rem; font-weight: 700;
            padding: 5px 16px; border-radius: 50px;
        }
        .price-name {
            font-family: 'Fraunces', serif;
            font-size: 1.2rem; font-weight: 700; margin-bottom: 4px;
        }
        .price-label { color: var(--text-muted); font-size: 0.85rem; margin-bottom: 16px; }
        .price-amount {
            font-family: 'Fraunces', serif;
            font-size: 2.8rem; font-weight: 800;
            color: var(--forest); margin-bottom: 4px;
        }
        .price-period { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 20px; }
        .price-features { list-style: none; text-align: left; margin-bottom: 24px; }
        .price-features li {
            padding: 8px 0; font-size: 0.9rem;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            display: flex; align-items: center; gap: 8px;
        }
        .price-cta {
            display: block; text-align: center;
            padding: 14px; border-radius: 12px;
            text-decoration: none; font-weight: 700;
            background: var(--forest); color: var(--white);
            transition: background 0.2s;
        }
        .price-card.featured .price-cta {
            background: var(--gold); color: var(--forest-deep);
        }
        @media (max-width: 768px) {
            .pricing-grid { grid-template-columns: 1fr; max-width: 360px; margin: 0 auto; }
        }

        /* Local section */
        .local-content {
            display: grid; grid-template-columns: 1fr 1fr;
            gap: 40px; align-items: center;
        }
        .local-text h3 {
            font-family: 'Fraunces', serif;
            font-size: 1.4rem; font-weight: 700;
            color: var(--text-dark); margin-bottom: 12px;
        }
        .local-text p { color: var(--text-muted); margin-bottom: 16px; line-height: 1.7; }
        .local-map {
            background: var(--cream-dark); border-radius: 20px;
            overflow: hidden; aspect-ratio: 4/3;
        }
        .local-map iframe { width: 100%; height: 100%; border: 0; }
        @media (max-width: 768px) {
            .local-content { grid-template-columns: 1fr; }
        }

        /* CTA */
        .cta-section {
            padding: 80px 24px;
            background: linear-gradient(165deg, var(--forest-deep), var(--forest));
            text-align: center;
        }
        .cta-inner { max-width: 600px; margin: 0 auto; }
        .cta-section h2 {
            font-family: 'Fraunces', serif;
            font-size: clamp(1.8rem, 4vw, 2.4rem);
            font-weight: 800; color: var(--white);
            margin-bottom: 16px;
        }
        .cta-section p {
            color: rgba(255,255,255,0.7);
            font-size: 1.1rem; margin-bottom: 32px;
        }

        /* Areas nav */
        .areas-nav {
            padding: 40px 24px;
            background: var(--cream-dark);
            border-top: 1px solid rgba(0,0,0,0.06);
        }
        .areas-nav-inner {
            max-width: 900px; margin: 0 auto; text-align: center;
        }
        .areas-nav h3 {
            font-family: 'Fraunces', serif;
            font-size: 1.2rem; font-weight: 700;
            color: var(--text-dark); margin-bottom: 16px;
        }
        .areas-links {
            display: flex; flex-wrap: wrap;
            gap: 10px; justify-content: center;
        }
        .areas-links a {
            padding: 8px 16px; border-radius: 8px;
            background: var(--white);
            border: 1px solid rgba(0,0,0,0.08);
            color: var(--forest); text-decoration: none;
            font-weight: 500; font-size: 0.88rem;
            transition: all 0.2s;
        }
        .areas-links a:hover { background: var(--forest); color: var(--white); }
        .areas-links a.current {
            background: var(--forest); color: var(--white);
            pointer-events: none;
        }

        /* Footer */
        footer {
            padding: 40px 24px;
            background: var(--forest-deep);
            text-align: center;
            color: rgba(255,255,255,0.5);
            font-size: 0.85rem;
        }
        footer a { color: var(--gold-light); text-decoration: none; }

        /* Float CTA mobile */
        .float-cta {
            display: none; position: fixed; bottom: 0; left: 0; right: 0;
            z-index: 100; padding: 12px 16px;
            background: rgba(26,58,42,0.97);
            backdrop-filter: blur(12px);
            border-top: 2px solid var(--gold);
        }
        .float-cta a {
            display: flex; align-items: center; justify-content: center; gap: 10px;
            background: var(--gold); color: var(--forest-deep);
            text-decoration: none; font-weight: 700; font-size: 1.1rem;
            padding: 14px; border-radius: 12px;
        }
        @media (max-width: 768px) {
            .float-cta { display: block; }
            body { padding-bottom: 80px; }
        }
    </style>
</head>
<body>
    <nav>
        <div class="nav-inner">
            <a href="../" class="nav-logo"><span class="paw">🐾</span> Tidy Tails</a>
            <div class="nav-links">
                <a href="../#pricing">Pricing</a>
                <a href="../#areas">Areas</a>
                <a href="tel:3148507140" class="nav-cta">📞 (314) 850-7140</a>
            </div>
        </div>
    </nav>

    <section class="city-hero">
        <div class="city-hero-inner">
            <div class="city-badge">📍 Serving CITY_NAME, MO ZIP_CODE</div>
            <h1>Pet Waste Removal in <span class="gold">CITY_NAME</span></h1>
            <p>TAGLINE_TEXT</p>
            <div class="hero-actions">
                <a href="tel:3148507140" class="btn-primary">📞 Call (314) 850-7140</a>
                <a href="sms:3148507140?body=Hi!%20I'm%20in%20CITY_NAME%20and%20interested%20in%20pet%20waste%20removal." class="btn-secondary">💬 Text Us</a>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="section-inner">
            <div class="section-header">
                <div class="tag">Why CITY_NAME Chooses Tidy Tails</div>
                <h2>Your Yard, Our Problem</h2>
                <p>LOCAL_HOOK</p>
            </div>
            <div class="benefits-grid">
                <div class="benefit-card">
                    <div class="benefit-icon">👤</div>
                    <h3>Owner-Operated</h3>
                    <p>Not a franchise. TJ personally services yards in CITY_NAME. Same person every visit — your dog already knows him.</p>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">🔓</div>
                    <h3>No Contracts</h3>
                    <p>Cancel anytime with a text. We earn your business every single visit. No commitments, no cancellation fees.</p>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">🎁</div>
                    <h3>Free First Visit</h3>
                    <p>Try us risk-free. Your first cleanup is on us — no credit card, no obligation. See the difference, then decide.</p>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">📱</div>
                    <h3>Text Updates</h3>
                    <p>You'll get a text when we're heading over and when we're done. No guessing, no surprises.</p>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">🐕</div>
                    <h3>All Dogs Welcome</h3>
                    <p>One Chihuahua or four Great Danes — we handle it all. Multi-dog discounts available.</p>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">🌿</div>
                    <h3>Thorough Cleanup</h3>
                    <p>We don't just hit the obvious spots. Every corner, every edge, every hidden pile. Your yard will be spotless.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section section-alt">
        <div class="section-inner">
            <div class="section-header">
                <div class="tag">Simple Pricing for CITY_NAME</div>
                <h2>No Hidden Fees. No Surprises.</h2>
            </div>
            <div class="pricing-grid">
                <div class="price-card">
                    <div class="price-name">One-Time</div>
                    <div class="price-label">Spring cleanup or first visit</div>
                    <div class="price-amount">$99</div>
                    <div class="price-period">starting price</div>
                    <ul class="price-features">
                        <li>✅ Full yard sweep</li>
                        <li>✅ All waste bagged & removed</li>
                        <li>✅ Perfect for catching up</li>
                    </ul>
                    <a href="tel:3148507140" class="price-cta">Book Now</a>
                </div>
                <div class="price-card featured">
                    <div class="popular-tag">MOST POPULAR</div>
                    <div class="price-name">Weekly</div>
                    <div class="price-label">Set it and forget it</div>
                    <div class="price-amount">$25</div>
                    <div class="price-period">per week • 1 dog</div>
                    <ul class="price-features">
                        <li>✅ Weekly yard cleanup</li>
                        <li>✅ Text notifications</li>
                        <li>✅ +$5/week per extra dog</li>
                        <li>✅ Free first visit included</li>
                    </ul>
                    <a href="tel:3148507140" class="price-cta">Start Free</a>
                </div>
                <div class="price-card">
                    <div class="price-name">Bi-Weekly</div>
                    <div class="price-label">Every other week</div>
                    <div class="price-amount">$35</div>
                    <div class="price-period">per visit • 1 dog</div>
                    <ul class="price-features">
                        <li>✅ Every-other-week service</li>
                        <li>✅ Great for small yards</li>
                        <li>✅ +$5/visit per extra dog</li>
                    </ul>
                    <a href="tel:3148507140" class="price-cta">Book Now</a>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="section-inner">
            <div class="local-content">
                <div class="local-text">
                    <h3>Your CITY_NAME Neighbor</h3>
                    <p>NEIGHBORHOOD_TEXT</p>
                    <p>FUN_FACT</p>
                    <p><strong>Ready for a cleaner yard?</strong> CITY_NAME residents get a free first visit — no strings attached. Just text or call and we'll get you on the schedule.</p>
                </div>
                <div class="local-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d50000!2dLON_VAL!3dLAT_VAL!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>

    <section class="cta-section">
        <div class="cta-inner">
            <h2>Ready for a Poop-Free Yard in CITY_NAME?</h2>
            <p>Your first visit is free. No contracts, no commitment. Just a clean yard and a happy dog.</p>
            <div class="hero-actions">
                <a href="tel:3148507140" class="btn-primary">📞 Call (314) 850-7140</a>
                <a href="sms:3148507140?body=Hi!%20I'm%20in%20CITY_NAME%20and%20interested%20in%20pet%20waste%20removal." class="btn-secondary">💬 Text Us</a>
            </div>
        </div>
    </section>

    <section class="areas-nav">
        <div class="areas-nav-inner">
            <h3>We Also Serve</h3>
            <div class="areas-links">
                <a href="wildwood.html" class="WILDWOOD_CLASS">Wildwood</a>
                <a href="ballwin.html" class="BALLWIN_CLASS">Ballwin</a>
                <a href="chesterfield.html" class="CHESTERFIELD_CLASS">Chesterfield</a>
                <a href="ellisville.html" class="ELLISVILLE_CLASS">Ellisville</a>
                <a href="manchester.html" class="MANCHESTER_CLASS">Manchester</a>
                <a href="valley-park.html" class="VALLEY_PARK_CLASS">Valley Park</a>
                <a href="town-and-country.html" class="TOWN_AND_COUNTRY_CLASS">Town & Country</a>
                <a href="creve-coeur.html" class="CREVE_COEUR_CLASS">Creve Coeur</a>
                <a href="maryland-heights.html" class="MARYLAND_HEIGHTS_CLASS">Maryland Heights</a>
                <a href="olivette.html" class="OLIVETTE_CLASS">Olivette</a>
                <a href="st-peters.html" class="ST_PETERS_CLASS">St. Peters</a>
                <a href="ofallon.html" class="OFALLON_CLASS">O'Fallon</a>
            </div>
        </div>
    </section>

    <footer>
        <p>© 2026 Tidy Tails Pet Waste Removal · CITY_NAME, MO · <a href="tel:3148507140">(314) 850-7140</a></p>
        <p style="margin-top:8px;"><a href="../">← Back to Main Site</a></p>
    </footer>

    <div class="float-cta">
        <a href="tel:3148507140">📞 Call Now — Free First Visit in CITY_NAME</a>
    </div>
</body>
</html>
HEREDOC_END

  # Now do replacements
  sed -i '' "s/CITY_NAME/$city/g" "$OUTDIR/$slug.html"
  sed -i '' "s/ZIP_CODE/$zip/g" "$OUTDIR/$slug.html"
  sed -i '' "s/COUNTY_NAME/$county/g" "$OUTDIR/$slug.html"
  sed -i '' "s/SLUG_NAME/$slug/g" "$OUTDIR/$slug.html"
  sed -i '' "s/LAT_VAL/$lat/g" "$OUTDIR/$slug.html"
  sed -i '' "s/LON_VAL/$lon/g" "$OUTDIR/$slug.html"

  # Handle multi-word replacements with a different delimiter
  sed -i '' "s|TAGLINE_TEXT|$tagline|g" "$OUTDIR/$slug.html"
  sed -i '' "s|LOCAL_HOOK|$local_hook|g" "$OUTDIR/$slug.html"
  sed -i '' "s|NEIGHBORHOOD_TEXT|$neighborhood_text|g" "$OUTDIR/$slug.html"
  sed -i '' "s|FUN_FACT|$fun_fact|g" "$OUTDIR/$slug.html"

  # Set current class for this city's nav link
  local upper_slug=$(echo "$slug" | tr '-' '_' | tr '[:lower:]' '[:upper:]')
  sed -i '' "s/${upper_slug}_CLASS/current/g" "$OUTDIR/$slug.html"
  # Clear remaining class placeholders
  sed -i '' 's/WILDWOOD_CLASS//g; s/BALLWIN_CLASS//g; s/CHESTERFIELD_CLASS//g; s/ELLISVILLE_CLASS//g; s/MANCHESTER_CLASS//g; s/VALLEY_PARK_CLASS//g; s/TOWN_AND_COUNTRY_CLASS//g; s/CREVE_COEUR_CLASS//g; s/MARYLAND_HEIGHTS_CLASS//g; s/OLIVETTE_CLASS//g; s/ST_PETERS_CLASS//g; s/OFALLON_CLASS//g' "$OUTDIR/$slug.html"

  echo "✅ Generated $slug.html"
}

# Generate all city pages
# Args: slug, city, county, zip, lat, lon, population, tagline, local_hook, neighborhood_text, fun_fact

generate_page "wildwood" "Wildwood" "St. Louis" "63040" "38.5829" "-90.6615" "35,517" \
  "Wildwood's most trusted pet waste removal. Owner-operated, weekly service starting at \$25/week. Free first cleanup." \
  "Wildwood homes sit on some of the biggest lots in St. Louis County. Big yards mean more ground to cover — and more places for waste to hide. Let us handle it so you can enjoy your property." \
  "We serve all Wildwood neighborhoods and subdivisions. From the homes along Manchester Road to the newer developments near Centaur Road, we know Wildwood's layout and work efficiently across larger properties." \
  "With over 35,000 residents and some of the highest dog ownership rates in the county, Wildwood is our kind of town. Big yards, happy dogs, and neighbors who take pride in their property."

generate_page "ballwin" "Ballwin" "St. Louis" "63011" "38.5951" "-90.5462" "30,404" \
  "Ballwin's go-to pet waste removal service. Weekly cleanup, no contracts, free first visit. Call today." \
  "Ballwin was named one of the best places to live in America — and the dog-friendly parks and neighborhoods are a big reason why. Keep your slice of Ballwin looking as good as the rest." \
  "We cover all of Ballwin from Holloway Road to Big Bend, including neighborhoods near Vlasis Park, Castlewood, and New Ballwin Park. Your neighbors already trust us." \
  "Ballwin's parks like Vlasis and New Ballwin are packed with dog walkers every weekend. With nearly 30,000 residents and a strong community feel, it's one of our busiest service areas."

generate_page "chesterfield" "Chesterfield" "St. Louis" "63017" "38.6631" "-90.5771" "49,999" \
  "Professional pet waste removal in Chesterfield, MO. Owner-operated weekly service. Your first cleanup is free." \
  "Chesterfield properties are an investment — beautifully landscaped yards that deserve professional care. Don't let pet waste undermine curb appeal or damage your lawn." \
  "From Chesterfield Valley to the neighborhoods near Central Park and Faust Park, we service the full Chesterfield area. Many of our customers are in the subdivisions off Olive and Clarkson." \
  "Home to nearly 50,000 residents, Chesterfield is one of the most affluent communities in Missouri. Dog ownership here is well above the national average — and so are expectations for yard maintenance."

generate_page "ellisville" "Ellisville" "St. Louis" "63011" "38.5926" "-90.5876" "9,508" \
  "Ellisville pet waste removal — reliable weekly service from a local owner. Free first visit, no contracts ever." \
  "Ellisville's tight-knit community means your yard is part of the neighborhood. Keep it clean for your family, your dogs, and your neighbors without lifting a finger." \
  "We serve all Ellisville neighborhoods, including areas near Bluebird Park, Kiefer Creek, and along Manchester Road. Small city, personal service — that's our style too." \
  "Ellisville may be compact, but its dog-friendly atmosphere is outsized. The tree-lined streets and community parks make it one of the most walkable — and dog-walkable — cities in West County."

generate_page "manchester" "Manchester" "St. Louis" "63011" "38.5770" "-90.5093" "18,094" \
  "Manchester, MO pet waste removal. Weekly yard cleanup starting at \$25/week. Owner-operated, free first visit." \
  "Manchester is classic West County — established neighborhoods, mature trees, and dogs in every other yard. We keep your outdoor space clean so you can enjoy it year-round." \
  "We service Manchester from Highway 141 to Weidman Road and everywhere in between. Whether you're near Schroeder Park, Manchester Meadows, or the neighborhoods off Big Bend, we've got you covered." \
  "Manchester sits right in the heart of West County, making it a central stop on our service routes. That means reliable scheduling and no missed visits for our Manchester customers."

generate_page "valley-park" "Valley Park" "St. Louis" "63088" "38.5493" "-90.4927" "7,219" \
  "Valley Park pet waste removal service. Affordable weekly cleanup, owner-operated. Free first visit for Valley Park residents." \
  "Valley Park's riverside location and wooded lots create beautiful outdoor spaces — but also plenty of hiding spots for pet waste. We find and remove every last bit." \
  "We serve all Valley Park neighborhoods, from the areas near Valley Park Community Center to homes along Meramec Station Road and Big Bend. Close-knit community, personal service." \
  "Valley Park's outdoor spaces along the Meramec River make it a paradise for dog owners. Whether you're walking the trails or just enjoying your backyard, we make sure it stays clean."

generate_page "town-and-country" "Town and Country" "St. Louis" "63131" "38.6120" "-90.4634" "11,364" \
  "Premium pet waste removal for Town and Country estates. Owner-operated, discreet service. Free first visit." \
  "Town and Country is home to some of the finest properties in St. Louis. Your grounds deserve the same attention to detail as your landscaping — and that includes keeping them waste-free." \
  "We serve all Town and Country neighborhoods, from Thornhill to Mason Woods to the estates along Conway Road. Our service is thorough, discreet, and designed for larger properties." \
  "With expansive lots and a culture of excellence, Town and Country residents expect the best. That's exactly what we deliver — meticulous yard care from an owner who takes as much pride in your property as you do."

generate_page "creve-coeur" "Creve Coeur" "St. Louis" "63141" "38.6609" "-90.4227" "18,627" \
  "Creve Coeur pet waste removal. Reliable weekly service, no contracts. Your first cleanup is on us." \
  "Creve Coeur offers the perfect blend of suburban space and city convenience. Keep your yard as well-maintained as the rest of your home with hassle-free waste removal." \
  "We cover all Creve Coeur neighborhoods, from areas near Millennium Park and Conway Park to the subdivisions off Olive and Ballas. Centrally located for reliable, on-time service." \
  "Creve Coeur's beautiful parks and family-friendly neighborhoods make it a top spot for dog owners. With Millennium Park and the Creve Coeur Lake nearby, dogs get plenty of exercise — and yards need plenty of cleanup."

generate_page "maryland-heights" "Maryland Heights" "St. Louis" "63043" "38.7131" "-90.4353" "27,472" \
  "Maryland Heights pet waste removal. Weekly yard cleanup from a local owner. Free first visit, cancel anytime." \
  "Maryland Heights has grown into one of the most active communities in St. Louis County. Between work, family, and fun at Creve Coeur Lake, let us take yard cleanup off your list." \
  "We serve all Maryland Heights, from neighborhoods near Creve Coeur Lake Memorial Park to the residential areas off Dorsett and McKelvey. Convenient location means consistent scheduling." \
  "Maryland Heights borders Creve Coeur Lake — one of the most popular dog walking destinations in the county. All those walks mean busy yards. We make sure yours stays spotless."

generate_page "olivette" "Olivette" "St. Louis" "63132" "38.6654" "-90.3779" "7,737" \
  "Olivette pet waste removal service. Your local, owner-operated yard cleanup. Free first visit for Olivette residents." \
  "Olivette is our home base — and we take special pride in keeping our neighbors' yards clean. When you hire Tidy Tails, you're hiring a neighbor, not a corporation." \
  "We serve every neighborhood in Olivette, from Warson Estates to the areas near Stacy Park and along Price Road. As your neighbor, we're never far away." \
  "Olivette is where Tidy Tails calls home. That means faster response times, personal attention, and a genuine stake in keeping our community looking great. When we clean your yard, we're cleaning our neighborhood."

generate_page "st-peters" "St. Peters" "St. Charles" "63376" "38.7874" "-90.6263" "57,728" \
  "St. Peters pet waste removal. Expanding to St. Charles County with the same owner-operated service. Free first visit." \
  "St. Peters is booming — new families, new homes, and lots of new dogs. As one of Missouri's fastest-growing cities, the demand for reliable pet waste removal is higher than ever." \
  "We serve St. Peters neighborhoods from Spencer Road to Mexico Road and throughout the newer developments. Growing city, growing service area." \
  "With nearly 58,000 residents, St. Peters is the largest city in St. Charles County — and one of the most dog-friendly. The parks, trails, and family neighborhoods make it a natural fit for our service."

generate_page "ofallon" "O'Fallon" "St. Charles" "63368" "38.8106" "-90.6998" "91,316" \
  "O'Fallon pet waste removal service. Weekly cleanup, no contracts. Owner-operated with a free first visit." \
  "O'Fallon is Missouri's fastest-growing city — and with growth comes demand. More families, more dogs, more yards that need attention. We're here to help." \
  "We cover O'Fallon from Highway K to Bryan Road and the neighborhoods throughout. Whether you're in an established subdivision or a newer development, we've got your yard." \
  "As Missouri's seventh-largest city with over 91,000 residents, O'Fallon has an enormous — and underserved — market for pet waste removal. Early customers here get the most personal attention as we build our St. Charles presence."

echo ""
echo "🎉 All 12 city pages generated!"
echo ""
ls -la "$OUTDIR"/*.html
