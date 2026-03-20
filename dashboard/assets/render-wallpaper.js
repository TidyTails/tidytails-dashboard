const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1290, height: 2796, deviceScaleFactor: 1 });
  
  const htmlPath = path.resolve(__dirname, 'wallpaper-render.html');
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle2', timeout: 15000 });
  
  // Wait for Google Fonts
  await page.waitForFunction(() => document.fonts.ready.then(() => true), { timeout: 10000 }).catch(() => {});
  await new Promise(r => setTimeout(r, 1000));
  
  await page.screenshot({ 
    path: path.resolve(__dirname, 'tj-wallpaper-schedule-final.png'),
    type: 'png',
    fullPage: false,
    clip: { x: 0, y: 0, width: 1290, height: 2796 }
  });
  
  console.log('Done! Saved tj-wallpaper-schedule-final.png');
  await browser.close();
})();
