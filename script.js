const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
  const itemWidth = items[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

// Responsividade
window.addEventListener('resize', updateCarousel);
