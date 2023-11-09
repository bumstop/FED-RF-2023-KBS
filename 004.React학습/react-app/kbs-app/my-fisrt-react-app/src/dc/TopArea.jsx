// 상단영역 컴포넌트
// gnb 데이터
import menu from "./data/gnb";
import { Logo } from "./Logo";
export function TopArea() {
    return (
        <>
            {/* 상단영역 */}
            <header className="top-area">
                <nav className="gnb">
                    <ul>
                        <li>
                            <Logo />
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
