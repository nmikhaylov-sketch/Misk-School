
//slick code for the Featured News carousel
$(document).ready(function () {
  $('.news-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: '24%',
    speed: 500,
    arrows: true,
    appendArrows: $('.news-arrows'),
    prevArrow: '<button class="btn slick-prev p-0 position-static d-inline-flex align-items-center justify-content-center rounded-circle" aria-label="Previous slide"><img src="../img/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="btn slick-next p-0 position-static d-inline-flex align-items-center justify-content-center rounded-circle" aria-label="Next slide"><img src="../img/arrow-right.svg" alt=""></button>',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: '6%',
      }
    } ]
  
  }).on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        if (currentSlide !== nextSlide) {
          document.querySelectorAll('.slick-center + .slick-cloned').forEach((next) => {
            // timeout required or Slick will overwrite the classes
            setTimeout(() => next.classList.add('slick-current', 'slick-center'));
          });
        }
      
  });
});

