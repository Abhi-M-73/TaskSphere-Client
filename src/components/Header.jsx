import React, { useState } from 'react';
import { NavLink } from 'react-router'; 
import { HiMenuAlt3 } from "react-icons/hi"; 

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); 

    const navContent = [
        { path: "/", element: "Home" },
        { path: "/tasks", element: "Tasks" },
        { path: "/profile", element: "Profile" },
        { path: "/login", element: "Login" },
        { path: "/register", element: "Register" },
    ];

    return (
        <header className="bg-white shadow py-2 px-4 md:px-10 fixed w-full z-10">
            <nav className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <img src="https://i.pinimg.com/736x/59/79/66/597966024f3bb87be767e1a9425e8fe3.jpg"
                        alt="logo"
                        className="md:w-14 w-12 object-cover"
                    />
                    <h1 className="md:text-3xl text-2xl font-bold">TaskSphere</h1>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-6">
                    {navContent.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className={({ isActive }) =>
                                `hover:text-indigo-600 transition-all duration-300 ${isActive ? "text-indigo-600" : ""}`
                            }>
                            {item.element}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Icon */}
                <HiMenuAlt3 className="md:hidden text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} />

                {/* Mobile Dropdown */}
                {isOpen && (
                    <div className="absolute top-14 left-0 w-full bg-white shadow-md flex flex-col py-4 md:hidden">
                        {navContent.map((item, index) => (
                            <NavLink
                                to={item.path}
                                key={index}
                                className="py-2 px-4 hover:bg-gray-100 text-center"
                                onClick={() => setIsOpen(false)}>
                                {item.element}
                            </NavLink>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
