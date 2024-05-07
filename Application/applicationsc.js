
// Function to check if the user has scrolled to the bottom
function isScrolledToBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

// Function to handle scroll events
function handleScroll() {
    var footer = document.querySelector('footer'); // Selecting the footer without an ID
    var scrollPosition = window.scrollY;

    // Check if the user is near the bottom of the page
    if (scrollPosition + window.innerHeight >= document.body.offsetHeight - 150) {
        // If near the bottom, display the footer
        footer.style.display = 'block';
    } else {
        // If not near the bottom, hide the footer
        footer.style.display = 'none';
    }
}

// Attach the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);
