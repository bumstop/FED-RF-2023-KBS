// 보그 PJ 로그인 페이지 JS - login.js

import dFn from "./dom.js";
import catData from "./data/category_data.json" assert { type: "json" };
// 부드러운 스크롤 모듈
import { startSS, setPos } from "./smoothScroll23.js";

// [1] 부드러운 스크롤 적용 //////////
startSS();

// 카테고리 페이지 기능 구현하기
// 요구사항: url로 전달된 키값을 읽어서 페이지의 데이터를 셋팅한다

