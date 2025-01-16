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
    showWhatsAppPopup();
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
document.querySelectorAll('.motion-image').forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});
function sendWhatsApp() {
            const name = document.getElementById('client-name').value;
            const customSpec = document.getElementById('custom').value;
            const materialType = document.getElementById('material-type').value;
    
            const message = `Name: ${name}\nSpecification: ${customSpec}\nMaterial Type: ${materialType}`;
            const whatsappNumber = '+2348077223301'; // Replace with your WhatsApp number
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
            window.open(whatsappLink, '_blank');
        }
    
        function sendTelegram() {
            const name = document.getElementById('client-name').value;
            const customSpec = document.getElementById('custom').value;
            const materialType = document.getElementById('material-type').value;
    
            const message = `Name: ${name}\nSpecification: ${customSpec}\nMaterial Type: ${materialType}`;
            const telegramBotToken = 'idowujdbot'; // Replace with your Telegram bot token
            const chatId = '6709260958'; // Replace with your chat ID
            const telegramLink = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
    
            fetch(telegramLink)
                .then(response => {
                    if (response.ok) {
                        alert('Message sent to Telegram!');
                    } else {
                        alert('Failed to send message to Telegram.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Error sending message to Telegram.');
                });
        }
    
        function submitForm() {
            sendWhatsApp();
            sendTelegram();
        }
        // Function to open the Terms and Conditions popup
function openPopup() {
    document.getElementById("terms-popup").style.display = "block";
}

// Function to close the Terms and Conditions popup
function closePopup() {
    document.getElementById("terms-popup").style.display = "none";
}

// Event listener to close the popup when clicking outside of it
window.onclick = function(event) {
    const popup = document.getElementById("terms-popup");
    if (event.target == popup) {
        closePopup();
    }
}