$(document).ready(function () {
    $('#shipButton').on('click', function () {
        $('.spaceship').addClass('active').removeClass('no_active').next().removeClass('active').addClass('no_active');
    });
    $('#pilotButton').on('click', function () {
        $('.pilot').addClass('active').removeClass('no_active').prev().removeClass('active').addClass('no_active');
    });

    $('.homepage').on({
        'mouseenter focusin' : function () {
            $(this).addClass('active');
        },
        'mouseleave focusout' : function () {
            $(this).removeClass('active');
        }
    });
});