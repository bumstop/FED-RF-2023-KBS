// 스와이퍼페이지 메인컨텐츠

import { Banner } from "./Banner";

export function Swiper(props) {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>스와이퍼 페이지</h1>
      <Banner category={props.cat} />
    </>
  );
} ////////////  Main 컴포넌트 ///////////
