import React from 'react'
import './Header.css'
import { RiMenu5Fill } from 'react-icons/ri'
export default function Header() {
  return (
    <header className='Header sm-x2:px-3 text-white items-center flex justify-between flex-row-reverse py-4 px-10    '>
      <div>
        <img className='w-[64px] cursor-pointer' src="/Images/logo.png" alt="" />
      </div>
      <ul className='flex gap-10 font-swap  sm-x2:hidden  list-none z-30 relative'> 
        <li className='hover:text-red-500 transition-colors cursor-pointer  '>Who Am I ?</li>
        <li className='hover:text-red-500 transition-colors cursor-pointer  '>$kills</li>
        <li className='hover:text-red-500 transition-colors cursor-pointer  '>$amples</li>
        <li className='hover:text-red-500 transition-colors cursor-pointer  '>Talk To Me</li>
      </ul>
      <RiMenu5Fill className='hidden  sm-x2:block text-3xl'/>
    </header>
  )
}
