import React from 'react'
import { connect } from 'react-redux'

import Task from '../../../common/Task/Task'
import { addTask } from '../../../services/tasks/addTask'

const TaskList = (props) => {
    return (
        <div>
            <button onClick={() => {addTask()}}>ADD TO FIRESTORE</button>
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
