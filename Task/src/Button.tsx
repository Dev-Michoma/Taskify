export default function Button({buttonType ,children}){
    console.log({buttonType});
    return(
        <button className='h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px] cursor-pointer
    ${ props.buttonType === "secondary" ? "opacity-[-34%]" : " "}'>
          {children}  </button>
    )
  }

