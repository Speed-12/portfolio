let spécialités = ["developper","sportif"]

export default function About() {
  return (
    <> 
    <div className="flex flex-col">

        <div className='w-full h-dvh flex flex-col justify-evenly items-center p-4'>
            <div className='flex flex-row w-full pt-10 items-center justify-evenly'>
                <div className='flex flex-col w-fit animate-fade-up animate-ease-in-out shadow-lg rounded-md p-8 border-zinc-300 border'>
                    <h2 className='text-4xl '>Lucas Piou</h2>
                    <h2 className='text-2xl'> Etudiant {spécialités[0]} </h2>
                </div>
                <div className='w-[50vh]'>
                    <img src="./src/assets/dev-img.svg" alt="" />
                </div>
            </div>
            <div className="">
                <a href="">
                    <button className="text-md transition delay-100 duration-200 ease-in-out hover:scale-110 text-white bg-cyan-700 rounded-lg p-3 shadow-md hover:bg-cyan-900">
                        More about me
                    </button>
                </a>
                
            </div>     
        </div>
             
    </div>
        
    </>
  )
}
