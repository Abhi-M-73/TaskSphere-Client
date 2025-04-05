import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from './pages/Home';
import Header from './components/Header';
import Profile from './pages/Profile';
import Login from './components/Login';
import Register from './components/Register';
import Completed from './pages/Completed';
import Pending from './pages/Pending';
import Progress from './pages/Progress';
import { useSelector } from 'react-redux';
import Create from './pages/Create';
import TaskDetails from './components/TaskDetails';

const App = () => {
  const { user } = useSelector(store => store.user);

  return (
    <div className='min-h-screen w-full bg-gray-50'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={user ? <Home /> : <Navigate to={"/login"} />} />
          <Route path='/create' element={<Create />} />
          <Route path='/details/:id' element={<TaskDetails />} />
          <Route path='/pending' element={<Pending />} />
          <Route path='/progress' element={<Progress />} />
          <Route path='/completed' element={<Completed />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
