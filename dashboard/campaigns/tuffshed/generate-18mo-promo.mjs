import { fal } from "@fal-ai/client";
import { writeFile, readFile } from "fs/promises";
import { execSync } from "child_process";
import { join } from "path";

const FAL_KEY = "abad5c4b-dba3-465b-bde9-9e4d1b331fe0:d2046e7a2124c763f1f80cf2179a4c37";
fal.config({ credentials: FAL_KEY });

const OUT_DIR = "/Users/halpininc/.openclaw/workspace/dashboard/campaigns/tuffshed";

const imagePrompts = [
  "Cinematic golden hour shot of a dad and his teenage daughter building a custom guitar together inside a beautifully lit backyard workshop, sawdust floating in warm light beams streaming through large windows, pegboard walls lined with organized tools, shallow depth of field with the shed's barn-style exterior visible through the open double doors.",
  "Wide aerial drone shot pulling back to reveal a stunning modern she-shed with French doors thrown open onto a flagstone patio, a woman inside lounging on a velvet couch with string lights and potted plants everywhere, early spring Missouri sunset painting the sky orange and pink behind mature oak trees, the whole backyard glowing.",
  "Dynamic low-angle shot of a man finishing a deadlift inside a rugged home gym shed, rubber flooring and concrete walls with motivational posters, garage-style door rolled wide open to a bright spring morning, dogwood trees blooming in the suburban backyard beyond, sweat and determination lit by dramatic side light."
];

const videoMotionPrompts = [
  "Slow cinematic dolly push-in through the workshop doors, gentle camera drift with floating sawdust particles, warm golden light flickering",
  "Smooth aerial pullback revealing the full backyard, gentle swaying of tree branches in the breeze, sunset light slowly shifting across the scene",
  "Slow dramatic camera rise from low angle, subtle movement of the athlete breathing, morning light rays shifting through the open garage door"
];

async function main() {
  // STEP 1: Generate 3 images with Nano Banana 2
  console.log("=== STEP 1: Generating 3 images with Nano Banana 2 ===");
  const imageUrls = [];
  
  for (let i = 0; i < 3; i++) {
    console.log(`Generating image ${i + 1}/3...`);
    const result = await fal.subscribe("fal-ai/nano-banana-2", {
      input: {
        prompt: imagePrompts[i],
        image_size: "landscape_16_9",
        num_images: 1
      },
      logs: true,
      onQueueUpdate: (update) => {
        if (update.status === "IN_QUEUE") console.log(`  Image ${i+1} queued...`);
        if (update.status === "IN_PROGRESS") console.log(`  Image ${i+1} in progress...`);
      }
    });
    
    const url = result.data.images[0].url;
    imageUrls.push(url);
    console.log(`  Image ${i + 1} URL: ${url}`);
    
    // Download image for reference
    const resp = await fetch(url);
    const buf = Buffer.from(await resp.arrayBuffer());
    await writeFile(join(OUT_DIR, `scene-${i+1}.png`), buf);
    console.log(`  Saved scene-${i+1}.png`);
  }

  // STEP 2: Animate each image with Kling v3 Standard
  console.log("\n=== STEP 2: Animating images with Kling v3 Standard ===");
  const videoUrls = [];

  for (let i = 0; i < 3; i++) {
    console.log(`Animating image ${i + 1}/3 with Kling v3...`);
    const result = await fal.subscribe("fal-ai/kling-video/v3/standard/image-to-video", {
      input: {
        prompt: videoMotionPrompts[i],
        image_url: imageUrls[i],
        duration: "5",
        aspect_ratio: "16:9"
      },
      logs: true,
      onQueueUpdate: (update) => {
        if (update.status === "IN_QUEUE") console.log(`  Video ${i+1} queued...`);
        if (update.status === "IN_PROGRESS") console.log(`  Video ${i+1} in progress...`);
      }
    });

    const url = result.data.video.url;
    videoUrls.push(url);
    console.log(`  Video ${i + 1} URL: ${url}`);

    // Download clip
    const resp = await fetch(url);
    const buf = Buffer.from(await resp.arrayBuffer());
    await writeFile(join(OUT_DIR, `clip-${i+1}.mp4`), buf);
    console.log(`  Saved clip-${i+1}.mp4`);
  }

  // STEP 3: Combine clips into one MP4
  console.log("\n=== STEP 3: Combining clips into final MP4 ===");
  
  const concatFile = join(OUT_DIR, "concat.txt");
  const concatContent = [1, 2, 3].map(i => `file 'clip-${i}.mp4'`).join("\n");
  await writeFile(concatFile, concatContent);

  const finalPath = join(OUT_DIR, "2026-03-11-18mo-promo-video-FINAL.mp4");
  
  execSync(`ffmpeg -y -f concat -safe 0 -i "${concatFile}" -c:v libx264 -preset fast -crf 20 -pix_fmt yuv420p -movflags +faststart "${finalPath}"`, {
    stdio: "inherit"
  });

  console.log(`\n✅ DONE! Final video saved to: ${finalPath}`);
}

main().catch(err => {
  console.error("FATAL ERROR:", err);
  process.exit(1);
});
