
//   Passing of Todos and setTodos as Props and doing Array Destructuring


type DeleteButtonProps ={
    id: number;
    handleDeleteTodo : (id: number) => void;
}
export default function DeleteButton({id ,handleDeleteTodo}:DeleteButtonProps){
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

