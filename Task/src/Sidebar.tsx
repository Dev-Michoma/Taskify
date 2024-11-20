import AddTodoForm from "./AddTodoForm";
import Button from "./Button";


export default function Sidebar(){
    return(
        <section className="col-[2/3] flex flex-col row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
               <AddTodoForm />
             

             <div className="mt-auto space-y-2">
             <Button buttonType="secondary"> Log in</Button>
             <Button buttonType="secondary"> Register</Button>
             </div>
        </section>
      
    )
  }

//   export default BackgroundHeading;