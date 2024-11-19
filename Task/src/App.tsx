import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import BackgroundHeading from "./BackgroundHeading";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";

 export type Todo ={
  id :number,
  text : string,
  isCompleted : boolean;
}

// We want to use the usestate because we want things to rerender
function App() {
  const [todos ,setTodos]= useState<Todo[]>([])

   const handleAddTodo = (todoText:string) =>{
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
   }
    
   const handleToggleTodo =(id:number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id){
          return {...todo, isCompleted: ! todo.isCompleted};
        }
        return todo;
      })
    )
   };





   const handleDeleteTodo = (id:number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
   }

  return (
    <div className='flex justify-center items-center font-sans bg-[#f1d4b3] min-h-screen'>
      {/* Centered and positioned h1 */}
     <BackgroundHeading/>

      <main className=' relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)]
       grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] border-b border-black/[0.08] overflow-hidden'>
              
             <Header todos={todos} setTodos={setTodos}/>
             <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo}/>

           <Sidebar todos={todos}  handleAddTodo={handleAddTodo}/>
      </main>
      
    </div>
  );
}

export default App;
