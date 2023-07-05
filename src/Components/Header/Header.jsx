import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <header className='Header text-white items-center flex justify-between flex-row-reverse py-4 px-10    '>
      <div>
        <img className='w-[64px] cursor-pointer' src="/Images/logo.png" alt="" />
      </div>
      <ul className='flex gap-10 font-swap  list-none z-30 relative'> 
        <li className='hover:text-red-500 transition-colors cursor-pointer  '>Who Am I ?</li>
        <li className='hover:text-red-500 transition-colors cursor-pointer  '>$kills</li>
        <li className='hover:text-red-500 transition-colors cursor-pointer  '>$amples</li>
        <li className='hover:text-red-500 transition-colors cursor-pointer  '>Talk To Me</li>
      </ul>
    </header>
  )
}
