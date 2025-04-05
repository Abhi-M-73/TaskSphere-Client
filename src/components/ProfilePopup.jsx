import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logoutUser } from '../api/userApi';
import { setUser } from '../store/reducers/userSlice';
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const ProfilePopup = ({ isOpenProfile, setIsOpenProfile }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logoutUser();
        dispatch(setUser(null));
        navigate('/login');
        setIsOpenProfile(!isOpenProfile)
    }

    return (
        <div className="w-52 bg-white  p-5 rounded-2xl shadow-lg">
            <div className='flex items-center justify-between mb-3'>
                <h1 className="text-xl font-bold text-gray-800">Profile</h1>
                <IoClose onClick={() => setIsOpenProfile(!isOpenProfile)} className='text-2xl' />
            </div>
            <div className='flex flex-col gap-1 text-md '>
                <div onClick={() => { navigate("/profile"); setIsOpenProfile(!isOpenProfile) }} className='flex items-center gap-2 cursor-pointer hover:text-gray-500'>
                    <FaUserCircle />
                    <h3>My Account</h3>
                </div>
                <div onClick={handleLogout} className='flex items-center gap-2 cursor-pointer hover:text-gray-500'>
                    <RiLogoutCircleRLine />
                    <h2>Logout</h2>
                </div>
            </div>
        </div>
    )
}

export default ProfilePopup
