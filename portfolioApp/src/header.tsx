
export default function Header() {
  return (
      <header className={""} >
        <nav className={" flex flex-row items-center justify-evenly p-2 w-full"}>
          <a href="/"><h2 className='text-2xl text-[#457B9D] font-bold'>LP</h2></a>

            <ul className='flex flex-row md:text-xl text-md sm:gap-6 gap-2 items-center md:w'>
              <div className="flex flex-row items-end gap-1 w-fit hover:underline-offset-3 hover:underline hover:text-[#457B9D]">
                <div className="" >
                  <a className="sm:flex scroll-smooth" href="#apropos"><img src="/assets/user.svg" alt="user.svg"/></a>
                </div>
                <a className="sm:flex hidden scroll-smooth" href="#apropos"><li className="">à propos</li></a>
              </div>

              <div className="flex flex-row hover:underline-offset-3 hover:underline hover:text-[#457B9D] items-end gap-1 w-fit">
                <div>
                  <a className="sm:flex scroll-smooth" href="#projects"><img src="/assets/award.svg" alt="award.svg" /></a>
                </div>
                <a className="sm:flex hidden" href="#projects">
                  <li className="">projets</li>
                </a>
              </div>

              <div className="flex flex-row  hover:underline-offset-3 hover:underline hover:text-[#457B9D] items-end  gap-1 w-fit">
                  <a className="sm:flex scroll-smooth" href="#contact"><img src="/assets/mail.svg" alt="mail.svg"/></a>
                <a className="sm:flex hidden" href="#contact"><li className="">contact</li></a>
              </div>
            </ul>

        </nav>
      </header>
  )
}
