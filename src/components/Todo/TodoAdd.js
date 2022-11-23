import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/slices/TodoSlice';

function TodoAdd() {
    const [todo, setTodo] = useState('')

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleAddTodo = () => {
        const newTodo = {
            id: Math.random(),
            content: todo,
            completed: false
        }

        dispatch(addTodo(newTodo));

        setTodo('');
    }

    return (
        <div className="add-todo">
            <input type='text' value={todo} onChange={handleChange} />
            <button onClick={handleAddTodo}>Add todo</button>
        </div>
    )
}

export default TodoAdd