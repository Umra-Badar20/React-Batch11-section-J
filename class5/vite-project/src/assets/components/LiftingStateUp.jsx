import React from 'react'

const LiftingStateUp = (props) => {
    const handleClick =(e)=>{
        e.preventDefault()
        let dt= "Child Data"
        props.myData(dt)
    }
  return (
    <>
    <h1>Lifting State Up</h1>
    <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default LiftingStateUp