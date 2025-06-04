import Card from './components/Card.tsx';
import { Header } from './HeaderA.tsx'

export default function ProjectsPage() {
const cardProfessionnels = [
{ title: "Dashboard", description: "Application de visualisation et de gestion des switches des magasins U.", img:"", click:()=>{location.href='https://tasselysium.noknok.dev/';}},
];

const cardsScolaire = [
{ title: "Tasselysium", description: "Site web de vente en ligne pour la marque de café de luxe Tasselysium.", img:"jeuGo.png", click:()=>{location.href='https://tasselysium.noknok.dev/';}},
{ title: "Puissance 4", description: "Jeux permettant de jouer en réseau à deux personnes." ,click:()=>{}},
{ title: "Skyjo", description: "Jeux de cartes en ligne avec utilisation de requêtes serveur.",click:()=>{} },
{ title: "Quadtrees", description: "Un petit jeu en go qui utilise le principe de quadtree pour générer une map.",click:()=>{} },
];

const cardsPersonels= [
{ title: "Melody-odyssey", description: " Projet perso d'un jeu vidéo réalisé durant une Game jam.",click:()=>{location.href='https://koriaaaaaaaaaaa.itch.io/melody-odyssey'} },
];

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
                    {cardProfessionnels.map((card, index) => (<Card key={index} index={index} {...card}/>))}
                </div> 

                <h3 className="text-2xl p-5">Scolaires.</h3>
                <div className='flex flex-wrap max-xl:flex-col flex-row items-center w-full gap-2'>
                    {cardsScolaire.map((card, index) => (<Card key={index} index={index} {...card}/>))}
                </div>

                <h3 className="text-2xl p-5">Personels.</h3>
                <div className='flex flex-wrap max-xl:flex-col flex-row items-center w-full gap-2'>
                    {cardsPersonels.map((card, index) => (<Card key={index} index={index} {...card}/>))}
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
