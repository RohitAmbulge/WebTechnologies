import { useState } from "react"

let ChangeTheme =()=>{

    let [theme, setTheme] = useState(false);
    return(
        <div className={`min-h-screen flex items-center justify-center ${theme ? "bg-black text-white" : "bg-white text-black"}`}>
             <button onClick={()=>{setTheme(!theme)}}  className="border-2 m-10 px-3 py-3" >click</button>
        </div>
       

    )
}

export default ChangeTheme;