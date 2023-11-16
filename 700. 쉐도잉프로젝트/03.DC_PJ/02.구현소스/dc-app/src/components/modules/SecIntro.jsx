// DC.com 섹션소개 컴포넌트
import { secIntroData } from "../data/sec_intro";

// 섹션소개모듈용 CSS 불러오기
import "../../css/sec_intro.css";
import { Link, useNavigate } from "react-router-dom";

// 구조정의:
// Root > section > img Box + title Box + button Box

export function SecIntro() {
  // 선택데이터
  const selData = secIntroData;
  // 라우터 이동객체 설정
  const goNav = useNavigate();

  // 라우터 이동함수

  return (
    <>
      <section className="sec-intro">
        {selData.map((v) => (
          <div key={v.tit.split("^")[0]}>
            {/* 1. 이미지 박스 */}
            <div className="imbx">
              <img src={v.isrc} alt={v.tit.split("^")[0]} />
            </div>
            {/* 2. 타이틀 박스 */}
            <div className="titbx">
              <h3>{v.tit.split("^")[0]}</h3>
              <h2>{v.tit.split("^")[1].toUpperCase()}</h2>
            </div>
            {/* 3. 버튼 박스 */}
            <div className="btnbx">
              <button onClick={() => goNav(v.link)}>{v.btn.toUpperCase()}</button>
              {/* <Link to={v.link}>
                <button>{v.btn.toUpperCase()}</button>
              </Link> */}
            </div>
          </div>
        ))}
      </section>
    </>
  );
} // function SecIntro()
