import { connect, useDispatch } from 'react-redux'

import {ReactComponent as TrashImage} from '../../assets/trash.svg'
import {ReactComponent as CheckImage} from '../../assets/check.svg'

import fetchToggleCompleteTask from '../../store/ducks/tasks/thunks/fetchToggleCompleteTask'
import fectchDeleteTask from '../../store/ducks/tasks/thunks/fetchDeleteTask'
import { TaskContainer, Button} from './style'
import { useState } from 'react'

const Task = ({task, ...props}) => {
    const dispatch = useDispatch()
    const [content, setContent] = useState(task.content)

    const handleEdit = (e) => {
        // props.editTask({targetId: task.id, content})
    }

    const handleDelete = (e) => {
        dispatch(fectchDeleteTask(task.id))
    }
    
    const handleToggleComplete = (e) => {
        dispatch(fetchToggleCompleteTask({
            targetId: task.id,
            completed: task.completed
        }))
    }
    
    return (
        <TaskContainer>
            <p 
                spellCheck="false" 
                contentEditable 
                onChange={(e) => setContent(e.targer.innerHTML)} 
                onBlur={handleEdit} 
                suppressContentEditableWarning={true}>
                    {content}
            </p>

            <div className="buttons">
                <Button className="delete-button" onClick={handleDelete}>
                    <TrashImage/>
                </Button>

                <Button className="checkbox" completed={task.completed} onClick={handleToggleComplete}>
                    <CheckImage/>
                </Button>
            </div>
        </TaskContainer>
    )
}

export default Task
