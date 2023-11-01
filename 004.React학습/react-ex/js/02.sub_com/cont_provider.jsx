export const 누구냐 = React.createContext();


/* 
    ------------------------------------------------------------

    🍓 Context API란?
    전역 상태(global state) 값을 공유할 수 있도록 
    React에서 고안된 방법
    주로 로그인한 유저 정보, 테마, 언어 등을 저장한다.

    Prop Drilling의 단점을 보완한다!

    ((Prop Drilling 이란?))

    Prop Drilling은 컴포넌트 트리에서
    컴포넌트에 직접적으로 필요한 데이터를 
    props로 전달받는 것이 아니라,
    단순히 컴포넌트 트리의 하위 컴포넌트로의 
    props 전달을 위하여 데이터를 전달하는 과정임

    🍓 Context API 사용법

    [React.createContext(기본값)]
    - Context 객체를 생성
    createContext 함수를 호출하면 
    Provider와 Consumer 컴포넌트를 반환함

    파라미터로 넘겨받는 값은 
    Provider를 사용하지 않았을 때 적용될 초기값

    [Context.Provider]
    context의 value를 변경하는 역할을 한다.
    Provider 선언시 value props를 통해 
    context의 value를 입력받음
    이 속성값 value는 context를 통해 전역적으로 공유되는 값임!

    [useContext 후크]
    context의 value를 가져올 때 사용
    파라미터로 넘겨받는 값은 
    createContex를 통해 생성된 Context 객체임 
*/