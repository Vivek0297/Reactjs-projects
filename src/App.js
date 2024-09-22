import './App.css';
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { Todo } from './components/Todo';

const App = () => {

const initialState = JSON.parse(localStorage.getItem("todos")) || [];  
const [input, setInput] = useState("")
const [todos, setTodos] = useState(initialState)
const [editTask, setEditTask] = useState(null)

 useEffect(()=> {
  localStorage.setItem("todos", JSON.stringify(todos))
 }, [todos])

  return (
    <div className='container'>
        <div className='app-wrapper'>
          <div>
            <Header/>
          </div>
          <div>
            <Form 
            input = {input}
            setInput = {setInput}
            todos = {todos}
            setTodos = {setTodos}
            editTask = {editTask}
            setEditTask = {setEditTask}
            />
          </div>
          <div>
            <Todo
            todos = {todos}
            setTodos = {setTodos}
            setEditTask = {setEditTask}
            />
          </div>
        </div>
    </div>
  );
}

export default App;
