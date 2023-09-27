// Racing PJ 메인 JS - main.js

// DOM메서드 모듈
import dFn from "./dom.js";

// 메시지 제이슨 불러오기
import msgTxt from "./data_racing.json" assert { type: "json" };
/********************************************** 
            [ 게임 기능정의 ]
    _________________________________

    1. 게임룰: 거북버튼 클릭하여 거북을
        왼쪽에서 오른쪽으로 이동함
        이때 토끼는 자동으로 이동하여
        결승선에 먼저 도달하는 레이서가 승리함
    2. 토끼의 이동속도는 레벨로 설정함
    3. 결승선 도착은 둘 중 하나가 먼저
        도착할 경우 판별함수에서 결과를
        화면에 출력한다.
    4. 포커스가 버튼에 갈 경우 마우스가
        아닌 키보드 버튼으로 조작할 수 없게함
        (마우스만 사용하도록 함!)
    5. 기본적으로 거북이동버튼 클릭시
        토끼는 자동으롤 작동됨!
    6. 토끼이동버튼은 토끼만 미리 작동가능
    7. 처음으로 버튼은 전체를 리셋함
**********************************************/

// 1. 대상선정 ///////////////////
// (1) 거북 : #t1
const t1 = dFn.qs("#t1");

// (2) 토끼 : #r1
const r1 = dFn.qs("#r1");
// (3) 버튼 : #btns a
const btns = dFn.qsa("#btns a");
// (4) 레벨 : #level
const level = dFn.qs("#level");
// (5) 메시지박스 : #msg
const msg = dFn.qs("#msg");
// (6) 토끼, 거북 위치값 변수
// 토끼위치 : r1pos / 거북위치 : t1pos
let r1pos = 0,
    t1pos = 0;
// (7) 전체 암전박스: .cover
const cover = dFn.qs(".cover");

// cg(msg);

// console.log(t1);

// 2. 이벤트 설정하기 ////////////
// 대상: 버튼들 - btns변수
btns.forEach((ele) => {
    dFn.addEvt(ele, "click", goGame);
});

function goGame() {
    // 버튼글자 읽기
    let btxt = this.innerText;
    console.log("고우:", btxt);
    if (btxt == "거북출발") {
        // 거북버튼 상태값에 따른 조작 제어
        if (t1Stop) return;
        t1pos += 16;
        t1.style.left = t1pos + "px";
        // 거북버튼 키보드 작동 막기
        this.blur();

        // 토끼출발 호출
        goR1();
    } else if (btxt == "토끼출발") goR1();
    else if (btxt == "처음으로") location.reload();
} // function goGame()

/*********************************** 
    함수명: goR1
    기능: 토끼자동이동(인터발함수)
***********************************/
// 인터발 지우기용 변수
let autoI;
function goR1() {
    // autoI변수에 할당전 상태는 undifined 이므로 false 처리됨!
    // -> 이때 if문을 들어가려면 ! 연산자 사용
    if (!autoI) {
        autoI = setInterval(() => {
            r1.style.left = ++r1pos + "px";
            whoWinner();
        }, level.value);
        // 실행시간은 #level인 선택박스값을 읽어온다! -> option의 value 값

        // 승자 판별함수 호출
    } // if
} // function goR1()

/***************************************** 
    함수명: whoWinner
    기능: 기준값 보다 레이서위치값이 큰경우
        승자를 판별하여 메시지를 보여준다!
*****************************************/
let t1Stop = false; // 거북 멈춤
function whoWinner() {
    // console.log("토끼위치:", r1pos, "\n거북위치:", t1pos);

    // 1. 토끼 / 거북의 위치값이 기준값 이상일때 멈춤
    if (r1pos >= 650 || t1pos >= 650) {
        // (1) 토끼멈춤
        clearInterval(autoI);
        // (2) 거북멈춤
        t1Stop = true;

        // 승자변수
        let winner;
        // (3) 승자 판별하기
        if (r1pos > t1pos) winner = "토끼";
        else if (r1pos < t1pos) winner = "거북";
        else winner = "비김";

        // (4) 메시지 랜덤으로 커버박스에 넣기
        // msgTxt에 제이슨으로부터 데이터 담음!

        // 선택 메시지 객체
        let selMsg = msgTxt[winner];

        // 랜덤 메시지
        let rdmNum = Math.floor(Math.random() * selMsg.length);
        let rdmMsg = selMsg[rdmNum];

        // (5) 메시지 박스에 메시지 넣기
        msg.innerText = rdmMsg;

        // (6) 메시지 박스 보이기
        msg.style.display = 'block';
        msg.style.zIndex = '100';

        // (7) 전체 반투명 커버 암전주기
        cover.innerHTML = `
        <div style='
            position:fixed;
            top:0;
            left:0;
            width:100vw;
            height:100vh;
            background-color:#000;
            opacity:0.5;
            z-index:99'>
        </div>`

        // 버튼 위로 올리기
        dFn.qs('#btns').style.zIndex = '200';
    }
} // function whoWinner()
