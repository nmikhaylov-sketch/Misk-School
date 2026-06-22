$(document).ready(function () {
  $('.news-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '16.67%',
    speed: 500,
    arrows: true,
    appendArrows: $('.news-arrows'),
    prevArrow: '<button class="slick-prev" aria-label="Previous slide"></button>',
    nextArrow: '<button class="slick-next" aria-label="Next slide"></button>',
  });
});
