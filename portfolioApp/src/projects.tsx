import Card from "./components/Card"

const cards = [
  { title: "Tasselysium", description: " Site web de vente en ligne pour la marque de café de luxe Tasselysium.  ", click:()=>{location.href='https://tasselysium.noknok.dev/';}},
  { title: "Skyjo", description: " Jeux de cartes en ligne avec utilisation de requêtes serveur.  ",click:()=>{} },
  { title: "Puissance 4", description: " Jeux permettant de jouer en réseau à deux personnes.  " ,click:()=>{}},
  { title: "Quadtrees", description: " Un petit jeu en go qui utilise le principe de quadtree pour générer une map. ",click:()=>{} },
  { title: "Melody-odyssey", description: " Projet perso d'un jeu vidéo réalisé durant une Game jam.  ",click:()=>{location.href='https://koriaaaaaaaaaaa.itch.io/melody-odyssey'} },
];

export default function Projects() {
    
    return (
        <>
            <div className="flex flex-col gap-10 pt-12">
                <h1 id="projects" className="sm:mx-[10vw] text-4xl p-5">Mes projets.</h1>
            </div>
            <div>
                <div className='px-[8vw] flex flex-wrap justify-center items-center w-full gap-2'>
                    {cards.map((card, index) => (<Card key={index} index={index} {...card}/>))}
                </div>
            </div>
            
        </>
    )
}