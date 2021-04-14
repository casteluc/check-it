import { useDispatch } from 'react-redux'

import {ReactComponent as TrashImage} from '../../assets/trash.svg'
import {ReactComponent as CheckImage} from '../../assets/check.svg'

import fetchToggleCompleteTask from '../../store/ducks/tasks/thunks/fetchToggleCompleteTask'
import fetchDeleteTask from '../../store/ducks/tasks/thunks/fetchDeleteTask'
import { TaskContainer, TaskContent, Button } from './style'
import fectchEditTask from '../../store/ducks/tasks/thunks/fetchEditTask'

const Task = ({task, ...props}) => {
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
            <TaskContent 
                spellCheck="false" 
                contentEditable 
                onBlur={handleEdit} 
                suppressContentEditableWarning={true}
                completed={task.completed}>
                    {task.content}
            </TaskContent>

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
