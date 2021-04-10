import React from 'react'

const Task = (props) => {
    return (
        <div>
            <p contentEditable="true">{props.task.content}</p>
            <div className="delete-button"></div>
            <div className="checkbox"></div>
        </div>
    )
}

export default Task
