import React from 'react'
import  { useState } from 'react';

export const Addtodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit =(e)=>{
        e.preventDefault();
        if(!title || ! desc)
        {
                alert("Title or Description cannot be Blank")
        }
        else
        {
            props.addTodo(title,desc);
            setDesc("");
            setTitle("");
        }

    }
    return (
        <div className="container my-4 ">
            <h2 className="text-center">Add Your Todos/ Notes</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Enter your work title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="title" />
                        
                </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Work Description</label>
                        <input type="text"  value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                 </div>
                      
                            <button type="submit" className="btn btn-success">Add Todo</button>
            </form>
         </div>
                    )
}
