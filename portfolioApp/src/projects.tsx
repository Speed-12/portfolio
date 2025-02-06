import Card from "./Card"

const cards = [
  { title: "Tasselysium", description: "Site web de vente en ligne pour la marque de caffé de luxe Tasselysium.  " },
  { title: "Skyjoe", description: " Jeux de cartes en ligne avec utilisation de requetes serveur.  " },
  { title: "Puissance 4", description: " Jeux permmetant de jouer en réseaux a deux personnes.  " },
];

export default function Projects() {
    
    return (
        <>
            <div>
                <h1 className="text-4xl p-5">Mes projets.</h1>
            </div>

            <div className='flex max-lg:flex-col justify-center items-center w-full gap-2'>
                   {cards.map((card, index) => (<Card key={index} index={index} {...card}/>))}
            </div>
        </>
    )
}