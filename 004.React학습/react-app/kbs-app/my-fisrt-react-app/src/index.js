// index.js 는 public/index.html 페이지에 적용되는 컴포넌트다! -> 루트 컴포넌트
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { TopArea } from "./dc/layout/TopArea";
import { MainArea } from "./dc/layout/MainArea";
import { FooterArea } from "./dc/layout/FooterArea";
import "./css/index.css";
function App() {
    // 상단 메뉴 클릭시 메인컨텐츠 변경을 위해 후크관리변수를 생성한다
    const [menu, setMenu] = useState('main');
    // 메뉴 업데이트 함수
    const chgMunu = (txt) => {
        console.log('메뉴 업데이트!', txt);
        // 상태관리변수 변경
        setMenu(txt);
    }

    return (
        <>
            <TopArea chgFn={chgMunu} />
            <MainArea cat={menu}/>
            <FooterArea />
        </>
    )
}

// 컴포넌트 출력
// 먼저 root 객체 만들고
const root = ReactDOM.createRoot(document.querySelector("#root"));
// render 메서드로 출력
root.render(<App />);
