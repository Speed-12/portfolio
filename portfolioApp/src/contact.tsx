
export default function Contact() {
  return (
    <div>
         <div id="contact" className='flex flex-col p-5 pt-12 w-full gap-10'>
            <h1 className="sm:mx-[10vw] text-4xl">Me Contacter.</h1>
            <ul className="flex flex-wrap  gap-4 justify-center">

              <li className="flex flex-row gap-2 items-center">
                <div className="flex w-6 justify-center">
                  <img src="/assets/mail.svg" alt="" />
                </div>
                <p className='text-sm'>lucas.piou1@gmail.com</p>
              </li>
              
              <li className="flex flex-row gap-1 items-center">
                <div className="flex w-6 justify-center">
                  <img src="assets/vite.svg" alt="linkedin" />
                </div>
                <a className='text-sm' href="https://www.linkedin.com/in/lucas-piou-041567313/">linkedin</a>
              </li>

            </ul>
        </div>
    </div>
  )
}