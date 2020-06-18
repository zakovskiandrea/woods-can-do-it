$(document).ready(function () {
  $(".slider-about").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: ".section-about__slider-box .slider-btn--prev",
    nextArrow: ".section-about__slider-box .slider-btn--next",
  });
});

$(document).ready(function () {
  $(".slider-testemonials").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    prevArrow: ".teste__slider-box .slider-btn--prev",
    nextArrow: ".teste__slider-box .slider-btn--next",
  });
});
