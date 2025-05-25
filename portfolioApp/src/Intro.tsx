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

        <div className='w-full h-lvh flex flex-col items-center p-4'>
            <div className='flex max-lg:flex-col w-full py-[26vh] items-center justify-around'>
                <div className='flex flex-col w-fit p-8 '>
                    <h2 className='sm:text-7xl text-5xl text-[#000000] py-6 font-[amiri]'>Bienvenue sur mon portfolio</h2>
                    <h2 className='sm:text-4xl text-2xl text-black'>Etudiant {specialities} </h2>
                </div> 
            </div>
        </div>
    </div>
        
    </>
)
}
