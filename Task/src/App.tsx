import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import BackgroundHeading from "./BackgroundHeading";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";

// We want to use the usestate because we want things to rerender
function App() {
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

  return (
    <div className='flex justify-center items-center font-sans bg-[#f1d4b3] min-h-screen'>
      {/* Centered and positioned h1 */}
     <BackgroundHeading/>

      <main className=' relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)]
       grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] border-b border-black/[0.08] overflow-hidden'>
              
             <Header todos={todos} setTodos={setTodos}/>
             <TodoList todos={todos} setTodos={setTodos}/>

           <Sidebar todos={todos}  setTodos={setTodos}/>
      </main>
      
    </div>
  );
}

export default App;
