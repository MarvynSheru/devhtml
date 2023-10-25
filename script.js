document.addEventListener('DOMContentLoaded', (event) => {
  const mobileMenu = document.querySelector('.navbar-toggler');
  const navbarMenu = document.querySelector('.navbar-collapse');

  mobileMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
  });

  const carousel = new bootstrap.Carousel('#carouselExampleDark');
});