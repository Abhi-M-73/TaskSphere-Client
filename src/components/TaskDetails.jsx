import React from 'react';

const TaskDetails = () => {
  // Sample data (can be replaced with props or state)
  const task = {
    title: "Finish React Project",
    description: "Complete all pages, test all components, and submit before the deadline.",
    isCompleted: true,
    completedOn: "April 5, 2025"
  };

  const handleEdit = () => {
    // Logic for editing the task (e.g. navigate to edit page)
    console.log("Edit clicked");
  };

  const handleDelete = () => {
    // Logic for deleting the task
    console.log("Delete clicked");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white w-full max-w-xl p-6 rounded-2xl shadow-lg space-y-6">
        <h1 className="text-2xl font-bold text-purple-700">{task.title}</h1>

        <div>
          <h2 className="text-gray-700 font-semibold mb-1">Description</h2>
          <p className="text-gray-600 leading-relaxed">{task.description}</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 text-sm rounded-full font-medium shadow border ${
                task.isCompleted ? "bg-white text-green-700" : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {task.isCompleted ? "Completed" : "In Progress"}
            </span>
          </div>

          {task.isCompleted && (
            <div className="text-sm text-gray-900">
              <strong>Completed on:</strong>{" "}
              <span className="font-medium text-gray-600">{task.completedOn}</span>
            </div>
          )}
        </div>

        {/* Edit and Delete Buttons */}
        <div className="flex justify-between gap-4 pt-4 border-t border-gray-200">
          <button
            onClick={handleEdit}
            className="px-8 py-1 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-6 py-1 rounded-md text-white bg-red-500 hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
