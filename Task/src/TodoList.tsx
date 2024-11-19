import DeleteButton from "./DeleteButton"
import { useState } from "react"
export default  function TodoList() {
   
   const [todos ,setTodos]= useState(
        [
            {
                text : "Buy Groceries",
                isCompleted : true,
            },  
            {
                text : "Write Typescript",
                isCompleted : true,
            },  
            {
                text : "Learn Crypto",
                isCompleted : true,
            },  
            {
                text : "Linkedin forensics",
                isCompleted : false,
            },   
        
        ]
    )
    return(
        <ul>

            {
                todos.map(todo =>(
                    <li key={todo.text} className="flex justify-between items-center px-8 h-[50px]
                    text-[14px] cursor-pointer border-b border-black/[8%]">
                        <span className={`${todo.isCompleted ? 'line-through text-[#ccc]' : ''}`}>{todo.text}</span>

                       <DeleteButton/>
                    </li>
                ))
            }
           
            
         
        </ul>
    )
}