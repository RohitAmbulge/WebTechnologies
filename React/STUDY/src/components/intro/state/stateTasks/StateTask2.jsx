import { useState } from "react";

let StateTask2 = () =>{

    let [num, setNum] = useState(0);
    let increment = () => {setNum(num+1)};
    let decrement = ()=>{setNum(num-1)};
    let restore = () =>{setNum(0)};
    return(
        <>
            <h1>State Task 2</h1>
            <h1>Num : {num}</h1>
            <button onClick={increment}>inc</button>
            <button onClick={decrement}>dec</button>
            <button onClick={restore}>Restore</button>
        </>
    )
}

export default StateTask2;