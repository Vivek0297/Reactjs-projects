import React from 'react'
import { assests } from "../assests/assests"

export const Todo = ({todos, setTodos, setEditTask}) => {

const handleDlt = ({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id))
} 

const handleEdit = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTask(findTodo)
}

const handleComplete = (todo) => {
    setTodos(todos.map((item) => {
      if(item.id === todo.id){
          return {...item, completed: !item.completed}
      }
      return item;
    })
  );
    {console.log(todos)}
}

  return (
    <div>
        {todos.map((todo)=> 
            <li className='list-item' key = {todo.id}>
                <input type='text'
                value={todo.title} 
                className= {`list ${todo.completed? "complete" : ""}`}
                onChange={(event) => event.preventDefault()}/>
              <div>
                <button className='button-complete task-button'>
                  <img src={assests.check_icon} onClick={()=> handleComplete(todo)}/>
                </button>
                <button className='button-edit task-button'>
                  <img src={assests.edit_icon} onClick={() => handleEdit(todo)}/>
                </button>
                <button className='button-delete task-button'>
                  <img src={assests.trash_icon} alt='' onClick={() => handleDlt(todo)}/>
                </button>
            </div>
            </li>
        )}
    </div>
  )
}
