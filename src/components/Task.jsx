import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Task = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-lg">
      <div className={`bg-white border-2 border-gray-200 hover:border-purple-500 rounded-2xl shadow-md transition hover:shadow-lg p-6 space-y-3 ${isCompleted ? "border-purple-500" : ""}`}>
        <div className='flex items-center justify-between'>
          <h1 onClick={() => navigate(`/details/id`)} className="text-xl font-semibold text-purple-700">Task Title</h1>

          {/* Checkbox to mark complete/incomplete */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="complete"
              checked={isCompleted}
              onChange={() => setIsCompleted(!isCompleted)}
              className="accent-purple-600 w-5 h-5"
            />
          </div>
        </div>
        <p onClick={() => navigate(`/details/id`)} className="text-sm text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem at tempora eos explicabo tenetur
          voluptatibus tempore repudiandae, esse quasi illum expedita impedit reiciendis corrupti dolorem
          consectetur. Quibusdam quas soluta eum.
        </p>
      </div>
    </div>
  );
};

export default Task;
