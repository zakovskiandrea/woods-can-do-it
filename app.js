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
    slidesToShow: window.innerWidth > 991 ? 3 : window.innerWidth > 575 ? 2 : 1,
    slidesToScroll:
      window.innerWidth > 991 ? 3 : window.innerWidth > 575 ? 2 : 1,
    speed: 1000,
    prevArrow: ".teste__slider-box .slider-btn--prev",
    nextArrow: ".teste__slider-box .slider-btn--next",
  });
});

$(document).ready(function () {
  $(".slider-social").slick({
    slidesToShow:
      window.innerWidth > 1199
        ? 4
        : window.innerWidth > 991
        ? 3
        : window.innerWidth > 575
        ? 2
        : 1,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
  });
});

$(document).ready(function () {
  $(".slider-gallery").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: ".section-gallery__slider-btns .slider-btn--prev",
    nextArrow: ".section-gallery__slider-btns .slider-btn--next",
  });
});

$(document).ready(function () {
  $(".header-phone__dropbtn").click(() => {
    $(".header-phone__dropdown-content").toggleClass("show");
  });
});

$(document).ready(function () {
  $(document).click(function () {
    $(".header-phone__dropdown-content").removeClass("show");
  });

  $(".header-phone__dropdown").click(function (e) {
    e.stopPropagation();
  });
});
