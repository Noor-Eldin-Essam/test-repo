const fs = require('fs');
const path = require('path');
require('dotenv').config(); // Load .env file

// Read index.html file
const htmlFilePath = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

// Inject environment variables into placeholders
htmlContent = htmlContent.replace('{{API_URL}}', process.env.API_URL || 'Not Available');
htmlContent = htmlContent.replace('{{FEATURE_FLAG}}', process.env.FEATURE_FLAG || 'false');
htmlContent = htmlContent.replace('{{SECRET_KEY}}', process.env.SECRET_API_TOKEN || 'Not Available');

// Write updated HTML to the dist folder
const outputDir = path.join(__dirname, 'dist');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}
fs.writeFileSync(path.join(outputDir, 'index.html'), htmlContent);

console.log('Environment variables injected successfully!');
