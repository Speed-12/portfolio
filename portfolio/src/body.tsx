import React from 'react'

export default function Body() {
  return (
    <> 
        <div className='w-full h-dvh flex flex-col items-center p-4'>
            <div className='flex flex-row w-full pt-10 justify-evenly'>
                <div className='flex flex-col w-full'>
                    <h2 className='text-2xl'>Lucas Piou</h2>
                    <h2> Etudiant developper </h2>
                </div>
                <div className='w-[10vh]'>
                    <img src="./src/assets/dev-img.svg" alt="" />
                </div>
                
            </div>
            
        </div>
    </>
  )
}
