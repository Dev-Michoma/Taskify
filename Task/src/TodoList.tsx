import DeleteButton from "./DeleteButton"
import { useState } from "react"
export default  function TodoList() {
   
   const [todos ,setTodos]= useState(
        [
            { 
                id: 1,
                text : "Buy Groceries",  //These is the specification of the initial Values
                isCompleted : false,
            },  
            {
                id: 2,
                text : "Write Typescript",
                isCompleted : false,
            },  
            {
                id: 3,
                text : "Learn Crypto",
                isCompleted : false,
            },  
            {
                id: 4,
                text : "Linkedin forensics",
                isCompleted : false,
            },   
        
        ]
    )

    //Event propagation ,Event bubbling The issue could be due to event propagation.
    // When you click on the delete button (❌), the onClick event for the list item (<li>) is also triggered because the delete button 
    //is inside the list item. This may interfere with the button's onClick handler.
    //Event bubbling starts from the button up to the Li
    return(
        <ul>

            {
                todos.map(todo =>(
                    <li key={todo.id} 
                    onClick={() => {
                        setTodos(todos.map(t => {
                          if (t.id === todo.id) {
                            // If the todo id matches, toggle the 'isCompleted' property
                            return { ...t, isCompleted: !t.isCompleted };
                          }
                          return t; // Return the unchanged todo if the id doesn't match
                        }));
                      }}
                      
                    className="flex justify-between items-center px-8 h-[50px]
                    text-[14px] cursor-pointer border-b border-black/[8%]">
                        <span className={`${todo.isCompleted ? 'line-through text-[#ccc]' : ''}`}>{todo.text}</span>

                      {/* We are Passing the props inside Here */}
                      <DeleteButton id={todo.id} setTodos={setTodos}/>
              
                    </li>
                ))
            }
           
            
         
        </ul>
    )
}