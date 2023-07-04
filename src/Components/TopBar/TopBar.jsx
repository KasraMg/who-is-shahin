import React from 'react'
import './TopBar.css'
import { HiArrowLongRight }from 'react-icons/hi2'
import { FiArrowDown }from 'react-icons/fi'
export default function TopBar() {
  return (
    <div className='TopBar'>
      <section className='px-36 relative z-20  pt-28'>
        <div className='text-9xl w-max relative text-white font-swap font-extrabold'><span className='z-10 relative'>Hi! I’m Kasra</span> <img className='absolute top-4 z-0 right-2 ' src="https://demo.themecon.net/onlyme/html/images/hero-title-pettern-bg.png" alt="" /></div>
       <p className='text-5xl mt-4 w-max relative text-white font-swap font-extrabold'>  Front-end Developer</p>
       <div className=' pt-12'> 
        <span className='text-2xl   text-white font-swap font-extrabold'>Hire Me</span>
        <button className='bg-red-600 text-2xl relative top-1 rounded-full ml-3 p-4 text-white'><HiArrowLongRight/></button>
       </div>
        <img className='TopBar-logo' src="	https://demo.themecon.net/onlyme/html/images/vertical-logo.png" alt="" />
       

     </section>
     <div className='relative'>    
                <p className='scrollDown text-white absolute top-32  '>Scroll Down   <img className=' absolute w-4 top-0 -left-10' src="https://demo.themecon.net/onlyme/html/images/scroll-down-arrow.png" alt="" /></p> 
              
        </div>    
   
    </div>
  )
}
