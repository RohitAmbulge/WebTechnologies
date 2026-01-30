import React from 'react'

function EventTask2() {

    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");
    
    return (
    <div>
        <input type="text" onChange={(e)=>{setUserName(e.target.value)}} className='border-2 bg-amber-50 '/>
        <input type="text" onChange={(e)=>{setPassword(e.target.value)}} className='border-2 bg-amber-50 '/>
    </div>
  )
}

export default EventTask2
