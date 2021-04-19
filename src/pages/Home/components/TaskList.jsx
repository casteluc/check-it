import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import fectchGetTasks from '../../../store/ducks/tasks/thunks/fetchGetTasks'
import Task from '../../../common/Task/Task'
import { FadeBar } from '../style'

const TaskList = (props) => {
    let tasks = useSelector(state => [...state.tasks])
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fectchGetTasks())
    }, [dispatch])

    return (
        <>
            <div>
                {   
                    tasks.map(task => {
                        return <Task key={task.id} task={task}></Task>
                    })
                }
            </div>
            <FadeBar/>
        </>
    )
}

export default TaskList
