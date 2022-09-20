$(document).ready(function(){

    $(window).scroll(function(){
        ($(this).scrollTop() > 0) ? $('header').addClass('active') : $('header').removeClass('active');
    })

    $('header aside > button').click(function(){
        $('header aside > div').addClass('active');
    })
    $('header aside > div button').click(function(){
        $('header aside > div').removeClass('active');
    })

    var mainSwiper = new Swiper(".mainArea .sliderArea", {
        pagination: {
            el: ".swiper-pagination",
        },
    });

    var commercialSwiper = new Swiper(".commercialArea .sliderArea .swiper", {
        slidesPerView: 4,
    });
});