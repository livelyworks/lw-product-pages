$(function() {
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});


//Custom Carousel 
var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 3,
    dots: true,
    // nav: true,
    lazyLoad: true,
    loop: true,
    margin: 10,
    // autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 2,

        },
        1000: {
            items: 3,

        }
    }
});


$(document).ready(function() {
    // Gets the video src from the data-src on each button

    var $videoSrc;
    $('.video-btn').click(function() {
        $videoSrc = $(this).data("src");
    });
    // console.log($videoSrc);



    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function(e) {

        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })



    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function(e) {
        // a poor man's stop video
        $("#video").attr('src', $videoSrc);
    })
});