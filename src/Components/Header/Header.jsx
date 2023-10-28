import React, { useState, useEffect, useContext } from 'react'
import { RiMenu5Fill } from 'react-icons/ri'
import { useTranslation } from "react-i18next";
import i18n from '../../i18n';
import i18next from 'i18next';


export default function Header() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    i18n.changeLanguage(language);
    i18n.language == 'en' ? document.documentElement.dir = 'ltr' : document.documentElement.dir = 'rtl'

  }, [language])

  return (
    <header className='bg-full bg-[top] bg-fullSize     bg-[#1d192c] sm-x2:px-3 text-white items-center flex justify-between flex-row-reverse py-4 px-10    '>
      <div className='flex z-[999] sm-x3:mx-3'>
 
        <div>
          <div className="flex items-center justify-center">
            <div className=" relative inline-block text-left dropdown  mt-1">
              <span className="rounded-md shadow-sm"
              ><button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5  transition duration-150 ease-in-out   text-white active:text-gray-800"
                type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                  <span style={{ marginLeft: i18next.language === 'fa' ? '.5rem' : null }}>{i18next.language == 'fa' ? 'فارسی' : 'en'}</span>
                  <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button ></span>
              <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                <div className="absolute right-0   mt-2 origin-top-right cursor-pointer bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                  <div className="mx-5 py-2">
                    <p onClick={() => setLanguage(i18next.language == 'en' ? 'fa' : 'en')} className="text-sm font-medium px-3 leading-5 text-gray-900 truncate">{i18next.language == 'en' && 'fa'} {i18next.language == 'fa' && <>انگلیسی</>}</p>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <img className='w-[64px] cursor-pointer' src="/Images/logo.png" alt="" />

      </div>
      <ul className='flex gap-10 font-swap  sm:hidden  list-none z-30 relative'>
        <a href="#me"><li className='hover:text-red-500 transition-colors cursor-pointer  '>{t("header.whoAmI")}</li></a>
        <a href="#skills"><li className='hover:text-red-500 transition-colors cursor-pointer  '>{t("header.skills")}</li></a>
        <a href="#projects"><li className='hover:text-red-500 transition-colors cursor-pointer  '>{t("header.projects")}</li></a>
        <a href="#footer"><li className='hover:text-red-500 transition-colors cursor-pointer  '>{t("header.talk")}</li></a>
      </ul>

      <button type="button" style={{ display: 'none' }} className=" sm:!block text-3xl" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
        <RiMenu5Fill />
      </button>





      <div id="drawer-example" className="fixed z-[999] top-0 left-0 border-r bg-[url(/Images/projectBg.jpg)]  h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-label">
        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
          <h3 className="font-bold text-white dark:text-white font-swap relative bottom-2" >
            {t("header.menuTitle")}
          </h3>
          <button type="button"
            className="inline-flex flex-shrink-0 justify-center items-center h-8 relative bottom-2 w-8 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
            data-drawer-hide="drawer-example" aria-controls="drawer-example">
            <span className="sr-only">Close offcanvas</span>
            <svg className="w-3.5 h-3.5 text-white" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
            </svg>
          </button>
        </div>
        <div className="px-2 py-10">

          <ul className='flex flex-col gap-10 font-swap     list-none z-30 relative' data-drawer-hide="drawer-example" aria-controls="drawer-example" >
            <a href="#me"><li className='hover:text-red-500 transition-colors cursor-pointer  '> {t("header.whoAmI")}</li></a>
            <a data-drawer-hide="drawer-example" aria-controls="drawer-example" href="#skills"><li className='hover:text-red-500 transition-colors cursor-pointer  '>{t("header.skills")} </li></a>
            <a data-drawer-hide="drawer-example" aria-controls="drawer-example" href="#projects"><li className='hover:text-red-500 transition-colors cursor-pointer  '>{t("header.projects")}</li></a>
            <a data-drawer-hide="drawer-example" aria-controls="drawer-example" href="#footer"><li className='hover:text-red-500 transition-colors cursor-pointer  '>{t("header.talk")}</li></a>
          </ul>
        </div>
        <div className='flex absolute w-full bottom-4 justify-between px-4 border-t-2 border-solid border-black pt-4 left-0'>
          <p className=' text-[14px]'>{t("header.menuFooter")}</p>
        </div>
      </div>
    </header>
  )
}
