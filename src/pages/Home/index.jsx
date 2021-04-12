import React from 'react'

import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

import { signOut } from '../../services/auth/signOut'

import { HomeContainer } from './style'

const Home = () => {
    return (
        <HomeContainer>
            <h2>Check List</h2>
            <button onClick={() => {signOut()}}>DESLOGAR</button>
            <TaskInput/>
            <TaskList/>
        </HomeContainer>
    )
}

export default Home
    