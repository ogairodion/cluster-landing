import $ from 'jquery';
// eslint-disable-next-line no-unused-vars
global.$ = global.jQuery = $;

let windowWidth;

windowWidth = $(window).width();
adaptiveFooter(windowWidth);

$(window).on('resize', function() {
    windowWidth = $(window).width();

    adaptiveFooter(windowWidth);
});

function adaptiveFooter(widthWindow) {
    switch(true) {
        case widthWindow < 600 && $('.footer__logo-mobile .footer__logo').length == 0:
            $('.footer__logo-mobile').append($('.footer__logo'))
        break; 
        case widthWindow > 600 && $('.footer__column--first .footer__logo').length == 0:
            $('.footer__column--first').append($('.footer__logo'))
        break; 
    }
}

