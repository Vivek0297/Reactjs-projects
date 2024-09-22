import React, { useEffect } from 'react';
import '../App.css';
import { v4 as uuidv4 } from 'uuid';


export const Form = ({input, setInput, todos, setTodos, editTask, setEditTask}) => {

  const updateTodo = (title, id, completed) => {
      const newTodo = todos.map((todo)=> 
        todo.id === id ? {title, id, completed}: todo
      )
      setTodos(newTodo)
      setEditTask("");
   }
  
  useEffect(() => {
    if(editTask){
      setInput(editTask.title)
    } else {
      setInput("")
    }
  }, [setInput, editTask]);

  const handleChange = (event) => {
      setInput(event.target.value)
  }

  const handleSubmit = (event) =>{
      event.preventDefault();
      if(!editTask){
        setTodos([...todos, {id: uuidv4(), title:input, completed: false}]);
        setInput("");
      }
      else{
        updateTodo(input, editTask.id, editTask.completed)
      }
  }

    return (
      <form onSubmit={handleSubmit}>
          <input type='text' 
          placeholder='Enter task here..' 
          className='task-input'
          onChange={handleChange}
          value={input}
          required
           />
          <button className='button-add' type='submit'>
            {editTask? "Ok" : "Add"}
          </button>
      </form>
    )
}
