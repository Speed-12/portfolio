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
            style={{ fontSize: '', display: 'inline-block', color:'#786ae0'}}
            repeat={Infinity}
            >
            </TypeAnimation>

return (
    <> 
    <div className="flex flex-col">

        <div className='w-full h-svh flex flex-col justify-evenly items-center p-4'>
            <div className='flex max-lg:flex-col  w-full pt-10 items-center justify-between'>
                <div className='flex flex-col w-fit'>
                    <h2 className='sm:text-7xl text-5xl text-black font-[arial]'>Lucas Piou</h2>
                    <h2 className='sm:text-4xl text-2xl font-[arial]'> Etudiant {specialities} </h2>
                </div>
                    
                <div className='rounded-b-[260px] relative overflow-hidden 2xl:w-[520px] md:w-[300px] w-[200px] 2xl:h-[700px] md:h-[500px] h-[400px] -translate-y-[70px]'>
                    <div className='size-fit absolute bottom-0 2xl:w-[520px] md:w-[300px] w-[200px] 2xl:h-[520px] md:h-[300px] h-[200px] rounded-full -bg-linear-45 from-indigo-600 to-indigo-400" justify-center flex items-end   '>
                    </div>
                    <div className='2xl:w-[700px] md:w-[400px] w-[300px] absolute bottom-0 left-1/2 -translate-x-1/2'>
                        <img src="me-carre-bg-rm.png" alt="" />
                    </div>
                </div>
                
            </div>
            
            
            <div>
                <p id="typing"></p>
            </div>

            <div className="">
                <a className='scroll-smooth ' href="#apropos">
                    <img className='size-12 animate-bounce' src="angle-down.svg" alt="" />
                    <img className='size-12 animate-bounce' src="angle-down.svg " alt="" />
                    <img className='size-12 animate-bounce' src="angle-down.svg" alt="" />
                </a>
            </div>     
        </div>
    </div>
    </>
)
}
