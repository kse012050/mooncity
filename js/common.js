$(document).ready(function(){
    var mainSwiper = new Swiper(".mainArea .sliderArea", {
        pagination: {
          el: ".swiper-pagination",
        },
    });

    var commercialSwiper = new Swiper(".commercialArea .sliderArea .swiper", {
      slidesPerView: 4,
    });
});