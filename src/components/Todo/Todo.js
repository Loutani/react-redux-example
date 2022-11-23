import React from 'react'
import { useSelector } from 'react-redux'
import TodoAdd from './TodoAdd'
import TodoContent from './TodoContent'

function Todo() {
    const todos = useSelector(state => state.todos);
    const completedTodo = todos.filter(todo => todo.completed)
    const remainTodo = todos.filter(todo => !todo.completed)

    if(todos.length <= 0) {
        return  <>
                    <TodoAdd />
                    <hr />
                    <p>no todo found</p>
                    <hr />
                </>
    }

    return (
        <>
        <TodoAdd />

        <hr />

        <p>total todo: {todos.length}, completed: {completedTodo.length}, remain: {remainTodo.length}</p>

        {todos.map(todo => <TodoContent key={todo.id} todo={todo} />)}

        <hr />
        </>
    )
}

export default Todo