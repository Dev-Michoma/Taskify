import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContextProvider";

export function useTodosContext(){
    const context = useContext(TodosContext);
    if(!context){
        throw new Error("Forgot to add a new Provider")
    }
    return context;
}