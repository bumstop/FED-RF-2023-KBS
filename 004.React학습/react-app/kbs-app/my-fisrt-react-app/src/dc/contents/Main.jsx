import { Banner } from '../contents/Banner';

export function Main(props) {
    return (
        <>
            <h1 style={{textAlign:"center"}}>
                메인페이지
            </h1>
            <Banner category={props.cat} />
        </>
    )
}