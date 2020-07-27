import React, { useEffect } from "react";

function Test10({ someProp }) {
    //useEffec 안에서 쓰는건 내부에서 사용한다.
    useEffect(() => {
        function doSomething() {
            console.log(someProp);
        }
        doSomething();
    }, [someProp]);
    return <></>;
}

//비권장
// function Example({ someProp }) {
//     function doSomething() {
//       console.log(someProp);
//     }

//     useEffect(() => {
//       doSomething();
//     }, []); // 🔴 This is not safe (it calls `doSomething` which uses `someProp`)
// return <></>;
//   }

export default Test10;
