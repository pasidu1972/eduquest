// Function to open the contact popup
function openContactPopup() {
    const width = 750;
    const height = 520;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open("contact.html", "ContactPopup", `width=${width}, height=${height}, left=${left}, top=${top}, resizable=no, scrollbars=no, location=no, toolbar=no, menubar=no, status=no`);
}

// Add an event listener to open the contact popup
document.getElementById("contact-link").addEventListener("click", openContactPopup);
