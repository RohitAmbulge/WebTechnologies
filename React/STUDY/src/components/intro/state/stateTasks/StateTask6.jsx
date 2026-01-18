import React, { useState } from 'react'


//show input on text
function StateTask6() {

    let [text, setText] = useState();
  return (

    <>
        <div>StateTask6</div>
        <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
        <h1>{text}</h1>
    </>
   
    
  )
}

export default StateTask6