//document load 후 스크립트 작성 (왜? #type 을 받기위하여)
window.addEventListener('load', function () {
    //타이핑 하고싶은 내용 저장
    var memo1 = '반갑습니다.'
    var memo2 = '웹이라는 우주를 여행하는.'
    var memo3 = '웹 퍼블리셔 김건입니다.'
    var memo4 = '곧 우주여행을 출발합니다.'
    var memo5 = '다시 보시려면 클릭해주세요.'
    var memo6 = "Gun's potfolio"

    var noRepeat = false;
    var oneRepeat = true;

    //텍스트 출력횟수 = 텍스트 글자수
    let i = 0,
        j = 0;

    //배열에 [내용] 저장
    const textArray = [memo1, memo2, memo3, memo4, memo5, memo6],
        speed = 50,
        target = document.getElementById("type");

    //console.log(textArray)

    //txtnum 함수 : 텍스트 갯수를 세서 저장 (왜? 텍스트를 지울때 텍스트 갯수보다 더 지우면 오류가 나니까 세주는 것)
    function txtnum() {
        //console.log(textArray.length)
        j == textArray.length - 1 ?
            j = 0 :
            j++
    }

    //type 함수 : txtnum에서 센 텍스트 갯수를 토대로 출력한다. 끝나면 지우는 함수 호출
    function type() {
        i < textArray[j].length ?
            (target.innerHTML += textArray[j].charAt(i), i++, setTimeout(type, 100)) :
            remove()
    }

    //remove 함수 : txtnum에서 센 텍스트 갯수만큼 지워주고 i-- 실행, i가 -1이 되면 type함수와 txtnum 함수를 호출해서 반복
    function remove() {
        //console.log('i',i);
        //console.log(target.innerHTML)
        //console.log(textArray[textArray.length-1])
        //마지막 텍스트는 제거 효과 안하고 빠져나옴
        if (target.innerHTML == textArray[textArray.length-1]) {
            //noRepeat를 다시 true로 바꿔주어 다시 실행 할 수 있도록 해주고 종료
            noRepeat = true;
            return false;
        };
        0 <= i ?
            (target.innerHTML = target.innerHTML.slice(0, i), i--, setTimeout(remove, speed)) :
            (type(), txtnum())
    }
    //함수실행
    type();
    
    //함수실행이 끝나고 클릭하면 다시 반복
    document.getElementById('container').addEventListener('click', function () {    console.log(noRepeat);
        //반복 방지를 위해 코드가 실행되는 동안 noRepeat의 값을 false로 바꿔준다
        if (noRepeat) {
            //단 한번 배경 넓어지는 효과 적용
            if (oneRepeat) {
                document.getElementById('container').classList.add('active')
                oneRepeat = false;
            }
            noRepeat = false;
            target.innerHTML = '';
            type();
        }
        
        //console.log('tmp',noRepeat);
    });
});