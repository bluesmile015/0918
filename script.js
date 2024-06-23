document.addEventListener('DOMContentLoaded', function() {
    const cdCover = document.querySelector('.cd-cover');
    cdCover.addEventListener('click', function() {
        cdCover.classList.toggle('open');
    });
});
