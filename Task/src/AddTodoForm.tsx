import { useContext, useState } from "react";
import Button from "./Button";
import { TodosContext } from "./contexts/TodosContextProvider";


export default function AddTodoForm(){

   const [todoText ,setTodoText] = useState("")

   const {handleAddTodo} = useContext(TodosContext);
    return(
    <form onSubmit={
      (e) =>{
        e.preventDefault();
        
      handleAddTodo(todoText);
     
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
