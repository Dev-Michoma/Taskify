import Counter from './Counter'
import Logo from './Logo'


export default function Header(){
    return(
        <header className="col-[1/3] flex justify-between items-center row-[1/2]  px-[28px] bg-[#fbf5ed] border-b border-black/[0.08]" >

                  <Logo/>
                  <Counter  />
        </header>
    )
  }
