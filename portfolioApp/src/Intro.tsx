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
            style={{ fontSize: '', display: 'inline-block', color:'oklch(51.1% 0.262 276.966)'}}
            repeat={Infinity}
            >
            </TypeAnimation>

return (
    <> 
    <div className="flex flex-col">

        <div className='w-full h-lvh flex flex-col justify-evenly items-center p-4'>
            <div className='flex max-lg:flex-col  w-full pt-10 items-center justify-evenly'>
                <div className='flex flex-col w-fit p-8 '>
                    <h2 className='sm:text-7xl text-5xl text-black font-[arial]'>Lucas Piou</h2>
                    <h2 className='sm:text-4xl text-2xl font-[arial]'> Etudiant {specialities} </h2>
                </div>
                <div className='size-fit sm:w-[40vh] w-[30vh] sm:h-[35vh] h-[25vh] rounded-full bg-conic-180 from-indigo-600 via-indigo-200 to-indigo-600" justify-center flex items-end overflow-hidden  '>
                    {/* <img src="/assets/dev.svg" alt="" /> */}
                    <div className='sm:w-[30vh] w-[20vh]'>

                        <img src="me-carre-bg-rm.png" alt="" />
                    </div>
                </div>
            </div>
            
            
            <div>
                <p id="typing"></p>
            </div>

            <div className="">
                <a className='scroll-smooth ' href="#apropos">
                    <img className='animate-bounce' src="angle-down.svg" alt="" />
                    <img className='animate-bounce' src="angle-down.svg " alt="" />
                    <img className='animate-bounce' src="angle-down.svg" alt="" />
                </a>
            </div>     
        </div>
    </div>
    </>
)
}
