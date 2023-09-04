// 따라다니는 원 JS - following.js

// 1. 이벤트 등록하기
window.addEventListener('DOMContentLoaded', loadFn);

// 2. 함수 만들기
// DOM 선택함수
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);
// 2-1. 로드함수
function loadFn() {
    // 호출확인
    console.log('로딩완료');

    // 1. 대상선정
    // 변경대상: .cont-box
    const cont_box = qs('.cont-box');
    console.log('대상:', cont_box);

    // 2. html 태그 만들기
    // 50개 이미지 만들기
    let hcode = '';
    
    for(let i = 1; i <= 50 ; i++) {
        hcode += `
            <div>
                <img src="../images/dress/${i}.jpg" alt="dress" />
                <a href="#" class="link">이것은 너의 드레스야!</a>
            </div>
        `;
    } // for문

    // console.log('코드:', hcode);

    // 3. 대상에 html 넣기
    cont_box.innerHTML = hcode;

    // 따라다니는 원 셋팅하기
    // 1. 대상선정: 
    // 움직일 대상: .mover
    const mover = qs('.mover');
    // 이벤트 대상: document.body
    const myBody = document.body;
    console.log('요소:', mover, myBody);
    // 2. 이벤트 대상에 마우스 무드 이벤트가
    // 적용될때 무버가 따라다니게 기능구현

    // 무버 크기의 절반 계산
    let gap =  mover.clientHeight / 2; 

    myBody.onmousemove = e => {
        // 위치값
        let posx  = e.pageX - gap;
        let posy = e.pageY - gap; 
        // let posy = e.clientY - gap; 
        // -> 만약 .mover가 fixed 포지션이면 
        // 브라우저 화면에서의 위치인 client를 사용한다.

        mover.style.top = `${posy}px`;
        mover.style.left = `${posx}px`; 
        // console.log('pageX:', e.pageX, '/','pageY', e.pageY);
        // console.log('screenX:', e.screenX, '/','screenY', e.screenY);
        // console.log('offsetX:', e.offsetX, '/','offsetY', e.offsetY);
        // console.log('clientX:', e.clientX, '/','clientY', e.clientY);
        /* 
        ★[[ 이벤트발생시 위치값 ]]★

        1. clientX, clientY
            -> 현재 보이는 브라우저 화면이 기준
            -> 화면을 기준한 fixed 포지션에서 주로 사용

        2. offsetX, offsetY
            -> 이벤트 대상이 기준
            -> 특정박스에 부모자격박스로부터 위치를 사용할 경우

        3. pageX, pageY
            -> 전체 문서를 기준(스크롤 화면을 포함)
            -> 화면을 기준한 absolute 포지션에서 주로 사용

        4. screenX, screenY
            -> 모니터 화면을 기준
        */
    } // onmousemove
        
    // 이벤트 구역을 들어올때만 보이기 / 나가면 숨기기
    myBody.onmouseenter = () => {
        mover.style.opacity = 1;
    }
    myBody.onmouseleave = () => {
        mover.style.opacity = 0;
    }

    // [3] a 요소에 오버시 원 크게 만들기
    const link = qsa('.link');
    console.log('링크:', link);

    // 한번에 셋팅하기
    link.forEach(ele => {
        ele.onmouseenter = () => { 
            mover.style.transform = 'scale(2)';
        }
        ele.onmouseleave = () => { 
            mover.style.transform = 'scale(1)';
        }
    })
     
} // 로드함수
