import React from 'react'
import { GlobalContext } from '../../context/context';
import { useContext } from "react";
const Profile = () => {
  let { state, dispatch } = useContext(GlobalContext);

  return (
    <>
      I am Profile Page {state.myNum}
      <button onClick={()=>{dispatch({type:"SUB"})}}>Decrement</button>

    </>
  )
}

export default Profile
