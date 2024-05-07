function enlargeImage(image) {
    var overlay = document.querySelector('.overlay');
    var enlargedImageContainer = document.querySelector('.enlarged-image');
    var enlargedImage = document.createElement('img');
    enlargedImage.src = image.src;
    
    // Calculate maximum dimensions for the enlarged image
    var maxWidth = window.innerWidth * 0.8; // 80% of window width
    var maxHeight = window.innerHeight * 0.8; // 80% of window height
    
    // Calculate aspect ratio of the original image
    var aspectRatio = enlargedImage.naturalWidth / enlargedImage.naturalHeight;
    
    // Determine the dimensions for the resized image
    var width = maxWidth;
    var height = maxWidth / aspectRatio;
    
    // If the height exceeds the maximum height, adjust dimensions accordingly
    if (height > maxHeight) {
        height = maxHeight;
        width = maxHeight * aspectRatio;
    }
    
    // Set the dimensions of the enlarged image
    enlargedImage.style.width = width + 'px';
    enlargedImage.style.height = height + 'px';
    
    enlargedImageContainer.innerHTML = '';
    enlargedImageContainer.appendChild(enlargedImage);
    overlay.classList.add('active'); // Show overlay
    enlargedImageContainer.classList.add('active');
    document.body.classList.add('enlarged'); // Disable scrolling
    
    enlargedImage.onclick = function() {
        overlay.classList.remove('active'); // Hide overlay
        enlargedImageContainer.classList.remove('active');
        document.body.classList.remove('enlarged'); // Enable scrolling
    };
}
