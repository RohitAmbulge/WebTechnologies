import { useState } from "react"


let StateTask3 = ()=>{
    let [show , setShow] = useState(true);

    return(
        <div>
            <h1>State task3</h1>
            <button onClick={()=>{
                setShow(!show)
            }}>Toggle {show ? "Hide" : "show"}</button>
            <p style={{display : show ? "block" : "none"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odio illo quod esse. Obcaecati modi fugiat dolorem dolorum laborum tenetur!</p>
        </div>
    );
};

export default StateTask3;