import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { addTask } from '../../../store/actions/tasks'

import { InputForm } from '../style'

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
        <InputForm onSubmit={handleSubmit}>
            <input type="text" name="task" placeholder="Insira uma nova tarefa aqui"/>
            <input type="submit" value="adicionar"/>
        </InputForm>
    )
}

export default connect(null, {addTask})(TaskInput)