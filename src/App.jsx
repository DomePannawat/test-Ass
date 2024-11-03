import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import User from './pages/User'
import Admin from './pages/Admin'
import Owner from './pages/Owner'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/owner' element={<Owner/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
