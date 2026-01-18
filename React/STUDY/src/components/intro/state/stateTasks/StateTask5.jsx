import React, { useState } from 'react'

const StateTask5 = () => {

    let [show, setShow] = useState(true);
  return (
    <>
        <div>StateTask5</div>
        <button onClick={()=>{setShow(!show)}}>Toggle</button>
        <p style={{display : show ? 'block' : 'none'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit laborum minus nisi impedit possimus, magni voluptate molestias repudiandae. Officia, voluptatibus?</p>
    </>

  )
}

export default StateTask5;