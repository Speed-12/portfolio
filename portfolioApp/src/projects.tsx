import Card from "./components/Card"
import DiscoverMoreButton from "./components/DiscoverMoreButton";

const cards = [
    [
        { title: "Dashboard", description: "Application de visualisation et de gestion des switches des magasins U.", img:"", link:"/1", click:()=>{location.href='';}},
    ],
    [
        { title: "Tasselysium", description: "Site web de vente en ligne pour la marque de café de luxe Tasselysium.", img:"jeuGo.png", link:"/2", click:()=>{location.href='https://tasselysium.noknok.dev/';}},
        { title: "Puissance 4", description: "Jeux permettant de jouer en réseau à deux personnes.", link:"/3", click:()=>{}},
        { title: "Skyjo", description: "Jeux de cartes en ligne avec utilisation de requêtes serveur.", link:"/4", click:()=>{} },
        { title: "Quadtree", description: "Un petit jeu en go qui utilise le principe de quadtree pour générer une map.",link:"/5", click:()=>{} },
    ],
    [
        { title: "Melody-odyssey", description: " Projet perso d'un jeu vidéo réalisé durant une Game jam.", link:"/6", click:()=>{location.href='https://koriaaaaaaaaaaa.itch.io/melody-odyssey'} },
    ]
];

function Projects() {
    
    return (
        <>
            <div className="flex flex-col gap-10 pt-12  ">
                <div>
                    <h1 id="projects" className="text-4xl p-5">Mes projets.</h1>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col w-fit items-end justify-end">
                        <div className='flex flex-nowrap max-xl:flex-col flex-row items-center w-full gap-2'>
                            {cards[1].map((card, index) => (<Card key={index} index={index} {...card}/>))}
                        </div> 
                        <DiscoverMoreButton link="/projects"/>
                        {/* <a href="/projects">
                            <button className="flex self-end w-fit mx-4 px-10 py-3 text-md bg-[#514899] text-white p-2 mt-4 hover:scale-105 rounded-lg transition-all">
                                Découvrir plus
                            </button>
                        </a> */}
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
export {cards}