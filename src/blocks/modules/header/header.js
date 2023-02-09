import LazyLoad from "vanilla-lazyload";

// eslint-disable-next-line no-unused-vars
const lazyLoadInstance = new LazyLoad({});

let menu        = $('.header__menu'),
    mobile      = $('.header__mobile'),
    logo        = $('.header__logo'),
    sections    = $('section'),
    windowWidth;

windowWidth = $(window).width();
adaptiveHeader(windowWidth);

$(window).on('resize', function() {
    windowWidth = $(window).width();

    adaptiveHeader(windowWidth);

    if (windowWidth > 600) {
        $('.header').removeClass('open');
    }
});

    
$(window).on("scroll", function() {
    let scrollTop = $(window).scrollTop();

    if (scrollTop > $(sections[1]).offset().top) {
        $(".header").addClass("header--fixed");
    } else {
        $(".header").removeClass("header--fixed");
    }
});

$('.header__burger').on('click', function() {
    $('.header').toggleClass('open');
});

function adaptiveHeader(widthWindow) {
    switch(true) {
        case widthWindow < 600 && $('.header__mobile .header__menu').length == 0:
            mobile.append(menu)
            mobile.append(logo)
        break; 
        case widthWindow > 600 && $('.header__mobile .header__menu').length != 0:
            $('.header__wrapper').append(logo)
            $('.header__wrapper').append(menu)
        break; 
    }
}

$(document).mouseup( function(e){ 
    if (!mobile.is(e.target) && mobile.has(e.target).length === 0 && !$('.header__burger').is(e.target)) { 
        $('.header').removeClass('open');
    }
});

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      } else {
        change.target.classList.remove('element-show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
}