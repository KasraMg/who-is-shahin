import React from 'react'
import './Footer.css'
import { useFormik } from "formik";
import swal from 'sweetalert';
import registerSchema from '../../Validations/rules';
import { BsDiscord, BsGithub } from 'react-icons/bs'
import { BiLogoTelegram } from 'react-icons/bi'
import { HiArrowLongRight } from 'react-icons/hi2'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
export default function Footer() {
    const footerform = useFormik({
        initialValues: { name: "", email: "", message: "" },
        validationSchema: registerSchema,
    });
    const formClickHandle = (e) => {
        e.preventDefault();
        console.log(footerform.values.email);

        if (footerform.values.name.length == 0) {
            swal({
                title: 'Please Type Your Name',
                icon: 'error',
                button: 'try again'
            })
        } else if (footerform.values.email.length == 0) {
            swal({
                title: 'Please Type Your Email',
                icon: 'error',
                button: 'try again'
            })
        } else if (footerform.values.message.length == 0) {
            swal({
                title: 'Please Type Your Message',
                icon: 'error',
                button: 'try again'
            })
        } else if (footerform.errors.email) {
            swal({
                title: footerform.errors.email && footerform.errors.email,
                icon: 'error',
                button: 'try again'
            })
        } else if (footerform.errors.name) {
            swal({
                title: footerform.errors.name && footerform.errors.name,
                icon: 'error',
                button: 'try again'
            })
        } else if (footerform.errors.message) {
            swal({
                title: footerform.errors.message && footerform.errors.message,
                icon: 'error',
                button: 'try again'
            })
        } else{
           swal({
            title: 'Email Was Send',
            icon: 'success',
            button: 'try again'
        }) 
        } 



    }
    return (
        <div data-aos="fade-down"   data-aos-duration="3000"  id='footer' className='bg-[url(/Images/footer-bg.jpg)] bg-no-repeat border-t-2 md:bg-repeat-round  border-red-600 border-solid   pt-16 '>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope-open-text " className=" w-12 mx-auto text-red-600 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path></svg>
            <p className='text-white text-3xl font-swap font-extrabold mt-5 text-center'>GET IN TOUCH</p>

            <main className='flex gap-48 justify-center md:flex-col md:justify-center sm:!px-6 md:px-10 sm:pt-16  lg:gap-20 pt-32 pb-32'>
                <div>
                    <p className='text-[#727272] font-extrabold font-swap'>ADDRESS :</p>
                    <div className='text-white text-2xl sm:!text-[20px] mt-4 font-swap'>
                        <p>Iran, Fars, Marvdasht</p>
                        <p>Maskan Mehr</p>
                    </div>
                    <p className='text-[#727272] font-extrabold font-swap mt-8'>Email :</p>
                    <p className='font-swap  text-2xl sm:!text-[20px] text-red-600 mt-4 sm:break-words'>kasrakasra924@gmail.com</p>
                </div>

                <footerform>
                    <section className='grid font-swap gap-6'>
                        <label className='text-[#727272]' htmlFor="">Name *</label>
                        <input type="text"
                            name="name"
                            value={footerform.values.name}
                            onChange={footerform.handleChange}
                            onBlur={footerform.handleBlur}
                            className='bg-transparent focus-visible:outline-0 w-[460px] md:w-full text-[#fff] pb-4 border-solid border-b-2 border-[#333]' placeholder='Your Name' />
                    </section>
                    <section className='grid font-swap gap-6 my-8'>
                        <label className='text-[#727272]' htmlFor="">Email *</label>
                        <input type="email"
                            name="email"
                            value={footerform.values.email}
                            onChange={footerform.handleChange}
                            onBlur={footerform.handleBlur}
                            className='bg-transparent focus-visible:outline-0 w-[460px] md:w-full text-[#fff] pb-4 border-solid border-b-2 border-[#333]' placeholder='Your Email' />
                    </section>
                    <section className='grid font-swap gap-6'>
                        <label className='text-[#727272]' htmlFor="">message *</label>
                        <input
                            name="message"
                            value={footerform.values.message}
                            onChange={footerform.handleChange}
                            onBlur={footerform.handleBlur}
                            type="text" className='bg-transparent focus-visible:outline-0 w-[460px] md:w-full text-[#fff] pb-4 border-solid border-b-2 border-[#333]' placeholder='Write your message' />
                    </section>

                    <button onClick={(e) => formClickHandle(e)} className='bg-red-600 md:w-full font-swap text-white py-2 mt-8 rounded-sm px-6'>Send</button>
                </footerform>

            </main>
                <section className='flex sm:flex-col-reverse sm:px-2 sm:text-center sm:text-[13px]   justify-between px-12 border-solid border-t-2 border-white py-5 bg-[#16171b]'>
                    <p className='text-white font-swap sm:mt-3'>© 2023 Developed By <span className='text-red-600'>kasra</span>. All Right Reserved</p>
                    <div className='flex gap-5 sm:justify-evenly sm:gap-0  sm:pb-4 text-white text-2xl'>
                     
                        <a href="https://instagram.com/_ka.s.ra_?igshid=ZDc4ODBmNjlmNQ==" target='_blank'><AiOutlineInstagram /></a>
                        <a href="https://t.me/shahiinnnnn" target='_blank'><BiLogoTelegram /></a>
                        <a href="https://github.com/KasraMg" target='_blank'><BsGithub /></a>
                        <a href="https://discord.com/users/shahin#6613" target='_blank'><BsDiscord /></a>
                    </div>
                </section>
        </div>
    )
}
