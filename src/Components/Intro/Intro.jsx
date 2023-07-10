import React from 'react'
import './Intro.css'
export default function Intro() {
  return (
    <div className='Intro relative' id='me'>
          <img src="https://demo.themecon.net/onlyme/html/images/dot-texture.png" className='lg:bottom-12 absolute bottom-3 left-5' alt="" />
      <main className='px-36 lg:px-12 flex md:!pr-0 sm:!pl-0 border-b-2 sm:border-0 border-red-600 border-solid   sm:flex-col '>
      <img src="/Images/photo_5852906888545550315_x.jpg" className='w-80 sm:!block sm:object-cover sm:!w-full sm-x2:!h-[300px]   sm:h-[430px] sm:rounded-none md:hidden object-none lg:w-72 rounded-l-[20rem] relative z-30' alt="" /> 
            <section className='bg-center'>
                <div className="overlay"></div>
                <p className=' relative z-10 mt-6 lg:text-[1.5rem] leading-[53px] ml-6 text-[2rem] text-white font-swap'>I have been working as a front-end developer for almost 2 years. Also, Im currently working as an assistant teacher in Sabzlearn Company</p>
                <p className=' relative z-10 w-80  leading-10 ml-auto text-[22px] sm-x2:!w-full sm-x2:px-5 relative z-30 mr-2 mt-16 text-justify text-white font-swap'>Im a person who is looking for a challenge & giving up has no meaning for me. <p>I  always updating myself with new technologies</p></p>
            </section>
            <img src="/Images/photo_5852906888545550314_y.jpg" className='w-80 object-none sm:hidden lg:w-72' alt="" />
      </main>
      <img className='intro-shape absolute sm-x2:bottom-32 bottom-0 right-1' src="https://demo.themecon.net/onlyme/html/images/about-shape.png" alt="" />
    </div>
  )
}
