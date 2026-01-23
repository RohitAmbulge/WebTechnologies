import { useState } from "react"

let CounterApp = ()=>{
    let [count, setCount] = useState(0);

    return(
        <>
            <h1>Count : {count}</h1>
            <button className="border border-red-500 mr-10"  onClick={()=>{setCount(count => count+1)}}>Increament</button>
            <button className="border border-red-500 mr-10"  onClick={()=>{setCount(count => count-1)}}>Decreament</button>
            <button className="border border-red-500 mr-10"  onClick={()=>{setCount(0)}}>Reset</button>
        </>
    )
} 

export default CounterApp;