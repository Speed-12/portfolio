import React, { useState } from 'react'
import  { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import  { Link } from 'react-scroll'
import { motion } from 'framer-motion'

export default function Navbar() {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVarients = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15
            },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15
            }
        }

        }
    }
  return (
    <div className='fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50'>
        <div className='max-w-[1300px] mx-auto bg-green-200 flex justify-between text-gray-200 text-xl items-center px-12 h-20'>
            <a href="#">L.Piou</a>
            <ul className='hidden md:flex gap-12 z-10 cursor-pointer'>
                <li><Link to="skills" smooth={true} offset={50} duration={500}> About </Link></li>
                <li><Link to="portfolio" smooth={true} offset={50} duration={500}> portfolio </Link></li>
                <li><Link to="contact" smooth={true} offset={50} duration={500}> contact </Link></li>

                <div onClick={toggleNav} className='md:hidden z-30 text-gray-800'>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                <motion.div 
                initial={false}
                animate={nav ? 'open' : 'closed'}
                variants={menuVarients}
                className='fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40'
                >

                </motion.div>
            </ul>
        </div>
    </div>
  )
}
