const { mdToPdf } = require('md-to-pdf');
const fs = require('fs');
const path = require('path');

const tasksDir = '/Users/halpininc/.openclaw/workspace/docs/tasks';
const outputDir = '/Users/halpininc/.openclaw/workspace/dashboard/pdfs/tasks';
const logoPath = '/Users/halpininc/.openclaw/workspace/dashboard/branding/logo-banner.jpg';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const logoBase64 = fs.readFileSync(logoPath).toString('base64');
const logoDataUrl = `data:image/jpeg;base64,${logoBase64}`;

const css = `
  body { font-family: -apple-system, sans-serif; line-height: 1.6; color: #333; padding: 20px; }
  .header { text-align: center; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 2px solid #4CAF50; }
  .header img { max-width: 250px; }
  h1 { color: #2E7D32; }
  h2 { color: #1565C0; margin-top: 25px; }
  table { width: 100%; border-collapse: collapse; margin: 15px 0; }
  th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
  th { background: #4CAF50; color: white; }
  blockquote { border-left: 4px solid #4CAF50; padding-left: 15px; color: #666; }
  .footer { margin-top: 30px; padding-top: 15px; border-top: 1px solid #ddd; text-align: center; color: #888; font-size: 11px; }
`;

async function convertTask(filename) {
  const inputPath = path.join(tasksDir, filename);
  const outputPath = path.join(outputDir, filename.replace('.md', '.pdf'));
  
  let content = fs.readFileSync(inputPath, 'utf8');
  content = `<div class="header"><img src="${logoDataUrl}"></div>\n\n` + content + `\n\n<div class="footer">Tidy Tails 314 | tidytails.github.io/tidytails-dashboard</div>`;
  
  try {
    const pdf = await mdToPdf({ content }, { css, pdf_options: { format: 'Letter', margin: { top: '15mm', bottom: '15mm', left: '15mm', right: '15mm' } } });
    if (pdf) {
      fs.writeFileSync(outputPath, pdf.content);
      console.log('✅', filename.replace('.md', '.pdf'));
    }
  } catch (err) {
    console.error('❌', filename, err.message);
  }
}

async function main() {
  const files = fs.readdirSync(tasksDir).filter(f => f.endsWith('.md'));
  console.log(`\nGenerating ${files.length} task PDFs...\n`);
  for (const f of files) await convertTask(f);
  console.log('\nDone!\n');
}

main();
