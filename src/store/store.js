import { configureStore } from "@reduxjs/toolkit";
import todoReducers from '../reducers/TodoSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducers
    }
})
