import React, { useContext } from 'react'
import { BsDiscord, BsGithub } from 'react-icons/bs'
import { BiLogoTelegram } from 'react-icons/bi'
import { HiArrowLongRight } from 'react-icons/hi2'
import { AiOutlineInstagram } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
export default function TopBar() {
  const { t } = useTranslation();
  return (

    <div className=' topbar bg-[top] bg-fullSize    bg-[#1d192c]   border-b-2 border-red-600 border-solid sm-x2:pb-20'>
      <section className={`${i18n.language == 'fa' ? null : 'pl-44'} px-36 relative z-20  sm-x2:overflow-hidden  pb-[70px] lg:px-10 pt-28 md:pt-10`}>

        <img src="/Images/photo_5847965502901698114_x.jpg" className='me-image-2   sm-x2:w-60  sm-x2:h-64  sm-x2:relative  sm-x2:z-50    hidden md:block object-cover  w-72  h-80   mx-auto mb-4 rounded-full' alt="" />
        <div className={`text-9xl md:text-6xl md:text-center   sm-x2:mt-8 sm-x3:!text-4xl  md:w-full w-max relative text-white font-swap font-extrabold`}>
          <span className={`${i18n.language == 'fa' ? 'sm-x2:left-2': 'sm-x2:right-2'} z-20 relative sm-x2:whitespace-nowrap `}>{t('topbar.title')}</span>
          <img className={` ${i18n.language == 'fa' ? 'md:left-40 sm-x3:!left-0  left-10' : ' md:right-40 sm-x3:!right-0  right-2'} absolute top-4 md:top-0 w-36  z-10   `} src="https://demo.themecon.net/onlyme/html/images/hero-title-pettern-bg.png" alt="" />
        </div>
        <p className={`${i18n.language == 'fa' ? ' !font-vazirlight  relative top-4' : ' font-swap'} text-5xl md:text-3xl md:text-center md:w-full mt-4 w-max relative  sm-x2:!text-2xl text-white font-extrabold z-10`}> {t('topbar.myJob')}</p>
        <div className={` ${i18n.language == 'fa' ? ' gap-3 flex items-center justify-start sm:justify-center' : null}  pt-12 md:text-center  `}>
          <span className='text-2xl   text-white font-swap font-extrabold'>{t('topbar.hire')}</span>
          <a href="#footer" className='z-[999] relative'><button className='bg-red-600 text-2xl relative top-1 rounded-full ml-3 p-4 text-white'><HiArrowLongRight /></button></a>
        </div>
        <img className={`${i18n.language == 'fa' ? 'sm-x2:right-0 TopBar-logo-fa':'sm-x2:left-0 TopBar-logo'}  absolute  sm-x2:w-full`} src="https://demo.themecon.net/onlyme/html/images/vertical-logo.png" alt="" />
        <img src="/Images/shomal2.jpg" className={`${i18n.language == 'fa' ? 'left-[220px] lg:left-28' : 'right-[220px] lg:right-28'} me-image absolute   w-[420px] -top-[74px]  md:hidden`} alt="" />
        <img src="https://demo.themecon.net/onlyme/html/images/dot-texture.png" className={`${i18n.language == 'fa' ? ' md:!left-[45%]  lg:left-5 left-[97px] ' : ' md:!right-[45%]  lg:right-5 right-[97px]'} dot-bg  md:z-[-1] md:-top-20 top-32 absolute`} alt="" />
      </section>
      <div className={` ${i18n.language == 'fa' ? 'mr-auto ml-14' : ' ml-auto '} flex gap-5 w-11 sm-x2:!gap-10 sm-x2:relative sm-x2:flex-row sm-x2:right-auto sm-x2:mx-auto sm-x2:w-full sm-x2:justify-center  sm-x2:top-12 relative top-3 right-4 pb-10 flex-col text-2xl text-white`}>
        <a href="https://instagram.com/_ka.s.ra_?igshid=ZDc4ODBmNjlmNQ==" target='_blank'><AiOutlineInstagram className='ml-auto mr-7 sm-x2:mx-auto ' /></a>
        <a href="https://t.me/shahiinnnnn" target='_blank'><BiLogoTelegram className='ml-auto mr-7 sm-x2:mx-auto ' /></a>
        <a href="https://github.com/KasraMg" target='_blank'><BsGithub className='ml-auto mr-7 sm-x2:mx-auto ' /></a>
        <a href="https://discord.com/users/shahin#6613" target='_blank'><BsDiscord className='ml-auto mr-7 sm-x2:mx-auto ' /></a>


      </div>
      <a href='#footer' onClick={() => window.scrollTo(500, 7900)} className='absolute z-50 cursor-pointer lg:bottom-10  sm-x2:!-bottom-7 md:!-bottom-36 bottom-32  sm-x2:hidden'>
        <p className='scrollDown text-white '>{t('topbar.scroll')}  <img className=' absolute z-50 cursor-pointer w-4 top-0 -left-10' src="https://demo.themecon.net/onlyme/html/images/scroll-down-arrow.png" alt="" /></p>

      </a>

    </div>
  )
}
