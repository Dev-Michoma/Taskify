
//   Passing of Todos and setTodos as Props and doing Array Destructuring

export default function DeleteButton({id ,setTodos}){
    return(
        <button 
        onClick={(e) => {
            e.stopPropagation(); // Prevent the li's onClick from being triggered
            setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
        }}
    >
        ❌
    </button>
    )
  }

