import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../reducers/TodoSlice'

function AddTodo() {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const handleAddTodos = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <div>
            <form onSubmit={handleAddTodos}>
                <input 
                    type='text'
                    placeholder='Enter todo'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
