const { mdToPdf } = require('md-to-pdf');
const fs = require('fs');
const path = require('path');

const docsDir = '/Users/halpininc/.openclaw/workspace/docs';
const outputDir = '/Users/halpininc/.openclaw/workspace/dashboard/pdfs';
const logoPath = '/Users/halpininc/.openclaw/workspace/dashboard/branding/logo-banner.jpg';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Convert logo to base64 for embedding
const logoBase64 = fs.readFileSync(logoPath).toString('base64');
const logoDataUrl = `data:image/jpeg;base64,${logoBase64}`;

const cssStyles = `
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .header {
    text-align: center;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 3px solid #4CAF50;
  }
  
  .header img {
    max-width: 300px;
    height: auto;
  }
  
  h1 {
    color: #2E7D32;
    border-bottom: 2px solid #4CAF50;
    padding-bottom: 10px;
  }
  
  h2 {
    color: #1565C0;
    margin-top: 30px;
  }
  
  h3 {
    color: #333;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }
  
  th {
    background-color: #4CAF50;
    color: white;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  code {
    background-color: #f4f4f4;
    padding: 2px 6px;
    border-radius: 3px;
  }
  
  pre {
    background-color: #f4f4f4;
    padding: 15px;
    border-radius: 5px;
    overflow-x: auto;
  }
  
  blockquote {
    border-left: 4px solid #4CAF50;
    margin: 20px 0;
    padding-left: 20px;
    color: #666;
  }
  
  .footer {
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid #ddd;
    text-align: center;
    color: #666;
    font-size: 12px;
  }
`;

async function convertDoc(filename) {
  const inputPath = path.join(docsDir, filename);
  const outputPath = path.join(outputDir, filename.replace('.md', '.pdf'));
  
  let content = fs.readFileSync(inputPath, 'utf8');
  
  // Add header with logo
  const header = `<div class="header"><img src="${logoDataUrl}" alt="Tidy Tails"></div>\n\n`;
  const footer = `\n\n<div class="footer">Tidy Tails 314 | Professional Pet Waste Removal | St. Louis Metro Area</div>`;
  
  content = header + content + footer;
  
  try {
    const pdf = await mdToPdf(
      { content },
      {
        css: cssStyles,
        pdf_options: {
          format: 'Letter',
          margin: { top: '20mm', bottom: '20mm', left: '20mm', right: '20mm' }
        }
      }
    );
    
    if (pdf) {
      fs.writeFileSync(outputPath, pdf.content);
      console.log(`✅ Created: ${filename.replace('.md', '.pdf')}`);
    }
  } catch (err) {
    console.error(`❌ Error converting ${filename}:`, err.message);
  }
}

async function main() {
  const docs = fs.readdirSync(docsDir).filter(f => f.endsWith('.md'));
  
  console.log(`\n📄 Generating ${docs.length} branded PDFs...\n`);
  
  for (const doc of docs) {
    await convertDoc(doc);
  }
  
  console.log(`\n✨ PDFs saved to: ${outputDir}\n`);
}

main();
