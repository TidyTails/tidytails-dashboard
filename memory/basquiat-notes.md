# Basquiat Notes — PERMANENT REFERENCE

## ⚠️ CRITICAL: VIDEO WORKFLOW (DO NOT DEVIATE — EVER)

### The Pipeline: Doeboy → Nano Banana 2 → Kling v3

**Step 1: DOEBOY writes 3 visual prompts** for the video concept
- Creative, cinematic scene descriptions that sell the promo
- These are TEXT PROMPTS, not existing photos

**Step 2: BASQUIAT runs Nano Banana 2 on fal.ai** 
- Takes Doeboy's prompts → GENERATES 3 AI images
- These are NEW images, not existing product photos
- Model: Nano Banana 2 on fal.ai

**Step 3: BASQUIAT runs Kling v1 Standard on fal.ai**
- Endpoint: `fal-ai/kling-video/v1/standard/image-to-video` ← ONLY THIS ONE
- ⚠️ NOT v2, NOT v3 — v1 Standard = the good videos. Other versions = distorted faces.
- Takes the 3 Nano Banana images → Animates each into a 5-sec video clip
- Cinematic motion (pan, zoom, orbit, etc.)

**Step 4 (NEW — MANDATORY): ADD MUSIC/SOUND**
- Every video MUST have background music before delivery
- Add via ffmpeg during final assembly

**Step 4: Combine 3 clips into one ~15 sec video**

### ❌ WHAT NOT TO DO (THESE ARE ALL WRONG):
- ❌ DO NOT use existing shed photos with Kling (that skips Nano Banana)
- ❌ DO NOT use Remotion
- ❌ DO NOT make slideshows
- ❌ DO NOT skip the Doeboy prompt step
- ❌ DO NOT generate images yourself — Doeboy writes the prompts, you execute
- ❌ DO NOT use any Kling endpoint other than v1 Standard (v2/v3 = distorted faces)
- ❌ DO NOT put text/words on vehicles, uniforms, or equipment (AI mangles text)
- ❌ DO NOT show close-up human faces or dog faces head-on (distortion guaranteed)
- ❌ DO NOT deliver videos without music/sound

### ✅ SHOT COMPOSITION RULES:
- People at MID/WIDE distance only — silhouettes, backs turned, hands-only, feet-only
- Dogs from BEHIND or at distance — tail wagging, running away, NOT face-on
- Focus on THE YARD, not people/animals
- Grass stays SAME COLOR — only poop disappears

### 🔍 QUALITY GATE — CHECK BEFORE DELIVERY:
1. No distorted faces (human or animal)
2. No mangled text on any object
3. Grass color consistent across frames
4. Audio/music present
5. Story clear without explanation
6. Correct endpoint used (v1 Standard)
**If ANY fail → re-generate. Don't deliver garbage.**

### API Details:
- **Platform:** https://fal.ai
- **API Key:** In `.env` as `FAL_KEY`
- **Node package:** `@fal-ai/client` (installed in workspace)
- **Nano Banana 2 image:** ~$0.05-0.10 per image
- **Kling v3 Standard video (5 sec):** ~$0.50 per clip
- ⚠️ Credits burn fast — don't waste them on wrong workflows

### The Full Chain:
```
Doeboy (prompts) → Nano Banana 2 (AI images) → Kling v3 (animated video) → Combined MP4
```

This is the ONLY video workflow. Period.

## Previous Videos Created (Mar 5, 2026):
1. Barefoot Test — "Would you walk barefoot in YOUR yard?"
2. Party's Coming — "Cookout this weekend? Your yard isn't ready."
3. Dog's POV — "Your dog deserves better."
4. The Shoe Check — "Stop checking your shoes."
5. The Window View — "Let them back outside."
6. The Count — "3 dogs. 7 days. 42 piles. We got every one."
