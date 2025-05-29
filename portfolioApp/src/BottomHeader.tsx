import React, { useEffect, useState } from 'react'
import Header from './Header'

export default function BottomHeader() {

  const [show,setShow] = useState(false)

  function scrollDetection(){
    setShow(window.scrollY>100)
  }

  useEffect(()=>{
    window.addEventListener('scroll',scrollDetection)
    return ()=>{window.removeEventListener('scroll', scrollDetection)}
  }, [])

  return (
    <div className='fixed bottom-0 w-full flex justify-center data-[show=false]:translate-y-full transition-transform ease-in-out duration-800' data-show={show}>
        <Header/>
    </div>
  )
}
