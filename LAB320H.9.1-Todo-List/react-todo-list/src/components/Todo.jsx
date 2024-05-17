import React, { useState } from 'react';
import {ACTIONS} from '../App'
import '../App'

export default function Todo({todo, dispatch}) {

    const [newTitle, setNewTitle] = useState(todo.title);

    const saveTask = (id) => {
        dispatch({ type: ACTIONS.SAVE_TODO, payload: { id, newTitle } });
      };

  return (
    <div className='todoList'>
       <input type="checkbox"  checked={todo.completed} onChange={()=> dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})} />
      
       {todo.isEditing ? (
        <>
            <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            />
            <button onClick={() => saveTask(todo.id)}>Save</button>
         </>
      ) : (
        <>
          <span style={{ color: todo.completed ? '#AAA' : '#000' }}>{todo.title}</span>
          <button onClick={() => dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todo.id } })}>
            Edit
          </button>
          <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>
            Delete
          </button>
        </>
      )}
    </div>
  )
}
