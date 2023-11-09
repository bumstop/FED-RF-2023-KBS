// 04.콜백 : useCallback

// 축구선수에게 좋아요 표시하는 컴포넌트
function MarkLike() {
    // 선수에 대한 좋아요 상태관리 변수
    const [son, setSon] = React.useState(false);
    const [danaka, setDanaka] = React.useState(false);
    const [lee, setLee] = React.useState(false);

    // 상태관리변수를 업데이트하는 함수
    // useCallback으로 재사용하도록 메모이제이션하기!!!
    const toggleSon = React.useCallback(() => {
        setSon(!son);
    }, [son]);
    const toggleDanaka = React.useCallback(() => {
        setDanaka(!danaka);
    }, [danaka]);
    const toggleLee = React.useCallback(() => {
        setLee(!lee);
    }, [lee]);

    // 기존 구현 함수코드
    // const toggleSon = () => {
    //     setSon(!son);
    // };
    // const toggleDanaka = () => {
    //     setDanaka(!danaka);
    // };
    // const toggleLee = () => {
    //     setLee(!lee);
    // };

    /* 
        [ 리액트 성능 최적화를 위한 문제인식! ]
        -> 하나의 버튼 클릭시 하나만 변경됨에도 불구하고
        모든 버튼이 새롭게 업데이트 되어 화면에 리랜더링됨
        이떄 호출되는 함수도 새로 만들어져서 호출됨!

        -> 기존에 만들어진 함수를 다시 로딩하지 않는 방법
                >>> 메모이제이션 !!! <<<

        ->  useCallback() 사용!
        - 아래와 같이 의존성 변수를 등록하여 변경여부에 따라
        함수를 기존에 로딩한 것으로 재사용 해준다!

        const [의존성변수, set의존성변수] = useState(초기값);
        const 콜백 = useCallback(() => {}, 
        [의존성변수]);

    */

    return (
        <div style={{ textAlign: "center" }}>
            <h1
                style={{
                    fontSize: "70px",
                    color: "hotpink",
                    textShadow: "5px 5px 2px #555",
                }}>
                좋아요~! 부탁해요~!!!
            </h1>
            <ShowLike name={"손흥민"} sts={son} fn={toggleSon} />
            <ShowLike name={"다나카"} sts={danaka} fn={toggleDanaka} />
            <ShowLike name={"이강인"} sts={lee} fn={toggleLee} />
        </div>
    );
} // function MarkLike()

// 좋아요 서브 컴포넌트
// 호출되는 컴포넌트가 매번 리랜더링되므로 메인 컴포넌트의
// useCallback 처리된 함수도 매번 새로 그러짐! 그래서 효과가 없다!
// 따라서 호출되는 서브 컴포넌트를 메모이제이션 처리해야
// useCallback도 효과를 보게된다!!! ->> 중요!!

// 방법: 기존 컴포넌트 함수를 React.memo(컴포넌트) 처리
const ShowLike = React.memo(({ name, sts, fn }) => {
    // name: 선수명 / sts: 상태변수 / fn: 변경함수
    console.log({ name, sts });

    // 코드리턴
    return (
        <div style={{ padding: "10px" }}>
            <button onClick={fn} style={{ fontSize: "100px" }}>
                {name} {sts ? "👍🏻" : "👎🏻"}
            </button>
        </div>
    );
}); // function ShowLike()

ReactDOM.render(<MarkLike />, document.querySelector("#root"));
