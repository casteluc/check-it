import { connect } from 'react-redux'

import { editTask, deleteTask, completeTask } from '../../store/actions/tasks'

import {ReactComponent as TrashImage} from '../../assets/trash.svg'
import {ReactComponent as CheckImage} from '../../assets/check.svg'

import { TaskContainer, Button} from './style'

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
        <TaskContainer>
            <p contentEditable onBlur={handleEdit} suppressContentEditableWarning={true}>{props.task.content}</p>

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
