// Mobile menu functions
function hamburg() {
    document.querySelector('.dropdown').style.transform = 'translateY(0)';
}

function cancel() {
    document.querySelector('.dropdown').style.transform = 'translateY(-500px)';
}

// Typewriter effect
const typewriterText = document.querySelector('.typewriter-text');
const words = [
    'Web Developer', 
    'Apps Developer', 
    'Full Stack Developer',
    'Flutter Developer',
    'Game Developer'
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    const shouldDelete = isDeleting;
    
    if (shouldDelete) {
        typewriterText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = shouldDelete ? 50 : 100;

    if (!shouldDelete && charIndex === currentWord.length) {
        // Word is complete, wait and then start deleting
        typeSpeed = 2000; // Wait 2s
        isDeleting = true;
    } else if (shouldDelete && charIndex === 0) {
        isDeleting = false;
        // Move to next word
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Remove any existing event listeners and start the animation
document.removeEventListener('DOMContentLoaded', startTypewriter);

function startTypewriter() {
    charIndex = 0;
    wordIndex = 0;
    isDeleting = false;
    typeEffect();
}

document.addEventListener('DOMContentLoaded', startTypewriter);

function animateNumbers() {
    const boxes = document.querySelectorAll('.skills .box');
    
    boxes.forEach(box => {
        const percentElement = box.querySelector('.per');
        const targetValue = parseInt(percentElement.textContent);
        let currentValue = 0;
        
        const increment = () => {
            if (currentValue < targetValue) {
                currentValue += 1;
                percentElement.textContent = currentValue;
                requestAnimationFrame(increment);
            }
        };
        
        // Start animation when box comes into view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                increment();
                observer.disconnect();
            }
        });
        
        observer.observe(box);
    });
}

// Call the function when document loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(animateNumbers, 500);
});

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', () => {
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    const labels = document.querySelectorAll('.contact-form label');
    
    // Add animation classes to form elements
    formInputs.forEach((input, index) => {
        input.style.opacity = "0";
        input.style.transform = "translateY(20px)";
        input.style.animation = `fadeInUp 0.5s ease forwards ${0.2 + index * 0.1}s`;
    });
    
    labels.forEach((label, index) => {
        label.style.opacity = "0";
        label.style.transform = "translateX(-20px)";
        label.style.animation = `slideInLeft 0.5s ease forwards ${0.1 + index * 0.1}s`;
    });
});

// Add these keyframes to your CSS
@keyframes slideInLeft {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

// Canvas Background Setup
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

// Resize canvas to fill the window
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

let particles = [];
const particleCount = 100;
const mouse = { x: 0, y: 0 };

// Particle class
class Particle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocityX = Math.random() * 2 - 1;
        this.velocityY = Math.random() * 2 - 1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;

        if (this.x < 0 || this.x > canvas.width) this.velocityX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.velocityY *= -1;
     
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        this.x += dx * 0.0005;
        this.y += dy * 0.0005;

        this.draw();
    }
}

// Initialize particles
function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 3 + 1; // Slightly smaller particles
        const color = `rgba(7, 123, 50, ${Math.random() * 0.5 + 0.2})`; // Green particles with varying opacity
        particles.push(new Particle(x, y, radius, color));
    }
}

// Animation loop
function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Create trail effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => particle.update());
    requestAnimationFrame(animate);
}

// Event listeners
window.addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

window.addEventListener("resize", () => {
    resizeCanvas();
    initParticles();
});

// Navigation active state
document.querySelectorAll('.nav-container .link a').forEach(link => {
    link.addEventListener('click', (e) => {
        document.querySelectorAll('.nav-container .link a').forEach(l => 
            l.classList.remove('active'));
        e.target.classList.add('active');
    });
});

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    // Start existing animations
    setTimeout(startTypewriter, 1000);
    setTimeout(animateNumbers, 500);
    
    // Initialize background
    initParticles();
    animate();
});

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', () => {
    const educationSections = document.querySelectorAll('.education-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    educationSections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.2}s`;
        observer.observe(section);
    });
});
