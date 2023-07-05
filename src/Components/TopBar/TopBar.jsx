import React from 'react'
import './TopBar.css'
import { BsGithub }from 'react-icons/bs'
import { BiLogoTelegram }from 'react-icons/bi'
import { HiArrowLongRight }from 'react-icons/hi2'
import { AiOutlineInstagram, AiOutlineTwitter }from 'react-icons/ai'
export default function TopBar() {
  return (
    <div className='TopBar'>
      <section className='px-36 relative z-20 pb-10 lg:px-10 pt-28 md:pt-10'>
      <img src="/Images/photo_5847965502901698114_x.jpg" className='me-image-2   hidden md:block w-56 mx-auto mb-4 rounded-full' alt="" />
        <div className='text-9xl w-max relative text-white font-swap font-extrabold'><span className='z-20 relative'>Hi! I’m Kasra</span> <img className='absolute top-4   z-10   right-2 ' src="https://demo.themecon.net/onlyme/html/images/hero-title-pettern-bg.png" alt="" /></div>
       <p className='text-5xl mt-4 w-max relative text-white font-swap font-extrabold z-10'>  Front-end Developer</p>
       <div className=' pt-12'> 
        <span className='text-2xl   text-white font-swap font-extrabold'>Hire Me</span>
        <button className='bg-red-600 text-2xl relative top-1 rounded-full ml-3 p-4 text-white'><HiArrowLongRight/></button>
       </div>
        <img className='TopBar-logo '  src="https://demo.themecon.net/onlyme/html/images/vertical-logo.png" alt="" />
       <img src="/Images/photo_5847965502901698113_y.jpg" className='me-image lg:right-28 md:hidden ' alt="" />
    <img src="	https://demo.themecon.net/onlyme/html/images/dot-texture.png" className='md:right-1/2 lg:right-5 right-20 top-28 absolute' alt="" />
     </section>
     <div className='flex gap-5  pb-10 flex-col text-2xl text-white'>
      <AiOutlineTwitter className='ml-auto mr-7 '/>
      <AiOutlineInstagram className='ml-auto mr-7 '/>
      <BiLogoTelegram className='ml-auto mr-7 '/>
      <BsGithub className='ml-auto mr-7 '/>
     </div>
     <div className='absolute lg:bottom-14 bottom-36'>    
                <p className='scrollDown text-white '>Scroll Down   <img className=' absolute w-4 top-0 -left-10' src="https://demo.themecon.net/onlyme/html/images/scroll-down-arrow.png" alt="" /></p> 
              
        </div>    
   
    </div>
  )
}
