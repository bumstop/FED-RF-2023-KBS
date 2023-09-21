// DOM모듈 JS 불러오기
import dFn from "./dom.js";

console.log(dFn)

// 1. 요구사항분석: 이미지가 있는 메뉴 마우스 오버시 이미지 변경하기
// 2. 대상선정: a.simg
const simg = dFn.qsa('.simg');

// 3. 이벤트 설정
simg.forEach(ele => {
    dFn.addEvt(ele, 'mouseover', () => {
        let target = dFnqsa(ele, 'img')[1];
        let isrc = target.src;

        target.rsrc = isrc.replace('.png', '_on.png');
        ele.style.color = 'red';
    });
    dFn.addEvt(ele, 'mouseout', () => {
        let target = dFnqsa(ele, 'img')[1];
        let isrc = target.src;

        target.rsrc = isrc.replace('.png', '_on.png');
        ele.style.sccText = '';
    });
})
