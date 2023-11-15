import { Banner } from '../modules/Banner';
import { SecIntro } from '../modules/SecIntro';

export function Main() {
    return (
        <>
            {/* 1. 배너 컴포넌트 */}
            <Banner category={"main" + Math.ceil(Math.random() * 3) }/>
            {/* 2. 섹션 소개 컴포넌트 */}
            <SecIntro />
        </>
    )
}