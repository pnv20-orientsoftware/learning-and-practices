var isClosedMenu = true;
$(document).ready(function() {

    $("#open-menu").click(function() {
        isClosedMenu = false;
        $("body").animate({
            left: "235px"
        }, 350);
        $('.navbar-nav').animate({
            left: "0px"
        }, 350);
        $(this).hide();
        $("#close-menu").show();
    });

    $("#close-menu").click(function() {
        isClosedMenu = true;
        $("body").animate({
            left: "0px"
        }, 350);
        $('.navbar-nav').animate({
            left: "-245px"
        }, 350);
        $(this).hide();
        $("#open-menu").show();
    });

});

$(window).on('resize', function() {

    if ($(this).width() >= 767) {

        if (!isClosedMenu) {
            $("#close-menu").click();
        }

        $("#open-menu").hide();
        $("#close-menu").hide();

    } else {
        $("#open-menu").show();
        $("#close-menu").hide();
    }

});