$(document).ready(function (e) {
    $(".menuWithToggle").click(function () {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        } else{
            $(this).addClass('active');
        }
        $(this).children(".sub-menu").slideToggle();
    });

    var currentUrl = window.location.href.toString().split(window.location.host)[1];

    $("li.current-menu-item").removeClass('current-menu-item');
    var currentPageAnchor = $('a[href="' + currentUrl + '"]');
    currentPageAnchor.parent().addClass('current-menu-item');

    currentPageAnchor.parents('li.menu-item').addClass('current-menu-item');
});