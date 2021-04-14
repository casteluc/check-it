import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

import fectchGetTasks from '../../../store/ducks/tasks/thunks/fetchGetTasks'
import Task from '../../../common/Task/Task'

const TaskList = (props) => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks)
    
    useEffect(() => {
        dispatch(fectchGetTasks())
    }, [dispatch])

    return (
        <div>
            {tasks.map(task => {
                return <Task key={task.id} task={task}></Task>
            })}
        </div>
    )
}

export default TaskList
