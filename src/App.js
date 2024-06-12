import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {

    // jsx 문법
    const $h2 = <h2>이제되지롱</h2>

    // jsx 규칙
    // 1. return 안에있는 태그는 반드시 하나의 태그로 묶여야 함.
    // 2. 빈 태그(닫는 태그가 없는)는 반드시 /> 로 마감
    // 3. 태그의 class 속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기
    // 4. 의미없는 부모는 <React.Fragment>로 감싸면 된다. 축약해서 <>로 가능
    // 5. 변수값이나 함수를 출력할 때는 {}로 감싸면 된다.
    const hello = '안녕!';
    return (
        <>
            <div className="App">
                <h1>{hello}</h1>
                {$h2}
            </div>
            <div>
                <input type="text"/>
                <label htmlFor=""></label>
            </div>
        </>
    );
}

export default App;
