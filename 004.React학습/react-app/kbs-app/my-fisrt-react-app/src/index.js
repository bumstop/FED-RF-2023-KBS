// index.js 는 public/index.html 페이지에 적용되는 컴포넌트다! -> 루트 컴포넌트
import React from "react";
import ReactDOM from "react-dom/client";
import { TopArea } from "./dc/TopArea";
import "./index.css";
function App() {
    return <TopArea />;
}

// 컴포넌트 출력
// 먼저 root 객체 만들고
const root = ReactDOM.createRoot(document.querySelector("#root"));
// render 메서드로 출력
root.render(<App />);
