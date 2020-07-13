$(document).ready(function () {
    $('#preloader').delay(1000).fadeOut('slow');

    $(".owl-carousel").owlCarousel({
        // nav: true,
        dots: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 1,
        loop: true,
        autoplay: true,
        // transitionStyle: 'fadeUp'
        // autoHeight: true
        // singleItem: true
        // pagination: false,
        // rewindSpeed: 500
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
})