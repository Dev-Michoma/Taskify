import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";


export default function Sidebar(){

   const {login ,register, logout ,isAuthenticated ,isLoading,user} = useKindeAuth();
    return(
        <section className="col-[2/3] flex flex-col row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
               <AddTodoForm />
             

             <div className="mt-auto space-y-2">

              { isLoading ? null :
                isAuthenticated ? (<p>
                  <>
                  <p className="text-sm">Logged in as {user?.email}</p>
                    <Button onClick={logout} buttonType="secondary">
                      Logout
                    </Button>
                  </>
                </p>) : (  
                  <>
                  <div className="space-y-2">
                  <Button onClick={login} buttonType="secondary"> Log in</Button>
                  <Button onClick={register} buttonType="secondary"> Register</Button>
                  </div>  
                  </> 
                 )

              }
       
             </div>
        </section>
      
    )
  }

//   export default BackgroundHeading;