

const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  }; /////// domFn 객체 /////////////


const gnbList = domFn.qsa('.gnb>ul>li');
console.log('대상:', gnbList);

gnbList.forEach((ele) => {
    domFn.addEvt(ele, 'click', showSub);
}); // gnbList.forEach

function showSub() {
    console.log('function showSub - this', this);
    // this는 클릭된 li요소 자신 (gnbList)

    // 1. 서브메뉴 유무 판별하기 -> .smenu가 하위에 있는지
    let isSub = domFn.qsEl(this, '.smenu');
    console.log('하위요소:', isSub);

    // if [ 서브메뉴가 있는 li클릭시 ]
    // 조건문 조건식에 null값은 false처리됨!
    if(isSub) {
        // 2. 서브메뉴 내부 ol박스 높이값 읽기
        let hv = domFn.qsEl(isSub, 'ol').clientHeight;
        console.log('처리해봐!', hv);

        // 3. .smenu(isSub)의 높이값 적용하기
        // 토글기능구현: isSub의 높이가 0이면 hv, 아니면 0

        isSub.style.height = (isSub.clientHeight == 0 ? hv : 0) + 'px';

        // 4. 클릭된 li 이외의 li .smenu는 닫기
        // -> 전체 li를 순회하며 현재 li만 빼고 처리
        // 사용할 DOM메서드 : 요소.isSameNode(비교요소)
        // 같은 요소면 true값 / 다른 요소면 false값 return
        gnbList.forEach((ele) => {
            let result = ele.isSameNode(this);

            // 결과처리: false일때만 높이값 0처리
            // false 일떄 true처리하려면 논리부정(!)사용

            // 처리대상변수: 순회하며 li하위 .smenu담기
            let target = domFn.qsEl(ele, '.smenu');

            // 현재 노드와 다른 li일 경우 처리
            if(!result) {
                // .smenu가 있을경우 처리
                if(target) {
                    target.style.height = '0px';
                }
            }
        }); // gnbList.forEach
    } // if(isSub)
    // else [ 서브메뉴가 없는 li 클릭시 ]
    else {
        gnbList.forEach((ele) => {
            let target = domFn.qsEl(ele, '.smenu');
            if(target) {
                target.style.height = '0px';
            }
        });
    }
} // function showSub()