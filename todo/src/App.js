import React, {useState, useReducer} from 'react';
import {initialState, todoReducer} from './reducers/reducer'
import './App.css'
const initialForm = {
  todo: ""
}
function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState)
  const [newTodo, setNewTodo] = useState(initialForm)

  const handleChanges = e => {
    setNewTodo(e.target.value)
  }
  const handleAddTodo = e => {
    e.preventDefault()
    dispatch({type: "ADD_TODO", payload: newTodo})
    setNewTodo({todo: ''})
  }

  const handleCompleted = id => {
    
    dispatch({type:"TOGGLE_COMPLETE", payload: id})
    
  }

  const handleRemove = () => {
    dispatch({type: "DELETE_TODO"})
  }

  console.log(state)
  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todo">New ToDo:&nbsp;      </label>
          <input
          id="todo"
          type="text"
          name="todo"
          value={newTodo.todo}
          onChange={handleChanges}
          />
   
        <button type="submit">Add Todo</button>
        <button onClick={handleRemove}>Clear Completed</button>
      </form>
      <div>{state.map(todo => {
        return <div onClick={()=>handleCompleted(todo.id)} key={todo.id} className={todo.completed ? "completed": ""}>{todo.title}</div>
      })}</div>
    </div>
  );
}

export default App;
