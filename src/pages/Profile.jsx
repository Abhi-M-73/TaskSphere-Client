import React from 'react'
import { logoutUser } from '../api/userApi'
import { useDispatch } from 'react-redux';
import { setUser } from '../store/reducers/userSlice';
import { useNavigate } from 'react-router';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logoutUser();
        dispatch(setUser(null));
        navigate('/login');
    }

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">My Profile</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>

        </div>
    )
}

export default Profile
