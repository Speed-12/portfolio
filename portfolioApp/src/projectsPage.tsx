import Card from './components/Card.tsx';
import { Header } from './HeaderA.tsx'
import { cards } from './projects.tsx'
export default function ProjectsPage() {


  return (
    <> 
      <div className='flex w-full h-full justify-center font-[arial]'>
        <div className='md:w-[60vw]'>
          <Header></Header>
          <div className="flex flex-col gap-10 pt-12  ">
            <div>
                <h1 id="projects" className="text-4xl p-5">Voici tous mes projets.</h1>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-col w-fit  justify-end">
                <h3 className="text-2xl p-5">Professionnels.</h3>
                <div className='flex flex-wrap max-xl:flex-col flex-row items-center w-full gap-2'>
                    {cards[0].map((card, index) => (<Card key={index} index={index} {...card}/>))}
                </div> 

                <h3 className="text-2xl p-5">Scolaires.</h3>
                <div className='flex flex-wrap max-xl:flex-col flex-row items-center w-full gap-2'>
                    {cards[1].map((card, index) => (<Card key={index} index={index} {...card}/>))}
                </div>

                <h3 className="text-2xl p-5">Personels.</h3>
                <div className='flex flex-wrap max-xl:flex-col flex-row items-center w-full gap-2'>
                    {cards[2].map((card, index) => (<Card key={index} index={index} {...card}/>))}
                </div>

                <a href="/">
                  <button className="flex self-end w-fit mx-4 px-10 py-3 text-md bg-[#514899] text-white p-2 mt-4 hover:scale-105 rounded-lg transition-all">
                      Home
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}
