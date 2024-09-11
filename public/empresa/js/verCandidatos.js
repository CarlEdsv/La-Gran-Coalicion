const bookmarkButtons = document.querySelectorAll('.bookmark-btn');

bookmarkButtons.forEach(function(button) {
    button.onclick = function() {
        button.classList.toggle('active');
        button.querySelector('i').classList.toggle('bi-bookmark-fill');
        button.querySelector('i').classList.toggle('bi-bookmark');
    };
});
