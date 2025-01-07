import React from 'react'

const Events = () => {
    const handleClick =(e)=>{
        e.preventDefault()
        console.log("Click 1");  
    }
    const handleClick1 = (id)=>{
      console.log("click 2", "my id is ",
        
      );
      

    }
  return (
    <>
    <button onClick={handleClick}>Click1</button>
    <button onClick={()=>handleClick1("WMA100")}>Click2</button>
    </>
  )
}

export default Events