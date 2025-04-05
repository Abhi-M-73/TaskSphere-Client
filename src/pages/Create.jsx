import React from 'react'

const Create = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center p-2">
            <div className='md:w-lg w-full  bg-white border border-gray-300 shadow rounded-xl p-5'>
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Task</h2>
                <form >
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input

                            name="title"
                            type="text"
                            className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#903fdc] focus:outline-none"
                            placeholder="Enter your title"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">description</label>
                        <textarea
                            name="description"
                            id="description"
                            rows="3"
                            className="mt-2 w-full p-2 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 shadow-sm focus:ring-1 focus:ring-[#903fdc] focus:outline-none transition duration-200"
                            placeholder="Enter your description"
                            required>
                        </textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#903fdc] text-white p-2 rounded-lg hover:bg-[#a98de1] transition duration-300 cursor-pointer">
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Create
