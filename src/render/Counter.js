import React, { useState, useEffect } from "react";

// 물론 때때로 이펙트 안에 정의해둔 콜백에서 사전에 잡아둔 값을 쓰는 것이 아니라 최신의 값을 이용하고 싶을 때가 있습니다. 제일 쉬운 방법은 ref를 이용하는 것인데 링크의 글 마지막 단락에 설명되어 있습니다.

function Counter() {
    const [count, setCount] = useState(0); //count는 특정 컴포넌트 랜더링에 포함되는 상수.
    const [view, setview] = useState(false);

    useEffect(() => {
        //모든 랜더링은 고유의 이펙트를 가진다.
        document.title = `You clicked ${count} times`;
    });
    function handleAlertClick() {
        setTimeout(() => {
            //클로저
            alert("You clicked on: " + count);

            setview(true);
        }, 3000);
    }
    return (
        <div>
            <ul>
                <li>Click me를 3번 눌러서 count를 3으로 누른후,</li>
                <li>show alert을 눌르고</li>
                <li>바로 Click me를 2번 누릅니다</li>
            </ul>
            <p>You clicked {count} times</p>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Click me
            </button>
            <button onClick={handleAlertClick}>Show alert</button>

            {view && (
                <>
                    <hr />

                    <p>
                        함수형 컴포넌트는 이런 결과가 나오지만, 클래스컴포넌트는
                        this로 묶여있기때문에 예상한 값이 나온다.
                    </p>
                    <b>
                        다만 함수형 컴포넌트가 좀더 정확한 이치이다. 누른 순간의
                        값을 전달해주어야한다.
                    </b>
                </>
            )}
        </div>
    );
}

export default Counter;
