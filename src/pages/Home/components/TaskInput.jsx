import { useDispatch } from 'react-redux'
import fectchAddTask from '../../../store/ducks/tasks/thunks/fetchAddTask'

import { Form } from '../style'
import Input from '../../../style/components/Input'

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
            <Input fullWidth spellCheck="false" autoComplete="off" type="text" name="task" placeholder="Insira uma nova tarefa aqui"/>
            <Input type="submit" value="adicionar"/>
        </Form>
    )
}

export default TaskInput