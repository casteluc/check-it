import { connect } from 'react-redux'
import { addTask } from '../../../store/actions/tasks'

import { Form } from '../style'

const TaskInput = (props) => {
    const handleSubmit = (e) => {
        let taskContent = e.target.task.value
        if (taskContent) {
            props.addTask({content: taskContent})
            e.target.task.value = ""
        }
        
        e.preventDefault()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <input autocomplete="off" type="text" name="task" placeholder="Insira uma nova tarefa aqui"/>
            <input type="submit" value="adicionar"/>
        </Form>
    )
}

export default connect(null, {addTask})(TaskInput)