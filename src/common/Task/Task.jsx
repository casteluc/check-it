import { connect, useDispatch } from 'react-redux'

import {ReactComponent as TrashImage} from '../../assets/trash.svg'
import {ReactComponent as CheckImage} from '../../assets/check.svg'

import fetchToggleCompleteTask from '../../store/ducks/tasks/thunks/fetchToggleCompleteTask'
import fetchDeleteTask from '../../store/ducks/tasks/thunks/fetchDeleteTask'
import { TaskContainer, Button} from './style'
import { useState } from 'react'
import fectchEditTask from '../../store/ducks/tasks/thunks/fetchEditTask'

const Task = ({task, ...props}) => {
    const [content, setContent] = useState(task.content)
    const dispatch = useDispatch()

    const handleEdit = (e) => {
        dispatch(fectchEditTask({targetId: task.id, content: e.target.innerHTML}))
    }

    const handleDelete = (e) => {
        dispatch(fetchDeleteTask(task.id))
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
                onBlur={handleEdit} 
                suppressContentEditableWarning={true}>
                    {task.content}
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
