import React, { useState } from 'react'
import { connect } from 'react-redux'

import { editTask, deleteTask, completeTask } from '../../store/actions/tasks'

const Task = (props) => {
    const handleEdit = (e) => {
        props.editTask({id: props.task.id, content: e.target.innerHTML})
    }

    const handleDelete = (e) => {
        props.deleteTask(props.task.id)
    }
    
    const handleComplete = (e) => {
        props.completeTask(props.task.id)
    }
    
    return (
        <div>
            <p contentEditable onBlur={handleEdit} suppressContentEditableWarning={true}>{props.task.content}</p>
            <button className="delete-button" onClick={handleDelete}>delete</button>
            <button className="checkbox" onClick={handleComplete}>check</button>
            {props.task.completed ? <h1>COMPLETOU</h1> : ""}
        </div>
    )
}

export default connect(null, {editTask, deleteTask, completeTask})(Task)
