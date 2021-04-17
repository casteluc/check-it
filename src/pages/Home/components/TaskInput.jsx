import { useDispatch } from 'react-redux'

import fectchAddTask from '../../../store/ducks/tasks/thunks/fetchAddTask'
import fectchDeleteCompletedTasks from '../../../store/ducks/tasks/thunks/fetchDeleteCompletedTasks'

import { Form, RefreshButton } from '../style'
import Input from '../../../style/components/Input'
import {ReactComponent as RefreshImg } from '../../../assets/refresh.svg'

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

    const deleteCompletedTasks = () => {dispatch(fectchDeleteCompletedTasks())}

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Input fullWidth spellCheck="false" autoComplete="off" type="text" name="task" placeholder="Insira uma nova tarefa aqui"/>
            <Input type="submit" value="adicionar"/>
            <RefreshButton padding="0 5px" onClick={deleteCompletedTasks}> <RefreshImg/> </RefreshButton>
        </Form>
        </>
    )
}

export default TaskInput