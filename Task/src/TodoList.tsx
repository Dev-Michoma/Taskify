import { useContext } from "react";
import DeleteButton from "./DeleteButton"
import { Todo } from "./lib/types";
import { TodosContext } from "./contexts/TodosContextProvider";


export default  function TodoList() {
   
const {todos ,handleToggleTodo ,handleDeleteTodo} = useContext(TodosContext)

   //Lifting the State Up
    const totalNumberofTodos = todos.length;
    console.log ('totalNumberOfTodos' , totalNumberofTodos)

    //Event propagation ,Event bubbling The issue could be due to event propagation.
    // When you click on the delete button (❌), the onClick event for the list item (<li>) is also triggered because the delete button 
    //is inside the list item. This may interfere with the button's onClick handler.
    //Event bubbling starts from the button up to the Li
    return(
        <ul>
            {/* Addition of Conditional rendering */}
            {/* The Question mark if true the first Part is Executed  An Amersand can also be used*/}
         {todos.length === 0 ? <li className="h-full flex justify-center items-center font-semibold">
            Start By adding a Todo List</li> : null}
            {
                todos.map(todo =>(
                    <li key={todo.id} 
                    onClick={() => {
                        handleToggleTodo(todo.id)
                        // setTodos(todos.map(t => {
                        //   if (t.id === todo.id) {
                        //     // If the todo id matches, toggle the 'isCompleted' property
                        //     return { ...t, isCompleted: !t.isCompleted };
                        //   }
                        //   return t; // Return the unchanged todo if the id doesn't match
                        // }));
                      }}
                      
                    className="flex justify-between items-center px-8 h-[50px]
                    text-[14px] cursor-pointer border-b border-black/[8%]">
                        <span className={`${todo.isCompleted ? 'line-through text-[#ccc]' : ''}`}>{todo.text}</span>

                      {/* We are Passing the props inside Here */}
                      <DeleteButton id={todo.id}  handleDeleteTodo={handleDeleteTodo}/>
              
                    </li>
                ))
            }
           
            
         
        </ul>
    )
}