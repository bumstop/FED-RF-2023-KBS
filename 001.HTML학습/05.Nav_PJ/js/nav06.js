const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),

    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
}; /////// domFn 객체 /////////////

const gnbBox = domFn.qs(".gnb");
let hcode ='';

for()
`<li>
    <a href="">1차</a>
    <div class="smenu">
        <aside class="smbx">
            <h2>
                <div class="stit">2차</div>
                <a href="">전체보기</a>
                <div class="swrap">
                    <dl>
                        <dt></dt>
                        <dd>
                            <a href="">요기</a>
                        </dd>
                    </dl>
                </div>
            </h2>
        </aside>
    </div>
</li>`;
// ul>li>a{1차}+.smenu>aside.smbx>h2>(.stit{2차}+a{전체보기})+.swrap>dl>dt+dd>a{요기}
