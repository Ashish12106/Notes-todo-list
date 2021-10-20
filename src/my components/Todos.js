import React from 'react'
import {TodoItem}  from "./TodoItem";


export const Todos = (props) => {
      let mystyle={
          minHeight:"70vh",
          margin:"40px auto"
      }
       

    return (
        <div className="container " style={mystyle}>
            <h1 className="text-center my-4">Todos/Notes List</h1>
            <div className="row">     
           {props.todos.length===0? "NO TODOS TO DO   " :
            props.todos.map((todo)=>{
                return <div className="col-md-4"> 
                
                     <div className="container card-deck">
                     <TodoItem todo={todo} onDelete={props.onDelete}/>
                        <hr />
                    </div>
                    </div>
                
            })
            }
            </div>
 
            
            
        </div>
    )
}
