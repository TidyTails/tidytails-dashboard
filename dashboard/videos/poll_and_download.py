#!/usr/bin/env python3
"""Poll Kling v1 Standard requests and download completed videos."""
import fal_client, os, sys, time, json

os.environ["FAL_KEY"] = "abad5c4b-dba3-465b-bde9-9e4d1b331fe0:d2046e7a2124c763f1f80cf2179a4c37"
OUTPUT_DIR = "/Users/halpininc/.openclaw/workspace/dashboard/videos"
ENDPOINT = "fal-ai/kling-video/v1/standard/image-to-video"

with open(f"{OUTPUT_DIR}/request_ids.json") as f:
    requests = json.load(f)

names = {
    "ad1_barefoot": "The Barefoot Test",
    "ad2_window_view": "The Window View",
    "ad3_before_after": "The Count",
}
concepts = {
    "ad1_barefoot": "Would you walk barefoot in YOUR yard?",
    "ad2_window_view": "Let them back outside.",
    "ad3_before_after": "3 dogs. 7 days. We got every one.",
}

completed = {}
pending = dict(requests)
start = time.time()
max_wait = 600

print(f"Polling {len(pending)} videos. Max wait: {max_wait}s")
print("=" * 50)

while pending and (time.time() - start) < max_wait:
    for ad_id, req_id in list(pending.items()):
        try:
            status = fal_client.status(ENDPOINT, req_id, with_logs=False)
            sname = type(status).__name__
            elapsed = int(time.time() - start)
            
            if sname == "Completed":
                result = fal_client.result(ENDPOINT, req_id)
                # Extract video URL from result
                video_url = None
                if hasattr(result, 'video') and hasattr(result.video, 'url'):
                    video_url = result.video.url
                elif isinstance(result, dict):
                    v = result.get('video') or {}
                    video_url = v.get('url') if isinstance(v, dict) else v
                
                if video_url:
                    # Download
                    out_path = f"{OUTPUT_DIR}/{ad_id}_clip.mp4"
                    os.system(f'curl -sL "{video_url}" -o "{out_path}"')
                    size = os.path.getsize(out_path) if os.path.exists(out_path) else 0
                    print(f"✅ {names[ad_id]}: downloaded {size:,} bytes → {ad_id}_clip.mp4")
                    completed[ad_id] = {"video_url": video_url, "file": f"{ad_id}_clip.mp4", "size": size}
                    del pending[ad_id]
                else:
                    print(f"✅ {names[ad_id]}: COMPLETED but no URL. Result: {result}")
                    del pending[ad_id]
                    
            elif sname in ("Failed", "Error"):
                print(f"❌ {names[ad_id]}: FAILED at {elapsed}s")
                del pending[ad_id]
            else:
                print(f"⏳ {names[ad_id]}: {sname} ({elapsed}s)")
        except Exception as e:
            print(f"⚠️  {ad_id} poll error: {e}")
    
    if pending:
        time.sleep(20)

print("\n" + "=" * 50)
print(f"DONE. {len(completed)}/3 videos ready.")
for ad_id, info in completed.items():
    print(f"  ✅ {names[ad_id]}: {info['file']} ({info['size']:,} bytes)")

# Update manifest
manifest_path = f"{OUTPUT_DIR}/manifest.json"
with open(manifest_path) as f:
    manifest = json.load(f)

for ad_id, info in completed.items():
    if ad_id in manifest["ads"]:
        manifest["ads"][ad_id]["video_url"] = info["video_url"]
        manifest["ads"][ad_id]["video_file"] = info["file"]
        manifest["ads"][ad_id]["status"] = "complete"

manifest["generated"] = time.strftime("%Y-%m-%d %H:%M CST")
with open(manifest_path, "w") as f:
    json.dump(manifest, f, indent=2)
print(f"Manifest updated: {manifest_path}")
