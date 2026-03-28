#!/usr/bin/env python3
"""
TIDY TAILS Video Ad Generator
Doeboy prompts → Nano Banana 2 images → Kling v1 Standard 5-sec clips
Per TOOLS.md: no close-up faces, dogs from behind/distance, yard as star
"""

import os
import sys
import time
import json
import fal_client

FAL_KEY = "abad5c4b-dba3-465b-bde9-9e4d1b331fe0:d2046e7a2124c763f1f80cf2179a4c37"
os.environ["FAL_KEY"] = FAL_KEY

OUTPUT_DIR = "/Users/halpininc/.openclaw/workspace/dashboard/videos"

# === DOEBOY'S 3 CINEMATIC PROMPTS ===
# Rule: Yard = star. People at distance/silhouette. Dogs from behind/paws/tail. No close faces.
# Grass stays consistent. Cinematic, not AI-artificial.

PROMPTS = [
    {
        "id": "ad1_barefoot",
        "name": "The Barefoot Test",
        "concept": "Would you walk barefoot in YOUR yard?",
        "image_prompt": (
            "Lush green St. Louis suburban backyard, golden hour afternoon light, "
            "wide shot. Two small bare feet at bottom of frame stepping slowly onto bright green grass, "
            "seen from waist-down only. Ahead on the grass sits a single pile of dog waste, "
            "then another visible in the background. The yard is large, fenced wooden privacy fence, "
            "mature oak trees in background. Cinematic depth of field. Warm summer light. "
            "No faces visible. Photorealistic, not illustrated."
        ),
        "video_prompt": (
            "Cinematic slow push forward across a lush green suburban backyard lawn at golden hour. "
            "Camera moves at ground level, drifting slowly through the grass toward the wooden fence. "
            "Peaceful suburban yard. No people visible, just the yard. Warm afternoon light, slight breeze in trees. "
            "Photorealistic, cinematic quality."
        ),
    },
    {
        "id": "ad2_window_view",
        "name": "The Window View",
        "concept": "Let them back outside.",
        "image_prompt": (
            "View from inside a cozy suburban home looking out through a sliding glass door "
            "to a backyard. A golden retriever dog sits with its back to the camera, "
            "nose pressed against the glass, tail in frame, looking out at the grass. "
            "Outside: a green suburban backyard, fenced. Several brown piles of waste visible on grass. "
            "Warm interior lighting. No human faces. Wide shot. Photorealistic, cinematic."
        ),
        "video_prompt": (
            "A golden retriever dog (seen from behind only, tail wagging) sits at a glass sliding door "
            "looking out at a green suburban backyard. Camera slowly pulls back to reveal the dog from a wider angle. "
            "Warm afternoon light through the glass. Peaceful domestic scene. No human faces visible. "
            "Photorealistic, cinematic quality."
        ),
    },
    {
        "id": "ad3_before_after",
        "name": "The Count",
        "concept": "3 dogs. 7 days. We got every one.",
        "image_prompt": (
            "Split scene: left side shows a St. Louis suburban backyard in overcast daylight, "
            "green grass dotted with multiple brown piles of dog waste visible throughout the yard. "
            "Right side shows the SAME backyard, now perfectly clean green grass, a person's gloved hand "
            "just visible at the edge holding a green waste bag, walking away from camera (back to viewer). "
            "Wooden privacy fence background. Wide shot. Photorealistic. No faces."
        ),
        "video_prompt": (
            "A person in a bright green polo shirt is seen from behind, walking slowly across "
            "a green suburban lawn with a waste collection bag, systematically cleaning the yard. "
            "Overcast natural daylight. Wide shot, full yard visible. Wooden fence in background. "
            "Professional, methodical movement. No faces visible. Photorealistic, cinematic."
        ),
    },
]


def generate_image(prompt_data):
    """Step 1: Nano Banana 2 image generation"""
    print(f"\n[IMAGE] Generating image for: {prompt_data['name']}")
    print(f"  Prompt: {prompt_data['image_prompt'][:80]}...")
    
    try:
        result = fal_client.subscribe(
            "fal-ai/nano-banana",
            arguments={
                "prompt": prompt_data["image_prompt"],
                "image_size": "landscape_16_9",
                "num_inference_steps": 28,
                "guidance_scale": 7.5,
                "num_images": 1,
                "enable_safety_checker": False,
            },
            with_logs=False,
        )
        
        if result and result.get("images"):
            image_url = result["images"][0]["url"]
            print(f"  ✅ Image generated: {image_url[:60]}...")
            return image_url
        else:
            print(f"  ❌ No image in result: {result}")
            return None
    except Exception as e:
        print(f"  ❌ Image gen failed: {e}")
        return None


def submit_video(prompt_data, image_url):
    """Step 2: Submit to Kling v1 Standard (async) — returns request_id"""
    print(f"\n[VIDEO] Submitting to Kling v1 Standard for: {prompt_data['name']}")
    
    try:
        handler = fal_client.submit(
            "fal-ai/kling-video/v1/standard/image-to-video",
            arguments={
                "prompt": prompt_data["video_prompt"],
                "image_url": image_url,
                "duration": "5",
                "aspect_ratio": "16:9",
            },
        )
        request_id = handler.request_id
        print(f"  ✅ Video submitted, request_id: {request_id}")
        return request_id
    except Exception as e:
        print(f"  ❌ Video submit failed: {e}")
        return None


def poll_video(request_id, prompt_data, max_wait=600):
    """Step 3: Poll for video completion — fal_client returns InProgress/Completed/Failed objects"""
    print(f"\n[POLL] Waiting for video: {prompt_data['name']} (id: {request_id})")
    start = time.time()
    
    while time.time() - start < max_wait:
        try:
            status = fal_client.status(
                "fal-ai/kling-video/v1/standard/image-to-video",
                request_id,
                with_logs=False,
            )
            
            status_name = type(status).__name__
            elapsed = int(time.time() - start)
            
            if status_name == "Completed":
                result = fal_client.result(
                    "fal-ai/kling-video/v1/standard/image-to-video",
                    request_id
                )
                # Try various result shapes
                video_url = None
                if hasattr(result, 'video') and hasattr(result.video, 'url'):
                    video_url = result.video.url
                elif isinstance(result, dict):
                    if result.get('video', {}).get('url'):
                        video_url = result['video']['url']
                    elif result.get('video_url'):
                        video_url = result['video_url']
                
                if video_url:
                    print(f"  ✅ Video ready ({elapsed}s): {video_url[:70]}...")
                    return video_url
                else:
                    print(f"  ❌ Completed but no video URL. Result: {result}")
                    return None
                    
            elif status_name in ("Failed", "Error"):
                print(f"  ❌ Video failed ({elapsed}s): {status}")
                return None
            else:
                print(f"  ⏳ {status_name} ({elapsed}s elapsed)...")
            
            time.sleep(20)
            
        except Exception as e:
            print(f"  ⚠️  Poll error (will retry): {e}")
            time.sleep(20)
    
    print(f"  ❌ Timeout after {max_wait}s")
    return None


def download_file(url, dest_path, label="file"):
    """Download using curl -sL (SSL issues with Python urllib on Mac)"""
    print(f"  📥 Downloading {label}...")
    os.system(f'curl -sL "{url}" -o "{dest_path}"')
    size = os.path.getsize(dest_path) if os.path.exists(dest_path) else 0
    print(f"  ✅ Saved: {dest_path} ({size:,} bytes)")
    return size > 1000


def main():
    print("=" * 60)
    print("TIDY TAILS VIDEO AD PIPELINE")
    print("Doeboy Prompts → Nano Banana 2 → Kling v1 Standard")
    print("=" * 60)
    
    results = {}
    image_urls = {}
    
    # Phase 1: Generate all 3 images first
    print("\n=== PHASE 1: IMAGE GENERATION (Nano Banana 2) ===")
    for p in PROMPTS:
        img_url = generate_image(p)
        if img_url:
            image_urls[p["id"]] = img_url
            # Download image
            img_path = os.path.join(OUTPUT_DIR, f"{p['id']}_frame.jpg")
            download_file(img_url, img_path, f"image {p['id']}")
        else:
            print(f"  ⚠️  Skipping video for {p['name']} — no image")
        time.sleep(2)
    
    # Phase 2: Submit all videos (batch)
    print("\n=== PHASE 2: VIDEO SUBMISSION (Kling v1 Standard) ===")
    request_ids = {}
    for p in PROMPTS:
        if p["id"] in image_urls:
            req_id = submit_video(p, image_urls[p["id"]])
            if req_id:
                request_ids[p["id"]] = req_id
        time.sleep(3)
    
    # Phase 3: Poll all videos
    print("\n=== PHASE 3: VIDEO POLLING ===")
    video_urls = {}
    for p in PROMPTS:
        if p["id"] in request_ids:
            vid_url = poll_video(request_ids[p["id"]], p, max_wait=360)
            if vid_url:
                video_urls[p["id"]] = vid_url
                vid_path = os.path.join(OUTPUT_DIR, f"{p['id']}_clip.mp4")
                download_file(vid_url, vid_path, f"video {p['id']}")
                results[p["id"]] = {
                    "name": p["name"],
                    "concept": p["concept"],
                    "image_url": image_urls.get(p["id"]),
                    "video_url": vid_url,
                    "video_file": f"{p['id']}_clip.mp4",
                    "status": "complete",
                }
            else:
                results[p["id"]] = {
                    "name": p["name"],
                    "concept": p["concept"],
                    "image_url": image_urls.get(p["id"]),
                    "video_url": None,
                    "status": "failed",
                }
    
    # Save manifest
    manifest_path = os.path.join(OUTPUT_DIR, "manifest.json")
    with open(manifest_path, "w") as f:
        json.dump({
            "generated": time.strftime("%Y-%m-%d %H:%M CST"),
            "pipeline": "Nano Banana v2 → Kling v1 Standard",
            "ads": results
        }, f, indent=2)
    
    # Summary
    print("\n" + "=" * 60)
    print("PIPELINE COMPLETE")
    print("=" * 60)
    complete = sum(1 for r in results.values() if r["status"] == "complete")
    print(f"  ✅ Videos generated: {complete}/3")
    for pid, r in results.items():
        status_icon = "✅" if r["status"] == "complete" else "❌"
        print(f"  {status_icon} {r['name']}: {r['status']}")
    print(f"\n  Output dir: {OUTPUT_DIR}")
    print(f"  Manifest: {manifest_path}")
    
    return complete > 0


if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
