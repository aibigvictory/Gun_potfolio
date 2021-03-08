$(document).ready(function () {
    //모달 오픈을 클릭하면 동작
    $('.modal_open').on('click', function () {
        //미리 변수 선언
        //alert()

        //클릭에 해당하는 모달 외 다른 모달 및 컨텐츠 스크린리더에서 못읽게 함
        $('.modal').siblings().attr({'aria-hidden': true, inert: ''});

        //모달 앞에 #dim 생성
        $('.modal').before('<div id="dim"></div>');

        //#dim이 서서히 나타나도록 효과 (stop: 여러분 클릭해도 누적효과를 모두 지우도록)
        $('#dim').stop().fadeIn().next().css
        
        _dim.stop().fadeIn().next().css('visibility', 'visible');
        _first.focus();


        return false;
    });
});

$(document).ready(function () {
    //모달 오픈을 클릭하면 동작
    $('.md_open').on('click', function () {
        //미리 변수 선언
        var _openBtn = $(this);
        var _mdCnt = $($(this).data('href'));
        var _closeBtn = _mdCnt.find('.mdclose_btn');
        var _first = _mdCnt.find('.first');
        var _last = _mdCnt.find('.last');
        var timerResize = 0;
        console.log(_mdCnt, typeof _mdCnt);

        var wrapHei = $('#wrap').height();
        var scrollY = $(window).scrollTop();
        console.log(wrapHei, scrollY);

        //
        $('html, body').css({height: wrapHei, overflow: 'hidden'});
        $(window).scrollTop(scrollY);

        _mdCnt.siblings().attr({'aria-hidden': true, inert: ''})

        _mdCnt.before('<div id="dim"></div>')
        var _dim = $('#dim')

        $(window).on('resize', function () {
            clearTimeout(timerResize);

            timerResize = setTimeout(function () {
                var winHei = $(this).height();
                var winWid = $(this).width();
                var modalHei = _mdCnt.outerHeight();
                var modalWid = _mdCnt.outerWidth();
                var x;
                var y;
                console.log(winHei,winWid,modalHei,modalWid);

                if (winHei >= modalHei) {
                    x = (winWid - modalWid) / 2
                    y = (winHei - modalHei) / 2
                    console.log(x,y);
                    _mdCnt.css({left: x, top: y});
                } else {
                    x = (winWid - modalWid) / 2;
                    console.log(x);
                    _mdCnt.css({left: x, top: 0, overflowY: 'auto'});
                }
            }, 50);
            $
        });
        $(window).trigger('resize');

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

        _closeBtn.on('click', function () {
            $('html, body').removeAttr('style');

            _dim.stop().fadeOut(function () {
                $(this).remove();
            });

            _mdCnt.css({visibility: 'hidden'}).siblings().removeAttr('aria-hidden inert');

            _openBtn.focus();
        });

        _dim.on('click', function () {
            _closeBtn.click();
        });

        $(window).on('keydown', function (e) {
            if (e.keyCode === 27) _closeBtn.click();
        });

    });
});