#!/usr/bin/env python3
"""Basquiat 🎨 - fal.ai Video Ad Generator
Pipeline: Nano Banana 2 (frames) → Kling v3 Standard (video)
"""
import json, os, sys, time, urllib.request, urllib.error, ssl

# Fix SSL certificate verification
ssl._create_default_https_context = ssl._create_unverified_context

# Force unbuffered output
sys.stdout.reconfigure(line_buffering=True)
sys.stderr.reconfigure(line_buffering=True)

FAL_KEY = "abad5c4b-dba3-465b-bde9-9e4d1b331fe0:d2046e7a2124c763f1f80cf2179a4c37"
OUTDIR = "/Users/halpininc/.openclaw/workspace/ad-creative/basquiat-videos-mar6"
HEADERS = {
    "Authorization": f"Key {FAL_KEY}",
    "Content-Type": "application/json"
}

# Track costs
costs = []

def fal_request(url, data=None):
    """Make a request to fal.ai API"""
    if data:
        req = urllib.request.Request(url, json.dumps(data).encode(), HEADERS)
    else:
        req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        print(f"  HTTP {e.code}: {body}")
        return {"error": body, "status_code": e.code}

def submit_image(prompt):
    """Submit a Nano Banana 2 image generation request"""
    return fal_request("https://queue.fal.run/fal-ai/nano-banana-2", {
        "prompt": prompt,
        "num_images": 1,
        "aspect_ratio": "16:9",
        "output_format": "png"
    })

def poll_status(model_path, request_id, max_wait=300, interval=5):
    """Poll until complete or failed"""
    url = f"https://queue.fal.run/{model_path}/requests/{request_id}/status"
    elapsed = 0
    while elapsed < max_wait:
        time.sleep(interval)
        elapsed += interval
        result = fal_request(url)
        status = result.get("status", "UNKNOWN")
        if status == "COMPLETED":
            return True
        if status == "FAILED":
            print(f"  ❌ FAILED")
            return False
        if elapsed % 30 == 0:
            print(f"  ... {status} ({elapsed}s)")
    print(f"  ❌ TIMEOUT after {max_wait}s")
    return False

def get_result(model_path, request_id):
    """Get the result of a completed request"""
    return fal_request(f"https://queue.fal.run/{model_path}/requests/{request_id}")

def download(url, filepath):
    """Download a file"""
    urllib.request.urlretrieve(url, filepath)
    return os.path.getsize(filepath)

def submit_video(image_url, prompt):
    """Submit a Kling v3 video generation request"""
    return fal_request("https://queue.fal.run/fal-ai/kling-video/v3/standard/image-to-video", {
        "start_image_url": image_url,
        "prompt": prompt,
        "duration": "5"
    })

# ============================================================
# FRAME PROMPTS: 10 concepts × 3 frames
# ============================================================
CONCEPTS = {
    "01-poop-timeline": {
        "frames": [
            "A beautiful clean green suburban backyard on a sunny day, perfectly manicured lawn, no debris, bright sunlight, white picket fence in background, photorealistic, 4K quality",
            "A suburban backyard with green lawn, slightly overcast sky, 3-4 visible piles of dog poop scattered across the grass, some yellowing spots around piles, slightly unkempt edges, same white picket fence, photorealistic",
            "A suburban backyard looking neglected and disgusting, dozens of dog poop piles covering the lawn everywhere, brown dead patches, overgrown edges, flies buzzing, same white picket fence, messy and gross, photorealistic"
        ],
        "video_prompt": "Camera slowly pans across a suburban backyard as dog poop piles gradually appear on the green lawn over time, time-lapse effect showing the yard getting messier and more neglected"
    },
    "02-csi-shot": {
        "frames": [
            "Aerial birds-eye view of a normal suburban backyard with green lawn, patio furniture, wooden fence, peaceful neighborhood, photorealistic drone shot, daylight",
            "Aerial birds-eye view of a suburban backyard with yellow crime scene tape stretched across the yard, a few small orange numbered evidence markers placed on the grass near dark spots, dramatic afternoon lighting, CSI style",
            "Aerial birds-eye view of a suburban backyard as a full crime scene, yellow police tape criss-crossing everywhere, dozens of numbered orange evidence markers next to each pile of dog poop, dramatic forensic lighting, CSI investigation style"
        ],
        "video_prompt": "Camera slowly descends into a suburban backyard from above as yellow crime scene tape and numbered evidence markers dramatically appear around dog poop piles, CSI investigation style reveal"
    },
    "03-smell-o-vision": {
        "frames": [
            "Beautiful peaceful morning backyard scene, golden sunrise light streaming in, morning dew glistening on green grass, serene peaceful atmosphere, soft warm lighting, photorealistic, cinematic",
            "Close-up of bare human feet about to step onto dewy green grass in a backyard, toes reaching toward the lawn, morning golden light, photorealistic, ground level camera angle",
            "Close-up of a bare foot that has just stepped directly into a pile of dog poop on grass, poop squishing under the foot, disgusting moment captured, morning light, photorealistic"
        ],
        "video_prompt": "Close-up following bare feet walking across dewy morning grass, stepping carefully then accidentally stepping directly into a pile of dog poop, reaction moment, ground level camera"
    },
    "04-fake-text-thread": {
        "frames": [
            "iPhone screen showing the start of a clean iMessage text conversation, iOS interface with a contact name 'Mike' at top, one blue message bubble saying 'Hey!', white background, photorealistic phone screenshot, sharp text",
            "iPhone iMessage conversation screen showing blue bubble 'Cookout at my place this Saturday!!' then gray reply 'Awesome! I'll bring burgers' then blue bubble 'Actually... let's just do it inside', clean iOS interface, photorealistic",
            "iPhone iMessage conversation showing the final messages: gray bubble 'lol is it the yard again?' blue bubble 'don't judge me 😭' gray bubble '💩💩💩💩💩', funny embarrassing text exchange, clean iOS interface, photorealistic screenshot"
        ],
        "video_prompt": "iPhone screen with iMessage text bubbles appearing one by one in a conversation about a cookout, messages typing and sending with smooth animations, phone screen recording style"
    },
    "05-google-maps-zoom": {
        "frames": [
            "Satellite view of planet Earth from space, North America clearly visible, dramatic deep space photography, blue marble with white clouds, photorealistic NASA-style image, dark space background",
            "Aerial satellite view zoomed into the St. Louis Missouri metro area, showing the Mississippi River, Gateway Arch area, suburban neighborhoods spreading outward, Google Maps satellite imagery style",
            "Extreme close-up satellite aerial view of a single suburban backyard with several visible dark spots (dog poop piles) scattered across the lawn, a large red GPS location pin dropping onto the yard, Google Maps style interface"
        ],
        "video_prompt": "Smooth continuous satellite zoom from space view of Earth down through clouds, zooming into St. Louis Missouri, continuing to zoom into a suburban neighborhood and finally revealing a single messy backyard with a GPS pin dropping"
    },
    "06-math-problem": {
        "frames": [
            "Green classroom chalkboard, clean and mostly empty, only the words 'POP QUIZ' written in large white chalk letters at the top center, wooden chalk tray at bottom, dramatic classroom lighting, photorealistic",
            "Green classroom chalkboard with chalk writing showing a math equation: '1 dog × 2 poops/day × 7 days = ?' written in white chalk, neat teacher handwriting, poop emoji drawn in chalk, school classroom style",
            "Green chalkboard covered in chalk writing, showing the large answer '= 14 poops!' in yellow chalk, below it '2 dogs = 28!!' in white chalk, and at the bottom in a chalk-drawn box 'CALL TIDY TAILS 314-850-7140', chalk dust visible"
        ],
        "video_prompt": "Camera focused on a green chalkboard as white chalk text appears progressively, writing out a math equation about how many poops dogs produce per week, numbers appearing dramatically"
    },
    "07-dog-review": {
        "frames": [
            "Close-up portrait of a happy golden retriever looking directly at the camera with big brown eyes, tongue out and panting happily, warm studio lighting, professional pet photography, sharp detail, photorealistic, 4K",
            "Close-up of a happy golden retriever with a translucent digital 5-star rating overlay appearing above the dog's head, five gold stars in a row, a white speech bubble forming near the dog's mouth, professional photography",
            "Happy golden retriever close-up portrait with a complete Google-style 5-star review card overlay, five gold stars, speech bubble containing the quote 'Finally. A professional.' in clean text, review by 'Buddy the Dog', professional photography"
        ],
        "video_prompt": "Close-up of a happy golden retriever looking at camera, subtle happy head tilt, a 5-star review card smoothly fades in above the dog with a speech bubble quote appearing"
    },
    "08-real-estate-angle": {
        "frames": [
            "Beautiful suburban two-story home exterior for sale, perfectly manicured green front yard, professional white FOR SALE sign with '$350,000' price, sunny blue sky day, curb appeal, real estate listing photo style, photorealistic",
            "Same suburban two-story home but the front yard has multiple visible scattered dog poop piles on the grass, slightly messy lawn, same white FOR SALE sign showing '$350,000', otherwise identical house, real estate photo style",
            "Same suburban home with messy front yard with dog poop everywhere, FOR SALE sign now showing '$335,000' with a large red diagonal 'PRICE REDUCED' stamp across the sign, yard still dirty and unappealing, real estate listing style"
        ],
        "video_prompt": "Camera slowly pans across a beautiful suburban home for sale, then reveals the messy yard full of dog poop, the price on the FOR SALE sign drops from $350,000 to $335,000 with a red PRICE REDUCED stamp"
    },
    "09-sixty-second-race": {
        "frames": [
            "Split screen comparison image divided cleanly down the middle. Left side: regular person labeled 'YOU' in casual clothes looking nervous holding a plastic grocery bag, standing in a backyard with dog poop. Right side: professional worker labeled 'THE PRO' in clean uniform with professional scooping equipment, same backyard, confident stance",
            "Split screen comparison. Left side: person struggling and gagging while trying to pick up dog poop with a thin plastic bag, face scrunched in disgust. Right side: professional worker efficiently and quickly scooping poop with proper equipment, calm and methodical, no struggle",
            "Split screen comparison. Left side: exhausted sweaty person STILL picking up poop, digital timer overlay showing '45:00', yard still has poop. Right side: professional standing proudly in a perfectly CLEAN yard, arms crossed, timer showing '5:00', large 'DONE' stamp, sparkling clean"
        ],
        "video_prompt": "Split screen race between an amateur struggling to clean up dog poop on the left and a professional efficiently cleaning on the right, timers counting up showing the pro finishes much faster"
    },
    "10-unboxing-parody": {
        "frames": [
            "Clean white minimalist surface with a mysterious sealed matte black premium gift box centered on it, dramatic moody spotlight lighting from above, Apple product unboxing aesthetic, luxurious and premium feeling, photorealistic",
            "Opened premium matte black box on white surface revealing professional-grade poop scooping equipment arranged artfully inside: a shiny stainless steel scoop, rolls of biodegradable green bags, heavy-duty black gloves, all laid out like luxury tech products, dramatic lighting",
            "Hero product shot of all professional poop scooping gear assembled and displayed like a premium product lineup: gleaming scoop standing upright, bags fanned out, gloves positioned perfectly, small waste bin, dramatic backlit product photography, clean white background"
        ],
        "video_prompt": "Dramatic tech-style unboxing reveal, camera looking down as a premium box lid slowly lifts open to reveal professional poop scooping equipment laid out like luxury products, dramatic lighting shifts"
    }
}

# ============================================================
# PHASE 1: Generate all 30 frames
# ============================================================
print("=" * 60)
print("🎨 BASQUIAT - Ad Creative Pipeline")
print("=" * 60)
print()
print("=== PHASE 1: Generating all 30 image frames ===")
print()

image_urls = {}  # filename -> url
image_request_ids = {}  # filename -> (request_id, concept_name)

# Submit ALL image requests first (parallel queue)
for concept_name, concept_data in CONCEPTS.items():
    print(f"📤 Submitting 3 frames for {concept_name}...")
    for i, prompt in enumerate(concept_data["frames"], 1):
        filename = f"{concept_name}-frame{i}.png"
        result = submit_image(prompt)
        
        if "error" in result:
            print(f"  ❌ Failed to submit {filename}: {result}")
            continue
        
        req_id = result.get("request_id")
        if req_id:
            image_request_ids[filename] = (req_id, concept_name)
            print(f"  ✓ {filename} → {req_id}")
        else:
            print(f"  ❌ No request_id for {filename}: {result}")

print(f"\n📊 Submitted {len(image_request_ids)} image requests")
print("⏳ Waiting for all images to complete...\n")

# Poll all requests until done
pending = dict(image_request_ids)  # copy
completed = 0
failed = 0
start_time = time.time()

while pending and (time.time() - start_time) < 600:  # 10 min max
    time.sleep(8)
    done_this_round = []
    
    for filename, (req_id, concept) in pending.items():
        status_result = fal_request(f"https://queue.fal.run/fal-ai/nano-banana-2/requests/{req_id}/status")
        status = status_result.get("status", "UNKNOWN")
        
        if status == "COMPLETED":
            # Get the result
            result = get_result("fal-ai/nano-banana-2", req_id)
            try:
                img_url = result["images"][0]["url"]
                filepath = os.path.join(OUTDIR, filename)
                fsize = download(img_url, filepath)
                image_urls[filename] = img_url
                completed += 1
                costs.append({"type": "image", "file": filename, "size": fsize, "cost": 0.08, "url": img_url})
                print(f"  ✅ {filename} ({fsize:,} bytes)")
                done_this_round.append(filename)
            except Exception as e:
                print(f"  ❌ Error downloading {filename}: {e}")
                failed += 1
                done_this_round.append(filename)
        
        elif status == "FAILED":
            print(f"  ❌ {filename} FAILED")
            failed += 1
            done_this_round.append(filename)
    
    for f in done_this_round:
        del pending[f]
    
    if pending:
        elapsed = int(time.time() - start_time)
        print(f"  ... {len(pending)} still pending ({elapsed}s elapsed)")

print(f"\n📊 Phase 1 Results: {completed} completed, {failed} failed, {len(pending)} timed out")
print(f"   Total image cost: ~${completed * 0.08:.2f}")

# ============================================================
# PHASE 2: Generate videos from frame1 of each concept
# ============================================================
print()
print("=== PHASE 2: Animating with Kling v3 Standard ===")
print()

video_request_ids = {}  # filename -> request_id

for concept_name, concept_data in CONCEPTS.items():
    frame1 = f"{concept_name}-frame1.png"
    video_file = f"{concept_name}.mp4"
    
    frame1_url = image_urls.get(frame1)
    if not frame1_url:
        print(f"⚠️ Skipping {video_file} - no frame1 URL")
        continue
    
    print(f"📤 Submitting video: {video_file}")
    result = submit_video(frame1_url, concept_data["video_prompt"])
    
    if "error" in result:
        print(f"  ❌ Failed: {result}")
        continue
    
    req_id = result.get("request_id")
    if req_id:
        video_request_ids[video_file] = (req_id, concept_name)
        print(f"  ✓ {video_file} → {req_id}")
    else:
        print(f"  ❌ No request_id: {result}")

print(f"\n📊 Submitted {len(video_request_ids)} video requests")
print("⏳ Waiting for videos (this takes a while, ~2-5 min each)...\n")

# Poll video requests
pending_videos = dict(video_request_ids)
v_completed = 0
v_failed = 0
v_start = time.time()
MODEL_PATH = "fal-ai/kling-video/v3/standard/image-to-video"

while pending_videos and (time.time() - v_start) < 1800:  # 30 min max
    time.sleep(15)
    done_this_round = []
    
    for filename, (req_id, concept) in pending_videos.items():
        status_result = fal_request(f"https://queue.fal.run/{MODEL_PATH}/requests/{req_id}/status")
        status = status_result.get("status", "UNKNOWN")
        
        if status == "COMPLETED":
            result = get_result(MODEL_PATH, req_id)
            try:
                vid_url = result["video"]["url"]
                filepath = os.path.join(OUTDIR, filename)
                fsize = download(vid_url, filepath)
                v_completed += 1
                costs.append({"type": "video", "file": filename, "size": fsize, "cost": 0.50, "url": vid_url})
                print(f"  ✅ {filename} ({fsize:,} bytes)")
                done_this_round.append(filename)
            except Exception as e:
                print(f"  ❌ Error downloading {filename}: {e} | result: {result}")
                v_failed += 1
                done_this_round.append(filename)
        
        elif status == "FAILED":
            print(f"  ❌ {filename} FAILED")
            v_failed += 1
            done_this_round.append(filename)
    
    for f in done_this_round:
        del pending_videos[f]
    
    if pending_videos:
        elapsed = int(time.time() - v_start)
        print(f"  ... {len(pending_videos)} videos pending ({elapsed}s elapsed)")

print(f"\n📊 Phase 2 Results: {v_completed} videos completed, {v_failed} failed, {len(pending_videos)} timed out")
print(f"   Total video cost: ~${v_completed * 0.50:.2f}")

# ============================================================
# SUMMARY
# ============================================================
total_cost = sum(c["cost"] for c in costs)
print()
print("=" * 60)
print(f"🎨 BASQUIAT COMPLETE")
print(f"   Images: {completed}/{len(image_request_ids)}")
print(f"   Videos: {v_completed}/{len(video_request_ids)}")
print(f"   Total Cost: ~${total_cost:.2f}")
print("=" * 60)

# Write summary
summary_path = os.path.join(OUTDIR, "summary.md")
with open(summary_path, "w") as f:
    f.write("# Basquiat 🎨 - Video Ad Generation Summary\n")
    f.write(f"**Date:** {time.strftime('%Y-%m-%d %H:%M')}\n")
    f.write(f"**Pipeline:** Nano Banana 2 → Kling v3 Standard\n\n")
    f.write(f"## Results\n")
    f.write(f"- Images generated: {completed}/{len(image_request_ids)}\n")
    f.write(f"- Videos generated: {v_completed}/{len(video_request_ids)}\n")
    f.write(f"- Total estimated cost: ~${total_cost:.2f}\n\n")
    
    f.write("## Files\n\n")
    f.write("### Images (Nano Banana 2)\n")
    for c in costs:
        if c["type"] == "image":
            f.write(f"- `{c['file']}` - {c['size']:,} bytes (~${c['cost']:.2f})\n")
    
    f.write("\n### Videos (Kling v3 Standard)\n")
    for c in costs:
        if c["type"] == "video":
            f.write(f"- `{c['file']}` - {c['size']:,} bytes (~${c['cost']:.2f})\n")
    
    if pending:
        f.write("\n### Failed/Timed Out Images\n")
        for fn in pending:
            f.write(f"- `{fn}` - did not complete\n")
    
    if pending_videos:
        f.write("\n### Failed/Timed Out Videos\n")
        for fn in pending_videos:
            f.write(f"- `{fn}` - did not complete\n")

# Also write a JSON manifest for easy parsing
manifest_path = os.path.join(OUTDIR, "manifest.json")
with open(manifest_path, "w") as f:
    json.dump({
        "generated_at": time.strftime('%Y-%m-%dT%H:%M:%S'),
        "images_completed": completed,
        "videos_completed": v_completed,
        "total_cost": round(total_cost, 2),
        "files": costs,
        "image_urls": image_urls
    }, f, indent=2)

print(f"\n📝 Summary written to {summary_path}")
print(f"📝 Manifest written to {manifest_path}")
