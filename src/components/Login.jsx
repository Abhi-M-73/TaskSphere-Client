import React from 'react';

const Login = () => {
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
                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#a278de] text-white p-2 rounded-lg hover:bg-[#a98de1] transition duration-300 cursor-pointer">
                            Login
                        </button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
