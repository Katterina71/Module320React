import { useState, useReducer } from 'react'
import './App.css'
import Todo from './components/Todo'


export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
  EDIT_TODO: 'edit-todo',

}

function reducer (todos, action){

  switch (action.type){
    case ACTIONS.ADD_TODO:
      return [newTodo(action.payload.newTask), ...todos]; // Prepend the new todo
      case ACTIONS.TOGGLE_TODO:
        return todos.map(todo => {
          if (todo.id === action.payload.id){
            return {...todo, completed: !todo.completed}
          }
          return todo
        })
        case ACTIONS.DELETE_TODO:
          return todos.filter(todo => todo.id !=action.payload.id)
        case ACTIONS.EDIT_TODO:
            return todos.map((todo) => {
              if (todo.id === action.payload.id) {
                return { ...todo, isEditing: true };
              }
              return todo;
            });
        case ACTIONS.SAVE_TODO:
            return todos.map((todo) => {
              if (todo.id === action.payload.id) {
                return { ...todo, title: action.payload.newTitle, isEditing: false };
              }
              return todo;
            });
        default:
          return todos
  }
}

const newTodo = (newTask) => {
  return { id: Date.now(), title: newTask, completed: false, isEditing: false}
}

function App() {
  
  const [newTask, setNewTask] = useState('');
  const [todos, dispatch] = useReducer(reducer, []);

  const addTask = (e) => {
    e.preventDefault()
    dispatch({type: ACTIONS.ADD_TODO, payload: {newTask : newTask}})
    setNewTask('')

  }

  console.log(todos);

  return (
    <div className="App">
     <h1>Create To-Do list</h1>
     <form>
        <input type='text'
          value = {newTask}
          onChange={((e) => setNewTask(e.target.value))}
          placeholder ='Add Task'
        />
        <button onClick={addTask}>Add</button>
      </form>

     <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
      
    </div>
  )
}

export default App
