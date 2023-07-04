import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <header className='Header text-white items-center flex justify-between flex-row-reverse py-4 px-5   '>
      <div>
        <img className='w-[64px] cursor-pointer' src="/Images/logo.png" alt="" />
      </div>
      <ul className='flex gap-10 font-swap  list-none'> 
        <li>Who Am I ?</li>
        <li>$kills</li>
        <li>$amples</li>
        <li>Talk To Me</li>
      </ul>
    </header>
  )
}
