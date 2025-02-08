export default function Skills() {
  return (
    <div className="flex flex-col w-full items-center gap-10 pt-12">
        
        <div className="w-full items-start">
            <h1 className="text-4xl p-5 ">Mes skills.</h1>
        </div>
        <div className="flex flex-wrap sm:px-32  gap-3 justify-center ">
            <div className="flex flex-row w-fit justify-center p-3 m-1 gap-2 border shadow-lg rounded-md border-gray-300 bg-gray-100 transition delay-100 duration-200 ease-in-out hover:scale-110 hover:bg-gray-200 ">
                <h2>Kotlin</h2>
                <div className='flex w-6 justify-center'>
                    <img src="./assets/kotlin-icon.svg" alt="kotlin" />
                </div>
            </div>

            <div className="flex flex-row w-fit justify-center p-3 m-1 gap-2 border shadow-lg rounded-md border-gray-300 bg-gray-100 transition delay-100 duration-200 ease-in-out hover:scale-110 hover:bg-gray-200 ">
                <h2>Tailwind</h2>
                <div className='flex w-6 justify-center'>
                    <img src="./assets/tailwindcss.svg" alt="kotlin" />
                </div>
            </div>

            <div className="flex flex-row w-fit justify-center p-3 m-1 gap-2 border shadow-lg rounded-md border-gray-300 bg-gray-100 transition delay-100 duration-200 ease-in-out hover:scale-110 hover:bg-gray-200 ">
                <h2>Golang</h2>
                <div className='flex w-6 justify-center'>
                    <img src="./assets/Go-Logo_Blue.svg" alt="kotlin" />
                </div>
            </div>

            <div className="flex flex-row w-fit justify-center p-3 m-1 gap-2 border shadow-lg rounded-md border-gray-300 bg-gray-100 transition delay-100 duration-200 ease-in-out hover:scale-110 hover:bg-gray-200 ">
                <h2>SQL</h2>
                <div className='flex w-6 justify-center'>
                    <img src="./assets/datagrip-icon.svg" alt="kotlin" />
                </div>
            </div>

            <div className="flex flex-row w-fit justify-center p-3 m-1 gap-2 border shadow-lg rounded-md border-gray-300 bg-gray-100 transition delay-100 duration-200 ease-in-out hover:scale-110 hover:bg-gray-200 ">
                <h2>Python</h2>
                <div className='flex w-6 justify-center'>
                    <img src="./assets/python.svg" alt="kotlin" />
                </div>
            </div>

            <div className="flex flex-row w-fit justify-center p-3 m-1 gap-2 border shadow-lg rounded-md border-gray-300 bg-gray-100 transition delay-100 duration-200 ease-in-out hover:scale-110 hover:bg-gray-200 ">
                <h2>php</h2>
                <div className='flex w-6 justify-center'>
                    <img src="./assets/new-php-logo.svg" alt="kotlin" />
                </div>
            </div>

            <div className="flex flex-row w-fit justify-center p-3 m-1 gap-2 border shadow-lg rounded-md border-gray-300 bg-gray-100 transition delay-100 duration-200 ease-in-out hover:scale-110 hover:bg-gray-200 ">
                <h2>React</h2>
                <div className='flex w-6 justify-center'>
                    <img src="./assets/react-2.svg" alt="kotlin" />
                </div>
            </div>

            <div className="flex flex-row w-fit justify-center p-3 m-1 gap-2 border shadow-lg rounded-md border-gray-300 bg-gray-100 transition delay-100 duration-200 ease-in-out hover:scale-110 hover:bg-gray-200 ">
                <h2>JavaScript</h2>
                <div className='flex w-6 justify-center'>
                    <img src="./assets/logo-javascript.svg" alt="kotlin" />
                </div>
            </div>
        </div>
    </div>
  )
}
