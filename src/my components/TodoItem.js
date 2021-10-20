import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    return (
        
       
        <div className="my-4 ">
            <div className="card cardstyle ">
              <img src="https://source.unsplash.com/random/400x300" class="card-img-top" alt="..."/>
              <div class="card-body cardbody">
              <h5 class="card-title">{todo.sno} . {todo.title}</h5>
              <p class="card-text">{todo.description}</p>
              <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>Delete </button>
           </div>
    </div>
         
        </div>
   
    )
}
