// for문 연습1 - 외부 JS파일

// JS 외부파일은 html문서에 직접 들어가 작동되므로
// CSS처럼 utf-8 인코딩 설정이 필요없음

// 이벤트 대상선정
var mini = document.querySelectorAll(".mini");
var blue_box = document.querySelector(".Bcase");
var miniSpace = document.querySelector('.mini-space');
var stxtCount = document.querySelector('.stxt__count');
var count = 0;
console.log("미니언즈:", mini, blue_box);
// 2. 이벤트 연결하기

// 2-1. 미니언즈 이미지 클릭시 넣기함수 호출

// mini[0].onclick = insertMini;


for (var i = 0; i < mini.length; i++) {
    mini[i].addEventListener("click", insertMini);
    console.log("for문 내 i:", i);
}
console.log("for문 밖 i:", i);
// 3. 함수만들기

// 3-1. 미니언즈 넣기함수

/******************************************** 
    함수명 : insertMini
    기능 : 미니언즈 이미지 개수만큼 넣기
********************************************/
function insertMini() {
    // 1. 호출확인
    console.log("미니넣어!", this);
    // this는 나 자신! -> 호출한 .mini
    // 2. 셋팅된 개수 속성(data-cnt) 가져오기
    var cnt = this.getAttribute("data-cnt");
    // console.log('data-cnt:', cnt);

    // 3. 미니언즈 넣기
    // 대상: .Bcase -> miniSpace
    for (var j = 0; j < cnt; j++) {
        miniSpace.innerHTML += `
            <img src="./images/Minions.png" alt="미니언즈">
        `;
        count += 3;
    }
    stxtCount.innerText = count;
}


// 박스 리셋 버튼
var resetBtn = document.querySelector('.rbtn');
resetBtn.addEventListener('click',() => {
    miniSpace.innerText = '';
    count = 0;
    stxtCount.innerText = count;
})
