import { useState } from "react"

let InputText=() =>{
    let [input, setInput] = useState("");
    return(
        <>
            <input type="text" className="border border-2" onChange={(e)=>{setInput(e.target.value)}}/>
            <p>Input : {input}</p>
        </>
    )
}

export default InputText;