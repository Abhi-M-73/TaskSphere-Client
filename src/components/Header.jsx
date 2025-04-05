import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { HiMenuAlt3 } from "react-icons/hi";
import { useSelector } from 'react-redux';
import ProfilePopup from './ProfilePopup';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const { user } = useSelector(store => store.user);

    const navContent = user
        ? [
            { path: "/", element: "Home" },
            { path: "/pending", element: "Pending" },
            { path: "/progress", element: "Progress" },
            { path: "/completed", element: "Completed" },
            { path: "/create", element: "Create" },
        ]
        : [
            { path: "/register", element: "Register" },
            { path: "/login", element: "Login" },
        ];

    return (
        <header className="bg-white shadow py-2 px-4 md:px-10 fixed w-full z-10">
            <nav className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <img
                        src="https://i.pinimg.com/736x/59/79/66/597966024f3bb87be767e1a9425e8fe3.jpg"
                        alt="logo"
                        className="w-12 md:w-14 object-cover rounded-full"
                    />
                    <h1 className="text-2xl md:text-3xl font-bold text-purple-700">TaskSphere</h1>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navContent.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            className={({ isActive }) =>
                                `transition duration-300 hover:text-purple-600 ${isActive ? "text-purple-600 font-medium" : "text-gray-700"}`
                            }
                        >
                            {item.element}
                        </NavLink>
                    ))}

                    {user && (
                        <div className="relative">
                            <img
                                src="https://i.pinimg.com/474x/b8/d7/b1/b8d7b15b2f230aa3ac0fc1308950b85d.jpg"
                                alt="profile"
                                className="h-10 w-10 rounded-full cursor-pointer object-cover"
                                onClick={() => setIsOpenProfile(!isOpenProfile)}
                            />
                            {isOpenProfile && (
                                <div className="absolute right-0 mt-2 z-20">
                                    <ProfilePopup isOpenProfile={isOpenProfile} setIsOpenProfile={setIsOpenProfile} />
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Mobile Menu Icon */}
                <HiMenuAlt3
                    className="md:hidden text-3xl cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                />
            </nav>

            {/* Mobile Nav Dropdown */}
            {isOpen && (
                <div className="md:hidden mt-2  space-y-2">
                    {navContent.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                            className="block text-center py-2 rounded hover:bg-purple-50 text-gray-700"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.element}
                        </NavLink>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
