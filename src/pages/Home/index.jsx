import React from 'react'

import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

const Home = () => {
    return (
        <div>
            <h2>Check List</h2>
            <TaskInput/>
            <TaskList/>
        </div>
    )
}

export default Home
    