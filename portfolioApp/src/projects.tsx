
export default function Projects() {
    return (
        <>
            <div>
                <h1 className="text-4xl p-5">Mes projets.</h1>
            </div>

            <div className='flex max-lg:flex-col justify-center items-center w-full gap-2'>
                <div className="flex flex-col w-80 justify-center p-4 m-4 border shadow-lg rounded-md border-gray-300 bg-gray-100 ">
                    <h2>
                        Tasselysium
                    </h2>
                    <h3 className="text-gray-400">
                        Site web de vente en ligne pour la marque de caffé de luxe Tasselysium.  
                    </h3>

                    <ul className="">
                        
                    </ul>
                    <button className=" text-sm text-white p-2 mt-4 flex bg-gray-900 hover:bg-gray-700 w-fit border border-transparent rounded-lg shadow-md transition-all"> En savoir plus</button>
                
                </div>

                <div className="flex flex-col w-80 justify-center p-4 m-4 border shadow-lg rounded-md border-gray-300 bg-gray-100 ">
                    <h2>
                        Skyjoe
                    </h2>
                    <h3 className="text-gray-400">
                        Jeux de cartes en ligne avec utilisation de requetes serveur.  
                    </h3>

                    <ul className="">
                        
                    </ul>
                    <button className=" text-sm text-white p-2 mt-4 flex bg-gray-900 hover:bg-gray-700 w-fit border border-transparent rounded-lg shadow-md transition-all"> En savoir plus</button>
                
                </div>

                <div className="flex flex-col w-80 justify-center p-4 m-4 border shadow-lg rounded-md border-gray-300 bg-gray-100 ">
                    <h2>
                        Puissance 4   
                    </h2>
                    <h3 className="text-gray-400">
                        Jeux permmetant de jouer en réseaux a deux personnes.
                    </h3>

                    <ul className="">
                        
                    </ul>

                    <button className=" text-sm text-white p-2 mt-4 flex bg-gray-900 hover:bg-gray-700 w-fit border border-transparent rounded-lg shadow-md transition-all"> En savoir plus</button>
                </div>
            </div>
        </>
    )
}