//import logo from './logo.svg';
import Header from "./my components/Header";
import {Footer} from "./my components/Footer";
import {Todos} from "./my components/Todos";
import {Addtodo} from './my components/Addtodo';
import {About} from './my components/About';


//import Todo from "./my components/Todo";
import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import './App.css';
function App() {
  let initTodo
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }
  else
  {
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete= (todo)=>{
    console.log("deleted ", todo)
    setTodos(todos.filter((e)=>{
      return e!==todo
    } ));

    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title,desc)=>{
    console.log('todo added')
    let sno;
    if(todos.length===0){
       sno=1;
    }
    else
    {
      sno =todos[todos.length-1].sno+1;
    }
      const mytodo={
      sno:sno,
      title:title,
      description:desc
    }

    setTodos([...todos,mytodo]);
    

  }

  const [todos, setTodos] = useState(initTodo);
   useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));  
   }, [todos])
  return (
    <>
    <Router>
    <Header title="My Todos List"/>
     
      <Switch>  
        <Route key="/" exact path="/" render={()=>{
          return (
            <>
             <Addtodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
          </>
          )
        }}>
            
          </Route>

          <Route key="about" exact path="/about" component={About}>
            <About />
          </Route>

        </Switch>

      
    <Footer/>
    </Router>
</>
  );
}

export default App;
