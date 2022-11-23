import { createSlice } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = action.payload

            return [...state, newTodo];
        },
        toggleTodo: (state, action) => {
            const id = action.payload

            return state.map(todo => {
                if(todo.id === id) {
                    return {
                        id: todo.id,
                        content: todo.content,
                        completed: !todo.completed
                    }
                }

                return todo
            })
        },
        deleteTodo: (state, action) => {
            const id = action.payload

            return state.filter(todo => todo.id !== id)
        }
    }
});

export const {addTodo, toggleTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer;