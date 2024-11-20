type ButtonProps ={
    buttonType ?: "primary" | "secondary";
    children : React.ReactNode;
    onClick : ()=> Promise<void>; //These is a function that has no Parametres
}


export default function Button({onClick ,buttonType ,children}: ButtonProps){
    console.log({buttonType});
    return(
        <button onClick={onClick} className='h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px] cursor-pointer
    ${ props.buttonType === "secondary" ? "opacity-[-34%]" : " "}'>
          {children}  </button>
    )
  }

