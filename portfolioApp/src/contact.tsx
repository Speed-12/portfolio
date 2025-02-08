
export default function Contact() {
  return (
    <div>
         <div id="contact" className='flex flex-col p-5 pt-12 w-full gap-10'>
            <h1 className="text-4xl">Me Contacter.</h1>
            <ul className="flex flex-wrap  gap-4 justify-center">

              <li className="flex flex-row gap-2 items-center">
                <div className="flex w-6 justify-center">
                  <img src="/assets/mail.svg" alt="" />
                </div>
                <p className='text-sm'>lucas.piou1@gmail.com</p>
              </li>
              
              <li className="flex flex-row gap-1 items-center">
                <div className="flex w-6 justify-center">
                 <img src="/assets/phone.svg" alt="" />
                </div>
                <p className='text-sm'>lucas.piou1@gmail.com</p>
              </li>

              <li className="flex flex-row gap-1 items-center">
                <div className="flex w-6 justify-center">
                  <img src="assets/vite.svg" alt="linkedin" />
                </div>
                <p className='text-sm'>https://www.linkedin.com/feed/</p>
              </li>

            </ul>
        </div>
    </div>
  )
}
