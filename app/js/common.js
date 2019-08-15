// DROP-DOWN MENU
$(document).ready(function () {
    $(function () {
        $('.menu-link').click(function () {
            $(this).toggleClass('menu-link_active');
            $('.header-nav_items').slideToggle(500);
        });
    });
    });
    // $('.carousel').slick({
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    // });
    $('.single-item').slick();

