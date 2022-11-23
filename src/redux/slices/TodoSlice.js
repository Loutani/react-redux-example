import { createSlice } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Math.random(),
                content: action.payload.todoContent,
                completed: false
            }

            return [...state, newTodo];
        }
    }
});

export const {addTodo} = todoSlice.actions

export default todoSlice.reducer;