import React, {useState} from 'react';

const Counter = () => {

    let [count, setCount] = useState(0);

    const increaseHandler = e => {
        // useState의 setter는 상태값을 업데이트할 때
        // 렌더링 전까지 이전 상태값을 참조

        // 해결방법: 함수형 업데이트를 사용
        setCount((prev) => {
            console.log('변경 이전값: ', prev);
            // 변경 이후값을 return 으로 반환
            return prev + 1;
        });
        setCount(count => count + 1);

        // 상태값의 변경은 실시간으로 일어나지 않음
        // 해결방법: useEffect 훅으로 해결 (추후 학습 예정)
        console.log('변경 이후값: ', count);
    }

    return (
        <div>

            <h1>숫자 : {count}</h1>
            <button onClick={increaseHandler}>+ 1</button>
            <button onClick={e => setCount(count - 1)}>- 1</button>


        </div>
    );
};

export default Counter;