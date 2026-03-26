#!/usr/bin/env python3
"""Add localized FAQ sections + FAQPage schema to all Tidy Tails city pages."""

import os
import re
import json

WEBSITE_DIR = os.path.expanduser("~/.openclaw/workspace/tidy-tails/website")

# City-specific data for FAQ customization
CITY_DATA = {
    "ballwin": {"name": "Ballwin", "county": "St. Louis County", "zip": "63011, 63021", "nearby": "Manchester, Ellisville, Wildwood"},
    "brentwood": {"name": "Brentwood", "county": "St. Louis County", "zip": "63144", "nearby": "Maplewood, Richmond Heights, Clayton"},
    "bridgeton": {"name": "Bridgeton", "county": "St. Louis County", "zip": "63044", "nearby": "Maryland Heights, St. Ann, Hazelwood"},
    "chesterfield": {"name": "Chesterfield", "county": "St. Louis County", "zip": "63005, 63017", "nearby": "Wildwood, Ballwin, Creve Coeur"},
    "crestwood": {"name": "Crestwood", "county": "St. Louis County", "zip": "63126", "nearby": "Sunset Hills, Webster Groves, Kirkwood"},
    "creve-coeur": {"name": "Creve Coeur", "county": "St. Louis County", "zip": "63141", "nearby": "Olivette, Maryland Heights, Chesterfield"},
    "ferguson": {"name": "Ferguson", "county": "St. Louis County", "zip": "63135, 63136", "nearby": "Florissant, Jennings, Berkeley"},
    "florissant": {"name": "Florissant", "county": "St. Louis County", "zip": "63031, 63033, 63034", "nearby": "Hazelwood, Ferguson, Black Jack"},
    "hazelwood": {"name": "Hazelwood", "county": "St. Louis County", "zip": "63042", "nearby": "Florissant, Bridgeton, Berkeley"},
    "kirkwood": {"name": "Kirkwood", "county": "St. Louis County", "zip": "63122", "nearby": "Webster Groves, Crestwood, Des Peres"},
    "maplewood": {"name": "Maplewood", "county": "St. Louis County", "zip": "63143", "nearby": "Brentwood, Richmond Heights, Shrewsbury"},
    "maryland-heights": {"name": "Maryland Heights", "county": "St. Louis County", "zip": "63043", "nearby": "Bridgeton, Creve Coeur, Overland"},
    "ofallon": {"name": "O'Fallon", "county": "St. Charles County", "zip": "63366, 63368", "nearby": "St. Peters, Lake St. Louis, Wentzville"},
    "olivette": {"name": "Olivette", "county": "St. Louis County", "zip": "63132", "nearby": "University City, Creve Coeur, Overland"},
    "shrewsbury": {"name": "Shrewsbury", "county": "St. Louis County", "zip": "63119", "nearby": "Webster Groves, Maplewood, Affton"},
    "south-city": {"name": "South City St. Louis", "county": "City of St. Louis", "zip": "63109, 63116, 63118", "nearby": "Dutchtown, Tower Grove, Bevo Mill"},
    "south-county": {"name": "South County", "county": "St. Louis County", "zip": "63123, 63125, 63128", "nearby": "Lemay, Mehlville, Oakville"},
    "st-charles": {"name": "St. Charles", "county": "St. Charles County", "zip": "63301, 63303", "nearby": "St. Peters, O'Fallon, Weldon Spring"},
    "st-peters": {"name": "St. Peters", "county": "St. Charles County", "zip": "63376", "nearby": "O'Fallon, St. Charles, Wentzville"},
    "university-city": {"name": "University City", "county": "St. Louis County", "zip": "63130", "nearby": "Olivette, Clayton, Richmond Heights"},
    "webster-groves": {"name": "Webster Groves", "county": "St. Louis County", "zip": "63119", "nearby": "Kirkwood, Shrewsbury, Crestwood"},
    "wentzville": {"name": "Wentzville", "county": "St. Charles County", "zip": "63385", "nearby": "O'Fallon, Lake St. Louis, Foristell"},
}


def generate_faq_html(city_key):
    """Generate the FAQ section HTML for a city."""
    c = CITY_DATA[city_key]
    name = c["name"]
    
    faqs = [
        {
            "q": f"How much does pet waste removal cost in {name}?",
            "a": f"Tidy Tails offers weekly service in {name} starting at $25/week, bi-weekly at $45/visit, a monthly plan at $70/month (the only monthly option in St. Louis!), and one-time deep cleans at $100. No contracts — cancel anytime."
        },
        {
            "q": f"How often should I have my yard cleaned in {name}?",
            "a": f"For most {name} families with 1-2 dogs, weekly service keeps the yard fresh and safe. Multiple dogs or bigger yards may benefit from twice-weekly visits. Even single-dog homes should clean at least weekly — dog waste starts growing harmful bacteria within 2-3 days."
        },
        {
            "q": f"Do you service my neighborhood in {name}?",
            "a": f"Yes! We cover all of {name} and surrounding areas including {c['nearby']}. If you're in the {c['zip']} zip code area, we've got you covered. Text us your address and we'll confirm."
        },
        {
            "q": "What happens to the waste after you pick it up?",
            "a": f"We bag and remove ALL waste from your property — we never leave it in your trash can or on your curb. It leaves with us. Your yard is completely clean when we're done."
        },
        {
            "q": f"Is pet waste removal worth it in {name}?",
            "a": f"Absolutely. The average {name} dog owner spends 30-60 minutes per week on poop duty. That's 26-52 hours per year. At $25/week, you're essentially paying less than minimum wage to get your time back — plus a cleaner, healthier yard for your family and pets."
        },
        {
            "q": "Do I need to be home during the service?",
            "a": "Nope! Most of our customers aren't home when we come. We just need gate access to your yard. We'll text you when we're done so you know it's clean."
        },
    ]
    
    # Build FAQ HTML section
    faq_items_html = ""
    for faq in faqs:
        faq_items_html += f"""
            <div style="border-bottom: 1px solid #e2e8f0; padding: 1.2rem 0;">
                <h3 style="font-size: 1.05rem; color: #1a1a2e; margin-bottom: 0.5rem; cursor: pointer;">❓ {faq['q']}</h3>
                <p style="font-size: 0.95rem; color: #555; line-height: 1.6; margin: 0;">{faq['a']}</p>
            </div>"""
    
    faq_section = f"""
    <!-- FAQ Section (SEO Rich Snippets) -->
    <section style="padding: 3rem 2rem; background: white;">
        <div style="max-width: 900px; margin: 0 auto;">
            <h2 style="font-size: 1.8rem; color: #1a1a2e; margin-bottom: 0.5rem; text-align: center;">❓ {name} Pet Waste Removal FAQ</h2>
            <p style="text-align: center; color: #666; margin-bottom: 2rem;">Common questions from {name} dog owners</p>
            {faq_items_html}
        </div>
    </section>
"""
    
    # Build FAQ schema JSON-LD
    schema_items = []
    for faq in faqs:
        schema_items.append({
            "@type": "Question",
            "name": faq["q"],
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq["a"]
            }
        })
    
    schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": schema_items
    }
    
    schema_tag = f"""
    <!-- FAQPage Schema -->
    <script type="application/ld+json">
    {json.dumps(schema, indent=4)}
    </script>"""
    
    return faq_section, schema_tag


def process_city_page(city_key):
    """Add FAQ section and schema to a city page."""
    filepath = os.path.join(WEBSITE_DIR, f"{city_key}.html")
    
    if not os.path.exists(filepath):
        print(f"  ⚠️  File not found: {filepath}")
        return False
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Skip if already has FAQ
    if "FAQPage" in content:
        print(f"  ⏭️  Already has FAQ schema, skipping")
        return False
    
    faq_html, schema_tag = generate_faq_html(city_key)
    
    # Insert schema in <head> before </head>
    content = content.replace("</head>", f"{schema_tag}\n</head>", 1)
    
    # Insert FAQ section before the blog posts section or service areas nav
    # Try multiple insertion points
    inserted = False
    
    # Try inserting before "Related Blog Posts" section
    blog_marker = "<!-- Related Blog Posts"
    if blog_marker in content:
        content = content.replace(blog_marker, faq_html + "\n    " + blog_marker, 1)
        inserted = True
    
    # Try inserting before service-areas-nav
    if not inserted:
        nav_marker = '<div class="service-areas-nav">'
        if nav_marker in content:
            content = content.replace(nav_marker, faq_html + "\n    " + nav_marker, 1)
            inserted = True
    
    # Try inserting before footer
    if not inserted:
        footer_marker = "<footer>"
        if footer_marker in content:
            content = content.replace(footer_marker, faq_html + "\n    " + footer_marker, 1)
            inserted = True
    
    if not inserted:
        print(f"  ❌ Could not find insertion point")
        return False
    
    with open(filepath, 'w') as f:
        f.write(content)
    
    return True


def main():
    print("🔧 Adding FAQ sections + schema to Tidy Tails city pages\n")
    
    updated = 0
    skipped = 0
    failed = 0
    
    for city_key in sorted(CITY_DATA.keys()):
        city_name = CITY_DATA[city_key]["name"]
        print(f"📍 {city_name} ({city_key}.html)...", end="")
        
        result = process_city_page(city_key)
        if result:
            print(f"  ✅ FAQ added!")
            updated += 1
        else:
            skipped += 1
    
    print(f"\n{'='*50}")
    print(f"✅ Updated: {updated} pages")
    print(f"⏭️  Skipped: {skipped} pages")
    print(f"📊 Total FAQ questions added: {updated * 6}")
    print(f"🎯 FAQPage schema added to {updated} pages")


if __name__ == "__main__":
    main()
