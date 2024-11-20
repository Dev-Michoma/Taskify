import { useContext } from "react";
import { TodosContext } from "./contexts/TodosContextProvider";
import { useTodosContext } from "./lib/hooks";

export default function Counter() {
  
  const {numberOfCompletedTodos ,totalNumberOfTodos } = useTodosContext();
  console.log(totalNumberOfTodos);
  return (
    <p>
      <b>{numberOfCompletedTodos}</b> / {totalNumberOfTodos}{" "}
      todos completed
    </p>
  );
}
