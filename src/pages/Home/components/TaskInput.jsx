import { useDispatch } from 'react-redux'
import { fectchAddTask } from '../../../store/ducks/tasks/thunks'

import { Form } from '../style'

const TaskInput = (props) => {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        let content = e.target.task.value
        if (content) {
            dispatch(fectchAddTask(content))
            e.target.task.value = ""
        }
        
        e.preventDefault()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <input autoComplete="off" type="text" name="task" placeholder="Insira uma nova tarefa aqui"/>
            <input type="submit" value="adicionar"/>
        </Form>
    )
}

export default TaskInput