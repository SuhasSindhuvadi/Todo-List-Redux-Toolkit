import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, title: "hello" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const title = action.payload.trim(); // Remove whitespace from the title
            if (title.length === 0) return; // Do nothing if the title is empty

            const todo = {
                id: nanoid(),
                title
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(element => element.id !== action.payload);
        }
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
