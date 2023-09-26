// js4-3.array_method

// DOM 메서드 모듈
import dFn from "./dom.js";

// 0. 기본정보 셋팅
// (1) 배열변수 선언과 할당
const fruit = ["배", "사과", "용과", "딸기"];

// (2) 과일명과 배경이미지명을 매칭함 -> 객체
const frObj = {
    배: "fruits_01",
    사과: "fruits_02",
    용과: "fruits_14",
    딸기: "fruits_09",
    두리안: "fruits_17",
    바나나: "fruits_15",
    수박: "fruits_12",
    파인애플: "fruits_13",
    망고: "fruits_24",
    오렌지: "fruits_03",
    체리: "fruits_05",
    멜론: "fruits_11",
    블루베리: "fruits_20",
    레몬: "fruits_04",
}; ////////// frObj 객체 /////

// 1. 요구사항: 배열에 과일정보를 담아서 '과일주세요' 버튼 클릭시
// 과일이미지 요소를 화면에 출력해준다.
// 배열구성을 수정, 삭제 등 배열 메서드로 변경할 수 있게 한다.

// 2. 대상선정:
// 2-1. 이벤트 대상: .mbtn (기능 버튼들)
const mbtn = dFn.qsa(".mbtn");
// 2-2. 변경 대상: .showit (배열정보출력) / .cont (과일출력박스)
const showit = dFn.qs(".showit");
const cont = dFn.qs(".cont");

// 2-3. 전체 과일콤보박스: #sel
const sel = dFn.qs("#sel");
// 2-4. 선택 과일콤보박스: #anum
const anum = dFn.qs("#anum");
// 2-5. 지울개수 박스: #delNum
const delNum = dFn.qs("#delnum");
console.log(mbtn, showit, cont, sel, anum);

// 3. 초기화작업: 처음배열 출력 / 콤보박스 바인딩

// 3-1. 처음 배열 출력하기
const showArray = () => (showit.innerText = fruit.join("🍓"));

// 처음 배열출력함수 최초호출
showArray();

// 3-2. 전체 과일콤보박스 바인딩
// 대상: #sel / 데이터: frObj{} 객체

// 객체의 속성(키값)을 배열로 변환하여 배열메서드 이용하기
// 객체형식 -> {키: 값}
// 키만 가지고 배열로 변환하는 Object 객체의 메서드: keys()
// Object.key(객체) -> 객체의 키를 값으로하는 배열 생성

sel.innerHTML = Object.keys(frObj)
    .map((v) => `<option>${v}</option>`)
    .join("");

// 객체의 키를 배열로!
// console.log(Object.keys(frObj));

// 객체의 값을 배열로!
// console.log(Object.keys(frObj).map((v) => frObj[v]));

// option 태그 변수
// let opTag = "";
// for (let x in frObj) {
//     // console.log(x);
//     // 내용 넣기
//     opTag += `<option>${x}</option>`;
// } // for in
// sel.innerHTML = opTag;

// 3-3. 선택 과일콤보박스 바인딩
// 대상: #anum / 데이터: fruit[] 배열
function bindCombo() {
    anum.innerHTML = fruit.map((v, i) => `<option value=${i}>${v}</option>`).join("");
} // bindCombo()
// 선택 과일콤보 바인딩 함수 최초호출
bindCombo();

// 4. 이벤트 설정하기
mbtn.forEach((ele) => {
    dFn.addEvt(ele, "click", showFruit);
});

// 5. 함수만들기
// 배열을 조작하여 과일을 화면에 출력!
function showFruit() {
    // 버튼 텍스트
    let btxt = this.innerText;
    console.log("누른거:", btxt);

    if (btxt == "과일주세요~!") {
        // 출력박스에 배열정보로 태그넣기
        // 구조: ul>li
        // 과일 배열만큼 돌면서 만들기
        let hcode = `<ul>`;
        fruit.forEach((val) => {
            hcode += `
                <li style="background: url(./addimg/${frObj[val]}.png) no-repeat center/cover">
                    ${val}
                </li>
            `;
        }); // forEach
        hcode += `</ul>`;
        // 출력박스에 태그넣기
        cont.innerHTML = hcode;
    }
    // 배열 뒤에 추가하기 메서드: push()
    else if (btxt == "뒷배열추가요~!") {
        // 대상: fruit 배열
        // 읽어올곳: #sel 박스 -> 값은 value
        fruit.push(sel.value);
    }
    // 배열 앞에 추가하기 메서드: unshift()
    else if (btxt == "앞배열추가요~!") {
        fruit.unshift(sel.value);
    }
    // 뒷배열 삭제 메서드: pop()
    else if (btxt == "뒷배열삭제요~!") {
        fruit.pop();
    }
    // 앞배열 삭제 메서드: shift()
    else if (btxt == "앞배열삭제요~!") {
        fruit.shift();
    }
    // 중간배열삭제 메서드: splice()
    // 삭제시: splice(순번) -> 순번부터 뒤를 모두 삭제
    //          splice(순번,개수) -> 순번부터 개수만큼 삭제
    else if (btxt == "중간배열삭제") {
        fruit.splice(anum.value, delNum.value);
        console.log("지울순번:", anum.value, "/지울개수:", delNum.value);
    }
    // 중간배열삽입 메서드: splice()
    // 삽입시: splice(순번, 0, 넣을값, 넣을값, ...)
    // -> 순번뒤에 0을 쓰고 그 뒤에 값을 쓰면 삽입됨.
    // -> 선택순번ㅇ 앞쪽에 배열값이 삽입됨.
    else if (btxt == "중간배열삽입") {
        fruit.splice(anum.value, 0, sel.value);
        console.log("삽입순번:", anum.value);
    }
    showArray();
    bindCombo();
} // function showFruit()
