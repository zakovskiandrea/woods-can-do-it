const setSliderAbout = () => {
  $(".slider-about").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: ".section-about__slider-box .slider-btn--prev",
    nextArrow: ".section-about__slider-box .slider-btn--next",
  });
};

const setSliderTestemonials = () => {
  $(".slider-testemonials").slick({
    slidesToShow: window.innerWidth > 991 ? 3 : window.innerWidth > 575 ? 2 : 1,
    slidesToScroll:
      window.innerWidth > 991 ? 3 : window.innerWidth > 575 ? 2 : 1,
    speed: 1000,
    prevArrow: ".teste__slider-box .slider-btn--prev",
    nextArrow: ".teste__slider-box .slider-btn--next",
  });
};

const setSliderSocial = () => {
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
};

const setSliderGallery = () => {
  $(".slider-gallery").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: ".section-gallery__slider-btns .slider-btn--prev",
    nextArrow: ".section-gallery__slider-btns .slider-btn--next",
  });
};

const headerDropdown = () => {
  $(".header-phone__dropbtn").click((e) => {
    $(".header-phone__dropdown-content").removeClass("show");
    $(".header-phone__dropdown-content").toggleClass("show");
    e.stopPropagation();
  });

  $(document).click(function () {
    $(".header-phone__dropdown-content").removeClass("show");
  });
};

barba.init({
  views: [
    {
      namespace: "homepage",
      afterEnter() {
        setSliderAbout();
        setSliderTestemonials();
        setSliderSocial();
        headerDropdown();
        console.log("HOMEPAGE");
      },
    },

    {
      namespace: "moving-service",
      afterEnter() {
        setSliderTestemonials();
        setSliderGallery();
        headerDropdown();
        console.log("MOVING-SERVICE");
      },
    },

    {
      namespace: "snow-removal",
      afterEnter() {
        setSliderTestemonials();
        setSliderGallery();
        headerDropdown();
        console.log("SNOW-REMOVAL");
      },
    },
    {
      namespace: "party-rentals",
      afterEnter() {
        setSliderTestemonials();
        setSliderGallery();
        headerDropdown();
        console.log("PARTY-RENTALS");
      },
    },
    {
      namespace: "about-us",
      afterEnter(data) {
        console.log("ABOUT-US");
      },
    },
  ],
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
        });
      },
    },
  ],
});

$(document).ready(() => {
  barba.hooks.after((data) => {
    setSliderAbout();
    setSliderSocial();
    setSliderTestemonials();
    setSliderGallery();
    headerDropdown();
  });
});
