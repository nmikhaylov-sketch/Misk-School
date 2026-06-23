$(document).ready(function () {
  $('.news-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: '16.67%',
    speed: 500,
    arrows: true,
    appendArrows: $('.news-arrows'),
    prevArrow: '<button class="btn slick-prev p-0 position-static d-inline-flex align-items-center justify-content-center rounded-circle" aria-label="Previous slide"><img src="../img/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="btn slick-next p-0 position-static d-inline-flex align-items-center justify-content-center rounded-circle" aria-label="Next slide"><img src="../img/arrow-right.svg" alt=""></button>',
  });
});


// code for the any link for more info
document.querySelectorAll('.more-link').forEach((link) => {
  const icon = link.querySelector('.more-link-icon');
  const text = link.querySelector('.more-link-text');

  link.style.setProperty('--text-w', (text.offsetWidth + 5) + 'px');
  link.style.setProperty('--icon-w', (icon.offsetWidth + 5) + 'px');

  link.addEventListener('mouseenter', () => {
    icon.className = 'more-link-icon icon-swapped';
    text.className = 'more-link-text text-swapped';
  });
  link.addEventListener('mouseleave', () => {
    icon.className = 'more-link-icon';
    text.className = 'more-link-text';
  });
});
