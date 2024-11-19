
type CounterProps = {
  totalNumberOfTodos : number;
  numberOfCompletedTodos: number;
}



export default function Counter({ totalNumberOfTodos ,numberOfCompletedTodos }: CounterProps) {
  console.log(totalNumberOfTodos);
  return (
    <p>
      <b>{numberOfCompletedTodos}</b> / {totalNumberOfTodos}{" "}
      todos completed
    </p>
  );
}
