// 어벤져스 JS - avengers.js

// 초기 데이터 셋팅하기
// 데이터 : 어벤져스 데이터 - data,js > character

console.log(character);

const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

const avengers = qs('.avengers-box');

// console.log('대상:', avengers);

let hcode = '';
let num = 1;
for(let x in character) {
    console.log(x);

    hcode += `
        <!-- ${num}. ${x} -->
        <div class="hero">
            <!-- 이미지 -->
            <img src="./ab_img/${character[x]['이미지명']}.png" alt="${x}">
            <!-- 소개글박스 -->
            <article class="txt${num >= 3 ? " right" : ""}">
                <div>
                    <h3>${x}</h3>
                    <p>천재적인 두뇌와 재능으로 세계 최강의 무기업체를 이끄는 CEO이자, 타고난 매력으로 셀러브리티 못지않은 화려한 삶을 살아가던 억만장자 토니 스타크.</p>
                </div>
            </article>
        </div>
    `;

    // 주석번호 증가
    num++;
} // for in

console.log(hcode);
// 생성된 hcode 확인

// 3. 대상에 html 넣어 출력하기
avengers.innerHTML = hcode;
/************************************************
    [ 객체를 위한 for in 문 ]

    - 구문: 
    for(변수 in 객체){코드}

    - 작동원리:
    객체의 개수만큼 순서대로 속성명과 속성값을 가져옴

    - 변수는 객체의 속성명이다!

    - 객체의 값을 사용하려면 for in 문 안에
        객체[변수] 로 쓰면됨!

*************************************************/
