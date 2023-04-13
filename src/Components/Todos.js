import React from 'react'
import Todo from './Todo';

const Todos = ({todo, onDelete, todos}) => {
  return (
    <div>
      <h3 className="container my-3" >Todos List</h3>

      {todos.length === 0 ? <h4 className="container">No Todos to show</h4>:
      
    todos.map((todo)=>{
      return (
        <Todo todo={todo} key={todo.sno} onDelete={onDelete}/>
        
        )
      })
      }

    </div>
  )
}

export default Todos 