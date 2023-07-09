import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <div className='bg-[url(/Images/footer-bg.jpg)] bg-no-repeat   border-t-2   border-red-600 border-solid   pt-16 '>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope-open-text " className=" w-12 mx-auto text-red-600 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path></svg>
            <p className='text-white text-3xl font-swap font-extrabold mt-5 text-center'>GET IN TOUCH</p>

            <main className='flex gap-48 justify-center pt-32 pb-64'>
                <div>
                    <p className='text-[#727272] font-extrabold font-swap'>ADDRESS :</p>
                    <div className='text-white text-2xl mt-4 font-swap'>
                        <p>Iran, Fars, Marvdasht</p>
                        <p>Maskan Mehr</p>
                    </div>
                    <p className='text-[#727272] font-extrabold font-swap mt-8'>Email :</p>
                    <p className='font-swap  text-2xl text-red-600 mt-4'>kasrakasra924@gmail.com</p>
                </div>

                <div>
                    <section className='grid gap-6'>
                        <label className='text-[#727272]' htmlFor="">Name *</label>
                        <input type="text" className='bg-transparent focus-visible:outline-0 w-[460px] text-[#fff] pb-4 border-solid border-b-2 border-[#333]' placeholder='Your Name' />
                    </section>
                    <section className='grid gap-6 my-8'>
                        <label className='text-[#727272]' htmlFor="">Email *</label>
                        <input type="text" className='bg-transparent focus-visible:outline-0 w-[460px] text-[#fff] pb-4 border-solid border-b-2 border-[#333]' placeholder='Your Email' />
                    </section>
                    <section className='grid gap-6'>
                        <label className='text-[#727272]' htmlFor="">message *</label>
                        <input type="text" className='bg-transparent focus-visible:outline-0 w-[460px] text-[#fff] pb-4 border-solid border-b-2 border-[#333]' placeholder='Write your message' />
                    </section>

                    <button className='bg-red-600 text-white py-2 mt-8 rounded-sm px-6'>Send</button>
                </div>

            </main>
        </div>
    )
}
