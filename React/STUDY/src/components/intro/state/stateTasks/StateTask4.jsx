import { useState } from "react"

const StateTask4 = () => {

    let [count , setCount] = useState(0);

    let increment = () =>{
        setCount(count + 1);
    }

    let decrement = () =>{
        setCount(count - 1);
    }

    return(
        <>
            <h1>State Task 4</h1>
            <h1>Count : {count}</h1>
            <button onClick={increment}>incr</button>
            <button onClick={decrement}>decr</button>
        </>
    )
}

export default StateTask4;