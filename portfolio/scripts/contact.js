// EmailJS integration for sending emails
document.addEventListener('DOMContentLoaded', function() {
    // Handle send button click
    document.getElementById("sendButton").addEventListener("click", function () {
        const name = document.getElementById("nameInput").value;
        const email = document.getElementById("emailInput").value;
        const message = document.getElementById("messageInput").value;
      
        if (name && email && message) {
            // Show loading state
            this.disabled = true;
            this.textContent = 'Sending...';
            
            // Send email using EmailJS
            emailjs.send("service_n3qqwbu", "template_h7vitzj", {
                from_name: name,
                from_email: email,
                message: message
            }).then(() => {
                // Success handling
                alert("Message sent successfully!");
                
                // Add to feedback list with animation
                const feedbackList = document.getElementById("feedbackList");
                const feedbackItem = document.createElement("div");
                feedbackItem.innerHTML = `<strong>${name}</strong>: ${message}`;
                feedbackItem.style.opacity = '0';
                feedbackList.appendChild(feedbackItem);
                
                // Fade in animation
                setTimeout(() => {
                    feedbackItem.style.transition = 'opacity 0.5s ease';
                    feedbackItem.style.opacity = '1';
                }, 10);
                
                // Reset form
                document.getElementById("contactForm").reset();
            }).catch((error) => {
                alert("Failed to send message. Please try again.");
                console.error("Error sending email:", error);
            }).finally(() => {
                // Reset button state
                this.disabled = false;
                this.textContent = 'Send';
            });
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Compose Mail button functionality
    document.getElementById("composeMailButton").addEventListener("click", function () {
        window.open("mailto:bmdnoushad@gmail.com", "_blank");
    });
});
  