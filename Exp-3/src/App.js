import './App.css';
import Idcard from './components/Idcard';
import Signup from './components/Registration';
import Mobiles from './components/Mobiles';
import Login from './components/Login';
import Navbar from './components/Navbar';
import React from 'react'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Logout from './components/Logout';
import Profile from './components/Profile';
import Home from './components/Home';
import { ContactedMe } from './components/ContactedMe';
 

function App() {
  return (
  <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Idcard' element={<Idcard />} />
        <Route path='Mobiles' element={<Mobiles />} />
        <Route path='Login' element={<Login />} /> 
        <Route path='Register' element={<Signup />} />
        <Route path='Logout' element={<Logout />} />
        <Route path='Contact' element={<Contact/>}></Route>
        <Route path='Profile' element={<Profile />} />
        <Route path='ContactedMe' element={<ContactedMe />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
