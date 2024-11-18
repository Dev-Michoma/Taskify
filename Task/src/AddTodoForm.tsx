export default function AddTodoForm(){
    return(
    <form>
        <h2>Add a todo</h2>
        <input type="text"
        className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full"
        />
        <button type="submit">Add to List</button>
    </form>
    )
  }
