import { useState } from "react";

let EventTask5 = () =>{
    let [username, setusername] = useState("");
    let [password, setPassword] = useState("");
    return(
        <>
         <input onChange={(e)=>{setusername(e.target.value)}} className="bg-amber-100 border-2" type="text" />
         <input type="text" />
        </>
    )

}

export default EventTask5;