var swiper = new Swiper(".memories-slider", {
  effect: 'coverflow',
  slidesPerView: 3,
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: -130,
    depth: 120,
    modifier: 2.5,
  },
});