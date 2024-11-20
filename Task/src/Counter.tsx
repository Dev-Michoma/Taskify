import { useContext } from "react";
import { TodosContext } from "./contexts/TodosContextProvider";

export default function Counter() {
  
  const {numberOfCompletedTodos ,totalNumberOfTodos } = useContext(TodosContext)
  console.log(totalNumberOfTodos);
  return (
    <p>
      <b>{numberOfCompletedTodos}</b> / {totalNumberOfTodos}{" "}
      todos completed
    </p>
  );
}
