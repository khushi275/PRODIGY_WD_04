// Smooth scrolling when button is clicked
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Message sent successfully!');
});
