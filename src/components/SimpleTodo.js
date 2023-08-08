import React from 'react'
import { useState } from 'react'

function SimpleTodo() {
    const [name, setName] = useState('');
    const [todos, setTodos] = useState([]);
    let id = 0;
  return (
    <div>
        <h1>My Todo</h1>
        <input value={name} onChange={e => setName(e.target.value)} placeholder='add todo' />
        <button onClick={() => {
            setTodos([
                ...todos,
                { id:id++, name:name }
            ])
        }}>Add</button>
        
        {todos.map(todo =>
         <div key={todo.id}>
            <h2>{todo.name}</h2>
            <button onClick={() => {
               setTodos([
                todos.filter(a => a.id !== todo.id)
               ])
            }}>delete</button>
         </div>
            )}
    </div>
  )
}

export default SimpleTodo