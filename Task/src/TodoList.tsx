import DeleteButton from "./DeleteButton"

export default  function TodoList() {
    const initialTodos = [
        {
            text : "Buy Groceries",
            isComplted : true,
        },  
        {
            text : "Write Typescript",
            isComplted : true,
        },  
        {
            text : "Learn Crypto",
            isComplted : true,
        },  
        {
            text : "Linkedin forensics",
            isComplted : false,
        },   
    
    ]
    return(
        <ul>

            {
                initialTodos.map(todo =>(
                    <li key={todo.text} className="flex justify-between items-center px-8 h-[50px]
                    text-[14px] cursor-pointer border-b border-black/[8%]">
                        <span>{todo.text}</span>
                       <DeleteButton/>
                    </li>
                ))
            }
           
            
         
        </ul>
    )
}