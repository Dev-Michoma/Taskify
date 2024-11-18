import BackgroundHeading from "./BackgroundHeading";


function App() {
  return (
    <div className='flex justify-center items-center font-sans bg-[#f1d4b3] min-h-screen'>
      {/* Centered and positioned h1 */}
     <BackgroundHeading/>

      <main className=' relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)]
       grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] border-b border-black/[0.08] overflow-hidden'>

           <header className="col-[1/3] row-[1/2] bg-[#fbf5ed]" ></header>

           <section className="col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08]"></section>
      </main>
      <footer>
        <small>&copy;</small>
      </footer>
    </div>
  );
}

export default App;
