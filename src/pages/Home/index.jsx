import React from 'react'

import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

import { HomeContainer } from './style'

const Home = () => {
    return (
        <HomeContainer>
            <h2>Check List</h2>
            <TaskInput/>
            <TaskList/>
        </HomeContainer>
    )
}

export default Home
    