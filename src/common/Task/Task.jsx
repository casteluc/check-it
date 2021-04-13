import { connect } from 'react-redux'

import { editTask, deleteTask, completeTask } from '../../store/ducks/tasks'

import {ReactComponent as TrashImage} from '../../assets/trash.svg'
import {ReactComponent as CheckImage} from '../../assets/check.svg'

import { TaskContainer, Button} from './style'
import { useState } from 'react'

const Task = ({task, ...props}) => {
    const [content, setContent] = useState(task.content)

    const handleEdit = (e) => {
        props.editTask({targetId: task.id, content})
    }

    const handleDelete = (e) => {
        props.deleteTask({targetId: task.id})
    }
    
    const handleComplete = (e) => {
        props.completeTask({targetId: task.id})
    }
    
    return (
        <TaskContainer>
            <p spellcheck="false" contentEditable onBlur={handleEdit} suppressContentEditableWarning={true}>{content}</p>

            <div className="buttons">
                <Button className="delete-button" onClick={handleDelete}>
                    <TrashImage/>
                </Button>

                <Button className="checkbox" completed={task.completed} onClick={handleComplete}>
                    <CheckImage/>
                </Button>
            </div>
        </TaskContainer>
    )
}

export default connect(null, {editTask, deleteTask, completeTask})(Task)
