import { validTokens } from './tokens.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log(validTokens);
    
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (validTokens.includes(token)) {
        // Show protected content
        document.getElementById('content').style.display = 'block';
    } else {
        // Show error and redirect
        document.getElementById('error').style.display = 'block';
        setTimeout(() => {
            window.location.href = '/unauthorized.html';
        }, 3000); // Redirect after 3 seconds
    }
});
