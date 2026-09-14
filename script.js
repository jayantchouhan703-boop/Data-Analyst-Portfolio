// Update footer year automatically
const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.textContent =
        `© ${year} Jayant Chouhan. All Rights Reserved.`;
}

