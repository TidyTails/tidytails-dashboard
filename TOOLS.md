# TOOLS.md - Local Notes

Skills define *how* tools work. This file is for *your* specifics — the stuff that's unique to your setup.

---

## 🎬 VIDEO WORKFLOW — THE ONLY PIPELINE (MANDATORY)

### Full Chain: Doeboy → Nano Banana 2 → Kling v1 Standard

**Step 1:** DOEBOY writes 3 creative visual prompts (cinematic scene descriptions)
**Step 2:** BASQUIAT feeds prompts to Nano Banana 2 (fal.ai) → generates 3 AI images
**Step 3:** BASQUIAT feeds those AI images to **Kling v1 Standard** (fal.ai) → 3 animated 5-sec clips
**Step 4:** Combine clips into final ~15 sec video **+ ADD MUSIC/SOUND**

### ⚠️ CORRECT API ENDPOINTS (VERIFIED — Mar 5 batch = GOOD, Mar 25 batch = BAD)
- **Image gen:** `fal-ai/nano-banana/v2`
- **Video gen:** `fal-ai/kling-video/v1/standard/image-to-video` ← THIS IS THE ONLY CORRECT ONE
- ⚠️ **NOT v2, NOT v3** — v1 Standard produced the 6 great videos on Mar 5. The Mar 25 batch used wrong endpoint → distorted faces/dogs. This is the #1 root cause.
- **Status check:** `fal-ai/kling-video/requests/{req_id}/status` (different path than submission!)
- **Result fetch:** Use `fal_client.result()` Python SDK, NOT raw curl (SSL issues on Mac)
- **Download:** Use `curl -sL` not Python urllib (SSL cert verification fails)

### ❌ NEVER DO THESE (TJ WILL BE PISSED):
- ❌ NEVER feed existing product photos directly to Kling (skips Nano Banana = WRONG)
- ❌ NEVER use Remotion for ad videos
- ❌ NEVER make slideshows or static image videos
- ❌ NEVER skip the Doeboy prompt step — he writes the visual prompts, Basquiat executes
- ❌ NEVER have Basquiat write his own prompts
- ❌ NEVER put text/words on trucks, vans, uniforms, or equipment — AI CANNOT render text
- ❌ NEVER show close-up human faces or dog faces head-on — distortion risk too high
- ❌ NEVER deliver videos without music/sound — ALL videos MUST have audio
- ❌ NEVER use any Kling endpoint other than v1 Standard

### ✅ SHOT COMPOSITION RULES (PREVENT FACE DISTORTION):
- People at MID or WIDE shot distance ONLY — silhouettes, backs turned, hands-only, feet-only
- Dogs from BEHIND or at a distance — tail wagging, running away, paws on grass, NOT face-on
- Focus on THE YARD as the star, not the people or animals
- Grass stays SAME COLOR throughout — only poop appears/disappears
- No color grading shifts between frames (overcast→golden hour is OK, dead grass→green is NOT)

### 🎵 AUDIO REQUIREMENT (MANDATORY):
- Every video MUST have background music or sound effects
- The Mar 5 batch had audio — the Mar 25 batch didn't — TJ noticed immediately
- Use royalty-free/stock music: upbeat for lifestyle ads, urgent/tense for "panic" ads
- Add music in ffmpeg during final assembly step

### 🔍 QUALITY GATE — CHECK BEFORE DELIVERING TO TJ:
1. ✅ No distorted faces (human or animal) — if ANY face looks off, re-generate
2. ✅ No mangled/illegible text on any object
3. ✅ Grass color stays consistent across all frames
4. ✅ Audio/music is present and appropriate
5. ✅ Story is clear without needing explanation
6. ✅ Used correct endpoint (v1 Standard)
7. **If ANY of these fail → re-generate. Do NOT deliver garbage. Wasted credits < wasted trust.**

### Costs
- **Nano Banana 2 image:** ~$0.05-0.10 per image
- **Kling v1 Standard video (5 sec):** ~$0.50 per clip
- **Per finished ad (3 clips + frames):** ~$1.50-2.50
- **Platform:** fal.ai (FAL_KEY in .env)
- ⚠️ Credits burn fast — check balance BEFORE starting a batch
- ⚠️ Credits exhausted twice on Mar 5 — always verify availability first

### Mar 5 Successful Videos (REFERENCE — these were GOOD):
1. Barefoot Test — "Would you walk barefoot in YOUR yard?"
2. Party's Coming — "Cookout this weekend? Your yard isn't ready."
3. Dog's POV — "Your dog deserves better."
4. The Shoe Check — "Stop checking your shoes."
5. The Window View — "Let them back outside."
6. The Count — "3 dogs. 7 days. 42 piles. We got every one."

### Mar 25 Failed Videos (REFERENCE — these were BAD):
- "Get Your Yard Back" and "The Party Panic" — distorted faces, no audio, wrong endpoint
- Root causes: wrong Kling version, close-up faces in prompts, no music added, no QA gate

---

## What Goes Here

Things like:
- Camera names and locations
- SSH hosts and aliases  
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

---

Add whatever helps you do your job. This is your cheat sheet.
