import React from 'react'
import { GlobalContext } from '../../context/context';
import { useContext } from "react";

const About = () => {
  let { state, dispatch } = useContext(GlobalContext);

  return (
    <>
      I am About Page {state.myNum}
      <button onClick={()=>{dispatch({type:"ADD"})}}>Increment</button>
    </>
  )
}

export default About
