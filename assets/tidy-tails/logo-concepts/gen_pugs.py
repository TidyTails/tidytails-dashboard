import fal_client
import urllib.request
import os
import ssl

os.environ["FAL_KEY"] = "abad5c4b-dba3-465b-bde9-9e4d1b331fe0:d2046e7a2124c763f1f80cf2179a4c37"

OUTPUT_DIR = "/Users/halpininc/.openclaw/workspace/assets/tidy-tails/logo-concepts"

def download(url, path):
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    with urllib.request.urlopen(url, context=ctx) as r:
        with open(path, "wb") as f:
            f.write(r.read())
    print(f"Saved: {path} ({os.path.getsize(path)} bytes)")

print("Generating Sticker Pug...")
result1 = fal_client.subscribe(
    "fal-ai/flux/schnell",
    arguments={
        "prompt": "Modern cartoon pug dog mascot, cute friendly pug face with big eyes, wearing a small green collar, clean sticker illustration style with bold white outline, flat design, bright green and white color palette, centered on white background, no text, no words, professional mascot art, high quality 2026 brand illustration",
        "image_size": "square_hd",
        "num_inference_steps": 4,
        "num_images": 1,
    },
    with_logs=True,
    on_queue_update=lambda u: print(f"  Queue: {u.status}" if hasattr(u, 'status') else "  Processing..."),
)
sticker_url = result1["images"][0]["url"]
print(f"Sticker URL: {sticker_url}")
download(sticker_url, f"{OUTPUT_DIR}/pug-sticker-raw.png")

print("\nGenerating Badge Pug...")
result2 = fal_client.subscribe(
    "fal-ai/flux/schnell",
    arguments={
        "prompt": "Circular badge design with cute cartoon pug face in center, navy blue and bright green color scheme, decorative circular border with small dots and lines, clean flat vector illustration style, centered composition, white background, no text, no words, premium pet care brand emblem",
        "image_size": "square_hd",
        "num_inference_steps": 4,
        "num_images": 1,
    },
    with_logs=True,
    on_queue_update=lambda u: print(f"  Queue: {u.status}" if hasattr(u, 'status') else "  Processing..."),
)
badge_url = result2["images"][0]["url"]
print(f"Badge URL: {badge_url}")
download(badge_url, f"{OUTPUT_DIR}/pug-badge-raw.png")

print("\nDone generating raw images!")
