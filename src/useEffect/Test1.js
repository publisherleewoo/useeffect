import React, { useEffect, useState } from "react";

function Test1() {
    const [Todos, setTodos] = useState("");
    useEffect(() => {
        console.log("Test1실행시 로딩");
        return () => {
            console.log("클리어");
        };
    }, [Todos]);

    return (
        <div className="Test1">
            <button
                onClick={() => {
                    setTodos("hi");
                }}
            >
                useEffect 작동법 알아보기
            </button>
            Todos가 setTodos로 값이 한번만 바뀐다.
        </div>
    );
}

export default Test1;
