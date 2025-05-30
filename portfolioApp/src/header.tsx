
export default function Header() {
  return (
      <header className={""} >
        <nav className={" flex flex-row items-center justify-between p-4 w-full"}>
          <a href="/"><h2 className='text-2xl text-[#786ae0] font-bold font-[arial]'>LP</h2></a>

            <ul className='flex flex-row md:text-xl text-md sm:gap-6 gap-2 items-center md:w'>
              <div className="flex flex-row gap-1 w-fit  hover:text-[#786ae0]">
                <div className="" >
                  <a className="sm:flex scroll-smooth" href="#apropos"><img src="/assets/user.svg" alt="user.svg"/></a>
                </div>
                <a className="sm:flex hidden scroll-smooth font-semibold" href="#apropos">
                  <li>
                    <p className="relative group inline-block ">à propos
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#786ae0] 
                                        transform scale-x-0 origin-bottom-right 
                                        transition-transform duration-[250ms] ease-in-out
                                        group-hover:scale-x-100 group-hover:origin-bottom-left">
                      </span>
                    </p>
                  </li>
                </a>
              </div>

              <div className="flex flex-row hover:underline-offset-3 hover:underline hover:text-[#786ae0] gap-1 w-fit font-[arial]">
                <div>
                  <a className="sm:flex scroll-smooth" href="#projects"><img src="/assets/award.svg" alt="award.svg" /></a>
                </div>
                <a className="sm:flex hidden font-semibold" href="#projects">
                  <li className="">
                    <p className="relative group inline-block ">projets
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#786ae0] 
                                        transform scale-x-0 origin-bottom-right 
                                        transition-transform duration-[250ms] ease-in-out
                                        group-hover:scale-x-100 group-hover:origin-bottom-left">
                      </span>
                    </p>
                  </li>
                </a>
              </div>

              <div className="flex flex-row  hover:underline-offset-3 hover:underline hover:text-[#786ae0]  gap-1 w-fit font-[arial]">
                  <a className="sm:flex scroll-smooth" href="#contact"><img src="/assets/mail.svg" alt="mail.svg"/></a>
                <a className="sm:flex hidden font-semibold" href="#contact">
                  <li className="">
                    <p className="relative group inline-block ">contact
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#786ae0] 
                                        transform scale-x-0 origin-bottom-right 
                                        transition-transform duration-[250ms] ease-in-out
                                        group-hover:scale-x-100 group-hover:origin-bottom-left">
                      </span>
                    </p>
                  </li>
                  </a>
              </div>
            </ul>

        </nav>
      </header>
  )
}
