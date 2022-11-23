import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './slices/TodoSlice';

export default configureStore({
    reducer: {
        todos: todosReducer
    }
})