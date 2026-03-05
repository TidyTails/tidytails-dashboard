#!/usr/bin/env node
/**
 * AI Ad Creative Generator
 * Uses Nano Banana 2 for images + Kling for video animation
 * 
 * Usage:
 *   node generate-ad-creative.js --type shed --style "before-after"
 *   node generate-ad-creative.js --type tidy-tails --style "transformation"
 *   node generate-ad-creative.js --prompt "custom prompt" --end-prompt "end state"
 */

require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const { fal } = require('@fal-ai/client');
const fs = require('fs');
const path = require('path');

fal.config({ credentials: process.env.FAL_KEY });

const args = process.argv.slice(2);
const getArg = (name) => {
  const idx = args.indexOf(`--${name}`);
  return idx !== -1 ? args[idx + 1] : null;
};

const type = getArg('type') || 'shed';
const style = getArg('style') || 'product';
const customPrompt = getArg('prompt');
const endPrompt = getArg('end-prompt');
const outputDir = getArg('output') || path.join(__dirname, '..', 'ad-creative', `${type}-${Date.now()}`);

// Pre-built prompt templates
const PROMPTS = {
  shed: {
    product: {
      start: 'Professional studio photograph of a premium wooden storage shed, 12x24 barn style, rich brown wood finish with white trim, against a pure black background, product photography, dramatic lighting, no shadows on background, ultra realistic, 8k',
      end: 'Same premium wooden storage shed, doors open revealing perfectly organized interior with tools, workbench, shelving, warm interior lighting glowing out, against pure black background, product photography, dramatic lighting, 8k'
    },
    'before-after': {
      start: 'Photograph of a cluttered messy garage full of boxes tools lawn equipment, no room for car, overhead fluorescent lighting, realistic home photo, 16:9',
      end: 'Same garage now clean and organized with car parked inside, adjacent new storage shed visible through window, bright clean space, realistic home photo, 16:9'
    },
    backyard: {
      start: 'Aerial view of empty suburban backyard, green grass, fence, no structures, St Louis Missouri style home, realistic drone photo, 16:9',
      end: 'Same suburban backyard now with beautiful 12x16 storage shed in corner, landscaped around it, adds value to property, realistic drone photo, 16:9'
    }
  },
  'tidy-tails': {
    transformation: {
      start: 'Photograph of a suburban backyard covered in dog waste, brown spots on grass, messy unhealthy lawn, realistic photo, 16:9',
      end: 'Same suburban backyard now pristine clean, lush green healthy grass, dog playing happily, beautiful maintained lawn, realistic photo, 16:9'
    },
    product: {
      start: 'Professional photo of friendly man in branded green polo shirt with dog waste removal equipment, scooper and bucket, standing in front of clean suburban yard, warm smile, professional service photo, 16:9',
      end: 'Same professional man giving thumbs up next to pristine clean yard, happy golden retriever sitting beside him, yard is spotless, professional service photo, 16:9'
    }
  }
};

async function generateImage(prompt, filename) {
  console.log(`Generating: ${filename}...`);
  const result = await fal.subscribe('fal-ai/nano-banana-2', {
    input: {
      prompt: prompt,
      image_size: 'landscape_16_9',
      num_images: 1
    }
  });
  
  const imageUrl = result.data.images[0].url;
  console.log(`  URL: ${imageUrl}`);
  
  // Download the image
  const response = await fetch(imageUrl);
  const buffer = Buffer.from(await response.arrayBuffer());
  const filepath = path.join(outputDir, filename);
  fs.writeFileSync(filepath, buffer);
  console.log(`  Saved: ${filepath}`);
  
  return { url: imageUrl, path: filepath };
}

async function main() {
  // Create output directory
  fs.mkdirSync(outputDir, { recursive: true });
  
  let startPrompt, endStatePrompt;
  
  if (customPrompt) {
    startPrompt = customPrompt;
    endStatePrompt = endPrompt || customPrompt + ' (transformed, improved version)';
  } else {
    const templates = PROMPTS[type]?.[style];
    if (!templates) {
      console.error(`Unknown type/style: ${type}/${style}`);
      console.error('Available:', Object.keys(PROMPTS).map(t => 
        Object.keys(PROMPTS[t]).map(s => `${t}/${s}`)).flat().join(', '));
      process.exit(1);
    }
    startPrompt = templates.start;
    endStatePrompt = templates.end;
  }
  
  console.log(`\n🎨 AD CREATIVE GENERATOR`);
  console.log(`Type: ${type} | Style: ${style}`);
  console.log(`Output: ${outputDir}\n`);
  
  // Generate start and end frames
  const startFrame = await generateImage(startPrompt, 'frame-start.png');
  const endFrame = await generateImage(endStatePrompt, 'frame-end.png');
  
  console.log(`\n✅ FRAMES GENERATED`);
  console.log(`Start: ${startFrame.url}`);
  console.log(`End: ${endFrame.url}`);
  
  // Save metadata
  const metadata = {
    type,
    style,
    startPrompt,
    endStatePrompt,
    startFrame: startFrame.url,
    endFrame: endFrame.url,
    generatedAt: new Date().toISOString(),
    cost: '$0.08 (2 images × $0.04)'
  };
  
  fs.writeFileSync(
    path.join(outputDir, 'metadata.json'),
    JSON.stringify(metadata, null, 2)
  );
  
  console.log(`\n📋 Next step: Use Kling 3.0 to animate between frames`);
  console.log(`   Start frame: ${startFrame.path}`);
  console.log(`   End frame: ${endFrame.path}`);
}

main().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
