// progress JS

// 요구사항1: 원형 svg를 각 %를 다르게 하여 숫자 %와 함께 진행률을 애니메이션 하여 표현

// 1. 대상선정
// 1-1. 버튼: .act button
const btnAct = $('.act button');
// 1-2. 퍼센트원: .btns
const btns = $('.btns');
// 1-3. 진행바: .lineper
const lineper = $('.lineper');
console.log('대상:', btnAct, btns, lineper);

// 2. 이벤트 설정
// 대상.click() 하면 계속 이벤트 적용되므로
// 대상.one('click', function) 으로 한번만 이벤트 적용
// 제이쿼리는 자동으로 여러요소를 for처리 해주므로 
// forEach같은 처리를 할 필요가 없다.
btnAct.one('click', function(){
    // 0. 선택버튼 텍스트 읽기
    let btxt = $(this).text();
    // console.log('나버튼:', btxt);
    
    // 1. 버튼별 분기하기
    if(btxt == '팽수1') {
        progFn({seqVal: 0, maxVal: 75});
        progFn({seqVal: 1, maxVal: 63});
        progFn({seqVal: 2, maxVal: 89});
        progFn({seqVal: 3, maxVal: 100});
    } 
    // 두번쨰 버튼은 내부에서 재귀호출하기
    else if(btxt == '팽수2') {
        let barTxt = lineper.find('.ltxt b'); // 바텍스트 요소
        let barBox = lineper.find('.lbar'); // 진행바 대상요소
        let num = barTxt.text(); // 수치변경 변수

        // 반복실행부분 함수화하기
        const progBar = () => {
            num++; // 1. 퍼센트 수치 증가하기
            barTxt.text(num); // 2. 퍼센트 수치 반영
            barBox.css({width: num + '%'}); // 3. 진행바 수치와 함께 증가하기

            // 4. 100% 도달시 음악 재생하기
            if(num == 100) {
                // 이미 페이지에 삽입된 오디오를 재생시킨다.
                // 비디오 / 오디오
                // 재생메서드: play(), 멈춤메서드: pause()
                // 제이쿼리에서는 get() 메서드를 사용하여 선택함
                // $(선택요소).get(0).play() 또는 $(선택요소)[0].play()
                $('#myaud')[0].play();

            }
            // 재귀호출
            setTimeout(() => {
                if(num < 100) progBar();
            }, 40);
        };
        progBar();
    }   
}) // btnAct.click

/**************************************************** 
    함수명: progFn
    기능: 퍼센트 증가에 따른 숫자, 그래프 변경
****************************************************/
function progFn({seqVal: seq, maxVal: max}) { // seqVal = 순번
    // 1. 해당순번의 숫자 요소
    let ptxt = btns.eq(seq).find('.ptxt');
    
    // 2. 퍼센트 증가 : 읽어온 숫자를 1씩 증가시킨다.
    let num = ptxt.text();
    num++;

    // 3. 개별숫자 반영하기
    ptxt.text(num);

    // [2] svg 원 퍼센트 증가
    // 대상: 선택.btns .c1
    btns.eq(seq).find('.c1').css({
        strokeDashoffset: (300 * (100 - num) / 100) + '%'
    })
    console.log((300 * (100 - num) / 100) + '%');
    /* 
        수치계산법: 전체값 * (100 - 퍼센트수치) / 100
        -> 300에서부터 거꾸로 작아져야함
        -> 퍼센트 수치를 큰값에서 작은값으로 가도록함

    */

    // 999. 재귀 호출하기: 기준수보다 작을동안 타임아웃 호출
    if(num < max) {
        setTimeout(() => progFn({seqVal: seq, maxVal: max}), 40);
    }
} // function progFn