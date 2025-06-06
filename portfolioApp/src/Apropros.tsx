
export default function Apropros() {
  return (
  <>
    <div className='flex flex-col items-center gap-10 pt-12 w-full'>
      <div id="apropos" className='p-5 text-4xl w-full'>
          <h1>A propos.</h1>
      </div>
      <div className="flex flex-col gap-10 justify-center items-center w-[40vw]">
        <div className=" sm:w-full w-60">
          <img className=" w-full rounded-xl" src="/assets/hockey-profile.jpg" alt="" />
        </div>
        <p className="sm:text-lg text-sm sm:w-full w-60">
          Étudiant en informatique, je me spécialise dans le développement logiciel, cherchant à concevoir 
          des solutions innovantes et optimisées. Les défis techniques me motivent à progresser 
          et à approfondir mes connaissances à travers mes projets.
          <br />
          <br />
          Lorsque je m'éloigne du developpement, je me consacre à la musculation et au hockey sur glace, 
          des sports qui m'enseignent rigueur, persévérance et esprit d’équipe.
          <br /> 
          Ces valeurs influencent directement mon travail, me permettant d’aborder chaque défi 
          avec méthode et intensité.
        </p>
      </div>
    </div>
  </>
  )
}
