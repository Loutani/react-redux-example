import React from 'react'
import { useSelector } from 'react-redux'
import TodoAdd from './TodoAdd'
import TodoContent from './TodoContent'

function Todo() {
    const todos = useSelector(state => state.todos)
    return (
        <>
        <TodoAdd />

        <hr />

        {
            todos.length > 0 && todos.map(todo => <TodoContent key={todo.id} todo={todo} />)
        }
        {
            todos.length <= 0 && <p>no todo found</p>
        }

        <hr />
        </>
    )
}

export default Todo