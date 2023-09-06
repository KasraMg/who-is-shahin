import React, { useState } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/navigation';  
import projectData from './data';
import { Navigation } from 'swiper/modules';
import { HiArrowLongRight } from 'react-icons/hi2';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';

export default function Projects() {
    const [projects,setProjects]=useState(projectData)
    const { t } = useTranslation();
  return (
    <div data-aos="fade-down"  data-aos-duration="3000" style={{background:'url(/Images/projectBg.jpg)'}} id='projects' className='relative border-b-2 border-solid border-red-600 pb-56 pt-36 md:pt-12  !bg-fixed !bg-center '>
        <div class="bg-[#141519d9]  left-0 top-0 w-full h-full absolute"></div>
       <Swiper  dir={  'rtl'  } rewind={true} navigation={true} modules={[Navigation]} className="mySwiper sm-x2:pb-32 sm:border-t-2 sm:mt-5 border-0 pt-12 border-red-600 border-solid z-30 relative sm:pl-0   ml-auto mr-0">
        {projects && projects.map(data=>(
             <SwiperSlide className={` ${i18n.language =='en' ? 'dirLeft': null} flex md:flex-col-reverse  justify-between gap-8 bg-transparent `}>
            <main className={` ${i18n.language =='fa' ? 'text-right sm:!pr-5 pr-24 lg:pr-16' : 'text-left sm:!pl-5 pl-24 lg:pl-16' }  sm:px-5  `}>
                <span className='text-red-600 text-2xl font-swap'>{i18n.language =='fa' ? data.type_fa:data.type_en}</span>
                <p className='text-3xl mt-4 text-white font-swap font-bold'>{data.name}</p>
                <p className='text-justify sm:w-[100%] mt-3 text-[20px] font-swap w-96  text-[#ababab]'>{i18n.language =='fa' ? data.description_fa:data.description_en}</p> 

                <div  className={` flex gap-2 sm-x2:flex-wrap sm:sm-x2:justify-center sm-x2:mt-10 mt-3 sm-x2:text-[13px] text-white`}>
                  <span className='mt-[2px] sm-x2:hidden'>{i18n.language =='fa' ?'تگ :' :'Tag:' }</span>
                  {data.tag.map(tag=>(
                    <p className='bg-red-200 text-black w-max rounded-sm px-2 py-1'>{tag}</p>
                  ))}
                </div>
                <div className='flex items-center mt-5'>
                    <p className=' text-white font-swap text-2xl'> {i18n.language =='fa' ? 'بریم ببینیم':'View Live'}</p>
                    <a  className={i18n.language =='fa' && 'mr-2'} href={data.href}><button className='bg-red-600 text-2xl relative top-1 rounded-full ml-3 p-4 text-white'><HiArrowLongRight /></button></a>
                </div>
            </main>
            <section className={`  ${i18n.language =='fa' ?' sm:pl-0 pl-24' : ' sm:pr-0 pr-24'} lg:w-[600px] sm:!w-full`}>
            
                <img className={` ${i18n.language =='fa' ? ' md:mr-16  sm:ml-auto  ml-16': ' md:ml-16  sm:mr-auto  mr-6'} w-[768px] sm:!mx-auto sm:block sm:!w-[80%] sm-x2:!mx-auto   rounded-md relative z-50`} src={data.image} alt="" />
           
           
            </section>
        </SwiperSlide>
        ))} 
      </Swiper>
      <p className={`  ${i18n.language =='fa' ? ' md:!-left-44 lg:left-12  left-52':' md:!-right-44 lg:right-12  right-52'} projects-title sm-x2:hidden font-bold text-[120px] uppercase absolute bottom-[42%]`}>Projects</p>
      <img src="/Images/projectShape.png" className='bottom-0 -left-44 absolute' alt="" />
    </div>
  )
}
