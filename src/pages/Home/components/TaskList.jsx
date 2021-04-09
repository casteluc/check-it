import React from 'react'

import Task from './Task'

const TaskList = () => {
    let tasks = [1,2,3] /* temporary variable */

    return (
        <div>
            {tasks.map(task => {
                return <Task content={task}></Task>
            })}    
        </div>
    )
}

export default TaskList
