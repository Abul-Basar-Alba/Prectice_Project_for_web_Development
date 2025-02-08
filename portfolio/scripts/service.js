// service.js - For interactive behavior on the Service page

// Example: Toggle details when clicking on a service header (if you want to collapse/expand)
document.querySelectorAll('.service-header').forEach(header => {
    header.addEventListener('click', () => {
      // Toggle the next sibling element (the content under the header)
      const content = header.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        header.style.color = "#333";
      } else {
        // Close any open sections first (optional)
        document.querySelectorAll('.service-section .content').forEach(section => {
          section.style.maxHeight = null;
        });
        content.style.maxHeight = content.scrollHeight + "px";
        header.style.color = "#007BFF";
      }
    });
  });
  