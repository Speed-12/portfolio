import Card from "./components/Card"

const cards = [
  { title: "Tasselysium", description: " Site web de vente en ligne pour la marque de café de luxe Tasselysium.  ", img:"jeuGo.png", click:()=>{location.href='https://tasselysium.noknok.dev/';}},
  { title: "Melody-odyssey", description: " Projet perso d'un jeu vidéo réalisé durant une Game jam.  ",click:()=>{location.href='https://koriaaaaaaaaaaa.itch.io/melody-odyssey'} },
  { title: "Puissance 4", description: " Jeux permettant de jouer en réseau à deux personnes.  " ,click:()=>{}},
//   { title: "Skyjo", description: " Jeux de cartes en ligne avec utilisation de requêtes serveur.  ",click:()=>{} },
//   { title: "Quadtrees", description: " Un petit jeu en go qui utilise le principe de quadtree pour générer une map. ",click:()=>{} },
];

export default function Projects() {
    
    return (
        <>
            <div className="flex flex-col gap-10 pt-12  ">
                <div>
                    <h1 id="projects" className="text-4xl p-5">Mes projets.</h1>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col w-fit items-end justify-end">
                        <div className='flex flex-nowrap max-xl:flex-col flex-row items-center w-full gap-2'>
                            {cards.map((card, index) => (<Card key={index} index={index} {...card}/>))}
                        </div> 

                        <button className="flex self-end w-fit mx-4 px-10 py-3 text-md bg-[#514899] text-white p-2 mt-4 hover:scale-105 rounded-lg transition-all">
                            Découvrir plus
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}