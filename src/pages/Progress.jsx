import React from 'react'
import Task from '../components/Task'

const Progress = () => {
  return (
    <div className="min-h-screen w-full pt-24">
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-3xl font-bold text-center'>Progress Task</h1>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-5 py-5  mt-5 p-2'>
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </div>
            </div>
        </div>
  )
}

export default Progress
