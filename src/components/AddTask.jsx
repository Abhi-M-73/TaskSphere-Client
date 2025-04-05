import React from 'react'

const AddTask = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4">
      
    <button className="bg-purple-600 text-white text-2xl w-12 h-12 rounded-full mb-6 flex items-center justify-center shadow-md hover:bg-purple-700">
      +
    </button>

    <div className="flex space-x-3 mb-6">
      <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">Active</button>
      <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">Completed</button>
      <button className="px-4 py-2 rounded-full bg-purple-600 text-white">All todos</button>
    </div>

    <div className="w-full max-w-md space-y-4">
      <div className="flex items-center justify-between px-4 py-3 border border-purple-500 rounded-lg shadow-sm">
        <div className="flex items-center space-x-2">
          <input type="radio" checked readOnly className="accent-purple-600" />
          <span className="line-through text-gray-500">Don’t worry</span>
        </div>
        <button className="text-gray-400 hover:text-red-500 text-lg">✕</button>
      </div>

      {/* Active Todo */}
      <div className="flex items-center justify-between px-4 py-3 border border-gray-200 rounded-lg shadow-sm">
        <div className="flex items-center space-x-2">
          <input type="radio" className="accent-purple-600" />
          <span className="text-gray-800">Be happy</span>
        </div>
        <button className="text-gray-400 hover:text-red-500 text-lg">✕</button>
      </div>
    </div>

    {/* Trash Button */}
    <button className="bg-purple-600 text-white text-2xl w-12 h-12 rounded-full mt-6 flex items-center justify-center shadow-md hover:bg-purple-700">
      🗑️
    </button>
  </div>
  )
}

export default AddTask
