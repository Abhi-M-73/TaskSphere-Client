import React, { useState } from 'react'
import { createTask } from '../api/userApi';
import { setCreateTask } from '../store/reducers/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const Create = () => {
    const [input, setInput] = useState({
        title: "",
        description: ""
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    const handleCreateTask = async (e) => {
        e.preventDefault();
        const data = await createTask(input);
        dispatch(setCreateTask(data));
        navigate("/");
        setInput({
            title: "",
            description: ""
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center y-20 bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Task</h2>
                <form onSubmit={handleCreateTask}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            onChange={handleInputChange}
                            value={input.title}
                            name='title'
                            type="title"
                            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#903fdc] focus:outline-none"
                            placeholder="Enter your title"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            onChange={handleInputChange}
                            value={input.description}
                            name='description'
                            rows={3}
                            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#903fdc] focus:outline-none"
                            placeholder="Enter your description"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#903fdc] text-white p-2 rounded-lg hover:bg-[#a98de1] transition duration-300"
                    >
                        Create Task
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Create
