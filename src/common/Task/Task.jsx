import { connect } from 'react-redux'

import { editTask, deleteTask, completeTask } from '../../store/ducks/tasks'

import {ReactComponent as TrashImage} from '../../assets/trash.svg'
import {ReactComponent as CheckImage} from '../../assets/check.svg'

import { TaskContainer, Button} from './style'

const Task = (props) => {
    const handleEdit = (e) => {
        props.editTask({targetId: props.task.id, content: e.target.innerHTML})
    }

    const handleDelete = (e) => {
        props.deleteTask({targetId: props.task.id})
    }
    
    const handleComplete = (e) => {
        props.completeTask({targetId: props.task.id})
    }
    
    return (
        <TaskContainer>
            <p spellcheck="false" contentEditable onBlur={handleEdit} suppressContentEditableWarning={true}>{props.task.content}</p>

            <div className="buttons">
                <Button className="delete-button" onClick={handleDelete}>
                    <TrashImage/>
                </Button>

                <Button className="checkbox" completed={props.task.completed} onClick={handleComplete}>
                    <CheckImage/>
                </Button>
            </div>
        </TaskContainer>
    )
}

export default connect(null, {editTask, deleteTask, completeTask})(Task)
