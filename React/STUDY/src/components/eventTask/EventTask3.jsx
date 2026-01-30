import { useState } from "react"

const EventTask3 = () =>{
    let [state, setState] = useState({
        userName : "", 
        password : ""
    })

    const handleSubmit = (e) =>{
       e.preventDefault();
       console.log("Submited Data :",state )
    }


    console.log(state);

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=>{setState({...state, userName : e.target.value})}} placeholder="Enter Username" value={state.userName}  className="border-2 bg-amber-50" type="text" />
                <input onChange={(e)=>{setState({...state, password : e.target.value})}} placeholder="Enter password" value={state.password}  className="border-2 bg-amber-50" type="text" />

                
                <button>Submit</button>
               

            </form>

            <p>{state.userName}</p>
            <p>{state.password}</p>
                
        </div>
    )
}

export default EventTask3;