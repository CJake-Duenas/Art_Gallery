// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // JavaScript to handle the image click event
    var audio = document.getElementById('audioPlayer');
    
    document.getElementById('clickableImage').addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});
