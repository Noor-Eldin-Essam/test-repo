// script.js
import { validTokens } from './tokens.js';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');  // Get the 'token' from the URL parameters

    // If there's no token in the URL, show an error and exit
    // if (!token) {
    //     showError();
    //     return;
    // }
    console.log(token);
    
    // Hash the token from the URL using SHA-256 and convert to Base64
    // const hashedToken = CryptoJS.SHA256(token).toString(CryptoJS.enc.Base64);
    // console.log(hashedToken);
    console.log(validTokens[0]);
    
    

    // Check if the hashed token is in the validTokens array
//     if (validTokens.includes(hashedToken)) {
//         // Show protected content
//         document.getElementById('content').style.display = 'block';
//     } else {
//         // Show error and redirect
//         showError();
//     }
});

// function showError() {
//     // Show error and redirect
//     document.getElementById('error').style.display = 'block';
//     setTimeout(() => {
//         window.location.href = '/unauthorized.html';  // Redirect to unauthorized page
//     }, 3000);  // Redirect after 3 seconds
// }
