import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { registerUser } from "../api/userApi";
import { useDispatch } from "react-redux";
import { setUser } from "../store/reducers/userSlice";

const Register = () => {
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        const data = await registerUser(input);
        dispatch(setUser(data));
        setInput({
            username: "",
            email: "",
            password: "",
        });
        navigate("/login");
    }

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4 pt-18">
            <div className="w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://i.pinimg.com/736x/c6/14/03/c614032d327041b408f03310af659c50.jpg"
                        alt="auth-img"
                        className="w-full h-64 md:h-full object-cover"
                    />
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>
                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                onChange={handleInputChange}
                                value={input.username}
                                name="username"
                                type="text"
                                className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter your username"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                onChange={handleInputChange}
                                value={input.email}
                                name="email"
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
                                name="password"
                                type="password"
                                className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#a278de] text-white p-2 rounded-lg hover:bg-[#a98de1] transition duration-300 cursor-pointer">
                            Register
                        </button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
