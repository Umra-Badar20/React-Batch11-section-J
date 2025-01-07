import React from 'react'

const LearnJSX = () => {
  const myName= "Umra"
  return (
    <>
    {/* React.createElemet('h1',class:'heading','JSX') */}
    <h1 className='heading'>JSX</h1>
    <h1>{10+10}</h1>
    <h1>My name is {myName}</h1>
    
    </>
  )
}

export default LearnJSX