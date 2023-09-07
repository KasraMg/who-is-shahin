import React, { useEffect } from 'react'  
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
export default function Intro() {
  const { t } = useTranslation();
 
  
  return (
    <div data-aos="fade-up"   data-aos-duration="3000" className={` overflow-hidden  Intro relative bg-[#1b1c21] `} id='me'>
          <img src="https://demo.themecon.net/onlyme/html/images/dot-texture.png" className='lg:bottom-12 absolute bottom-3 left-5' alt="" />
      <main className='px-36 lg:px-12 flex md:!pr-0 sm:!pl-0 border-b-2 sm:border-0 border-red-600 border-solid   sm:flex-col '>
      <img src="/Images/photo_5852906888545550315_x.jpg" className='w-80 sm:!block sm:object-cover sm:!w-full sm-x2:!h-[300px]   sm:h-[430px] sm:rounded-none md:hidden object-none lg:w-72 rounded-l-[20rem] relative z-30' alt="" /> 
            <section dir={i18n.language=='fa' ? 'rtl' : 'ltr'}  className={`${i18n.language=='fa' && 'pr-5'} bg-center bg-[url(https://demo.themecon.net/onlyme/html/images/about-bg.jpg)] relative`}>
                <div className="overlay"></div>
                <p className={` ${i18n.language=='fa'? ' font-vazirlight' : 'font-swap '}   relative z-10 mt-6 lg:text-[1.5rem] leading-[53px] ml-6 text-[2rem] text-white  `}> {t('intro.text1')}</p>
                <p className={`${i18n.language=='fa'? ' mr-auto ml-5 font-vazirlight' : 'font-swap ml-auto mr-2'}  w-80  leading-10 text-[22px] sm-x2:!w-full sm-x2:px-5 relative z-30  mt-16 text-justify text-white `} > {t('intro.text2')} <p> {t('intro.text3')}</p></p>
            </section>
            <img src="/Images/photo_5852906888545550314_y.jpg" className='w-80 object-none sm:hidden lg:w-72' alt="" />
      </main>
      <img className='intro-shape absolute sm-x2:bottom-32 bottom-0 right-1' src="https://demo.themecon.net/onlyme/html/images/about-shape.png" alt="" />
    </div>
  )
}
