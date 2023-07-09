import React from 'react'
import './SoftSkills.css'
export default function SoftSkills() {
  return (
    <div  className='font-swap relative bg-[url(/Images/softBg.jpg)] sm:!grid-cols-[auto] px-36 gap-6 grid space-y-12 lg:grid-cols-[auto,auto] grid-cols-[auto,auto,auto] justify-evenly'>
        <div class="overlay"></div>
        <section className='z-40  font-swap py-8   bg-[#1c1d21]  lg-x2:!w-[350px] w-[300px]  text-center'>
            <img className='w-16 h-16 block mx-auto mb-6' src="/Images/icons8-time-96.png" alt="" />
            <p className='text-white  whitespace-nowrap text-xl'>Time Management</p>
        </section>
         <section className='z-40 box  font-swap py-8  bg-[#1c1d21] lg-x2:!w-[350px] w-[300px]   text-center'>
            <img className='w-16 h-16 block mx-auto mb-6'  src="/Images/icons8-people-96.png" alt="" />
            <p className='text-white  whitespace-nowrap text-xl'>Team spirit</p>
        </section>
        <section className='z-40  font-swap py-8  bg-[#1c1d21] lg-x2:!w-[350px] w-[300px]   text-center'>
            <img className='w-16 h-16 block mx-auto mb-6' src="/Images/icons8-book-and-pencil-96.png" alt="" />
            <p className='text-white  whitespace-nowrap text-xl'>studious</p>
        </section>
      
         <section className='z-40 box  font-swap py-8  bg-[#1c1d21] lg-x2:!w-[350px] w-[300px]   text-center'>
            <img className='w-16 h-16 block mx-auto mb-6'  src="/Images/icons8-working-with-a-laptop-96.png" alt="" />
            <p className='text-white  whitespace-nowrap text-xl'>Hardworking</p>
        </section>
        <section className='z-40   font-swap py-8  bg-[#1c1d21] lg-x2:!w-[350px] w-[300px]   text-center'>
            <img className='w-16 h-16 block mx-auto mb-6' src="/Images/icons8-garena-96.png" alt="" />
            <p className='text-white  whitespace-nowrap text-xl'>competitive</p>
        </section>
        <section className='z-40 box  font-swap py-8  bg-[#1c1d21] lg-x2:!w-[350px] w-[300px]   text-center'>
            <img className='w-16 h-16 block mx-auto mb-6'  src="/Images/icons8-mind-map-96.png" alt="" />
            <p className='text-white  whitespace-nowrap text-xl'>Problem solver</p>
        </section>
    </div>
  )
}
