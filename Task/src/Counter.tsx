
export default function Counter({todos }){

  console.log(todos)
    return(
        <p>
        <b>{todos.filter((todo) => todo.isCompleted).length}</b> / {todos.length} {""} todos completed
    </p>
    )
  }

//   export default BackgroundHeading;