const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const thumbnails = document.querySelectorAll('.thumbnail');
const backgroundText = document.querySelector('.background-text');
let currentIndex = 0;

function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    const currentPlaceholder = slide[currentIndex].querySelector('.placeholder').innerHTML;
    backgroundText.innerHTML = currentPlaceholder;
    document.body.style.backgroundImage = `url(${slide[currentIndex].querySelector('img').src})`;

    //to highlight
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentIndex);
    });
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slide.length;
    updateSlider();
}
function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slide.length) % slide.length;
    updateSlider();
}

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = parseInt(thumbnail.dataset.index);  
        updateSlider();
    });
});
setInterval(showNextSlide, 5000);
updateSlider();
