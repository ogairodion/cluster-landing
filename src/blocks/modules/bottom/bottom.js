import {Swiper, Autoplay} from "swiper";

Swiper.use([Autoplay]);

$('.bottom__slider').each(function(i) {
    $(this).addClass('swiper-container-' + i);
    let speed; 
});

// eslint-disable-next-line no-unused-vars
let bottomsSlider1 = new Swiper(".swiper-container-0", {
    slidesPerView: "auto",
    loop: true,
    speed: 6000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    centeredSlides: true,
    allowTouchMove: false,
});

// eslint-disable-next-line no-unused-vars
let bottomsSlider2 = new Swiper(".swiper-container-1", {
    slidesPerView: "auto",
    loop: true,
    speed: 6000,
    autoplay: {
        delay: 1,
    },
    centeredSlides: true,
    allowTouchMove: false,
});

// eslint-disable-next-line no-unused-vars
let bottomsSlider3 = new Swiper(".swiper-container-2", {
    slidesPerView: "auto",
    loop: true,
    speed: 6000,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    centeredSlides: true,
    allowTouchMove: false,
});

// eslint-disable-next-line no-unused-vars
let bottomsSlider4 = new Swiper(".swiper-container-3", {
    slidesPerView: "auto",
    loop: true,
    speed: 6000,
    autoplay: {
        delay: 1,
    },
    centeredSlides: true,
    allowTouchMove: false,
});