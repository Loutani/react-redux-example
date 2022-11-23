import React, { useState } from 'react'

function TodoAdd() {
    const [todo, setTodo] = useState('')

    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    return (
        <div className="add-todo">
            <input type='text' value={todo} onChange={handleChange} />
            <button>Add todo</button>
        </div>
    )
}

export default TodoAdd