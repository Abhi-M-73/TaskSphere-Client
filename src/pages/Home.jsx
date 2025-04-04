import React from 'react'
import HeroSection from '../components/HereSection'
import Task from '../components/Task'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-3xl font-bold text-center'>Latest Task</h1>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-5 py-5 md:mt-12 p-2'>
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </div>
            </div>
        </div>
    )
}

export default Home
