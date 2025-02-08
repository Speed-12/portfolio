import { TypeAnimation } from 'react-type-animation';

export default function Intro() {

let specialities = <TypeAnimation
            sequence={[
            "developper",
            1000,
            "sportif",
            1000,
            "designer",
            1000,
            "creator",
            1000,
            ]} 
            
            wrapper='span'
            speed={50}
            style={{ fontSize: '', display: 'inline-block', color:'#457B9D'}}
            repeat={Infinity}
            >
            </TypeAnimation>

  return (
    <> 
    <div className="flex flex-col">

        <div className='w-full h-lvh flex flex-col justify-evenly items-center p-4'>
            <div className='flex max-lg:flex-col  w-full pt-10 items-center justify-evenly'>
                <div className='flex flex-col w-fit p-8 '>
                    <h2 className='sm:text-7xl text-5xl text-[#457B9D] '>Lucas Piou</h2>
                    <h2 className='sm:text-4xl text-2xl'> Etudiant {specialities} </h2>
                </div>
                <div className='sm:w-[60vh] w-[30vh]'>
                    <img src="/assets/dev.svg" alt="" />
                </div>
            </div>
            
            
            <div>
                <p id="typing"></p>
            </div>

            <div className="">
                <a className='scroll-smooth ' href="#apropos">
                    <button  className="text-md transition delay-100 duration-200 ease-in-out hover:scale-110 text-white bg-cyan-700 rounded-lg p-3 shadow-md hover:bg-cyan-900">
                        More about me
                    </button>
                </a>
                
            </div>     
        </div>
             
    </div>
        
    </>
  )
}
