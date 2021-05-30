$(function () {
    //mobile menu toggling
    $("#burger").click(function(){
        $(".menu__list-item").toggleClass("show_menu");
        $("#burger").toggleClass("close_menu");
        return false;
    });

    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
})