import React, { useEffect, useState, useRef } from "react";

function Test2() {
    const [Todos, setTodos] = useState([1, 2, 3]);
    let num = useRef(3);

    useEffect(() => {
        console.log("Test2 Todos값 변경시 로딩");
        return () => {
            console.log("클리어");
        };
    }, [Todos]);

    return (
        <div className="Test2">
            <button
                onClick={() => {
                    num.current = num.current + 1;
                    setTodos([...Todos, num.current]);
                }}
            >
                useEffect 작동법 알아보기
            </button>
            {JSON.stringify(Todos)}
        </div>
    );
}

export default Test2;
