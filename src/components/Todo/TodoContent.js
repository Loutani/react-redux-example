import React from 'react'

function TodoContent({todo}) {
    const {id, content, completed} = todo;

    return (
        <div className="todos">
            <div className="todo">
                {
                    completed ? <strike><p>{content}</p></strike> : <p>{content}</p>
                }
                
                <button>toggle</button>
                <button>delete</button>
            </div>
        </div>
    )
}

export default TodoContent