let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
});

function updateSlide() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Handle like and dislike buttons
const likeBtns = document.querySelectorAll('.like-btn');
const dislikeBtns = document.querySelectorAll('.dislike-btn');

likeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const countSpan = btn.querySelector('.like-count');
        let count = parseInt(countSpan.textContent);
        count++;
        countSpan.textContent = count;
    });
});

dislikeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const countSpan = btn.querySelector('.dislike-count');
        let count = parseInt(countSpan.textContent);
        count++;
        countSpan.textContent = count;
    });
});


  
  

