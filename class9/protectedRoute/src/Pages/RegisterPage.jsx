import React from 'react'
import RegisterForm from '../components/RegsiterForm'
import { Link } from 'react-router-dom'
import { auth,getAuth,createUserWithEmailAndPassword } from '../config/firebase'

const RegisterPage = () => {
  const register=(a)=>{
    createUserWithEmailAndPassword(auth, a.email, a.password)
  .then((userCredential) => {
   
    const user = userCredential.user;
    console.log("user register",user);
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
     
  }
  return (
    <div>
      <h1>Register</h1>
      <RegisterForm register={register}/>
      <p>already have an account <Link to={'/login'}>login</Link></p>
    </div>
  )
}

export default RegisterPage
