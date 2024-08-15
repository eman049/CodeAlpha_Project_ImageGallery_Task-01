/* My javascript file */

let slideIndex = 1;
/* function to open lightbox */
function openLightbox() {
    document.getElementById('lightbox').style.display = 'block';
}
/* function to close lightbox */
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
/* function to change slide */
function changeSlide(n) {
    showSlide(slideIndex += n);
}
/* function to current slide */
function currentSlide(n) {
    showSlide(slideIndex = n);
}
/* function for show the slides */
function showSlide(n) {
    let slides = document.getElementsByClassName('lightbox-slide');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}





