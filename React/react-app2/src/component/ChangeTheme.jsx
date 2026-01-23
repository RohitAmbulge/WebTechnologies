import { useState } from "react"

let ChangeTheme =()=>{

    let [theme, setTheme] = useState(false);
    return(
        <button style={{backgroundColor : theme ? "black" : "white"}} className="border-2" onClick={()=>{setTheme(!theme)}}>click</button>

    )
}

export default ChangeTheme;