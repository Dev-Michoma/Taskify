import Button from "./Button";

export default function AddTodoForm({todos ,setTodos}){
    return(
    <form onSubmit={
      (e) =>{
        e.preventDefault();
      }
    }>
        <h2>Add a todo</h2>
        <input type="text"
        className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] px-[16px] block w-full"
        />
       <Button>Add to List</Button>
    </form>
    )
  }
