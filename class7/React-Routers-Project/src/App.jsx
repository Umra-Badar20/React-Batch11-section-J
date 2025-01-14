import "./App.css";
import { Routes, Route,Link, Navigate } from "react-router";
import Home from "./assets/components/Home"
import About from "./assets/components/About"
import Profile from "./assets/components/Profile"
import Signup from "./assets/components/Signup"
import Login from "./assets/components/Login"
import { useState } from "react";
function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <>
      {
        (isLogin)?
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>:
      <ul>
      <li><Link to="/">Login</Link></li>
      <li><Link to="/signup">Signup</Link></li>
    </ul>
      }
     { 
     (isLogin)?
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<div>Page not found 404</div>} />
      </Routes>:
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
      }
    </>
  );
}
export default App;
