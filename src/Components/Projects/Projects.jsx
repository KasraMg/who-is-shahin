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
    <div style={{background:'url(/Images/projectBg.jpg)'}} id='projects' className='relative border-b-2 border-solid border-red-600 pb-56 pt-36 md:pt-12  !bg-fixed !bg-center '>
        <div class="bg-[#141519d9]  left-0 top-0 w-full h-full absolute"></div>
       <Swiper rewind={true} navigation={true} modules={[Navigation]} className="mySwiper sm:border-t-2 sm:mt-5 border-0 pt-12 border-red-600 border-solid z-30 relative sm:pl-0   ml-auto mr-0">
        {projects && projects.map(data=>(
             <SwiperSlide className='flex md:flex-col-reverse  justify-between gap-8 bg-transparent '>
            <main className='text-left sm:px-5'>
                <span className='text-red-600 text-2xl font-swap'>{data.type}</span>
                <p className='text-3xl mt-4 text-white font-swap font-bold'>{data.name}</p>
                <p className='text-justify sm:w-[100%] mt-3 text-[20px] font-swap w-96  text-[#ababab]'>{data.description}</p> 

                <div className='flex items-center mt-5'>
                    <p className=' text-white font-swap text-2xl'>View Live</p>
                    <a href={data.href}><button className='bg-red-600 text-2xl relative top-1 rounded-full ml-3 p-4 text-white'><HiArrowLongRight /></button></a>
                </div>
            </main>
            <section className='lg:w-[600px] sm:!w-full sm:pr-0 pr-24'>
            
                <img className='w-[768px] sm:block sm:mr-auto sm:!w-[90%] sm-x2:!mx-auto   mr-6 rounded-md relative z-50' src={data.image} alt="" />
            </section>
        </SwiperSlide>
        ))} 
      </Swiper>
      <p className=' projects-title sm-x2:hidden font-bold text-[120px] md:!-right-44 lg:right-12  uppercase absolute right-52 bottom-[42%]'>Projects</p>
      <img src="/Images/projectShape.png" className='bottom-0 -left-44 absolute' alt="" />
    </div>
  )
}
