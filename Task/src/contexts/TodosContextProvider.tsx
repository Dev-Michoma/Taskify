import React, { createContext, useEffect } from  "react";
import { useState } from "react";
import { Todo } from "../lib/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";




type TTodosContext ={
    todos: Todo[];
    totalNumberOfTodos: number;
    numberOfCompletedTodos: number;
    handleAddTodo: (todoText: string) => void;
    handleToggleTodo: (id: number) => void;
    handleDeleteTodo: (id: number) => void;
}

type TodosContextProvider ={
    children: React.ReactNode;
}

 export const TodosContext = createContext<TTodosContext >(null);

 //By persisting data you get the data only Once 
 const getInitialTodos = ()=> {
  const savedTodos = localStorage.getItem("todos");
  if(savedTodos){
    return JSON.parse(savedTodos);
  }
else {
  return [];
}

 }

export default function TodosContextProvider ({children}:TodosContextProvider){


  const {isAuthenticated} = useKindeAuth();
 const [todos ,setTodos]= useState<Todo[]>(getInitialTodos)
  
  //
  const totalNumberOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted
  ).length;



   const handleAddTodo = (todoText:string) =>{
    if (todos.length >= 3 && !isAuthenticated){
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
 

   //useEffect will only run when the todo changes
    useEffect(() => {
      localStorage.setItem("todos" , JSON.stringify(todos));
    } ,[todos]);

         
  // Using the UsEffect hook to fetch data
    // useEffect(() => {
    //  const fetchTodos = async () => {
    //  const response = await fetch ("https://bytegrad.com/course-assets/api/todos");
    //  const todos = await response.json();
    //  setTodos(todos);
    //  fetchTodos();
    //  };
    // },[])
     
    return <TodosContext.Provider
    value={{
        todos,
        totalNumberOfTodos,
        numberOfCompletedTodos,
        handleAddTodo,
        handleToggleTodo,
        handleDeleteTodo,
    }}
    >
   {children}
    </TodosContext.Provider>
    
}