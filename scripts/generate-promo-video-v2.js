#!/usr/bin/env node
/**
 * 18 MONTHS SAME AS CASH Promo Video — fal.ai Kling v3 Pipeline
 * 
 * Workflow:
 * 1. Upload 3 shed photos to fal.ai storage
 * 2. Animate each with Kling v3 Standard (image-to-video)
 * 3. Download the 3 clips
 * 4. Concatenate with ffmpeg into final ~15s video
 */

require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const { fal } = require('@fal-ai/client');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

fal.config({ credentials: process.env.FAL_KEY });

const PHOTOS_DIR = path.join(__dirname, '..', 'backyard-buildings-stl', 'photos');
const OUTPUT_DIR = path.join(__dirname, '..', 'dashboard', 'campaigns', 'tuffshed');
const FINAL_OUTPUT = path.join(OUTPUT_DIR, '2026-03-11-18mo-promo-video-v2.mp4');
const CLIPS_DIR = path.join(OUTPUT_DIR, 'clips-v2');

// 3 best photos with cinematic motion prompts
const SHOTS = [
  {
    file: 'barn-WM4003819.jpg',
    prompt: 'Slow cinematic camera pan right revealing the full barn-style shed, golden hour sunlight, gentle lens flare, professional real estate video, smooth dolly movement',
  },
  {
    file: 'greenhouse-307778.jpg',
    prompt: 'Smooth slow zoom in toward the modern studio shed, camera slightly rising, afternoon light reflecting off windows, cinematic depth of field, professional architectural video',
  },
  {
    file: 'barn-400027.jpg',
    prompt: 'Gentle cinematic orbit around the green barn shed, camera tracking left to right, soft natural daylight, shallow depth of field, premium real estate showcase video',
  },
];

async function uploadPhoto(filePath) {
  console.log(`  Uploading ${path.basename(filePath)}...`);
  const fileBuffer = fs.readFileSync(filePath);
  const blob = new Blob([fileBuffer], { type: 'image/jpeg' });
  // fal.storage.upload accepts a Blob/File
  const url = await fal.storage.upload(blob);
  console.log(`  Uploaded: ${url}`);
  return url;
}

async function generateVideoClip(imageUrl, prompt, clipIndex) {
  console.log(`\n🎬 Generating clip ${clipIndex + 1}/3...`);
  console.log(`  Prompt: ${prompt.substring(0, 80)}...`);
  
  const result = await fal.subscribe('fal-ai/kling-video/v2/master/image-to-video', {
    input: {
      prompt: prompt,
      image_url: imageUrl,
      duration: '5',
      aspect_ratio: '16:9',
    },
    logs: true,
    onQueueUpdate: (update) => {
      if (update.status === 'IN_QUEUE') {
        console.log(`  Queue position: ${update.queue_position || 'processing...'}`);
      } else if (update.status === 'IN_PROGRESS') {
        console.log(`  Generating...`);
      }
    },
  });

  const videoUrl = result.data.video.url;
  console.log(`  ✅ Clip ${clipIndex + 1} ready: ${videoUrl}`);
  return videoUrl;
}

async function downloadVideo(url, outputPath) {
  console.log(`  Downloading to ${path.basename(outputPath)}...`);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Download failed: ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(outputPath, buffer);
  console.log(`  Saved: ${outputPath} (${(buffer.length / 1024 / 1024).toFixed(1)} MB)`);
  return outputPath;
}

async function concatenateClips(clipPaths, outputPath) {
  console.log('\n🔗 Concatenating clips...');
  
  // Create concat file for ffmpeg
  const concatFile = path.join(CLIPS_DIR, 'concat.txt');
  const concatContent = clipPaths.map(p => `file '${p}'`).join('\n');
  fs.writeFileSync(concatFile, concatContent);
  
  // Use ffmpeg to concatenate
  const cmd = `ffmpeg -y -f concat -safe 0 -i "${concatFile}" -c copy "${outputPath}" 2>&1`;
  console.log(`  Running: ffmpeg concat...`);
  
  try {
    execSync(cmd, { stdio: 'pipe' });
  } catch (e) {
    // If copy fails (different codecs), re-encode
    console.log('  Re-encoding for compatibility...');
    const cmd2 = `ffmpeg -y -f concat -safe 0 -i "${concatFile}" -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k "${outputPath}" 2>&1`;
    execSync(cmd2, { stdio: 'pipe' });
  }
  
  console.log(`  ✅ Final video: ${outputPath}`);
}

async function main() {
  console.log('🎥 18 MONTHS SAME AS CASH — Promo Video v2');
  console.log('Pipeline: Real Photos → Kling v3 → Cinematic Video\n');
  
  // Create clips directory
  fs.mkdirSync(CLIPS_DIR, { recursive: true });
  
  const clipPaths = [];
  
  for (let i = 0; i < SHOTS.length; i++) {
    const shot = SHOTS[i];
    const photoPath = path.join(PHOTOS_DIR, shot.file);
    
    if (!fs.existsSync(photoPath)) {
      console.error(`❌ Photo not found: ${photoPath}`);
      process.exit(1);
    }
    
    // Upload photo
    const imageUrl = await uploadPhoto(photoPath);
    
    // Generate video clip
    const videoUrl = await generateVideoClip(imageUrl, shot.prompt, i);
    
    // Download clip
    const clipPath = path.join(CLIPS_DIR, `clip-${i + 1}.mp4`);
    await downloadVideo(videoUrl, clipPath);
    clipPaths.push(clipPath);
  }
  
  // Concatenate all clips
  await concatenateClips(clipPaths, FINAL_OUTPUT);
  
  const stats = fs.statSync(FINAL_OUTPUT);
  console.log(`\n🎉 DONE! Final video: ${FINAL_OUTPUT}`);
  console.log(`   Size: ${(stats.size / 1024 / 1024).toFixed(1)} MB`);
  console.log(`   Duration: ~15 seconds (3 × 5s clips)`);
}

main().catch(e => {
  console.error('\n❌ Error:', e.message);
  if (e.body) console.error('API response:', JSON.stringify(e.body, null, 2));
  process.exit(1);
});
