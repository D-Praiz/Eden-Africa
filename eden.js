// Function to show WhatsApp notification popup
function showWhatsAppPopup() {
    const popup = document.getElementById("whatsapp-notification-popup");
    popup.style.display = "block";

    // Auto-hide the popup after 5 seconds
    setTimeout(() => {
        popup.style.display = "none";
    }, 5000);
}

// Add event listener to the WhatsApp button
document.querySelector(".whatsapp-notification-button").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default action

    // Get the message from the input field
    const messageInput = document.getElementById('whatsapp-message');
    const message = messageInput.value || "Hello, my name is ..........., would love to ask about ........ "; // Default message if input is empty
    const phoneNumber = "+2348077223301"; // Replace with the recipient's phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp with the message
    window.open(whatsappUrl, '_blank');
    
    showWhatsAppPopup(); // Show the popup
});

// Add dynamic date to the footer
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer p");
    if (footer) {
        footer.innerHTML += ` | Updated: ${new Date().toLocaleDateString()}`;
    }
});

document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.getElementById('client-name').value;
    if (!name) {
        alert('Please enter your name.');
        event.preventDefault(); // Prevent form submission
    }
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.whatsapp-notification-button').addEventListener('click', () => {
    // Track the click event
    console.log('WhatsApp button clicked');
});