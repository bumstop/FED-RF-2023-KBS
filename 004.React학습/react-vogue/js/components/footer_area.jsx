// 링크 시스템 JS 가져오기 //////
import { makeLink } from "./linksys2.js";
// 카테고리 데이터 가져오기 /////
import catData from "./data/category_data.js";

/////////// 하단영역 컴포넌트 /////////////
/******************************************* 
  컴포넌트명 : FooterArea
  기능 : 하단영역 링크메뉴, 회사정보
*******************************************/
function FooterArea() {
    // 하단링크 데이터
    const fTxt = ["정기구독", "회사소개", "광고 및 제휴", "개인정보 처리방침"];

    const makeList = (data) =>
        data.map((v) => (
            <li>
                <a href="#">{v}</a>
            </li>
        ));

    return (
        <React.Fragment>
            {/* 3-1.하단로고 */}
            <div className="blogo">
                <img src="./images/footer_logo.png" alt="하단로고" />
            </div>
            {/* 3-2.회사주소 */}
            <address className="addr">
                WWW.VOGUE.COM Ⓒ CONDÉNAST ASIA PACIFIC. INC. ALL RIGHTS RESERVED.
                VOGUE.COM KOREA IS OPERATED BY DOOSAN MAGAZINE.
            </address>
            {/* 3-3.하단링크 */}
            <ul className="blink">{makeList(fTxt)}</ul>
        </React.Fragment>
    );
} //////////// FooterArea 컴포넌트 /////////////

// 하단영역 출력하기 /////////////////
ReactDOM.render(<FooterArea />, document.querySelector(".footer-area"));
