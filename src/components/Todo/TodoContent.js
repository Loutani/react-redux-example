import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../redux/slices/TodoSlice';

function TodoContent({todo}) {
    const {id, content, completed} = todo;
    const dispatch = useDispatch();

    const handleToggleTodo = todoId => {
        dispatch(toggleTodo(todoId));
    }

    const handleDeleteTodo = todoId => {
        dispatch(deleteTodo(todoId))
    }

    return (
        <div className="todos">
            <div className="todo">
                {
                    completed ? <strike><p>{content}</p></strike> : <p>{content}</p>
                }
                
                <button onClick={() => handleToggleTodo(id)}>{completed ? 'make it not completed' : 'make it completed'}</button>
                <button onClick={() => handleDeleteTodo(id)}>delete</button>
            </div>
        </div>
    )
}

export default TodoContent