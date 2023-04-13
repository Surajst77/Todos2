import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Todos from './Components/Todos';
import Add from './Components/Add';
import About from './Components/About';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  let initTodo
  if(localStorage.getItem("todos") === null)
  {
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
const onDelete =(todo) => {
  console.log("deleted", todo)
  // Deleting elements in this ways does not work in React 
  // let index = todos.indexOf(todo);
  // todos.splice(index, 1);

  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))
  localStorage.setItem("todo", JSON.stringify(todos));

}

  const [todos,setTodos]= useState(initTodo);
const addTodo=(title, desc)=>{
  
// console.log("add to do", title, desc)
let sno;
if(todos.length === 0)
{
  sno = 0;
}
else{
   sno = todos[todos.length-1].sno+1;
}
let myTodo = {
  sno:sno,
  title:title, 
  desc:desc,
}
setTodos([...todos, myTodo]);
console.log(myTodo);
//  localStorage.setItem("todos", JSON.stringify(todos));  

}

const onUpdate = (todo, myTodo) => {
  todos.findIndex(myTodo)
}
useEffect(()=>{
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos])

  return (
   <>
   <Router>
   <Header/>
   
    <Routes>
      <Route exact path="/" element={[<Add addTodo={addTodo}></Add>,<Todos todos={todos} onDelete={onDelete}></Todos>]}></Route>
      <Route exact path="/about" element={<About/>}>
      </Route>
   
    </Routes>
   <Footer/>  
   </Router>
   {/* I have Made a Commit in this page to see whether its changing in github or not */}
   </>
  );
}

export default App;
