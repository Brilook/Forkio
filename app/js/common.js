// DROP-DOWN MENU
$(document).ready(function () {
    $(function () {
        $('.menu-link').click(function () {
            $(this).toggleClass('menu-link_active');
            $('.header-nav_items').slideToggle(500);
        });
    });
});