import React from 'react'

function TodoContent({todo}) {
    const {id, content, completed} = todo;

    return (
        <div className="todos">
            <div className="todo">
                <p>{content}</p>
                <button>toggle</button>
                <button>delete</button>
            </div>
        </div>
    )
}

export default TodoContent