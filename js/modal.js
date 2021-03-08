$(document).ready(function () {
    //모달 오픈을 클릭하면 동작
    $('.modal_open').on('click', function () {
        //미리 변수 선언
        var _modalIdx = $('#modal' + ($(this).parent().index() + 1)); //클릭버튼에 해당하는 모달 아이디
        var _modal = $('.modal') //모든 모달 클래스 호출
        //_first //모달창 첫번쨰 요소
        //_last //모달창 마지막 요소 : 닫기버튼
        var _modalClose = $('.modal_close')
        var modal_close_focus = $(this) //모달닫으면 포커스 옮기기용

        //클릭에 해당하는 모달 외 다른 모달 및 컨텐츠 스크린리더에서 못읽게 함
        $('.modal').siblings().attr({'aria-hidden': true, inert: ''});
        //모달 앞에 #dim 생성 후 변수에 저장
        _modalIdx.before('<div id="dim"></div>');
        var _dim = $('#dim');
        //#dim이 서서히 나타나도록 효과 > 모달창 나타남 (stop: 여러분 클릭해도 누적효과를 모두 지우도록)
        _dim.stop().fadeIn().next().css('visibility', 'visible');
        //_first.focus();

        //모달 닫기 버튼을 누르면
        $(_modalClose).on('click', function () {
            //#dim이 서서히 빠지고 다 빠지면 div 삭제
            _dim.stop().fadeOut(function () {
                $(this).remove();
            });
            //모달도 히든 처리 + 해당 모달 외 스크린리더에서 못읽게 했던 조치를 푼다
            $(this).parent().css('visibility', 'hidden').siblings().removeAttr('aria-hidden inert');
            //열었던 버튼으로 다시 포커스가 가도록
            modal_close_focus.focus();
        });

        //모달 영역 밖을 클릭하면 모달을 빠져나오도록
        _dim.on('click', function () {
            _modalClose.click();
        })

        //esc를 누르면 모달을 빠져나옴
        $(window).on('keydown', function (e) {
            if (e.keyCode === 27) _modalClose.click();
        })
        

        return false;
    });
});

/* $(document).ready(function () {
    $('.md_open').on('click', function () {
        _dim.stop().fadeIn().next().css('visibility', 'visible');
        _first.focus();

        _first.on('keydown', function (e) {
            console.log(e.keyCode);
            if (e.shiftKey && e.keyCode === 9) {
                e.preventDefault();
                _last.focus();
            }
        });

        _last.on('keydown', function (e) {
            if (!e.shiftKey && e.keyCode === 9) {
                e.preventDefault();
                _first.focus();
            }
        });

    });
}); */