import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../reducers/TodoSlice'

function Todos() {
    const todos = useSelector(state => state.todos.todos)  // Access the todos array inside the state

    const dispatch = useDispatch()

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos
