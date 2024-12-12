const fs = require('fs');
const path = require('path');

// Access environment variables set in GitHub Actions
const apiUrl = process.env.API_URL || 'Not Available';
const featureFlag = process.env.FEATURE_FLAG || 'false';
const secretKey = process.env.SECRET_API_TOKEN || 'Not Available';

// Read the HTML file
const htmlFilePath = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

// Replace placeholders in the HTML content
htmlContent = htmlContent.replace('Not Available', apiUrl)
                          .replace('false', featureFlag)
                          .replace('Not Available', secretKey);

// Write the updated HTML file to the 'dist' folder
const outputDir = path.join(__dirname, 'dist');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.writeFileSync(path.join(outputDir, 'index.html'), htmlContent);

console.log('Environment variables injected successfully!');
