// Load environment variables from .env file
require('dotenv').config();

const fs = require('fs');
const path = require('path');

// Access the environment variables
const apiUrl = process.env.API_URL || 'Not Available';
const featureFlag = process.env.FEATURE_FLAG || 'false';
const secretKey = process.env.SECRET_API_TOKEN || 'Not Available';

// Read the HTML file
const htmlFilePath = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

// Replace placeholders in the HTML content with environment variables
htmlContent = htmlContent.replace('{{API_URL}}', apiUrl)
                          .replace('{{FEATURE_FLAG}}', featureFlag)
                          .replace('{{SECRET_API_TOKEN}}', secretKey);

// Output the updated file to 'dist' folder
const outputDir = path.join(__dirname, 'dist');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.writeFileSync(path.join(outputDir, 'index.html'), htmlContent);

console.log('Environment variables have been injected successfully!');
