import fal_client
import os
import subprocess

FAL_KEY = "abad5c4b-dba3-465b-bde9-9e4d1b331fe0:d2046e7a2124c763f1f80cf2179a4c37"
os.environ["FAL_KEY"] = FAL_KEY

OUTPUT_DIR = "/Users/halpininc/.openclaw/workspace/assets/tidy-tails/logo-concepts"

concepts = {
    "concept-A": "Modern minimalist pet care logo, cute cartoon dog silhouette with a wagging tail forming a checkmark, clean green and white color palette, professional sans-serif wordmark 'Tidy Tails STL' below, flat design, 2026 brand aesthetic, white background, high quality vector style illustration",
    "concept-B": "Bold playful logo for dog waste removal company, happy cartoon golden retriever with sparkly clean yard background, bright green grass, sunshine, modern mascot style, thick outlines, vibrant colors, text 'Tidy Tails STL' in bold rounded font, sticker style with drop shadow, white background, premium quality",
    "concept-C": "Premium local business logo for St. Louis pet waste removal service, circular badge design, illustrated dog paw print in center, clean navy blue and bright green color scheme, 'Tidy Tails STL' text arched around the top, 'Est. 2024' at bottom, professional emblem style, white background, high quality",
}

for name, prompt in concepts.items():
    print(f"\n🎨 Generating {name}...")
    result = fal_client.run(
        "fal-ai/flux/schnell",
        arguments={
            "prompt": prompt,
            "image_size": "square_hd",
            "num_inference_steps": 4,
            "num_images": 1,
        }
    )
    image_url = result["images"][0]["url"]
    print(f"  ✓ Got URL: {image_url[:80]}...")
    
    out_path = os.path.join(OUTPUT_DIR, f"{name}.png")
    subprocess.run(["curl", "-sL", "-o", out_path, image_url], check=True)
    size = os.path.getsize(out_path)
    print(f"  ✓ Saved to {out_path} ({size:,} bytes)")

print("\n✅ All 3 concepts generated!")
