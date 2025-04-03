import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './pages/Home';
import Header from './components/Header';
import Tasks from './pages/Tasks';
import Profile from './pages/Profile';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <div className='min-h-screen w-full bg-gray-100'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
