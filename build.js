const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Read HTML file
const htmlFilePath = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

// Replace placeholders with environment variables
htmlContent = htmlContent.replace(/{{API_URL}}/g, process.env.API_URL);
htmlContent = htmlContent.replace(/{{FEATURE_FLAG}}/g, process.env.FEATURE_FLAG);
htmlContent = htmlContent.replace(/{{SECRET_KEY}}/g, process.env.SECRET_API_TOKEN);

// Output the updated file to 'dist' folder
const outputDir = path.join(__dirname, 'dist');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.writeFileSync(path.join(outputDir, 'index.html'), htmlContent);

console.log('Environment variables have been injected successfully!');
