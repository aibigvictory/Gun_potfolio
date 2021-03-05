$(document).ready(function () { //버튼을 누르면
    //.spaceship에 acitve 클래스를 추가하고 .pilot에서 제거
    $('#shipButton').on('click', function () {
        $('.spaceship').addClass('active').next().removeClass('active');
    });
    //.pilot에 acitve 클래스를 추가하고 .spaceship에서 제거
    $('#pilotButton').on('click', function () {
        $('.pilot').addClass('active').prev().removeClass('active');
    });

    $('.homepage').on({
        //마우스 진입 또는 키보드 포커싱하면 active 추가
        'mouseenter focusin' : function () {
            $(this).addClass('active');
        },
        //마우스 나감 또는 키보드 빠져나가면 active 제거
        'mouseleave focusout' : function () {
            $(this).removeClass('active');
        }
    });
    $('#container').on('click', function () {
        $(this).addClass('active');
    });
});