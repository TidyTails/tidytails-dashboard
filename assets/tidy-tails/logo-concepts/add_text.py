from PIL import Image, ImageDraw, ImageFont
import os

OUTPUT_DIR = "/Users/halpininc/.openclaw/workspace/assets/tidy-tails/logo-concepts"

# Font fallback order
FONT_PATHS = [
    "/System/Library/Fonts/Helvetica.ttc",
    "/System/Library/Fonts/Arial.ttf",
    "/Library/Fonts/Arial Bold.ttf",
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
]

def get_font(size):
    for path in FONT_PATHS:
        if os.path.exists(path):
            try:
                font = ImageFont.truetype(path, size)
                print(f"  Using font: {path} @ {size}px")
                return font
            except Exception as e:
                print(f"  Failed {path}: {e}")
    # Try to find any .ttf
    import subprocess
    result = subprocess.run(
        "find /System/Library/Fonts -name '*.ttf' | head -1",
        shell=True, capture_output=True, text=True
    )
    ttf = result.stdout.strip()
    if ttf and os.path.exists(ttf):
        try:
            font = ImageFont.truetype(ttf, size)
            print(f"  Using font: {ttf} @ {size}px")
            return font
        except:
            pass
    print(f"  Falling back to default font")
    return ImageFont.load_default()

def add_text_below(img, text, font_size=70, text_color=(26, 26, 26), padding=40, bg_color=None):
    """Add text below the image with extra canvas space."""
    draw_test = ImageDraw.Draw(img)
    font = get_font(font_size)
    
    # Get text bounding box
    bbox = draw_test.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    
    orig_w, orig_h = img.size
    
    # Create new image with extra space below
    extra_height = text_h + padding * 2
    new_h = orig_h + extra_height
    
    if bg_color is None:
        bg_color = (255, 255, 255)  # white
    
    new_img = Image.new("RGB", (orig_w, new_h), bg_color)
    new_img.paste(img, (0, 0))
    
    draw = ImageDraw.Draw(new_img)
    
    # Center text horizontally, place below original image
    x = (orig_w - text_w) // 2
    y = orig_h + padding - bbox[1]  # adjust for ascent
    
    draw.text((x, y), text, font=font, fill=text_color)
    
    return new_img

def add_text_on_badge(img, text, font_size=60, padding_bottom=60):
    """Add text centered near bottom of the badge image."""
    draw = ImageDraw.Draw(img.copy())
    font = get_font(font_size)
    
    w, h = img.size
    
    # Get text bbox
    bbox = draw.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    
    # Sample the background color near where text will go
    # Bottom area of image
    y_pos = h - padding_bottom - text_h
    x_center = w // 2
    
    # Sample a few pixels to decide text color
    sample_pixels = []
    for dx in [-50, 0, 50]:
        px = img.getpixel((min(max(x_center + dx, 0), w-1), min(y_pos + text_h // 2, h-1)))
        sample_pixels.append(px)
    
    avg_brightness = sum(sum(p[:3]) / 3 for p in sample_pixels) / len(sample_pixels)
    
    # Use white text on dark bg, dark text on light bg
    if avg_brightness < 128:
        text_color = (255, 255, 255)  # white
        print(f"  Dark background detected (avg={avg_brightness:.0f}), using white text")
    else:
        text_color = (26, 26, 26)  # near black
        print(f"  Light background detected (avg={avg_brightness:.0f}), using dark text")
    
    result = img.copy()
    draw = ImageDraw.Draw(result)
    
    x = (w - text_w) // 2 - bbox[0]
    y = y_pos - bbox[1]
    
    draw.text((x, y), text, font=font, fill=text_color)
    
    return result


# ---- STICKER ----
print("Processing sticker...")
sticker = Image.open(f"{OUTPUT_DIR}/pug-sticker-raw.png").convert("RGB")
print(f"  Original size: {sticker.size}")

sticker_final = add_text_below(sticker, "Tidy Tails STL", font_size=72, text_color=(26, 26, 26), padding=35)
sticker_final.save(f"{OUTPUT_DIR}/final-sticker.png")
size = os.path.getsize(f"{OUTPUT_DIR}/final-sticker.png")
print(f"  Saved final-sticker.png: {size} bytes, dimensions: {sticker_final.size}")


# ---- BADGE ----
print("\nProcessing badge...")
badge = Image.open(f"{OUTPUT_DIR}/pug-badge-raw.png").convert("RGB")
print(f"  Original size: {badge.size}")

badge_final = add_text_on_badge(badge, "Tidy Tails STL", font_size=64, padding_bottom=55)
badge_final.save(f"{OUTPUT_DIR}/final-badge.png")
size = os.path.getsize(f"{OUTPUT_DIR}/final-badge.png")
print(f"  Saved final-badge.png: {size} bytes, dimensions: {badge_final.size}")

print("\n✅ Both finals saved!")
