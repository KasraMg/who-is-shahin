import React, { useRef, useState } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/navigation'; 
import './Projects.css' 
import projectData from './data';
import { Navigation } from 'swiper/modules';
import { HiArrowLongRight } from 'react-icons/hi2';
export default function Projects() {
    const [projects,setProjects]=useState(projectData)
  return (
    <div style={{background:'url(/Images/projectBg.jpg)'}} className='relative pb-56 pt-36   !bg-fixed !bg-center'>
        <div class="bg-[#141519d9]  left-0 top-0 w-full h-full absolute"></div>
       <Swiper rewind={true} navigation={true} modules={[Navigation]} className="mySwiper z-30 relative   ml-auto mr-0">
        {projects && projects.map(data=>(
             <SwiperSlide className='flex  justify-evenly bg-transparent '>
            <main className='text-left'>
                <span className='text-red-600 text-2xl font-swap'>{data.type}</span>
                <p className='text-3xl mt-4 text-white font-swap font-bold'>{data.name}</p>
                <p className='text-justify mt-3 text-[20px] font-swap w-96  text-[#ababab]'>{data.description}</p> 

                <div className='flex items-center mt-5'>
                    <p className=' text-white font-swap text-2xl'>View Live</p>
                    <a href={data.href}><button className='bg-red-600 text-2xl relative top-1 rounded-full ml-3 p-4 text-white'><HiArrowLongRight /></button></a>
                </div>
            </main>
            <section className='lg:w-[50%]'>
            
                <img className='w-[768px] mr-6 rounded-md relative z-50' src={data.image} alt="" />
            </section>
        </SwiperSlide>
        ))} 
      </Swiper>
      <p className=' projects-title font-bold text-[120px]  uppercase absolute right-52 bottom-[42%]'>Projects</p>
      <img src="/Images/projectShape.png" className='bottom-0 -left-44 absolute' alt="" />
    </div>
  )
}
