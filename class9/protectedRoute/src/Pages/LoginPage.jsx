import React from 'react'
import LoginForm from '../components/LoginForm'
import {Link} from 'react-router-dom'
import { auth,getAuth,signInWithEmailAndPassword  } from '../config/firebase'

const LoginPage = () => {
  const login = (a)=>{
    signInWithEmailAndPassword(auth, a.email, a.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("userlogin",user);
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  }
  return (
    <div>
     <h1>Login</h1>
     <LoginForm login={login}/>
     <p>dobnt have an account <Link to={'/register'}>register here</Link></p>
    </div>
  )
}

export default LoginPage
