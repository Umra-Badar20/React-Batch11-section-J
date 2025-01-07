import React from 'react'
import { useState, useEffect } from 'react'
const UseEffect = () => {
 const [count,setCount] = useState(0)

 useEffect(()=>{
   console.log("useEffect");
 },[count])
 //______Side Effects
//  let num = 0
// const funct=()=>{
//  num+1
// }
  return (
    <>
    <h1>UseEffect</h1>
    <p>Count : {count}</p>
    <button onClick = {()=>{setCount(count+1)}}>Increase</button>
    </>
  )
}
export default UseEffect