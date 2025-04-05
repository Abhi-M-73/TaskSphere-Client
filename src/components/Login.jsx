import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { loginUser } from '../api/userApi';
import { useDispatch } from 'react-redux';
import { setUser } from "../store/reducers/userSlice";

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        const data = await loginUser(input);
        dispatch(setUser(data));
        setInput({
            username: "",
            email: "",
            password: "",
        });
        navigate("/")
    }
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4 pt-18">
            <div className="w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://i.pinimg.com/736x/04/05/5d/04055d5123b3a887f08290d11fd14085.jpg"
                        alt="auth-img"
                        className="w-full h-64 md:h-full object-cover"
                    />
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                onChange={handleInputChange}
                                value={input.email}
                                name='email'
                                type="email"
                                className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                onChange={handleInputChange}
                                value={input.password}
                                name='password'
                                type="password"
                                className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#903fdc] text-white p-2 rounded-lg hover:bg-[#a98de1] transition duration-300 cursor-pointer">
                            Login
                        </button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
