import React, { useEffect } from 'react'
import HeroSection from '../components/HereSection'
import Task from '../components/Task'
import { getAllTask } from '../api/userApi'
import { useDispatch, useSelector } from 'react-redux'
import { setTask } from '../store/reducers/userSlice'

const Home = () => {
    const dispatch = useDispatch();
    const { tasks } = useSelector(store => store.user);
    console.log(tasks)

    useEffect(() => {
        const fetchTasks = async () => {
            const data = await getAllTask();
            dispatch(setTask(data.tasks));
        };

        fetchTasks();
    }, []);

    return (
        <div>
            <HeroSection />
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-3xl font-bold text-center'>Latest Task</h1>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-5 py-5 md:mt-12 p-2'>
                    {
                        tasks.length > 0 ? tasks.map((task) => (
                            <Task key={task._id} task={task} />
                        )) : <span>No Task Available...</span>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
