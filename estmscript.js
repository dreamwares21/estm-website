// Function to handle scroll events
function handleScroll() {
    var footer = document.querySelector('footer'); // Selecting the footer without an ID

    // Positioning the footer at the bottom of the viewport
    var isAtBottom = isScrolledToBottom();
    if (isAtBottom) {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
    } else {
        footer.style.position = 'static';
    }
}

// Attach the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);



