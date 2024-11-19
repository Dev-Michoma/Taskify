
//   Passing of Todos and setTodos as Props and doing Array Destructuring

export default function DeleteButton({id ,handleDeleteTodo}){
    return(
        <button 
        onClick={(e) => {
            e.stopPropagation(); // Prevent the li's onClick from being triggered
            handleDeleteTodo(id);
        }}
    >
        ❌
    </button>
    )
  }

