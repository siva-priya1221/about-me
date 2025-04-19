// Prevent right-click context menu
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    alert("Right-click is disabled.");
});

// Disable text selection
document.addEventListener('selectstart', function (event) {
    event.preventDefault();
});

// Prevent dragging of images (for most browsers)
const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('dragstart', function (event) {
        event.preventDefault();
    });
});
