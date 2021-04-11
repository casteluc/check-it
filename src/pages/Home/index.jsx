import React from 'react'

import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

import { HomePage } from './style'

const Home = () => {
    return (
        <HomePage>
            <h2>Check List</h2>
            <TaskInput/>
            <TaskList/>
        </HomePage>
    )
}

export default Home
    