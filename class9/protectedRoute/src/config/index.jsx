import React, { useEffect, useState } from 'react'
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import AppLayout from '../components/AppLayout'
import RegisterPage from '../Pages/RegisterPage'
import LoginPage from '../Pages/LoginPage'
import { getAuth,auth,onAuthStateChanged } from './firebase'
import { use } from 'react'


const AppRouter = () => {
  const [isUser,setUser] = useState(false)
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const uid = user.uid;
        console.log('user exist',user);
        setUser(true)
        
        // ...
      } else {
        console.log('not ');
        setUser(false)
        
      }
    });
  },[])
  return (
<BrowserRouter>
<Routes>
    <Route path='/' element={<AppLayout><Home/></AppLayout>}/>
    <Route path='/about' element={<AppLayout><About/></AppLayout>}/>
    <Route path='/contact' element={<AppLayout><Contact/></AppLayout>}/>
    <Route path='/register' element={<RegisterPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>

</Routes>
</BrowserRouter>
  )
}

export default AppRouter
