const swiper = new Swiper('.swiper', {

    // Optional parameters
    direction: 'vertical',
    loop: true,
    mousewheel: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        // dynamicBullets: true;
    },
    // autoplay: {
    //     delay: 350;

    // }
    // on: {
    //     slideChangeTransitionStart: function() {
    //         $('.swiper-slide').css("left", "0");

    //         $('.swiper-slide').css("left", "150px");
    //     },
    //     slideChange: function() {
    //         $(".swiper-skli")
    //     }
    // }


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});