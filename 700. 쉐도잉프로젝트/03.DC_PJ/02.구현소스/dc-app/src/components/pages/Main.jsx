import { Banner } from '../modules/Banner';

export function Main() {
    return (
        <>
            <h1 style={{textAlign:"center"}}>
                메인페이지
            </h1>
            <Banner category={"main" + Math.ceil(Math.random() * 3) }/>
        </>
    )
}