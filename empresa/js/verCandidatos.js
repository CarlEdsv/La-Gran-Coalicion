const bookmarkButton = document.getElementById('bookmarkButton');
bookmarkButton.onclick = function() {
    bookmarkButton.classList.toggle('active');
    bookmarkButton.querySelector('i').classList.toggle('bi-bookmark-fill');
    bookmarkButton.querySelector('i').classList.toggle('bi-bookmark');
};