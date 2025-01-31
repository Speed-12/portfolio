export default function Header() {
  return (
      <header className={""} >
        <nav className={" flex flex-row items-center justify-evenly p-2 w-full"}>
          <h2 className='text-xl'>LP</h2>

            <ul className='flex flex-row  xl:text-2xl md:text-xl text-xl sm:gap-6 gap-1items-center md:w'>
              <div className="flex flex-row items-end gap-1  w-fit">
                <div className="" >
                  <img src="  src/assets/user.svg" alt="" />
                </div>
                <a className="sm:flex hidden" href=""><li className="">à propos</li></a>
              </div>

              <div className="flex flex-row items-end gap-1 w-fit">
                <div>
                <img src="  src/assets/award.svg" alt="" />
                </div>
                
                <a className="sm:flex hidden" href=""><li className="">projets</li></a>
              </div>

              <div className="flex flex-row items-end gap-1 w-fit">
                <img src="  src/assets/check-circle.svg" alt="" />
                <a className="sm:flex hidden" href=""><li className="">compétences</li></a>
              </div>

              <div className="flex flex-row items-end  gap-1 w-fit">
                <img src="  src/assets/mail.svg" alt="" />
                <a className="sm:flex hidden" href=""><li className="">contact</li></a>
              </div>
            </ul>

        </nav>
      </header>
  )
}
