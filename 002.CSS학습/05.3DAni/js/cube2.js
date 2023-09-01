// 큐브 애니 JS //////////////

/************************************* 
    [구현내용]
    - "돌아!"버튼을 클릭하면 멈춰있던
    큐브가 돌아감. 이때 버튼이 "멈춰!"
    버튼으로 변경되어 있음!
    - "멈춰!" 버튼을 클릭하면 돌고있던
    큐브가 멈춤. 이때 버튼이 "돌아!"
    버튼으로 변경되어 있음!

*************************************/

// window 로드 이벤트 호출
window.addEventListener('DOMContentLoaded', loadFn);

// 로딩함수
function loadFn() {
    // 호출확인
    console.log('호출');

// 1. 대상선정
// 이벤트대상: .btngo
const btngo = document.querySelector('.btngo');
// 변경대상: .cube
const cube = document.querySelector('.cube');

// 2. 이벤트 함수 설정하기  
btngo.addEventListener('click',(e) => {
    cube.classList.toggle('on');
    // 3. 텍스트 읽어오기(버튼 글자변경 위해)
    let btxt = e.target.innerText;
    console.log(
        '화살표 함수에서 this:', this,
        '화살표 함수에서 e.target:', e.target,
        '현제 버튼 글자:', btxt);
        btxt = btxt == '돌아!' ? '멈춰!' : '돌아!';       
    });  
}