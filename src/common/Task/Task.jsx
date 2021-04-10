import React, { useState } from 'react'
import { connect } from 'react-redux'

import { editTask } from '../../store/actions/tasks'

const Task = (props) => {
    const handleEdit = (e) => {
        props.editTask({id: props.task.id, content: e.target.innerHTML})
    }
    
    return (
        <div>
            <p contentEditable onBlur={handleEdit} suppressContentEditableWarning={true}>{props.task.content}</p>
            <div className="delete-button"></div>
            <div className="checkbox"></div>
        </div>
    )
}

export default connect(null, {editTask})(Task)
