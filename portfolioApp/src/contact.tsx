
export default function Contact() {
  return (
    <div>
      <div id="contact" className='flex flex-col p-5 py-12 w-full gap-10'>
        <h1 className="text-4xl">Me Contacter.</h1>
        <ul className="flex flex-wrap gap-4 justify-center text-lg ">
          <li className="flex flex-row gap-2 ">
            <div className="flex w-6">
              <img src="/assets/mail.svg" alt="" />
            </div>
            <p className=''>lucas.piou1@gmail.com</p>
          </li>
          
          <li className="flex flex-row gap-1 ">
            <div className="flex w-6 justify-center">
              <img src="assets/vite.svg" alt="linkedin" />
            </div>
            <a className='' href="https://www.linkedin.com/in/lucas-piou-041567313/">
              <p className="relative inline-block group">linkedin
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#514899] 
                  transform scale-x-0 origin-bottom-right 
                  transition-transform duration-[250ms] ease-out 
                  group-hover:scale-x-100 group-hover:origin-bottom-left">
                </span>
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}