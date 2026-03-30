import fal_client
import os
import urllib.request
import ssl

os.environ["FAL_KEY"] = "abad5c4b-dba3-465b-bde9-9e4d1b331fe0:d2046e7a2124c763f1f80cf2179a4c37"

OUTPUT_DIR = "/Users/halpininc/.openclaw/workspace/assets/tidy-tails/logo-concepts"

concepts = {
    "concept-D": "Modern cartoon pug dog mascot logo, cute pug wearing a small green bow tie, sitting proudly, clean yard in background with sparkly grass, sticker style with bold white outline and subtle drop shadow, flat illustration style, vibrant but clean colors, green and white palette, no text, white background, 2026 brand quality, professional mascot illustration",
    "concept-E": "Cute cartoon pug mascot holding a tiny scoop or rake, cheerful expression, cartoon poop emoji in background with an X through it, clean modern illustration style, thick outlines, bright green and white color scheme, sticker format with white border, playful but professional, white background, high quality flat design",
    "concept-F": "Circular badge logo design, cartoon pug face in center, clean green and dark navy border, badge has decorative lines and stars around edge, text area at top and bottom of circle (no actual text rendered), professional emblem style, pet care business, flat vector illustration, white background, premium quality",
    "concept-G": "Shield crest logo design for pet waste removal company, cute pug dog face centered in shield shape, green and navy color scheme, clean bold outlines, small paw prints in corners of shield, vintage badge style meets modern flat design, professional quality, white background, no text",
}

for name, prompt in concepts.items():
    print(f"\nGenerating {name}...")
    try:
        result = fal_client.run(
            "fal-ai/flux/schnell",
            arguments={
                "prompt": prompt,
                "image_size": "square_hd",
                "num_inference_steps": 4,
                "num_images": 1,
                "enable_safety_checker": False,
            }
        )
        image_url = result["images"][0]["url"]
        print(f"  URL: {image_url}")
        
        out_path = os.path.join(OUTPUT_DIR, f"{name}.png")
        
        # Download with curl to avoid SSL issues
        os.system(f'curl -sL "{image_url}" -o "{out_path}"')
        
        if os.path.exists(out_path):
            size = os.path.getsize(out_path)
            print(f"  Saved: {out_path} ({size:,} bytes)")
        else:
            print(f"  ERROR: File not saved!")
    except Exception as e:
        print(f"  ERROR: {e}")

print("\nDone!")
