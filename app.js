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

$(document).ready(function () {
  $(".slider-social").slick({
    slidesToShow: window.innerWidth > 1199 ? 4 : 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
  });
});

$(document).ready(function () {
  $(".slider-gallery").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: ".section-gallery__slider-btns .slider-btn--prev",
    nextArrow: ".section-gallery__slider-btns .slider-btn--next",
  });
});
