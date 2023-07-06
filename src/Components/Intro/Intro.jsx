import React from 'react'
import './Intro.css'
export default function Intro() {
  return (
    <div className='Intro relative'>
          <img src="https://demo.themecon.net/onlyme/html/images/dot-texture.png" className=' absolute bottom-3 left-5' alt="" />
      <main className='px-36 flex'>
        <img src="/Images/photo_5847965502901698113_y.jpg" className='w-80' alt="" />
            <section className='bg-center'>
                <div className="overlay"></div>
                <p className=' relative z-10 mt-6 leading-[53px] ml-6 text-4xl text-white font-swap'>Meet my startup design agency team UITrendy. Currently i am working at UITrendy as Wed Developer.</p>
                <p className=' relative z-10 w-80  leading-10 ml-auto text-[22px] mr-2 mt-16 text-justify text-white font-swap'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 B making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney Colle Virginia, looked up one of the mo obscure Latin words, consectetured.</p>
            </section>
        <img src="/Images/photo_5847965502901698113_y.jpg" className='w-80' alt="" />
      </main>
      <img className='intro-shape absolute bottom-0 right-1' src="https://demo.themecon.net/onlyme/html/images/about-shape.png" alt="" />
    </div>
  )
}
