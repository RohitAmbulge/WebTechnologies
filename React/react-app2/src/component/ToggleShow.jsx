import { useState } from "react";

let ToggleShow = ()=>{
    let [show , setShow] = useState(false);
    return(
        <>  
            <p style={{display: show ? "none" : "block" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem sint ea facilis beatae optio omnis, tempore quasi nulla qui consequatur?</p>

            <button className="border-2 " onClick={()=>{setShow(!show)}} >Toggle :{show ? "show" : "hide"}</button>
        </>
    )
}

export default ToggleShow;