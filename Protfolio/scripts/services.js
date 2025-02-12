// Skills popup functionality
const skillItems = document.querySelectorAll('.skills-list li');
const popupContainer = document.getElementById('popupContainer');
const popupImage = document.getElementById('popupImage');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const gifSrc = item.getAttribute('data-gif');
        popupImage.src = gifSrc;
        popupContainer.style.display = 'block';
    });

    item.addEventListener('mouseleave', () => {
        popupContainer.style.display = 'none';
    });
});

// Add scroll reveal animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.service-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
}); 