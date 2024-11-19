import { useState } from "react";
import Button from "./Button";

export default function AddTodoForm({todos ,setTodos}){

   const [todoText ,setTodoText] = useState("")
    return(
    <form onSubmit={
      (e) =>{
        e.preventDefault();
        
        if (todos.length >= 3){
          alert("Log in to add  more than 3 todos")
        }
        else{
          setTodos(prev => [
            ...prev,
            {
              id:prev.length + 1,
              text: todoText,
              isCompleted : false,
            }
          ]);
        }
     
        setTodoText("");
      }
    } 
    >


        <h2>Add a todo</h2>
        <input type="text"
        className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] px-[16px] block w-full"
        value= {todoText} 
        onChange = {(e) => {
          setTodoText(e.target.value);
        }}/>
    
       <Button>Add to List</Button>
    </form>
    )
  }
