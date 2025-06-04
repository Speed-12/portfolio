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

        <div className='w-full h-[90vh] flex flex-col justify-evenly items-center p-4'>
            <div className='flex max-lg:flex-col w-full sm:pt-10 items-center justify-between'>
                <div className='flex flex-col w-fit'>
                    <h2 className='xl:text-7xl md:text-5xl text-4xl text-black'>Lucas Piou</h2>
                    <img src="llline.svg" alt="" />
                    <h2 className='xl:text-4xl md:text-3xl text-2xl sm:w-fit w-12 sm:pb-0 pb-20'> Etudiant  {specialities} </h2>
                </div>
                    
                <div className='rounded-b-[25vw] relative overflow-hidden 2xl:w-[20vw] md:w-[25vw] w-[40vw] 2xl:h-[30vw] md:h-[40vw] h-[60vw] -translate-y-[70px]'>
                    <div className='size-fit absolute bottom-0 2xl:w-[20vw] md:w-[25vw] w-[40vw] 2xl:h-[20vw] md:h-[25vw] h-[40vw] rounded-full -bg-linear-45 from-indigo-600 to-indigo-400" justify-center flex items-end   '>
                    </div>
                    <div className='2xl:w-[25vw] md:w-[35vw] w-[50vw] absolute bottom-0 left-1/2 -translate-x-1/2'>
                        <img src="me-carre-bg-rm.png" alt="" />
                    </div>
                </div>
                
            </div>
            
            
            <div>
                <p id="typing"></p>
            </div>

            <div className="h-fit">
                <a className='scroll-smooth ' href="#apropos">
                    <img className='xl:size-[4vh] md:size-[4vh] size-[4vh] animate-bounce' src="angle-down.svg" alt="" />
                    <img className='xl:size-[4vh] md:size-[4vh] size-[4vh] animate-bounce' src="angle-down.svg " alt="" />
                    <img className='xl:size-[4vh] md:size-[4vh] size-[4vh] animate-bounce' src="angle-down.svg" alt="" />
                </a>
            </div>     
        </div>
    </div>
    </>
)
}
