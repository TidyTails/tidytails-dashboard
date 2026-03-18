#!/bin/bash
# Fix TJ → Jamie branding across live website
# Run from workspace root: bash scripts/fix-website-branding.sh
# Review changes with: cd tidy-tails && git diff

set -e
DIR="tidy-tails/website"

echo "🔧 Fixing TJ → Jamie branding across $DIR"
echo "================================================"

# ── HOMEPAGE (index.html) ──

echo "📝 Fixing homepage..."

# "Meet TJ" section
sed -i '' 's/Meet TJ — Your Local Dog Guy/Meet Jamie — Your Tidy Tails Team/g' "$DIR/index.html"
sed -i '' 's/— TJ, Founder of Tidy Tails/— Jamie, Owner of Tidy Tails/g' "$DIR/index.html"

# Bio paragraph - make it about the team/Jamie
sed -i '' 's|I started Tidy Tails because I know what it'\''s like to love your dog but hate the backyard cleanup.|We started Tidy Tails because we know what it'\''s like to love your dog but dread the backyard cleanup.|g' "$DIR/index.html"
sed -i '' 's|Every week, I show up on time, clean every corner of your yard, and leave it spotless. No franchise. No random technicians. Just me — the same face, the same quality, every single time.|Every week, we show up on time, clean every corner of your yard, and leave it spotless. No franchise. No random workers. Same team, same quality, every single time.|g' "$DIR/index.html"

# ── ALL AREA PAGES ──

echo "📝 Fixing area pages..."

for f in "$DIR"/*.html; do
    [ "$f" = "$DIR/index.html" ] && continue
    [ "$f" = "$DIR/review.html" ] && continue
    [ -d "$f" ] && continue
    
    # Generic TJ intro pattern
    sed -i '' "s/I'm TJ — a St. Louis guy who shows up every week/We're Tidy Tails — your local team that shows up every week/g" "$f"
    sed -i '' "s/I'm TJ, your local pooper scooper/We're Tidy Tails, your local pooper scooper/g" "$f"
    sed -i '' "s/I'm TJ — your local pooper scooper/We're Tidy Tails — your local pooper scooper/g" "$f"
    sed -i '' "s/I'm TJ — a local St. Louis guy keeping/We're Tidy Tails — your local team keeping/g" "$f"
    
    # SMS body text
    sed -i '' 's/Hi%20TJ!/Hi!/g' "$f"
    
    # Meta descriptions
    sed -i '' 's/by TJ —/by Tidy Tails —/g' "$f"
    sed -i '' 's/pooper scooper by TJ/pooper scooper by Jamie/g' "$f"
    
done

# ── FLORISSANT (special case — has unique copy) ──
echo "📝 Fixing Florissant page..."
sed -i '' "s/I'm TJ, your local pooper scooper. Same face every week/We're Tidy Tails, your local pooper scooper service. Same team every week/g" "$DIR/florissant.html"

# ── O'FALLON (special case) ──  
echo "📝 Fixing O'Fallon page..."
sed -i '' "s/I'm TJ, your local pooper scooper. No franchise, no random employees. Just me, keeping/We're Tidy Tails, your local pooper scooper. No franchise, no random employees. Same team, keeping/g" "$DIR/ofallon.html"

# ── MARYLAND HEIGHTS (special case) ──
echo "📝 Fixing Maryland Heights page..."
sed -i '' "s/I'm TJ — your local pooper scooper. Reliable, affordable, and actually from here/We're Tidy Tails — your local pooper scooper. Reliable, affordable, and local/g" "$DIR/maryland-heights.html"

echo ""
echo "✅ Done! Review changes:"
echo "   cd tidy-tails && git diff"
echo ""
echo "Then commit + push to deploy:"
echo "   git add -A && git commit -m '🔄 TJ → Jamie/Team branding update — ads are live' && git push"
