const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Botones del carrusel
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

// Contador
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = `translateX(${-size * counter}px)`;

// Event listeners para los botones
nextButton.addEventListener('click', () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  counter++;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

prevButton.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  counter--;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

// Event listener para volver al principio si se llega al final
carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  }
  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  }
});
