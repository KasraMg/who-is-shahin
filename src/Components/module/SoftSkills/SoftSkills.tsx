"use client"
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function SoftSkills() {
    const { t } = useTranslation();

  return (
    <div className='bg-[url(/Images/softBg.jpg)] font-swap relative '>
     <div className='pt-10 font-swap relative sm:!px-4 sm:!block z-10 items-baseline px-36 gap-6 grid space-y-12 lg:grid-cols-[1fr,1fr] grid-cols-[1fr,1fr,1fr]'>
      
      <section className='z-40 h-[200px] font-swap py-8 bg-[#1c1d21] w-full text-center'>
          <Image height={64} width={64} className='w-16 h-16 block mx-auto mb-6' src="/Images/icons8-time-96.png" alt="soft_skill" />
          <p className='text-white  whitespace-nowrap text-xl'>{t('softSkills.one')}</p>
      </section>
       <section className='z-40 box h-[200px] font-swap py-8 bg-[#1c1d21] w-full text-center'>
          <Image height={64} width={64} className='w-16 h-16 block mx-auto mb-6'  src="/Images/icons8-people-96.png" alt="soft_skill" />
          <p className='text-white  whitespace-nowrap text-xl'>{t('softSkills.two')}</p>
      </section> 
      <section className='z-40 h-[200px] font-swap py-8 bg-[#1c1d21] w-full text-center'>
          <Image height={64} width={64} className='w-16 h-16 block mx-auto mb-6' src="/Images/icons8-book-and-pencil-96.png" alt="soft_skill" />
          <p className='text-white  whitespace-nowrap text-xl'>{t('softSkills.tree')}</p>
      </section> 
       <section className='z-40 box h-[200px] font-swap py-8 bg-[#1c1d21] w-full text-center'>
          <Image height={64} width={64} className='w-16 h-16 block mx-auto mb-6'  src="/Images/icons8-working-with-a-laptop-96.png" alt="soft_skill" />
          <p className='text-white  whitespace-nowrap text-xl'>{t('softSkills.four')}</p>
      </section>
      <section className='z-40  h-[200px] font-swap py-8 bg-[#1c1d21] w-full text-center'>
          <Image height={64} width={64} className='w-16 h-16 block mx-auto mb-6' src="/Images/icons8-garena-96.png" alt="soft_skill" />
          <p className='text-white  whitespace-nowrap text-xl'>{t('softSkills.five')}</p>
      </section>
      
      <section className='z-40 box h-[200px] font-swap py-8 bg-[#1c1d21] w-full text-center'>
          <Image height={64} width={64} className='w-16 h-16 block mx-auto mb-6'  src="/Images/icons8-mind-map-96.png" alt="soft_skill" />
          <p className='text-white  whitespace-nowrap text-xl'> {t('softSkills.six')}</p>
      </section>

    

  </div>
  <p className='skills-title font-bold  pb-16 text-[120px] text-white relative z-50  uppercase sm:text-[80px] sm-x2:!text-[50px]  w-full text-center  mt-20 '> {t('softSkills.title')}</p>
  
  <div className="overlay"></div>
    </div>
    
  )
}
