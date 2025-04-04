import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from './pages/Home';
import Header from './components/Header';
import Tasks from './pages/Tasks';
import Profile from './pages/Profile';
import Login from './components/Login';
import Register from './components/Register';
import { useSelector } from 'react-redux';
import CompletedTask from './pages/CompletedTask';

const App = () => {
  const { user } = useSelector(store => store.user);

  return (
    <div className='min-h-screen w-full bg-gray-100'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={user ? <Home /> : <Navigate to={"/login"} />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/completed' element={<CompletedTask />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
