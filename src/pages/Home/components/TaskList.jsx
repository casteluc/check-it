import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import fectchGetTasks from '../../../store/ducks/tasks/thunks/fetchGetTasks'
import Task from '../../../common/Task/Task'

const TaskList = (props) => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fectchGetTasks())
        console.log("askdmaksl")
    }, [dispatch])

    return (
        <div>
            {props.tasks.map(task => {
                return <Task key={task.id} task={task}></Task>
            })}
        </div>
    )
}

const mapStateToProps = (state) => ({
    tasks: state.tasks
})

export default connect(mapStateToProps)(TaskList) 
